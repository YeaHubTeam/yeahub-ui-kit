import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../Icon';
import { Chip } from './Chip';

const mockFn = () => {};

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipDefault: Story = {
  render: () => {
    return (
      <>
        <Chip label="Some text" onDelete={mockFn} theme="primary" />
        <br />
        <Chip
          label="Some text"
          preffix={<Icon icon="figmaLogo" />}
          onDelete={mockFn}
          theme="primary"
        />
      </>
    );
  },
  args: { theme: 'primary' },
};

export const ChipClickable: Story = {
  render: () => {
    return (
      <>
        <Chip label="Some text" onClick={mockFn} theme="primary" />
        <br />
        <Chip label="Some text" onClick={mockFn} onDelete={mockFn} theme="primary" />
        <br />
        <Chip
          label="Some text"
          onClick={mockFn}
          onDelete={mockFn}
          theme="primary"
          preffix={<Icon icon="figmaLogo" />}
        />
      </>
    );
  },
  args: { theme: 'primary' },
};

export const ChipDisabled: Story = {
  render: () => (
    <>
      <Chip label="Some text" disabled onClick={mockFn} theme="primary" />
      <br />
      <Chip
        label="Some text"
        disabled
        onClick={mockFn}
        theme="primary"
        onDelete={mockFn}
      />
    </>
  ),
  args: { theme: 'primary' },
};

export const ChipActive: Story = {
  render: () => (
    <>
      <Chip
        label="Some text"
        active
        onClick={mockFn}
        theme="primary"
        preffix={<Icon icon="figmaLogo" />}
      />
      <br />
      <Chip
        label="Some text"
        active
        onClick={mockFn}
        onDelete={mockFn}
        theme="primary"
        preffix={<Icon icon="figmaLogo" />}
      />
    </>
  ),
  args: { theme: 'primary' },
};
