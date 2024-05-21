import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import React from 'react';
import { TabsProps } from './types';

const meta = {
  title: 'Data Entry/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Личная информация',
    children: 'Твои навыки',
  },
  {
    key: '2',
    label: 'Обо мне',
    children: 'Content of Обо мне',
  },
  {
    key: '3',
    label: 'Навыки',
    children: 'Content of Навыки',
  },
  {
    key: '4',
    label: 'Проекты',
    children: 'Content of Проекты',
  },
  {
    key: '5',
    label: 'Опыт работы',
    children: 'Content of Опыт работы',
  },
  {
    key: '6',
    label: 'Образование',
    children: 'Content of Образование',
  },
];

export const BaseTab: Story = {
  render: (props) => <Tabs {...props} />,
  name: 'Basic',
  args: {
    items,
  },
};
