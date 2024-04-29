import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import React from 'react';
import { icons } from './common';
import { IconProps } from './types';
import { CSSPropertiesWithVars } from '../types';

const meta = {
  title: 'components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    icon: 'addressBook',
  },
  render: () => {
    function getRandomColorName(): CSSPropertiesWithVars {
      const colorNames = [
        '--palette-ui-purple-900',
        '--palette-ui-purple-800',
        '--palette-ui-purple-700',
        '--palette-ui-purple-600',
        '--palette-ui-purple-500',
        '--palette-ui-purple-400',
        '--palette-ui-purple-300',
        '--palette-ui-purple-200',
        '--palette-ui-purple-100',
        '--palette-ui-purple-50',
        '--palette-ui-red-900',
        '--palette-ui-red-800',
        '--palette-ui-red-700',
        '--palette-ui-red-600',
        '--palette-ui-red-500',
        '--palette-ui-red-400',
        '--palette-ui-red-300',
        '--palette-ui-red-200',
        '--palette-ui-red-100',
        '--palette-ui-red-25',
        '--palette-ui-orange-900',
        '--palette-ui-orange-800',
        '--palette-ui-orange-700',
        '--palette-ui-orange-600',
        '--palette-ui-orange-500',
        '--palette-ui-orange-400',
        '--palette-ui-green-900',
        '--palette-ui-green-800',
        '--palette-ui-green-700',
        '--palette-ui-green-600',
        '--palette-ui-green-500',
        '--palette-ui-green-400',
        '--palette-ui-green-300',
        '--palette-ui-green-200',
        '--palette-ui-green-100',
        '--palette-ui-white-900',
      ];

      const randomColorName = colorNames[
        Math.floor(Math.random() * colorNames.length)
      ] as CSSPropertiesWithVars;
      return randomColorName;
    }

    return (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '20px',
            background: 'black',
            width: 800,
          }}
        >
          {Object.keys(icons).map((ico, idx) => (
            <div key={idx} style={{ margin: '20' }}>
              <Icon icon={ico as IconProps['icon']} color={getRandomColorName()} />
            </div>
          ))}
        </div>
      </>
    );
  },
};
