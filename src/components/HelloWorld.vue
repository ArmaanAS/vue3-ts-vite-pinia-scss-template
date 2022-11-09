<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { toRefs } from "vue";
import useNames from "../stores/names";

const props = defineProps<{ count: number }>();
const { count } = toRefs(props);
const emit = defineEmits(["update:count"]);

const names = useNames();

function increment() {
  emit("update:count", count.value + 1);
}
</script>

<template>
  <h1>
    {{ names.forename }}
    <span class="title"> "{{ names.title }}" </span>
    {{ names.surname }}
  </h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #0f172a;
}
.title {
  color: #1e3a8a;
  font-size: 1em;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
