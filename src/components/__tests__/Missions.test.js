import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Missions from "../Missions.vue";

describe("Missions", () => {
    it("should render correctly", () => {
        const wrapper = mount(Missions, {
            props: {
                missions: [],
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})