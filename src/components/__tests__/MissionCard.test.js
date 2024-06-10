import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MissionCard from "../MissionCard.vue";

describe("MissionCard", () => {
    it("should render correctly", () => {
        const wrapper = mount(MissionCard, {
            props: {
                mission: {
                    name: "Mercurio",
                    year: "Teste1",
                    country: "Teste",
                    destination: "Teste",
                },
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})