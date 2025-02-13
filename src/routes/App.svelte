<script lang="ts">
	let time = $state(new Date())
	let percent = $derived(
		(
			(
				(
					time.getHours() * 60
					+ time.getMinutes()
				) * 60
				+ time.getSeconds()
			)
		) / (
			24 * 60 * 60
		) * 100
	)

	class DecimalClock {
		hours = $derived(percent % 1)
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

	let decHands = $state(true)
	const toggle = () => { decHands = !decHands }

	$effect(() => {
		let id: number | undefined
		function step() {
			time = new Date()
			id = requestAnimationFrame(step);
		}
		step()
		return () => {
			if(id != null) cancelAnimationFrame(id)
		}
	});

	const eleven = Array.from({ length: 11 }).map((_, i) => i)
	const ten = eleven.slice(0, 10)
	const romans = ['0'].concat(eleven.map((i) => String.fromCodePoint(0x2160 + i)))
</script>

<svelte:head>
	<title>Decimal Clock</title>
</svelte:head>

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

	<circle id="face" r="48" onclick={toggle} onkeydown={() => {}} tabindex={1} role="button"/>

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

		{#if minute < 10}
			{#each ten as second}
				{@const num = minute * 36 + (second + 1) * 3.6}
				<g class="minor" transform="rotate({num})">
					<line y1="45" y2="50"/>
					<!-- <text y="40" transform="rotate(180)">{second}</text> -->
				</g>
			{/each}
		{/if}
	{/each}

	<!-- hour hand -->
	<line class="hour arm" class:decimal={decHands} y1="2" y2="-20" transform="rotate({360 * (percent / 100)})" />

	<!-- minute hand -->
	<line class="minute arm" class:decimal={decHands} y1="4" y2="-30" transform="rotate({360 * (decHands ? (decimal.minutes / 100) : (fraction.minutes / 100))})" />

	<!-- second hand -->
	<g class="second" class:decimal={decHands} transform="rotate({360 * (decHands ? (decimal.seconds / 100) : (fraction.seconds / 100))})">
		<line class="arm" y1="10" y2={decHands ? -36 : -42}/>
		<line id="counterweight" y1="10" y2="2"/>
		<circle r="2"/>
	</g>

	{#each [decimal, fraction] as clock, idx}
		{@const dec = idx === 0}
		<text id={idx === 0 ? 'digital' : 'fraction'} class="readout" x="0%" y={`${23 + idx * 5}%`}>
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
		stroke-width: 0.5;

		& text {
			text-anchor: middle;
			font-size: 1pt;
			fill: #770;
			fill-opacity: 0.75;
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

	text:hover {
		fill-opacity: 1;
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
