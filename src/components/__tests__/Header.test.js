import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "../Header.vue";

describe("Header", () => {
    it("should render correctly", () => {
        const wrapper = mount(Header, {
            props: {
                title: "Teste Header",
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})