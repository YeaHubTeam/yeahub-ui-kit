import { memo, forwardRef } from 'react';
import classNames from 'classnames';

import { TextTypes, HeaderTagType, TextSize } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-text`;

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

export const Text = memo(
  forwardRef<HTMLInputElement, TextTypes>(
    (
      { className, title, text, theme = 'primary', align = 'left', size = 'size_m' },
      ref
    ): JSX.Element => {
      const HeaderTag = mapSizeToHeaderTag[size];

      return (
        <div
          ref={ref}
          className={classNames('', {}, [
            className,
            `${compPrefix}-${[theme]}`,
            `${compPrefix}-${[align]}`,
            `${compPrefix}-${[size]}`,
          ])}
        >
          {title && <HeaderTag className="title">{title}</HeaderTag>}
          {text && <p className="text">{text}</p>}
        </div>
      );
    }
  )
);
