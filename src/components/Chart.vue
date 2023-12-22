<template>
  <div ref="container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as Plot from "@observablehq/plot";

let container = ref();

onMounted(async () => {
  let reply = await fetch(
    "https://raw.githubusercontent.com/davidgasquez/static-data-dashboard/f18c0051a43426e390936d2a08628e43499c68da/src/assets/penguins.json"
  );
  if (!reply.ok) {
    throw new Error(`cannot fetch data`);
  }
  let data = await reply.json();

  let plot = Plot.plot({
    marks: [Plot.dot(data, { x: "culmen_length_mm", y: "culmen_depth_mm" })],
  });
  container.value.appendChild(plot);
});
</script>
