<script lang="ts">
	import { tick } from 'svelte'
	import Toastify from 'toastify-js'
	import { page } from '$app/state'
	import zodiac from '$lib/zodiac'
	import Arc from '$lib/Arc.svelte'
	import { toDegs } from '$lib'
	import 'toastify-js/src/toastify.css'

	const debug = page.url.searchParams.has('debug')
	let decHands = $state(page.url.searchParams.get('type') === 'decimal')
	const startTime = (() => {
		let set = ''
		const date = page.url.searchParams.get('date')
		set += date || new Date().toISOString().split('T')[0]
		const time = page.url.searchParams.get('time')
		set += `T${time || new Date().toISOString().split('T')[1]}`
		if(debug) console.debug({ 'Initial Time': set })
		return new Date(set).getTime()
	})()
	let pause = $state(0)
	let startedAt: number | null = null
	const timeFunc = () => {
		// performance.timeOrigin + performance.now()
		if(startedAt == null) {
			startedAt = new Date().getTime()
		}
		const now = new Date().getTime()
		const Δ = now - startedAt
		return startTime + Δ
	}
	const tzMs = new Date().getTimezoneOffset() * 60 * 1000
	let ons = $state<Array<boolean>>([])
	const day = 24 * 60 * 60 * 1000
	const year = day * 365.25
	let time = $state(timeFunc())
	let percent = $derived(
		(((((time % day) - tzMs) / day) + 1) % 1) * 100
	)

	const unitTypes = {
		fraction: ['arabic', 'roman', 'roman/times', 'none'],
		decimal: ['arabic', 'roman', 'none'],
	} as const
	type ArrayToUnion<T extends readonly string[]> = T[number]
	type CreateUnitType<T extends Record<string, readonly string[]>> = {
  	[K in keyof T]: { [P in K]: ArrayToUnion<T[P]> };
	}[keyof T]
	type UnitType = CreateUnitType<typeof unitTypes>;
	type DecimalSelection = Extract<UnitType, { decimal: any }>
	type FractionSelection = Extract<UnitType, { fraction: any }>
	let units: UnitType = (
		$state(decHands ? { decimal: 'roman' } : { fraction: 'arabic' })
	)

	function hasDecimal(units: UnitType): units is DecimalSelection {
    return 'decimal' in units;
	}
	function hasFraction(units: UnitType): units is FractionSelection {
    return 'fraction' in units;
	}

	class DecimalClock {
		type = 'decimal'
		hours = $derived(percent / 10)
		minutes = $derived((percent * 10) % 100)
		seconds = $derived((percent * 1_000) % 100)
	}
	let decimal = new DecimalClock()

	class FractionClock {
		type = 'fraction'
		hours = $derived(percent % 100)
		minutes = $derived((percent * 100) % 100)
		seconds = $derived((percent * 10_000) % 100)
	}
	let fraction = new FractionClock()

	let now = $derived(new Date(time))
	let yStart = $derived(new Date(now.getFullYear(), 0, 1))
	let yEnd = $derived(new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999))
	const yLength = yEnd.getTime() - yStart.getTime()
	const yPercent = (now.getTime() - yStart.getTime()) / yLength
	if(debug) console.debug({ yStart, yEnd, yLength, yPercent })

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

	let lunarCount = $state(30)
	const hundred = Array.from({ length: 100 }).map((_, i) => i)
	const thirtyNine = hundred.slice(0, 39)
	const thirteen = thirtyNine.slice(0, 13)
	const eleven = thirteen.slice(0, 11)
	const ten = eleven.slice(0, 10)
	const romansToTen = ['0'].concat(eleven.map((i) => String.fromCodePoint(0x2160 + i)))
	const romansByTen = ['0', 'Ⅹ', 'ⅩⅩ', 'ⅩⅩⅬ', 'ⅩⅬ', 'Ⅼ', 'ⅬⅩ', 'ⅬⅩⅩ', 'ⅩⅩⅭ', 'ⅩⅭ', 'Ⅽ']
	const moons = [
		{ icon: '🌑', name: 'New Moon' },
		{ icon: '🌒', name: 'Waxing Crescent' },
		{ icon: '🌓', name: 'First Quarter' },
		{ icon: '🌔', name: 'Waxing Gibbous' },
		{ icon: '🌕', name: 'Full Moon' },
		{ icon: '🌖', name: 'Waning Gibbous' },
		{ icon: '🌗', name: 'Last Quarter' },
		{ icon: '🌘', name: 'Waning Crescent' },
	]
	const { searchParams: search } = page.url
	function has(
		param: { [key: string]: boolean | null | undefined }
	) {
		const [[key, def], ...rest]  = Object.entries(param)
		if(rest.length > 0) {
			throw new Error(
				'`has` only accepts an object with a single key.'
			)
		}
		const found = (() => {
			if(
				search.has(key)
				&& (
					[undefined, null, 'true', 't', '1']
					.includes(search.get(key))
				)
			) {
				return true
			}
			if(search.has(key)) return false
			if(def != null && typeof def === 'boolean') {
				return def
			}
			throw new Error(
				`Invalid default, "${def}", for "${key}".`
			)
		})()
		return { [key]: found }
	}
	let show = $state({
		...has({ moons: false }),
		...has({ year: true }),
		...has({ hours: true }),
		...has({ minutes: true }),
		...has({ seconds: true }),
		...has({ tenMarks: true }),
		...has({ minTicks: true }),
		...has({ zodiac: true }),
		...has({ face: true }),
		...has({ percent: true }),
		...has({ decimal: true }),
		...has({ fraction: true }),
		...has({ babylonian: true }),
	})
	$inspect(show)

	const synodic = 29.53059 * 24 * 60 * 60 * 1000
	const synPercent = synodic / year
	const newMoon = new Date(2025, 2, 27, 17, 45)

	if(debug) console.debug({ day, year, synodic, synPercent })

	const alert = (
		text: string, props: Record<string, unknown> = {},
	) => {
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
			...props,
		}).showToast();
	}

	const zPercents = zodiac.map((
		{ start, end, symbol, name }:
		{ start: Date, end: Date, symbol: string, name: string }
	) => ({
		start: ((start.getTime() - yStart.getTime()) / yLength) - 12,
		end: ((end.getTime() - yStart.getTime()) / yLength) - 12,
		symbol,
		name,
		length: Math.round((end.getTime() - start.getTime()) / day),
	}))
	if(debug) console.debug({ zodiac, zPercents })

	const capPercent = zPercents.find(({ name }) => name === 'Capricorn')
	const capOffset = capPercent!.start & yLength
	if(debug) console.debug({ capPercent, capOffset })

	// svelte-ignore state_referenced_locally
	const tzNum = -now.getTimezoneOffset() / 60
	const tz = tzNum >= 0 ? `+${tzNum}` : tzNum

	const clock = $derived(decHands ? decimal : fraction)

	const hijri = {
		epoch: new Date(2024, 6, 16, 17, 30),
		year: 1446,
		start: 0,
	}
	let next = hijri.epoch.getTime()
	let last = hijri.start
	while(next <= time) {
		last = next
		next += synodic
	}
	hijri.start = last

	const { PI, cos, sin } = Math
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
	} else if(evt.key === 'k') {
		const display = unitTypes[clock.type]
		const idx = display.indexOf(
			units[clock.type]
		)
		const next = display[(idx + 1) % display.length]
		if(debug) console.debug({ type: clock.type, next, units })
		units = { [clock.type]: next } as UnitType
	} else if(evt.key === 'm') {
		show.moons = !show.moons
	} else if(evt.key === 'f') {
		show.face = !show.face
	} else if(evt.key === 'i') {
		show.minutes = !show.minutes
	} else if(evt.key === 'h') {
		show.hours = !show.hours
	} else if(evt.key === 'b') {
		show.babylonian = !show.babylonian
	} else if(evt.key === '1') {
		show.tenMarks = !show.tenMarks
	} else if(evt.key === 'y') {
		show.year = !show.year
	}
}}/>

