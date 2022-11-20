// eslint-disable-next-line
// @ts-ignore
import { FormatFunction } from 'i18next';
// eslint-disable-next-line
type Formatter = (value: any, formatString?: string, lang?: string) => string;
const noop: Formatter = (value) => value;

export const numberWithCommas: Formatter = (value, formatString, lang) => {
  const number = +value;
  if (value == null || Number.isNaN(number)) {
    return value;
  }
  return number.toLocaleString(lang, {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
};

export const formatToFunction: Record<string, Formatter> = Object.entries({
  numberWithCommas,
}).reduce(
  (prev, [key, func]) => ({
    ...prev,
    [key.toLowerCase()]: func,
  }),
  {},
);

export const getFormatter = (formatName: string): Formatter => {
  const formatter = formatToFunction[formatName.trim().toLowerCase()];
  return formatter ?? noop;
};

export const stripQuotes = (value?: string) =>
  value ? value.replace(/^['"]|['"]$/g, '') : '';

export const parseFnAndArgs = (formatter: string) => {
  const regexMatch = formatter.match(/(\w*)\s*:?\s*(.*)?/);
  if (regexMatch) {
    const fn = regexMatch[1]?.trim();
    const formatArgs = regexMatch[2]?.trim();
    return [fn, stripQuotes(formatArgs)];
  }
  return [formatter];
};

export const formats: FormatFunction = (
  // eslint-disable-next-line
  value: any,
  formatString: string | undefined,
  lang: string | undefined,
): string => {
  return (
    (formatString ?? '')
      .split('|')
      .map((str: string) => str.trim())
      // eslint-disable-next-line
      .reduce((prev: any, formatter: string) => {
        const [fn, formatArg] = parseFnAndArgs(formatter);
        const res = getFormatter(fn)(prev, formatArg, lang);
        return res;
      }, value)
  );
};
