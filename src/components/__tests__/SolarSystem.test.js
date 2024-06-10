import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SolarSystem from "../SolarSystem.vue";

describe("SolarSystem", () => {
    it("should render correctly", () => {
        const wrapper = mount(SolarSystem, {
            props: {
                planets: [],
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})