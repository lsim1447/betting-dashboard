import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['blue', 'green', 'red'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  variant: 'green',
};

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
};
