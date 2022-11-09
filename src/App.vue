<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import { useRoute } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const count = ref(0);

const route = useRoute();
</script>

<template>
  <div>
    <RouterLink :to="{ name: route.name == 'Home' ? 'Page2' : 'Home' }">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </RouterLink>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld v-model:count="count" />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped lang="scss">
@import "./global.scss";

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo {
  filter: drop-shadow(0 0 1em #646cffaa);
  transition: filter 0.5s ease-in;
}
.logo.vue {
  /* filter: drop-shadow(0 0 1em #42b883aa); */
  animation: flicker 5s linear infinite;
}
.logo:hover {
  filter: drop-shadow(0 0 2.5em #646cff);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2.5em #42b883);
}

@keyframes flicker {
  from {
    filter: drop-shadow(0 0 1em #42b883aa);
  }
  20% {
    filter: drop-shadow(0 0 0.5em #42b88340);
  }
  25% {
    filter: drop-shadow(0 0 1em #42b883aa);
  }
  to {
    filter: drop-shadow(0 0 1em #42b883aa);
  }
}
</style>
