import { UncontrolledRate } from './UncontrolledRate';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//π This default export determines where your story goes in the story list
export default {
	title: 'UncontrolledRate',
	component: UncontrolledRate,
	argTypes: {
		title: {
			type: 'string',
			description: 'The name of thing that estimate'
		},
		onChange: {
			type: 'function',
			description: 'The function which inform about new value',
			action: 'Value was changed'
		},
		defaultVlue: {
			type: 'number',
			description: 'The value which pass outside or "0" by default'
		}
	}
} as ComponentMeta<typeof UncontrolledRate>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof UncontrolledRate> = (args) => <UncontrolledRate {...args} />;

export const ZeroRating = Template.bind({});

ZeroRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 0',
	defaultVlue: 0
};

export const OneStarRating = Template.bind({});

OneStarRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 1',
	defaultVlue: 1
};

export const TwoStarRating = Template.bind({});

TwoStarRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 2',
	defaultVlue: 2
};

export const ThreeStarsRating = Template.bind({});

ThreeStarsRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 3',
	defaultVlue: 3
};

export const FourStarsRating = Template.bind({});

FourStarsRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 4',
	defaultVlue: 4
};

export const FiveStarsRating = Template.bind({});

FiveStarsRating.args = {
	/*π The args you need here will depend on your component */
	title: 'Pass default value - 5',
	defaultVlue: 5
};

export const NoRating = Template.bind({});

NoRating.args = {
	/*π The args you need here will depend on your component */
	title: 'User didn\'t pass default value'
};