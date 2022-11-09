<script lang="ts" setup>
import randomWord from "../api/randomWord";

const word = (await randomWord()).data;
</script>

<template>
  <div class="a">{{ word[0] }}</div>
</template>

<style scoped lang="scss">
.a {
  font-size: 2em;
}
</style>
