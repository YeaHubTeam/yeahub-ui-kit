import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import React from 'react';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyText: Story = {
  render: () => <Text theme="primary" size="size_m" text="Some text" />,
};

export const OnlyTitle: Story = {
  render: () => <Text theme="warning" size="size_l" title="Title" />,
};

export const TitleWithText: Story = {
  render: () => <Text theme="error" size="size_m" title="Title" text="Some text" />,
};
