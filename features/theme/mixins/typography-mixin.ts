import { Palette, TypographyVariantsOptions } from '@mui/material/styles'
import { CSSProperties } from 'react'
import { Roboto, Noto_Sans_TC } from 'next/font/google'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    chip: CSSProperties
  }
  interface TypographyVariantsOptions {
    chip?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    chip: true
  }
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

const getTypographyMixin = (palette: Palette): TypographyVariantsOptions => ({
  fontFamily: ['inherit'].join(','),

  // In Chinese and Japanese the characters are usually larger,
  // so a smaller fontsize may be appropriate.
  // fontSize: 12,

  h1: {
    fontSize: '4.25rem',
    fontWeight: 300,
    lineHeight: 1.5,
    color: palette.primary.main,
  },
  h2: {
    fontWeight: 300,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  h6: {
    fontWeight: 500,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  subtitle1: {
    fontWeight: 700,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  body2: {
    lineHeight: 1.5,
    color: palette.gray[42],
  },
  button: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'none',
  },
  // Custom variant
  chip: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1,
    color: palette.gray[42],
  },
})

export default getTypographyMixin
