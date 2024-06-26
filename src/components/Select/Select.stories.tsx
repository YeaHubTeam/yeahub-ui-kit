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

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());

    return <Select {...args} onChange={setValue} value={value} />;
  },
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: 'default',
    value: '1',
    disabled: true,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
    ],
  },
};

export const MultiSelectGrouped: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value);

    return <Select {...args} onChange={setValue} value={value} />;
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: 'multi',
    placeholder: 'Select option',
    value: ['1'],
    options: [
      { label: 'Option 1', value: '1a' },
      { label: 'Option 2', value: '2a' },
      { label: 'Option 3', value: '3a' },
      { label: 'Option 1', value: '1b' },
      { label: 'Option 2', value: '2b' },
      { label: 'Option 3', value: '3b' },
      { label: 'Option X', value: 'X' },
      { label: 'Option Y', value: 'Y' },

      { label: 'Option 11', value: '11a' },
      { label: 'Option 12', value: '22a' },
      { label: 'Option 13', value: '33a' },
      { label: 'Option 11', value: '41b' },
      { label: 'Option 12', value: '52b' },
      { label: 'Option 13', value: '63b' },
      { label: 'Option 1X', value: '7X' },
      { label: 'Option 1Y', value: '8Y' },
    ],
  },
};
