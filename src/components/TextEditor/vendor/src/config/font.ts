import { colorsPalette } from './colorsPalette';

export const fontColor = {
  colors: colorsPalette,
  columns: 6,
  documentColors: 12, // Sniff for already used colors in the rich text and provide them for reuse
};

export const fontSize = {
  options: [
    'default', // font size defined in the web page styles. no inline style changes
    8,
    9,
    10,
    11,
    12,
    14,
    18,
    20,
    22,
    24,
    26,
    28,
    36,
    48,
  ],
  /*
        By default, all font-size values that are not specified in the config.fontSize.options are stripped (aka data loss)
        You can enable support for all font sizes by using the config.fontSize.supportAllValues option.
     */
  supportAllValues: true,
};
