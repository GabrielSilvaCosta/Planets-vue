import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Title from "../Title.vue";

describe("Title", () => {
    it("should render correctly", () => {
        const wrapper = mount(Title, {
            props: {
                title: "Teste",
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})