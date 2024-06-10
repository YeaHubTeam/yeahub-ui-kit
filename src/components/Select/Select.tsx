import { prefix } from '../../prefix';
import { FC, useMemo, useRef } from 'react';
import { Option, SingleSelectProps } from './types';
import { useSelect } from './hooks/useSelect';
import cn from 'classnames';
import { Popover } from '../Popover';
import { Icon } from '../Icon';

const compPrefix = `${prefix}-select`;

const CustomSelect: FC<SingleSelectProps> = ({
  onChange,
  disabled,
  value,
  options,
  clearable,
  placeholder,
}) => {
  const {
    closeMenu,
    isMenuOpen,
    onClear,
    onKeyDown,
    onKeyDownClear,
    toggleMenu,
    onMouseDownSelect,
    setIsMenuOpen,
  } = useSelect({ onChange, disabled });

  const ref = useRef<HTMLDivElement>(null);

  const renderOptions = useMemo(
    () => (options: Option[]) => {
      return options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ));
    },
    []
  );

  const renderMenuOption = (option: Option, index: number) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ') {
        e.preventDefault();
        onChange(option.value);
        setIsMenuOpen(false);
      }
    };
    return (
      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        key={index}
        className={cn(`${compPrefix}-menu-option`, `${prefix}-interactable`, {
          [`${prefix}-disabled`]: value === option.value,
        })}
        onClick={() => {
          onChange(option.value);
          setIsMenuOpen(false);
        }}
      >
        <div className={`${compPrefix}-menu-option-label`}>{option.label}</div>
      </div>
    );
  };

  const menuContent = useMemo(() => {
    return (
      <div
        className={`${compPrefix}-menu`}
        style={{ width: `${ref.current?.offsetWidth}px` }}
      >
        {options.map((option, index) => {
          return renderMenuOption(option, index);
        })}
      </div>
    );
  }, [options, value, disabled, ref.current?.offsetWidth]);

  const selectWrapperClassNames = cn(
    `${compPrefix}-wrapper`,
    disabled ? `${prefix}-disabled` : `${prefix}-interactable`
  );

  const containerClassNames = cn(`${compPrefix}-container`, {
    [`${prefix}-disabled`]: disabled,
  });

  const customChevronContainerClassNames = cn(
    `${compPrefix}-custom-chevron-container`,
    disabled ? `${prefix}-disabled` : `${prefix}-interactable`
  );

  const clearContainerClassNames = cn(
    `${compPrefix}-clear-container`,
    disabled ? `${prefix}-disabled` : `${prefix}-interactable`
  );

  return (
    <div ref={ref} className={compPrefix}>
      <Popover
        onClickOutside={closeMenu}
        placement={'bottom'}
        isOpen={isMenuOpen}
        body={menuContent}
      >
        <div className={containerClassNames}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div className={selectWrapperClassNames}>
              {!value && (
                <span className={`${compPrefix}-placeholder`}>{placeholder}</span>
              )}
              <select
                disabled={disabled}
                onMouseDown={onMouseDownSelect}
                onKeyDown={onKeyDown}
                value={value}
                className={`${compPrefix}-native-element ${!value ? `${compPrefix}-native-element-no-value` : ''}`}
              >
                {renderOptions(options)}
              </select>
            </div>
            {clearable && value && (
              <div
                onKeyDown={onKeyDownClear}
                tabIndex={disabled ? undefined : 0}
                className={clearContainerClassNames}
                onClick={onClear}
              >
                <Icon icon="x" size={20} />
              </div>
            )}
          </div>
          <div
            onClick={toggleMenu}
            onKeyDown={onKeyDown}
            tabIndex={disabled ? undefined : 0}
            className={customChevronContainerClassNames}
          >
            <Icon icon="caretDown" size={20} />
          </div>
        </div>
      </Popover>
    </div>
  );
};

export const Select = ({ ...props }: SingleSelectProps) => {
  if (props.type === 'default') {
    return <CustomSelect {...props} />;
  }
};
