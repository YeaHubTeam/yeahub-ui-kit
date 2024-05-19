import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TextEditor } from './TextEditor';

const meta = {
  title: 'Data Entry/TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextEditorInline: Story = {
  args: { data: 'TextEditorInline', isInline: true, id: 'TextEditorInline' },
  render: (args) => {
    return <TextEditor {...args} />;
  },
};

export const TextEditorClassic: Story = {
  args: { data: 'TextEditorClassic', isInline: false, id: 'TextEditorClassic' },
  render: (args) => {
    return <TextEditor {...args} autofocus />;
  },
};
