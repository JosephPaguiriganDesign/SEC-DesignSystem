/**
 * SCE.com Design System tokens
 *
 * Mirrors the `T` object in preview/storybook.html. Sources verified:
 *  - sce.com tokens.css (Southern California EIX Design System v1.5)
 *  - Figma file N546ZD8jN1DrQ997ZNb4FO (welcome-page metadata)
 *
 * The Edison brand primary is Green + Yellow. The navy you see on
 * sce.com hero sections is a translucent overlay gradient, not a
 * brand token — it is exposed as `gradient.hero` for that single
 * use case.
 */

export const color = {
  /* Primary brand */
  green:        '#00664f',
  greenDeep:    '#004d3a',
  greenSoft:    '#e6f0ed',
  yellow:       '#fed141',
  yellowSoft:   '#fff1a8',
  yellowDeep:   '#f0b323',
  gray:         '#707372',

  /* Accent palette (named anchors from EIX v1.5) */
  accentGoldenrod: '#f0b323',
  accentKiwi:      '#78be20',
  accentLeaf:      '#658d1b',
  accentMargarita: '#d3df44',
  accentPacific:   '#00a9e0',
  accentPeacock:   '#006269',
  accentPlum:      '#722257',
  accentSage:      '#a5b7ba',
  accentSeaglass:  '#6dc9c9',
  accentSherbet:   '#fbb04c',

  /* Neutrals */
  edisonBlack:  '#101820',
  pewter:       '#53565a',
  coolGray:     '#b1b3b3',
  lightGray:    '#d5d5d5',
  heather:      '#f5f5f5',

  /* Semantic */
  error:        '#bb0000',
  errorSoft:    '#fde2e6',
  success:      '#107e3e',
  successSoft:  '#e2f5e8',
  info:         '#0057d2',
  infoSoft:     '#e8f1fb',
  warn:         '#df6e0c',
  warnSoft:     '#fff1d6',

  /* Surfaces */
  white:        '#ffffff',
  bgPrimary:    '#ffffff',
  bgSecondary:  '#fafafa',
  bgTertiary:   '#f2f2f2',

  /* Borders */
  border:       '#d5d5d5',
  borderSoft:   '#f5f5f5',

  /* Text */
  text:         '#101820',
  textMuted:    '#53565a',
  textSubtle:   '#707372',
  textDisabled: 'rgba(83, 86, 90, 0.6)',
  textLink:     '#1a76c5',
  textWhite:    '#ffffff',
};

export const gradient = {
  button:      'linear-gradient(270deg, #f0b323 0%, #fed141 49.46%, #fed141 99.92%)',
  buttonHover: 'linear-gradient(270deg, #fbb04c 0%, #fbb04c 100%)',
  sticky:      'linear-gradient(0deg, #00a9e0 0%, #1a76c5 100%)',
  hero:        'linear-gradient(180deg, rgba(13,48,91,0.90) 0%, rgba(19,53,91,0.60) 40%, rgba(14,43,78,0.30) 70%, rgba(15,43,81,0) 100%)',
  outage:      'linear-gradient(135deg, #bb0000 0%, #7d0a1d 100%)',
};

export const font = {
  family:
    "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  weight: {
    light:     300,
    regular:   400,
    semibold:  600,
    bold:      700,
    extrabold: 800,
  },
};

/* SCE EIX raw size scale (px) */
export const size = {
  '3xs':    11,
  '2xs':    12,
  xs:       14,
  sm:       16,
  md:       18,
  lg:       20,
  lgPlus:   22,
  xl:       24,
  xlPlus:   26,
  '2xl':    32,
  '2xlPlus': 36,
  '3xl':    40,
  '4xl':    48,
  '5xl':    56,
};

