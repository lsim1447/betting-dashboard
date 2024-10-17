import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>This is a Card component</Card>
);

export const Default = Template.bind({});

Default.args = {};
