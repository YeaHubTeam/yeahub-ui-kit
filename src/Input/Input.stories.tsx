import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';
import { InputProps } from './types';

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

  return <Input {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (props) => <InputWithHooks {...props} />,
  name: 'Basic',
  args: {
    value: '',
    placeholder: 'Placeholder',
  },
};