/* SCE EIX raw line-height scale (px) */
export const line = {
  '3xs':       12,
  '2xs':       14,
  xs:          16,
  xsPlus:      18,
  sm:          20,
  smPlus:      22,
  md:          24,
  mdPlus:      26,
  mdPlusPlus:  28,
  lg:          30,
  xl:          32,
  xlPlus:      34,
  '2xl':       40,
  '3xl':       48,
  '4xl':       56,
};

/* Composed type ramp (size + line + weight + tracking) */
export const type = {
  display:  { size: 56, weight: 800, line: 56, tracking: -0.02 },
  h1:       { size: 48, weight: 800, line: 56, tracking: -0.02 },
  h2:       { size: 36, weight: 700, line: 48, tracking: -0.01 },
  h3:       { size: 24, weight: 700, line: 32, tracking: -0.01 },
  h4:       { size: 20, weight: 700, line: 28, tracking: 0     },
  body:     { size: 16, weight: 400, line: 24, tracking: 0     },
  bodyBold: { size: 16, weight: 600, line: 24, tracking: 0     },
  caption:  { size: 14, weight: 400, line: 20, tracking: 0     },
  overline: { size: 12, weight: 700, line: 16, tracking: 0.1   },
};

export const space = {
  x1:  4,
  x2:  8,
  x4:  16,
  x6:  24,
  x8:  32,
  x10: 40,
  x12: 48,
  x14: 56,
  x16: 64,
  x18: 72,
  x20: 80,
  x25: 100,
};

export const radius = {
  xs:    4,
  sm:    8,
  md:    16,
  lg:    24,
  xl:    32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  pill:  999,
};

export const border = {
  sm: 1,
  md: 1.5,
  lg: 2,
};

export const shadow = {
  card:    '0 2px 10px 2px rgba(0, 0, 0, 0.10)',
  section: '0 4px 14px 2px rgba(0, 0, 0, 0.12)',
  sm:      '0 1px 2px rgba(0, 0, 0, 0.06)',
  md:      '0 4px 12px rgba(0, 0, 0, 0.08)',
  lg:      '0 12px 32px rgba(0, 0, 0, 0.15)',
  focus:   '0 0 0 3px rgba(254, 209, 65, 0.45)',
};

export const motion = {
  fast:    160,
  base:    240,
  slow:    420,
  reveal:  600,
  easing:  'cubic-bezier(0.22, 0.61, 0.36, 1)',
};

/* Full 50-900 ramps for every named color in sce.com tokens.css v1.5.
 * 22 ramps × 10 stops = 220 hex values, verbatim from
 * https://www.sce.com/themes/custom/sce_redesign/css/tokens.css
 */
