<script lang="ts">
	import { tick } from 'svelte'
	import Toastify from 'toastify-js'
	import 'toastify-js/src/toastify.css'

	let pause = $state(0)
	const timeFunc = () => (
		performance.timeOrigin + performance.now()
		// new Date().getTime()
	)
	const tz = new Date().getTimezoneOffset() * 60 * 1000
	let ons = $state<Array<boolean>>([])
	const day = 24 * 60 * 60 * 1000
	let time = $state(timeFunc())
	let percent = $derived(
		(((time % day) - tz) / day) * 100
	)

	class DecimalClock {
		hours = $derived(percent / 10)
		minutes = $derived((percent * 10) % 100)
		seconds = $derived((percent * 1000) % 100)
	}
	let decimal = new DecimalClock()

	class FractionClock {
		hours = $derived(percent % 100)
		minutes = $derived((percent * 100) % 100)
		seconds = $derived((percent * 10000) % 100)
	}
	let fraction = new FractionClock()

	let decHands = $state(false)
	const toggle = () => { decHands = !decHands }

	$effect(() => {
		let id: number | undefined
		function step() {
			const next = async () => {
				if(pause > 0) {
					await new Promise((resolve) => {
						setTimeout(resolve, pause)
					})
				}
				time = timeFunc()
				id = requestAnimationFrame(step)
			}
			if(!document.startViewTransition) {
				next()
			} else {
				document.startViewTransition(async () => {
					await next()
					await tick()
				})
			}
		}
		step()
		return () => {
			if(id != null) cancelAnimationFrame(id)
		}
	});

	const hundred = Array.from({ length: 100 }).map((_, i) => i)
	const eleven = hundred.slice(0, 11)
	const romans = ['0'].concat(eleven.map((i) => String.fromCodePoint(0x2160 + i)))

	const alert = (text) => {
		Toastify({
			text,
			duration: 10_000,
			close: true,
			gravity: 'bottom', // `top` or `bottom`
			position: 'center', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				background: "linear-gradient(to right, #0004C2, #C25800)",
				borderRadius: '1rem',
			},
		}).showToast();
	}

	$effect(() => {
		alert(
			'Press ’𐌵’ or click the face to switch speeds.'
			+ '\n\nPress ’ｐ’ to add a pause.'
		)
	})
</script>

<svelte:head>
	<title>{decHands ? 'Decimal' : 'Percentage'} Clock</title>
</svelte:head>

<svelte:document onkeypress={(evt) => {
	if(evt.key === 'u') {
		decHands = !decHands
	} else if(evt.key === 'p') {
		pause = (pause + 200) % 1200
		alert(`Pausing ${pause.toLocaleString()}ms.`)
	}
}}/>

