import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input/Input';
import React from 'react';
import { InputProps } from './types';
import { FuiIconChevronDown12X12 } from '../Icon/Icon';
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

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      preffix={<FuiIconChevronDown12X12 />}
      suffix={<FuiIconChevronDown12X12 />}
    />
  );
};

export const BaseInput: Story = {
  render: (props) => <InputWithHooks {...props} />,
  name: 'Basic',
  args: {
    value: '',
    placeholder: '',
  },
};
