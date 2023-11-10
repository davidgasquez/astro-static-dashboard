<script setup>
import * as Plot from "@observablehq/plot";
import PlotFigure from "../components/PlotFigure.js";

// Get JSON from https://raw.githubusercontent.com/davidgasquez/static-data-dashboard/f18c0051a43426e390936d2a08628e43499c68da/src/assets/penguins.json
var penguins = await fetch(
  "https://raw.githubusercontent.com/davidgasquez/static-data-dashboard/f18c0051a43426e390936d2a08628e43499c68da/src/assets/penguins.json"
).then((res) => res.json());
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
