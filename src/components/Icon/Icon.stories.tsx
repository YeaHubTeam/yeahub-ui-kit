import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import React from 'react';
import { icons } from './common';
import { IconProps } from './types';

const meta = {
  title: 'components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    icon: 'cap',
  },
  render: () => {
    return (
      <>
        {Object.keys(icons).map((ico, idx) => (
          <Icon icon={ico as IconProps['icon']} key={idx} color="red" />
        ))}
      </>
    );
  },
};
