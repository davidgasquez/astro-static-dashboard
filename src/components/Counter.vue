<template>
  <div class="counter">
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="counter-message"></div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const count = ref(42);
    const add = () => (count.value = count.value + 1);

    return {
      count,
      add,
    };
  },
};
</script>
