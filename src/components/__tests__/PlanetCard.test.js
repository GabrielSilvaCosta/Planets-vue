import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PlanetCard from '../PlanetCard.vue';

describe('PlanetCard', () => {
    it('should render correctly', () => {
        const wrapper = mount(PlanetCard, {
            props: {
                planet: {
                    name: 'Mercurio',
                    image: 'https://via.placeholder.com/150',
                },
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})