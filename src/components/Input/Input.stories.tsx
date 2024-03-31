import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input/Input';
import React from 'react';
import { InputProps } from './types';
import { Icon } from '../Icon/Icon';
const meta = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWithHooks = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input {...props} value={value} onChange={handleChange} />;
};

export const BaseInput: Story = {
  render: (props) => <InputWithHooks {...props} />,
  name: 'Basic',
  args: {
    value: '',
    placeholder: 'Enter a text...',
  },
};

export const InputWithPrefix: Story = {
  render: (props) => (
    <InputWithHooks preffix={<Icon icon="cap" size={24} />} {...props} />
  ),
  name: 'InputWithPrefix',
  args: {
    value: '',
    placeholder: 'Enter a text...',
  },
};

export const InputWithSuffix: Story = {
  render: (props) => <InputWithHooks suffix={<Icon icon="cap" size={24} />} {...props} />,
  name: 'InputWithPrefix',
  args: {
    value: '',
    placeholder: 'Enter a text...',
  },
};

export const InputDisabled: Story = {
  render: (props) => (
    <InputWithHooks suffix={<Icon icon="cap" size={24} />} disabled {...props} />
  ),
  name: 'InputDisabled',
  args: {
    value: '',
    placeholder: 'Enter a text...',
  },
};
