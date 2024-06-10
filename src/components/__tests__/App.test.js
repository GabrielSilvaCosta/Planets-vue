import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from '../../App.vue';

describe("App", () => {
    it("should render correctly", () => {
        const wrapper = mount(App);
        expect(wrapper.html()).toMatchSnapshot();
    });
})