import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: StoryFn = (args) => (
  <Select {...args}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};
