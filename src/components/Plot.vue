<script setup>
import * as Plot from "@observablehq/plot";
import PlotFigure from "../components/PlotFigure.js";
import penguins from "../assets/penguins.json";
</script>

<template>
  <PlotFigure
    :options="{
      marks: [
        Plot.dot(penguins, { x: 'culmen_length_mm', y: 'culmen_depth_mm' }),
      ],
    }"
  />
</template>
