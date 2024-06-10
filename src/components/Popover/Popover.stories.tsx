/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { useEffect, useState } from 'react';
import React from 'react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Help people conveniently access functionality or info. Popover is a modular element that appears above other content when triggered. Should ideally not obstruct the element that triggered them or essential content. Including a Close button is recommended for clarity, but a Popover often closes by clicking outside or selecting an item within. Should not be obscured by other elements, except for alerts. Avoid making a Popover too big.',
      },
    },
  },
  argTypes: {
    header: {
      name: '🔗 header',
      control: 'text',
    },
    body: {
      name: '🔗 body',
      control: {
        disable: true,
      },
    },
    footer: {
      name: '🔗 footer',
      control: {
        disable: true,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    ariaLabel: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
      setOpen(args.isOpen);
    }, [args.isOpen]);

    const body = (
      <div>
        <div>This is empty</div>
      </div>
    );

    const toggleOpen = () => {
      setOpen((open) => !open);
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover
          {...args}
          isOpen={open}
          placement={'bottom'}
          onClickOutside={() => {
            setOpen(false);
          }}
          body={body}
        >
          <div>
            <Button onClick={toggleOpen}>Open Popover</Button>
          </div>
        </Popover>
      </div>
    );
  },
  name: 'Basic',
  args: {
    body: <div />,
    children: <div />,
    isOpen: false,
  },
};
