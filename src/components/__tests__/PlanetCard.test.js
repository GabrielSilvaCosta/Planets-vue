import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PlanetCard from "../PlanetCard.vue";

describe("PlanetCard", () => {
  it("should render correctly", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        planet: {
          name: "Mercurio",
          image: "https://via.placeholder.com/150",
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders planet name and image", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        planetName: "Mars",
        planetImage: "path/to/mars.png",
      },
    });

    expect(wrapper.text()).toContain("Mars");
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("path/to/mars.png");
  });
});
