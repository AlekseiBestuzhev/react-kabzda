import { UncontrolledRate } from './UncontrolledRate';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
export default {
	title: 'UncontrolledRate',
	component: UncontrolledRate,
} as ComponentMeta<typeof UncontrolledRate>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof UncontrolledRate> = (args) => <UncontrolledRate {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
	/*👇 The args you need here will depend on your component */
	title: 'Menu'
};