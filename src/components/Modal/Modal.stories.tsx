import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ModalTrigger } from './ModalTrigger';
import { ModalContent } from './ModalContent';
import { ModalDescription } from './ModalDescription';
import { ModalHeading } from './ModalHeading';
import React from 'react';

const meta = {
  title: 'Data Entry/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseModal: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger>My trigger</ModalTrigger>
        <ModalContent
          style={{
            borderRadius: 20,
            width: 410,
          }}
        >
          <ModalHeading>Мы отправили письмо с инструкциями</ModalHeading>
          <ModalDescription>
            Если вы не получили письмо с инструкциями, проверьте, пожалуйста, папку «Спам»
            или попробуйте отправить запрос ещё раз
          </ModalDescription>
        </ModalContent>
      </Modal>
    );
  },
  name: 'Basic',
  args: {},
};
