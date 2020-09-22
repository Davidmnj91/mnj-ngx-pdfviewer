export enum RendererType {
  CANVAS = 'canvas',
  SVG = 'svg',
}

export enum SpreadMode {
  UNKNOWN = -1,
  NONE = 0, // Default value.
  ODD = 1,
  EVEN = 2,
}

export enum ScrollMode {
  UNKNOWN = -1,
  VERTICAL = 0, // Default value,
  HORIZONTAL = 1,
  WRAPPED = 2,
}

export enum TextLayerMode {
  DISABLE,
  ENABLE,
  ENABLE_ENHANCE,
}

export enum PresentationModeState {
  UNKNOWN,
  NORMAL,
  CHANGING,
  FULLSCREEN,
}
