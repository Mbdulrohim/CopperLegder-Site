/**
 * The build-time entry: the same tree the browser gets, rendered to a string.
 *
 * Nothing in the page touches `window` or `document` while rendering — the
 * rotating eyebrow and the form's key listener live in effects, which never run
 * here. That is the one thing that has to stay true for this file to work.
 */
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export { site, jsonLd, llms } from './content/site.ts';

export const render = (): string => renderToString(<App />);
