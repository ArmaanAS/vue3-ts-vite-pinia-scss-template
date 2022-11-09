import { defineStore } from "pinia";

const useLoader = defineStore("loader", {
  state: () => ({
    loading: 0,
    startTime: 0,
  }),
  actions: {
    start() {
      this.loading++;
      if (this.loading === 1) {
        this.startTime = +new Date();
      }
    },
    stop() {
      const time = +new Date();

      // Add delay if loading bar lasts less than 1 second
      if (this.loading === 1) {
        // Minimum 1000ms second delay
        const delay = Math.max(0, 1000 - (time - this.startTime));

        setTimeout(() => this.loading--, delay);
      } else if (this.loading === 0) {
        return;
      } else {
        this.loading--;
      }
    },
  },
});
export default useLoader;
