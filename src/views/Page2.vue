<script lang="ts" setup>
import randomWord from "../api/randomWord";

defineProps<{ count?: number }>();

const word = (await randomWord()).data;
</script>

<template>
  <div class="text-2em">{{ count ?? 0 }} {{ word[0] }}</div>
</template>

<style lang="scss">
.text-2em {
  font-size: 2em;
}
</style>
