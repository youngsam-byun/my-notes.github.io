import { FormatFunction } from 'i18next';
type Formatter = (value: never, format?: string, lang?: string) => string;
const noop: Formatter = (value) => value;