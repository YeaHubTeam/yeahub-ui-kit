/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import React from 'react';

const meta = {
  title: ' Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Help people choose single or multiple values from a set of options. Consider select when you have 5 or more options. As an alternative, radio buttons or checkboxes can make the interface cleaner and more accessible.',
      },
    },
  },
  argTypes: {
    disabled: {
      name: '🔗 disabled',
    },
    type: {
      name: '🔗 type',
    },
    placeholder: {
      name: '🔗 placeholder',
    },
    clearable: {
      name: '🔗 clearable',
    },
    value: {
      name: '🔗 value',
      control: {
        disable: true,
      },
    },
    options: {
      name: '🔗 options',
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    ariaLabel: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<any>(args.value?.toString());

    return <Select {...args} onChange={setValue} value={value} />;
  },
  name: 'Basic',
  args: {
    type: 'default',
    placeholder: 'Select option',
    clearable: true,
    value: '',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
    ],
  },
};
