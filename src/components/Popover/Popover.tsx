import { Placement } from '@floating-ui/react';
import { prefix } from '../../prefix';
import { ButtonProps } from '../Button/types';
import { isValidElement, useMemo } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import classNames from 'classnames';
import {
  PopoverContent,
  Popover as PopoverFabric,
  PopoverTrigger,
} from './PopoverFabric';

const compPrefix = `${prefix}-popover`;

interface PopoverHeaderConfig {
  titleText: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

interface PopoverFooterConfig {
  primaryAction: ButtonProps;
  secondaryAction?: ButtonProps;
  footerContent?: string;
}

export type PopoverProps = {
  body: JSX.Element;
  header?: JSX.Element | PopoverHeaderConfig;
  footer?: JSX.Element | PopoverFooterConfig;
  ariaLabel?: string;
  className?: string;
  placement?: Placement;
  children: React.ReactNode;
  isOpen: boolean;
  onClickOutside?: () => void;
};

export const Popover = (props: PopoverProps) => {
  const header = useMemo(() => {
    if (props.header) {
      if (!isValidElement(props.header)) {
        const { titleText, dismissible, onDismiss } = props.header as PopoverHeaderConfig;
        const dismissButton = (
          <Button
            className={`${compPrefix}-title-dismiss`}
            suffix={<Icon icon="plusCircle" />}
            onClick={onDismiss}
            theme="tertiary"
            size="medium"
          />
        );
        return (
          <div className={`${compPrefix}-title`}>
            <span className={`${compPrefix}-title-text`}>{titleText}</span>
            {dismissible ? dismissButton : null}
          </div>
        );
      }
      return props.header;
    }
  }, [props.header]);

  const footer = useMemo(() => {
    if (!props.footer) return null;
    if (isValidElement(props.footer)) {
      return props.footer;
    }
    const { primaryAction, secondaryAction } = props.footer as PopoverFooterConfig;
    if (primaryAction ?? secondaryAction) {
      return (
        <div className={`${compPrefix}-footer`}>
          {secondaryAction && (
            <Button className={`${compPrefix}-footer-secondary`} {...secondaryAction} />
          )}
          {primaryAction && (
            <Button className={`${compPrefix}-footer-primary`} {...primaryAction} />
          )}
        </div>
      );
    }
  }, [props.footer]);

  const content = useMemo(() => {
    return (
      <div className={classNames(compPrefix, props.className)}>
        {header}
        {props.body}
        {footer}
      </div>
    );
  }, [props.body]);

  return (
    <div className={props.isOpen ? `${compPrefix}-is-open` : ''}>
      <PopoverFabric
        open={props.isOpen}
        onOpenChange={props.onClickOutside}
        placement={props.placement}
      >
        <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
        <PopoverContent>{content}</PopoverContent>
      </PopoverFabric>
    </div>
  );
};
