export const MAX_AUTO_SCALE = 1.25;
export const MIN_SCALE = 0.1;
export const MAX_SCALE = 10.0;
export const DEFAULT_SCALE_DELTA = 1.1;
export const DEFAULT_SCALE_VALUE = 'auto';

export type Scale = number | 'auto' | 'page-actual' | 'page-width' | 'page-height' | 'page-fit';
