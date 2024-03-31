import React from 'react';
import { Meta, StoryObj, composeStory } from '@storybook/react';

import { FormControl } from './FormControl';
import InputMeta, { BaseInput as BaseInputStory } from '../Input/Input.stories';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;
const BaseInput = composeStory(BaseInputStory, InputMeta);

export const InputWithError: Story = {
  render: (args) => {
    return (
      <>
        <FormControl {...args}>
          <BaseInput />
        </FormControl>
      </>
    );
  },
  args: {
    label: 'Input with error',
    error: 'Error',
  },
};
