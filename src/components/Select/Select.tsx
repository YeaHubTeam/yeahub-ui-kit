import { prefix } from '../../prefix';
import { FC, useMemo, useRef } from 'react';
import { MultiSelectProps, Option, SingleSelectProps } from './types';
import { useSelect } from './hooks/useSelect';
import cn from 'classnames';
import { Popover } from '../Popover';
import { Icon } from '../Icon';
import { Checkbox } from '../toggles/Checkbox';
import { useMultiSelect } from './hooks/useMultiSelect';

const compPrefix = `${prefix}-select`;

const CustomSelect: FC<SingleSelectProps> = ({
  onChange,
  disabled,
  value,
  options,
  clearable,
  placeholder,
  className,
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
        className={cn(`${compPrefix}-menu-option`, `${compPrefix}-interactable`, {
          [`${compPrefix}-disabled`]: value === option.value,
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
    disabled ? `${compPrefix}-disabled` : `${compPrefix}-interactable`
  );

  const containerClassNames = cn(`${compPrefix}-container`, {
    [`${compPrefix}-disabled`]: disabled,
  });

  const customChevronContainerClassNames = cn(
    `${compPrefix}-custom-chevron-container`,
    disabled ? `${compPrefix}-disabled` : `${compPrefix}-interactable`
  );

  const clearContainerClassNames = cn(
    `${compPrefix}-clear-container`,
    disabled ? `${compPrefix}-disabled` : `${compPrefix}-interactable`
  );

  return (
    <div ref={ref} className={cn(compPrefix, className)}>
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
                onChange={() => onChange(value)}
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

const CustomMultiSelect: FC<MultiSelectProps> = (props) => {
  const { closeMenu, isMenuOpen, onClear, onKeyDown, onKeyDownClear, ref, toggleMenu } =
    useMultiSelect({
      value: props.value,
      onChange: props.onChange,
      disabled: props.disabled,
    });

  const renderMenuOption = (option: Option, index: number) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ') {
        onClick(e);
      }
    };

    const onClick = (
      e?: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => {
      e?.preventDefault();
      if (props.value.includes(option.value)) {
        props.onChange(props.value.filter((v) => v !== option.value));
      } else {
        props.onChange([...props.value, option.value]);
      }
    };

    return (
      <div
        onKeyDown={onKeyDown}
        key={index}
        className={`${compPrefix}-menu-option ${compPrefix}-interactable`}
        onClick={onClick}
      >
        <Checkbox
          onToggle={() => onClick()}
          checked={props.value.includes(option.value)}
          label={option.label}
        />
      </div>
    );
  };

  const selectWrapperClassNames = cn(`${compPrefix}-wrapper`);

  const containerClassNames = cn(`${compPrefix}-container`, {
    [`${prefix}-disabled`]: props.disabled,
  });

  const menuContent = useMemo(() => {
    return (
      <div
        className={`${compPrefix}-menu`}
        style={{ width: `${ref.current?.offsetWidth}px` }}
      >
        {props.options.map((option, index) => {
          return renderMenuOption(option, index);
        })}
      </div>
    );
  }, [props.options, props.value, props.disabled, ref.current?.offsetWidth]);

  const values = useMemo(() => {
    const valueClassNames = cn(
      `${compPrefix}-value`,
      props.disabled ? `${compPrefix}-disabled` : ''
    );

    const clearValueContainerClassNames = cn(
      `${compPrefix}-clear-value-container`,
      props.disabled ? `${compPrefix}-disabled` : `${compPrefix}-interactable`
    );

    return (
      <>
        {props.value.map((value, index) => {
          const allOptions = props.options.map((option) => option).flat();
          const option = allOptions.find((option) => option.value === value);
          if (option) {
            return (
              <div key={index} className={valueClassNames} onClick={toggleMenu}>
                <div
                  className={`${compPrefix}-value-prefix-wrapper ${compPrefix}-interactable`}
                >
                  <div className={`${compPrefix}-value-label`}>{option.label}</div>
                </div>
                <div
                  onKeyDown={onKeyDownClear(option.value)}
                  tabIndex={props.disabled ? undefined : 0}
                  className={clearValueContainerClassNames}
                  onClick={onClear(option.value)}
                >
                  <Icon icon="x" size={20} />
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }, [props.value, props.options, props.disabled]);

  const chevronContainerClassNames = cn(
    `${compPrefix}-custom-chevron-container`,
    props.disabled ? `${compPrefix}-disabled` : `${compPrefix}-interactable`
  );

  const multiSelectClassNames = cn(
    compPrefix,
    `${compPrefix}-multi`,
    {
      [`${compPrefix}-fixed-height`]: props.fixedHeight,
      [`${compPrefix}-with-value`]: props.value.length > 1,
    },
    props.className
  );

  return (
    <div ref={ref} className={multiSelectClassNames}>
      <Popover
        onClickOutside={closeMenu}
        placement={'bottom'}
        isOpen={isMenuOpen}
        body={menuContent}
      >
        <div className={containerClassNames}>
          <div
            className={`${selectWrapperClassNames} ${props.value.length <= 1 ? `${compPrefix}-interactable` : ''}`}
            onClick={() => !props.value.length && toggleMenu()}
          >
            {props.value.length < 2 ? (
              <div onClick={() => toggleMenu()} className={`${compPrefix}-placeholder`}>
                {props.placeholder}
              </div>
            ) : null}
            {values}
          </div>
          <div
            onClick={toggleMenu}
            onKeyDown={onKeyDown}
            tabIndex={props.disabled ? undefined : 0}
            className={chevronContainerClassNames}
          >
            <Icon icon="caretDown" size={20} />
          </div>
        </div>
      </Popover>
    </div>
  );
};

export const Select = ({ ...props }: SingleSelectProps | MultiSelectProps) => {
  if (props.type === 'default') {
    return <CustomSelect {...props} />;
  }
  if (props.type === 'multi') {
    return <CustomMultiSelect {...props} />;
  }
};
