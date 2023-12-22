<template>
  <div ref="container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as vg from "@uwdata/vgplot";

let container = ref();

const wasm = await vg.wasmConnector();
vg.coordinator().databaseConnector(wasm);

onMounted(async () => {
  await vg.coordinator().exec(
    vg.loadParquet(
      "aapl",
      "https://uwdata.github.io/mosaic/data/stocks.parquet",
      {
        where: "Symbol = 'AAPL'",
      }
    )
  );

  let chart = vg.plot(vg.line(vg.from("aapl"), { x: "Date", y: "Close" }));

  container.value.appendChild(chart);
});
</script>
