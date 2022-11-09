<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps<{ count: number }>();
const { count } = toRefs(props);
const emit = defineEmits(["update:count"]);

function increment() {
  emit("update:count", count.value + 1);
}
</script>

<template>
  <button type="button" @click="increment">count is {{ count }}</button>
</template>

<style lang="scss"></style>