export const colorRamps = {
  edisonYellow: ['#FFFAEC','#FFF1C4','#FFEAA8','#FEE080','#FEDA67','#FED141','#E7BE3B','#B4942E','#8C7324','#6B581B'],
  edisonGreen:  ['#E6F0ED','#B0D0C8','#8AB9AE','#549889','#338572','#00664F','#005D48','#004838','#00382B','#002B21'],
  edisonGray:   ['#F1F1F1','#D3D4D3','#BDBFBE','#9FA1A1','#8D8F8E','#707372','#666968','#505251','#3E3F3F','#2F3030'],
  goldenrod:    ['#FEF7E9','#FAE7BB','#F8DC9A','#F5CC6C','#F3C24F','#F0B323','#DAA320','#AA7F19','#846213','#654B0F'],
  kiwi:         ['#F2F9E9','#D5EBBA','#C1E198','#A5D36A','#93CB4D','#78BE20','#6DAD1D','#558717','#426912','#32500D'],
  leaf:         ['#F0F4E8','#CFDCB8','#B8CB96','#98B366','#84A449','#658D1B','#5C8019','#486413','#384E0F','#2A3B0B'],
  margarita:    ['#FBFCEC','#F1F5C5','#EBF0A9','#E2EA82','#DCE569','#D3DF44','#C0CB3E','#969E30','#747B25','#595E1D'],
  pacific:      ['#E6F6FC','#B0E4F5','#8AD7F1','#54C5EA','#33BAE6','#00A9E0','#009ACC','#00789F','#005D7B','#00475E'],
  peacock:      ['#E6EFF0','#B0CED1','#8AB7BA','#54969B','#338187','#006269','#005960','#00464B','#00363A','#00292C'],
  plum:         ['#F1E9EE','#D3BACB','#BE99B2','#A16B8E','#8E4E79','#722257','#681F4F','#51183E','#3F1330','#300E25'],
  sage:         ['#F6F8F8','#E3E9EA','#D6DEDF','#C3CFD1','#B7C5C8','#A5B7BA','#96A7A9','#758284','#5B6566','#454D4E'],
  seaglass:     ['#F0FAFA','#D2EEEE','#BCE6E6','#9DDBDB','#8AD4D4','#6DC9C9','#63B7B7','#4D8F8F','#3C6F6F','#2E5454'],
  sherbet:      ['#FFF7ED','#FEE7C8','#FDDBAD','#FCCA87','#FCC070','#FBB04C','#E4A045','#B27D36','#8A612A','#694A20'],
  edisonBlack:  ['#E7E8E9','#B5B7BA','#919598','#5F646A','#40464D','#101820','#0F161D','#0B1117','#090D12','#070A0D'],
  edisonPewter: ['#EEEEEF','#CACBCC','#B0B1B3','#8C8E90','#75787B','#53565A','#4C4E52','#3B3D40','#2E2F32','#232426'],
  coolGray:     ['#F7F7F7','#E7E7E7','#DBDCDC','#CBCCCC','#C1C2C2','#B1B3B3','#A1A3A3','#7E7F7F','#616262','#4A4B4B'],
  lightGray:    ['#FBFBFB','#F2F2F2','#ECECEC','#E3E3E3','#DDDDDD','#D5D5D5','#C2C2C2','#979797','#757575','#595959'],
  heather:      ['#FEFEFE','#FCFCFC','#FAFAFA','#F8F8F8','#F7F7F7','#F5F5F5','#DFDFDF','#AEAEAE','#878787','#676767'],
  success:      ['#E7F2EC','#B5D7C3','#91C4A6','#5FA97E','#409865','#107E3E','#0F7338','#0B592C','#094522','#07351A'],
  error:        ['#F8E6E6','#EAB0B0','#E08A8A','#D15454','#C93333','#BB0000','#AA0000','#850000','#670000','#4F0000'],
  inform:       ['#E6EEFB','#B0CBF1','#8AB2EA','#548EE1','#3379DB','#0057D2','#004FBF','#003E95','#003074','#002558'],
  warn:         ['#FCF1E7','#F5D2B4','#F0BC8F','#EA9E5C','#E58B3D','#DF6E0C','#CB640B','#9E4E09','#7B3D07','#5E2E05'],
};
export const rampStops = ['50','100','200','300','400','500','600','700','800','900'];

/* Theme-aware overrides matching [data-eix-theme=light/dark] from tokens.css */
export const themes = {
  light: {
    bgPrimary:   '#FFFFFF',
    bgSecondary: '#FAFAFA',
    bgTertiary:  '#F2F2F2',
    text:        '#101820',
    textBlack:   '#070A0D',
    bgFilled:    '#FFFFFF',
    bgFocus:     '#0A82FF',
    disabled:    '#A9B4BE',
    separator:   '#8C8C8C',
  },
  dark: {
    bgPrimary:   '#111111',
    bgSecondary: '#222222',
    bgTertiary:  '#333333',
    text:        '#FFFFFF',
    textBlack:   '#101820',
    bgFilled:    '#F1F1F1',
    bgFocus:     '#0A82FF',
    disabled:    '#5E5E5E',
    separator:   '#858585',
  },
};

const T = { color, gradient, font, size, line, type, space, radius, border, shadow, motion, colorRamps, rampStops, themes };
export default T;
