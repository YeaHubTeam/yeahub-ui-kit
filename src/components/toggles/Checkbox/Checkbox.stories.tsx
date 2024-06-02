import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React, { useEffect, useState } from 'react';
import { CheckboxProps } from './types';

const meta = {
  title: 'Components/Toggles/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxWithHooks = (props: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(!!props.checked);

  useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return <Checkbox {...props} checked={checked} onToggle={handleChange} />;
};

export const BaseCheckbox: Story = {
  render: (props) => {
    return (
      <div>
        <h2>Checked</h2>
        <CheckboxWithHooks {...props} checked label="Ср" />
        <br />
        <h2>Disabled</h2>
        <CheckboxWithHooks {...props} label="Disabled" disabled checked={false} />
        <br />
        <h2>Checked&Disabled</h2>
        <CheckboxWithHooks {...props} label="Checked&Disabled" disabled checked />
      </div>
    );
  },
  name: 'Basic',
  args: {},
};