<svg viewBox="-70 -70 140 140">
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
		onclick={() => {
			decHands = !decHands
			if(decHands) {
				units = { decimal: 'roman' }
			}	else {
				units = { fraction: 'arabic' }
			}
		}}
		onkeydown={() => {}}
		tabindex={-1}
		role="button"
	/>

	<!-- Present the cycles of the moon around the outside.
	  -->
	{#if show.moons}
		{#each Array.from({ length: lunarCount }) as _, month}
			{@const r = 58.75}
			{@const Ⲑ = 2 * PI * synPercent * month}
			{@const completion = month / thirteen.length}
			<g class="lunar month">
				{#each moons as phase, idx}
					{@const span = synPercent / moons.length}
					{@const x = (r + completion * 3.5) * cos(Ⲑ + idx * span * 2 * PI)}
					{@const y = (r + completion * 3.5) * sin(Ⲑ + idx * span * 2 * PI)}
					<text
						class="synodic"
						{x} {y}
						style:--rotation="{2 * PI * idx * span}rad"
					>
						<title>{phase.name}</title>
						{phase.icon}
					</text>
				{/each}
			</g>
		{/each}
	{/if}

	{#if show.minutes}
		{#each ten as minute}
			<g class="major" class:decimal={decHands} transform="rotate({36 * minute})">
				{#if show.minTicks}
					<line y1="40" y2="45"/>
				{/if}
				{#if show.tenMarks}
					<text y="40" transform="rotate(180)">
						{#if hasFraction(units)}
							{#if units.fraction === 'roman'}
								<tspan class="roman">{romansByTen[minute]}</tspan>
							{:else if units.fraction === 'roman/times'}<!--
  							--><tspan class="roman">{romansToTen[minute]}</tspan><!--
								--><tspan class="operation" dx="-1" dy="-1">⨯</tspan><!--
								--><tspan class="hexadecimal" dx="-0.5" dy="1">𝔸</tspan><!--
								--><tspan class="tz" dx="-0.5" dy="-0.5">{tz}</tspan>
							{:else if units.fraction === 'arabic'}
								<tspan class="number">{minute * 10}%</tspan>
							{/if}
						{:else if hasDecimal(units)}
							{#if units.decimal === 'roman'}
								<tspan class="roman">{romansToTen[minute]}</tspan>
							{:else if units.decimal === 'arabic'}
								<tspan class="number">{minute}</tspan>
							{/if}
						{:else}
							<tspan class="unknown">¿?</tspan>
						{/if}
					</text>
				{/if}
			</g>
		{/each}
	{/if}

	{#if show.zodiac}
		{#each zPercents as sign}
			{@const shift = 0.437}
			{@const shifted = {
				start: sign.start + shift,
				end: sign.end + shift,
				width: sign.end - sign.start,
			}}
			<g class="zodiac month">
				<Arc
					cx={0} cy={0} r={51}
					Ⲑs={2 * Math.PI * (sign.start + shift)}
					Ⲑe={2 * Math.PI * (sign.end + shift)}
				/>
				<text
					y="55"
					transform="rotate({
						2 * Math.PI * shifted.start * (180 / Math.PI)
					})"
					class="norse"
				>
					<title>{sign.name}</title>
					{sign.symbol}
				</text>
				<g class="zodiac days">
					{#each Array.from({ length: sign.length }) as _, day}
						<g>
							<title>{sign.name} {day}</title>
							<text
								y="53"
								transform="rotate({
									2 * Math.PI
									* (shifted.start + day * shifted.width / sign.length)
									* (180 / Math.PI)
								})"
								class="day number"
							>{day}</text>
						</g>
					{/each}
				</g>
			</g>
		{/each}
	{/if}

	{#if show.seconds}
		<g class="seconds">
			{#each hundred as second}
				{@const num = second * 3.6 + 180}
				{@const current = (
					Math.floor(decHands ? decimal.seconds : fraction.seconds)
					=== second
				)}
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
							if(evt.key === 'Enter') return ons[second] = !ons[second]
						}}
					/>
					<text y={current ? 48 : 44.5}>{second}</text>
				</g>
			{/each}
		</g>
	{/if}

	{#if show.year}
		<line
			class="year arm"
			class:decimal={decHands}
			y1="2" y2="-30"
			transform="rotate({360 * yPercent})"
		>
			<title>Day</title>
		</line>
	{/if}

	{#if show.hours}
		<line
			class="hour arm"
			class:decimal={decHands}
			y1="2" y2="-20"
			transform="rotate({360 * (percent / 100)})"
		>
			<title>Hours</title>
		</line>
	{/if}

	{#if show.minutes}
		<line
			class="minute arm"
			class:decimal={decHands}
			y1="4" y2="-30"
			transform="rotate({360 * clock.minutes / 100})"
		>
			<title>Minutes</title>
		</line>
	{/if}

	{#if show.seconds}
		<g
			class="second"
			class:decimal={decHands}
			transform="rotate({360 * clock.seconds / 100})"
			style:view-transition-name="seconds"
		>
			<title>Seconds</title>
			<line class="arm" y1="10" y2={decHands ? -36 : -42}/>
			<line id="counterweight" y1="10" y2="2"/>
			<circle r="2"/>
		</g>
	{/if}

	{#if show.babylonian}
		{@const [hr, min, sec] = (
			now.toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: false,
				hourCycle: 'h23'  // Explicitly set to 00-23
			}).split(/:/g)
		)}
		<text id="babylonian" class="readout" x="-38%" y="48%" style="textAnchor: start">
			<title>Babylonian Time</title>
			{hr}<tspan class="colon">:</tspan><!--
	-->{min}<tspan class="colon">:</tspan><!--
	-->{sec}
		</text>
	{/if}

	{#each [decimal, fraction] as clock, idx}
		{@const dec = idx === 0}
		{#if show[clock.type]}
			<text
				id={clock.type}
				class:active={
					(decHands && clock.type === 'decimal')
					|| (!decHands && clock.type === 'fraction')
				}
				class="readout"
				x={dec ? '-36%' : '38%'} y="-45%"
			>
				<title>{clock.type.replace(/^\w/, c => c.toUpperCase())} Time</title>
				{Math.floor(clock.hours).toString().padStart(dec ? 1 : 2, '0')}{''
				}{dec ? 'ʜ' : 'ʜ͋'}{''
				}{Math.floor(clock.minutes).toString().padStart(2, '0')}{''
				}{dec ? 'ᴍ' : 'ᴍ͋'}{''
				}{Math.floor(clock.seconds).toString().padStart(2, '0')}
			</text>
		{/if}
	{/each}
	{#if show.percent}
		<text id="percent" class="readout" x="38%" y="48%">
			<title>Percentage of Day</title>
			{percent.toFixed(3)}%
		</text>
	{/if}
</svg>

<style>
	svg {
		max-width: 100vw;
		max-height: 100vh;
		display: block;
		margin-inline: auto;
	}

	#face {
		stroke: #EEE4;
		stroke-width: 3;
		fill: oldlace;
	}

	.minor {
		stroke: #999;
		stroke-opacity: 0.5;
		stroke-width: 1.5;
		cursor: pointer;

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
			stroke-dasharray: 0 1.25 1;
			stroke-dashoffset: 1;
			stroke-linecap: round;
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
			& .tz {
				font-size: 3pt;
			}
		}
  	&.decimal text {
			font-size: 6pt;
		}
	}

	line:hover {
		stroke-opacity: 1;
	}

	text {
		background-color: lime;
		text-anchor: middle;
		cursor: crosshair;

		&.active {
			fill: brown;
		}
		&:hover {
			fill-opacity: 1;
		}

		&#decimal, &#fraction, &#percent {
			font-size: 5pt;
		}
		&#babylonian {
			font-size: 4pt;
		}
	}

	.year {
		stroke: cyan;
		fill: #FF07;
	}

	.zodiac.month {
		font-size: 2.5pt;
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

	.colon {
		animation: blink ease-in-out 0.5s infinite alternate;
	}

	@keyframes blink {
		from { opacity: 1 }
		to { opacity: 0.1 }
	}

	#counterweight {
		stroke-width: 3;
	}

	g:hover * {
		fill-opacity: 1;
		stroke-opacity: 1;
	}

	.readout {
		font-size: 7.5pt;
		font-family: monospace;
		text-anchor: middle;
	}

	@property --rotation {
		syntax: "<angle>";
		inherits: false;
		initial-value: 0deg;
	}

	.day.number {
		font-size: 0.5pt;
		&:hover, &.active {
			font-size: 3pt;
			fill: red;
		}
	}

	.synodic {
		text-anchor: middle;
		font-size: 2pt;

		&:hover {
			font-size: 4pt;
		}
	}

	:global(:nth-child(1 of .month) .arc) { stroke: red	}
	:global(:nth-child(2 of .month) .arc) { stroke: orange	}
	:global(:nth-child(3 of .month) .arc) { stroke: yellow	}
	:global(:nth-child(4 of .month) .arc) { stroke: green	}
	:global(:nth-child(5 of .month) .arc) { stroke: blue	}
	:global(:nth-child(6 of .month) .arc) { stroke: violet	}
	:global(:nth-child(7 of .month) .arc) { stroke: blue	}
	:global(:nth-child(8 of .month) .arc) { stroke: green	}
	:global(:nth-child(9 of .month) .arc) { stroke: yellow	}
	:global(:nth-child(10 of .month) .arc) { stroke: orange	}
	:global(:nth-child(11 of .month) .arc) { stroke: red	}
	:global(:nth-child(12 of .month) .arc) { stroke: cyan	}
	:global(:nth-child(13 of .month) .arc) { stroke: magenta	}
</style>
