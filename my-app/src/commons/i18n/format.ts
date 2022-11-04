import { FormatFunction } from 'i18next';
type Formatter = (value: never, format?: string, lang?: string) => string;
const noop: Formatter = (value) => value;

const getFormatter = (formatName: string): Formatter => {
  const formatter = formatToFunction[formatName.trim().toLowerCase()];

  if()
}