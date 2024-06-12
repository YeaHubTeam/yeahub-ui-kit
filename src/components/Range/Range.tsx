import { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import cn from 'classnames';

import { RangeProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-range`;
const thumbWidth = 22;

export const Range: FC<RangeProps> = ({
  className,
  min = 0,
  max = 100,
  onChange,
  step,
  value,
  maxValueIcon,
  minValueIcon,
  hasScale,
}) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [isDraggable, setIsDraggable] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const getPercentage = (value: number) => {
    return step ? ((value - min) / (max - min)) * 100 : (value / max) * 100;
  };

  const getLabelPosition = (value: number) => {
    if (!labelRef.current) return;
    labelRef.current.style.left = `${getPercentage(value)}%`;
  };

  useEffect(() => {
    const setWidth = () => {
      setSliderWidth(wrapperRef.current?.clientWidth || 0);
    };

    setWidth();
    getLabelPosition(value);
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDraggable(true);
    getLabelPosition(+e.target.value);
  };

  const handleBlur = () => {
    setIsDraggable(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(+e.target.value);
  };

  const renderSteps = () => {
    if (!step) return null;
    const steps: JSX.Element[] = [];
    const stepWidth = ((sliderWidth - thumbWidth) / (max - min)) * step;

    for (let i = min; i <= max; i += step) {
      steps.push(
        <div key={i} className={`${compPrefix}-step`}>
          <span>{i}</span>
          <div className={`${compPrefix}-dot`}></div>
        </div>
      );
    }

    return (
      <div
        className={cn(`${compPrefix}-steps`, {
          [`${compPrefix}-scale`]: maxValueIcon || minValueIcon,
        })}
        style={{
          width: sliderWidth - thumbWidth,
          gap: stepWidth,
          display: 'grid',
          gridTemplateColumns: `repeat(${max / step + 1},0px)`,
        }}
      >
        {steps.map((Step) => Step)}
      </div>
    );
  };

  const renderLabel = () => {
    return (
      <div
        style={{
          width: sliderWidth - thumbWidth,
          marginLeft: thumbWidth / 2,
          position: 'absolute',
        }}
      >
        <div
          ref={labelRef}
          className={cn(`${compPrefix}-label`, {
            [`${compPrefix}-label--active`]: isDraggable,
          })}
          style={{ display: hasScale ? 'none' : 'block' }}
        >
          {value}
        </div>
      </div>
    );
  };

  const renderUnits = () => {
    return (
      !hasScale &&
      minValueIcon &&
      maxValueIcon && (
        <div className={`${compPrefix}-units`}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )
    );
  };

  const renderValue = (Icon: React.ReactNode, value: number) => {
    if (Icon) return minValueIcon;

    if (!Icon && !hasScale) {
      return value;
    }
  };

  return (
    <div className={cn(compPrefix, className)} role="slider">
      {hasScale && renderSteps()}
      {renderUnits()}
      <div className={`${compPrefix}-container`}>
        {renderValue(minValueIcon, min)}
        <div ref={wrapperRef} className={`${compPrefix}-wrapper`}>
          <div
            ref={trackRef}
            className={cn(`${compPrefix}-track`)}
            style={{ width: `${getPercentage(value)}%` }}
          ></div>
          <input
            className={`${compPrefix}-slider`}
            max={max}
            min={min}
            name="min"
            onChange={handleChange}
            ref={minInputRef}
            step={step}
            type="range"
            value={value}
            onInput={handleInput}
            onBlur={handleBlur}
          />
          {renderLabel()}
        </div>
        {renderValue(maxValueIcon, max)}
      </div>
    </div>
  );
};
