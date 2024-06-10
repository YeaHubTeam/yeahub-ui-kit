import { useState } from 'react';

type UseSelect = {
  onChange: (value?: string) => void;
  disabled?: boolean;
};

export function useSelect({ onChange, disabled }: UseSelect) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLSelectElement | HTMLDivElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      setIsMenuOpen((state) => !state);
    }
  };

  const onKeyDownClear = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      setIsMenuOpen(false);
      onChange(undefined);
    }
  };

  const onClear = (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
    if (!disabled) {
      onChange(undefined);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    if (!disabled) {
      setIsMenuOpen((state) => !state);
    }
  };

  const onMouseDownSelect = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setIsMenuOpen(true);
  };

  return {
    isMenuOpen,
    setIsMenuOpen,
    onKeyDown,
    onKeyDownClear,
    onClear,
    closeMenu,
    toggleMenu,
    onMouseDownSelect,
  };
}
