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
    preffix: <Icon icon="cap" size={24} />,
    suffix: <Icon icon="cap" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
        <br />
        <Button suffix={suffix} isActive value="Primary pressed" theme="primary" />
        <br />
        <Button aria-label="Primary button" preffix={preffix} theme={args.theme} />
      </>
    );
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    value: 'Secondary button',
    preffix: <Icon icon="cap" size={24} />,
    suffix: <Icon icon="cap" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
        <br />
        <Button suffix={suffix} isActive value="Secondary pressed" theme="secondary" />
        <br />
        <Button aria-label="Primary button" preffix={preffix} theme={args.theme} />
      </>
    );
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
    value: 'Outline button',
    preffix: <Icon icon="cap" size={24} />,
    suffix: <Icon icon="cap" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button {...rest} />
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
        <br />
        <Button suffix={suffix} isActive value="Outline pressed" theme={args.theme} />
        <br />
        <Button aria-label="Outline button" preffix={preffix} theme={args.theme} />
      </>
    );
  },
};

export const Link: Story = {
  args: {
    theme: 'link',
    value: 'Link button',
    tagName: 'a',
    preffix: <Icon icon="cap" size={24} />,
    suffix: <Icon icon="cap" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button {...rest} />
        <br />
        <Button preffix={preffix} size="large" {...rest} />
        <br />
        <Button preffix={preffix} size="small" disabled {...rest} />
        <br />
        <Button
          suffix={suffix}
          isActive
          value="Link pressed"
          theme={args.theme}
          tagName={args.tagName}
        />
        <br />
        <Button
          aria-label="Outline button"
          preffix={preffix}
          theme={args.theme}
          tagName={args.tagName}
        />
      </>
    );
  },
};

export const Badge: Story = {
  args: {
    theme: 'primary',
    value: 'Primary button',
    preffix: <Icon icon="cap" size={24} />,
    suffix: <Icon icon="cap" size={24} />,
  },
  render: (args) => {
    const { preffix, suffix, ...rest } = args;
    return (
      <>
        <Button preffix={preffix} size="large" badge={46} {...rest} />
        <br />
        <Button badge={46} value="Secondary button" theme="secondary" />
        <br />
        <Button preffix={preffix} size="small" badge={46} disabled {...rest} />
        <br />
        <Button suffix={suffix} value="Primary pressed" theme="outline" badge={46} />
      </>
    );
  },
};
