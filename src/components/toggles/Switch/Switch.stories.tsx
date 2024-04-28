import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta = {
  title: 'Components/Toggles/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchToggle: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
  render: (args) => {
    return (
      <>
        <Switch {...args} />
        <br />
        <Switch label="text label" {...args} />
        <br />
        <Switch checked label="checked" onChange={args.onChange} />
        <br />
        <Switch disabled label="disabled" {...args} />
        <br />
        <Switch disabled label="disabled checked" checked onChange={args.onChange} />
      </>
    );
  },
};
