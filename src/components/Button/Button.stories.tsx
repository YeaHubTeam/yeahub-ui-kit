import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
  render: () => (
    <>
      <Button value="Primary" />
      <br />
      <Button value="Primary with Icon" /* icon={AddIcon} */ />
      <br />
      <Button /* icon={AddIcon} */ />
      <br />
      <Button value="Primary" /* icon={AddIcon} */ disabled />
      <br />
      <Button value="Primary" /* icon={AddIcon} */ isActive />
    </>
  ),
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
  render: (args) => (
    <>
      <Button value="Secondary" {...args} />
      <br />
      <Button value="Secondary with Icon" {...args} /* icon={AddIcon} */ />
      <br />
      <Button value="Secondary" {...args} /* icon={AddIcon} */ isActive />
      <br />
      <Button {...args} /* icon={AddIcon} */ />
      <br />
      <Button value="Secondary" {...args} /* icon={AddIcon} */ disabled />
    </>
  ),
};

export const Destructive: Story = {
  args: {
    theme: 'destructive',
  },
  render: (args) => (
    <>
      <Button value="Destructive" {...args} />
      <br />
      <Button value="Destructive with Icon" {...args} /* icon={AddIcon} */ />
      <br />
      <Button value="Destructive" {...args} /* icon={AddIcon} */ isActive />
      <br />
      <Button {...args} /* icon={AddIcon} */ />
      <br />
      <Button value="Destructive" {...args} /* icon={AddIcon} */ disabled />
    </>
  ),
};

export const Badge: Story = {
  render: () => (
    <>
      <Button theme="secondary" value="Badge" badge={11} />
      <br />
      <Button
        theme="primary"
        value="Badge with Icon"
        badge={10}
        /* icon={AddIcon} */
      />
      <br />
      <Button theme="destructive" value="Badge" badge={9} /* icon={AddIcon} */ isActive />
      <br />
      <Button theme="primary" badge={0} /* icon={AddIcon} */ />
      <br />
      <Button theme="primary" value="Badge" badge="text" /* icon={AddIcon} */ disabled />
    </>
  ),
};
