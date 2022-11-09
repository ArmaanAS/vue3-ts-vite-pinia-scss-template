import { defineStore } from 'pinia';
import { faker } from "@faker-js/faker";

const useNames = defineStore('counter', {
  state: () => {
    const forename = faker.name.firstName();
    const surname = faker.name.lastName();
    const title = faker.word.noun();
    const names = [`${forename} "${surname}" ${title}`];
    return {
      names,
      forename,
      surname,
      title,
    };
  },
  actions: {
    generate() {
      this.forename = faker.name.firstName();
      this.surname = faker.name.lastName();
      this.title = faker.word.noun();
      this.names.push(`${this.forename} "${this.surname}" ${this.title}`);
    },
  },
});
export default useNames;