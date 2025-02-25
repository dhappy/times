<script lang="ts">
  import { page } from '$app/state'

  const debug = page.url.searchParams.has('debug')

  let {
    cx = 0,
    cy = 0,
    r = 50,
    Ⲑs = 0,
    Ⲑe = Math.PI,
  } = $props()

  if(debug) console.debug({ cx, cy, r, Ⲑs, Ⲑe })

  const x = {
    start: r * Math.cos(Ⲑs),
    end: r * Math.cos(Ⲑe),
  }
  const y = {
    start: r * Math.sin(Ⲑs),
    end: r * Math.sin(Ⲑe),
  }

  const rotation = 90
  const largeArcFlag = 0
  const sweepFlag = 1

  if(debug) console.debug({ x, y, rotation, largeArcFlag, sweepFlag })
</script>

<path
  class="arc"
  d="
    M {cx + x.start},{cy + y.start}
    A {r},{r}
      {rotation}
      {largeArcFlag}
      {sweepFlag}
      {x.end},{y.end}
    )
  "
/>

<style>
  path {
    fill: none;
  }
</style>