<svg viewBox="-50 -50 100 100">
	<defs>
		<marker
      id="arrow"
      viewBox="-1 0 12 11"
      refX="5" refY="5"
      markerWidth="4" markerHeight="4"
      orient="auto-start-reverse"
			stroke="context-stroke" fill="context-fill"
		>
      <path d="M0,0 l10,5 l-10,5 z" />
    </marker>
	</defs>

	<circle
		id="face"
		r="48"
		onclick={toggle}
		onkeydown={() => {}}
		tabindex={-1}
		role="button"
	/>

	{#each eleven as minute}
		<g class="major" class:decimal={decHands} transform="rotate({36 * minute})">
			<line y1="40" y2="45"/>
			<text y="40" transform="rotate(180)">
				<tspan class="roman">{romans[minute]}</tspan><!--
  	 -->{#if !decHands}<!--
			 --><tspan class="operation" dx="-1" dy="-1">⨯</tspan><!--
			 --><tspan class="hexadecimal" dx="-0.5" dy="1">𝔸</tspan>
				{/if}
			</text>
		</g>
	{/each}

	{#each hundred as second}
		{@const num = second * 3.6 + 180}
		{@const current = (
			Math.floor(decHands ? decimal.seconds : fraction.seconds)
			=== second
		)
}
		<g
			class="minor"
			transform="rotate({num})"
			class:on={ons[second]}
			class:current
		>
			<line
				y1="45" y2="50"
				role="button"
				tabindex={second + 1}
				onclick={() => { ons[second] = !ons[second]	}}
				onkeypress={(evt) => {
					if(evt.key === 'Enter') {
						ons[second] = !ons[second]
					}
				}}
			/>
			<text y={current ? 48 : 44.5}>{second}</text>
		</g>
	{/each}

	<line
		class="hour arm"
		class:decimal={decHands}
		y1="2" y2="-20"
		transform="rotate({360 * (percent / 100)})"
	/>

	<line
		class="minute arm"
		class:decimal={decHands}
		y1="4" y2="-30"
		transform="rotate({
			360 * (decHands ? (decimal.minutes / 100) : (fraction.minutes / 100))
		})"
	/>

	<g
		class="second"
		class:decimal={decHands}
		transform="rotate({
			360 * (decHands ? (decimal.seconds / 100) : (fraction.seconds / 100))
		})"
		style:view-transition-name="seconds"
	>
		<line class="arm" y1="10" y2={decHands ? -36 : -42}/>
		<line id="counterweight" y1="10" y2="2"/>
		<circle r="2"/>
	</g>

	{#each [decimal, fraction] as clock, idx}
		{@const dec = idx === 0}
		{@const type = idx === 0 ? 'digital' : 'fraction'}
		<text
			id={type}
			class:active={
				(decHands && type === 'digital')
				|| (!decHands && type === 'fraction')
			}
			class="readout"
			x="0%" y={`${23 + idx * 5}%`}
		>
			{Math.floor(clock.hours).toString().padStart(dec ? 1 : 2, '0')}{''
			}{dec ? 'ʜ' : 'ʜ͋'}{''
		  }{Math.floor(clock.minutes).toString().padStart(2, '0')}{''
			}{dec ? 'ᴍ' : 'ᴍ͋'}{''
			}{Math.floor(clock.seconds).toString().padStart(2, '0')}
		</text>
	{/each}
	<text id="percent" class="readout" x="0%" y="18%">
		{percent.toFixed(4)}%
	</text>
</svg>

<style>
	:root {
		transition: all 1s ease-in-out;
	}

	svg {
		max-width: 100vw;
		max-height: 100vh;
		display: block;
		margin-inline: auto;
	}

	#face {
		stroke: #EEE4;
		stroke-width: 3;
		fill: white;
	}

	.minor {
		stroke: #999;
		stroke-opacity: 0.5;
		stroke-width: 1.5;

		& text {
			display: none;
			text-anchor: middle;
			font-size: 3pt;
			fill: #F70;
			fill-opacity: 0.75;
			stroke-width: 0.1;
			transform: rotate(180);
			transform-origin: center;
		}
		&.on + &.on text {
			font-size: 1.5pt;
		}
		& line:hover, & line:focus {
			stroke: #0FC;
		}
		&.on line {
			stroke: #09D;
		}
		&.on text, & line:hover ~ text, & line:focus ~ text {
			display: inherit;
		}
		&.current {
			stroke: #B77D;

			& text {
				display: inherit;
				fill: #360C;
			}
		}
	}

	.major {
		& line {
			stroke: #333;
			stroke-opacity: 0.75;
			stroke-width: 1;
			stroke-dasharray: 0 0.5 0.25 ;
			stroke-dashoffset: 1;
		}
	  & text {
			text-anchor: middle;
			font-size: 6pt;
			fill: #055;
			fill-opacity: 0.5;

			& .operation {
				font-size: 2.5pt;
			}
			& .hexadecimal {
				font-size: 4pt;
			}
		}
  	&.decimal text {
			font-size: 8pt;
		}
	}

	line:hover {
		stroke-opacity: 1;
	}

	text {
		&.active {
			fill: brown;
		}
		&:hover {
			fill-opacity: 1;
		}
	}

	.hour {
		stroke: #030;
		fill: #030;
	}

	.hour.decimal {
		fill: orange;
		stroke: orangered;
	}

	.minute {
		stroke: #006;
		fill: #006;
	}

	.minute.decimal {
		stroke: #B0B;
		fill: #B0B;
	}

	.second {
		stroke: #B00;
		stroke-opacity: 0.75;
		fill: #700;
		fill-opacity: 0.75;
		transition: stroke-opacity 1s ease-in-out;
		stroke-linecap: round;
	}

	.second.decimal {
		fill: #B00;
		stroke: #007;
	}

	.arm {
		stroke-opacity: 0.75;
		fill-opacity: 0.5;
	  marker-end: url(#arrow)
	}

	#counterweight {
		stroke-width: 3;
	}

	g:hover * {
		fill-opacity: 1;
		stroke-opacity: 1;
	}

	.readout {
		font-size: 4pt;
		font-family: monospace;
		text-anchor: middle;
	}
</style>
