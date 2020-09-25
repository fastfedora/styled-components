// @flow

declare var SC_DISABLE_SPEEDY: ?boolean;
declare var __VERSION__: string;

export const SC_ATTR: string =
  (typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
  'data-styled';

export const SC_ATTR_ACTIVE = 'active';
export const SC_ATTR_VERSION = 'data-styled-version';
export const SC_VERSION = __VERSION__;
export const SPLITTER = '/*!sc*/\n';

export const IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

function hasEnvValue(name) {
  return typeof process !== 'undefined' && typeof process.env[name] !== 'undefined' &&
    process.env[name] !== '';
}

function getEnvValue(name) {
  return process.env[name] === 'false' ? false : process.env[name];
}

export const DISABLE_SPEEDY =
  Boolean(typeof SC_DISABLE_SPEEDY === 'boolean'
    ? SC_DISABLE_SPEEDY
    : (hasEnvValue('REACT_APP_SC_DISABLE_SPEEDY')
      ? getEnvValue('REACT_APP_SC_DISABLE_SPEEDY')
      : (hasEnvValue('SC_DISABLE_SPEEDY')
        ? getEnvValue('SC_DISABLE_SPEEDY')
        : process.env.NODE_ENV !== 'production'
      )
    ));

// Shared empty execution context when generating static styles
export const STATIC_EXECUTION_CONTEXT = {};
