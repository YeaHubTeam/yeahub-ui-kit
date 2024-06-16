import { useRef, useState } from 'react';

export const useMultiSelect = (props: {
  value: string[];
  disabled?: boolean;
  onChange: (value: string[]) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLSelectElement | HTMLDivElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      setIsMenuOpen((state) => !state);
    }
  };

  const onKeyDownClear = (value: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' && !props.disabled) {
      e.preventDefault();
      if (props.value.includes(value)) {
        props.onChange(props.value.filter((v) => v !== value));
      }
    }
  };

  const onClear = (value: string) => (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
    if (props.value.includes(value) && !props.disabled) {
      props.onChange(props.value.filter((v) => v !== value));
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    if (!props.disabled) {
      setIsMenuOpen((state) => !state);
    }
  };

  return {
    closeMenu,
    isMenuOpen,
    onClear,
    onKeyDown,
    onKeyDownClear,
    ref,
    setIsMenuOpen,
    toggleMenu,
  };
};
