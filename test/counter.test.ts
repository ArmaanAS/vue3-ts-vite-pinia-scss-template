import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Counter from "../src/components/Counter.vue";

test("mount component", async () => {
  expect(Counter).toBeTruthy();

  const wrapper = mount(Counter, {
    props: {
      "count": 4,
    },
  });

  expect(wrapper.text()).toContain("4");
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.get("button").trigger("click");
});