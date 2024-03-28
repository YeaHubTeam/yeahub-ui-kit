import React, { useState, useCallback } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { Input } from '../Input/Input';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelRequired: Story = {
  render: () => <Label text="Label" required />,
};

const TextInputComponent = ({ placeholder }) => {
  const [value, changeValue] = useState('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    changeValue(value);
  }, []);
  return <Input value={value} placeholder={placeholder} onChange={onChange} />;
};

export const LabelWithInput: Story = {
  render: (args) => {
    return (
      <>
        <Label {...args}>
          <TextInputComponent placeholder="placeholder" />
        </Label>
      </>
    );
  },
  args: {
    text: 'Label',
    required: true,
  },
};
