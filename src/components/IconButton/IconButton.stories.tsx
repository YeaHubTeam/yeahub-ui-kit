import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';
import { Icon } from '../Icon/Icon';
import { iconTheme } from './types';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconsButtonSquare: Story = {
  args: {
    icon: <Icon icon="search" size={24} />,
    'aria-label': 'Large',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', width: ' 800px' }}>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-large`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} large`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={36} />}
                theme={theme}
                form="square"
                size="large"
              />
              <br />
            </div>
          ))}
        </div>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-medium`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} medium active`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={24} />}
                theme={theme}
                form="square"
                size="medium"
                isActive
              />
              <br />
            </div>
          ))}
        </div>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-small`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} small disabled`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={20} />}
                theme={theme}
                form="square"
                size="small"
                disabled
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const IconsButtonRound: Story = {
  args: {
    icon: <Icon icon="search" size={24} />,
    'aria-label': 'Large',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', width: ' 800px' }}>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-large`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} large`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={36} />}
                theme={theme}
                form="round"
                size="large"
              />
              <br />
            </div>
          ))}
        </div>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-medium`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} medium active`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={24} />}
                theme={theme}
                form="round"
                size="medium"
                isActive
              />
              <br />
            </div>
          ))}
        </div>
        <div>
          {iconTheme.map((theme) => (
            <div
              key={`${theme}-small`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>{`${theme} small disabled`}</span>
              <IconButton
                aria-label={args['aria-label']}
                icon={<Icon icon="search" size={20} />}
                theme={theme}
                form="round"
                size="small"
                disabled
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  },
};
