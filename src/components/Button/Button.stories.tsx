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
    value: 'Primary button',
    preffix: <Icon icon="addressBook" color="--palette-ui-white-900" size={24} />,
    suffix: <Icon icon="search" color="--palette-ui-white-900" size={24} />,
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
          value="Primary pressed"
          title="Primary pressed"
          theme="primary"
        />
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
    value: 'Secondary button',
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
        <Button
          suffix={suffix}
          isActive
          value="Secondary pressed"
          title="Secondary pressed"
          theme="secondary"
        />
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
    value: 'Outline button',
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
          value="Outline pressed"
          title="Outline pressed"
          theme={args.theme}
        />
        <br />
        <Button preffix={preffix} size="small" title="Outline small" disabled {...rest} />
      </>
    );
  },
};

export const Tertiary: Story = {
  args: {
    theme: 'tertiary',
    value: 'Tertiary button',
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
          value="Tertiary pressed"
          title="Tertiary pressed"
          theme={args.theme}
        />
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
    value: 'Link button',
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
        <Button
          suffix={suffix}
          isActive
          value="Link pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
      </>
    );
  },
};

export const Destructive: Story = {
  args: {
    theme: 'destructive',
    value: 'Destructive button',
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
          value="Destructive pressed"
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
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
    value: 'Destructive button',
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
          value="Destructive pressed"
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
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
    value: 'Destructive button',
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
          value="Destructive pressed"
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
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
    value: 'Destructive button',
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
          value="Destructive pressed"
          title="Destructive pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
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
    value: 'Primary button',
    preffix: <Icon icon="search" size={24} />,
    suffix: <Icon icon="search" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" badge={46} {...rest} />
        <br />
        <Button badge={46} value="Secondary button" theme="secondary" />
        <br />
        <Button suffix={suffix} value="Primary pressed" theme="outline" badge={46} />
        <br />
        <Button preffix={preffix} size="small" badge={46} disabled {...rest} />
      </>
    );
  },
};
