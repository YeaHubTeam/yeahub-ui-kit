import React from 'react';
import { Meta, StoryObj, composeStory } from '@storybook/react';

import { Label } from './Label';
import InputMeta, { BaseInput as BaseInputStory } from '../Input/Input.stories';

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

const BaseInput = composeStory(BaseInputStory, InputMeta);

export const LabelWithInput: Story = {
  render: (args) => {
    return (
      <>
        <Label {...args}>
          <BaseInput placeholder="placeholder" />
        </Label>
      </>
    );
  },
  args: {
    text: 'Label',
    required: true,
  },
};
