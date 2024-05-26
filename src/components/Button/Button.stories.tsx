import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    children: 'Primary button',
    preffix: <Icon icon="addressBook" color="--palette-ui-white-900" size={32} />,
    suffix: <Icon icon="search" color="--palette-ui-white-900" size={32} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button suffix={suffix} isActive title="Primary pressed" theme="primary">
          Primary button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Primary button"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: 'Secondary button',
    preffix: <Icon icon="search" size={32} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button suffix={suffix} isActive title="Secondary pressed" theme="secondary">
          Secondary button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Secondary small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
    children: 'Outline button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button suffix={suffix} isActive title="Outline pressed" theme={args.theme}>
          Outline button
        </Button>
        <br />
        <Button preffix={preffix} size="small" title="Outline small" disabled {...rest} />
      </>
    );
  },
};

export const Tertiary: Story = {
  args: {
    theme: 'tertiary',
    children: 'Tertiary button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button suffix={suffix} isActive title="Tertiary pressed" theme={args.theme}>
          Tertiary button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Tertiary small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const Link: Story = {
  args: {
    theme: 'link',
    children: 'Link button',
    tagName: 'a',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button {...rest} />
        <br />
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button suffix={suffix} isActive theme={args.theme} tagName={args.tagName}>
          Link button
        </Button>
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
      </>
    );
  },
};

export const Destructive: Story = {
  args: {
    theme: 'destructive',
    children: 'Destructive button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button
          suffix={suffix}
          isActive
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        >
          Destructive button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Destructive small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const DestructiveSecondary: Story = {
  args: {
    theme: 'destructive-secondary',
    children: 'Destructive button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button
          suffix={suffix}
          isActive
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        >
          Destructive button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Destructive small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const DestructiveOutline: Story = {
  args: {
    theme: 'destructive-outline',
    children: 'Destructive button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button
          suffix={suffix}
          isActive
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        >
          Destructive button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Destructive small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const DestructiveTertiary: Story = {
  args: {
    theme: 'destructive-tertiary',
    children: 'Destructive button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button
          suffix={suffix}
          isActive
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        >
          Destructive button
        </Button>
        <br />
        <Button
          preffix={preffix}
          size="small"
          title="Destructive small"
          disabled
          {...rest}
        />
      </>
    );
  },
};

export const Badge: Story = {
  args: {
    theme: 'primary',
    children: 'Primary button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" badge={46} {...rest} />
        <br />
        <Button badge={46} theme="secondary">
          Primary button
        </Button>
        <br />
        <Button suffix={suffix} theme="outline" badge={46}>
          Primary button
        </Button>
        <br />
        <Button preffix={preffix} size="small" badge={46} disabled {...rest} />
      </>
    );
  },
};
