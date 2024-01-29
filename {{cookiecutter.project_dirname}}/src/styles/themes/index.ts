import { theme as light } from '@/styles/themes/light'
import { theme as dark } from '@/styles/themes/dark'

export enum Theme {
  light = 'light',
  dark = 'dark'
}

const theme = {
  [Theme.light]: light,
  [Theme.dark]: dark
}

export default theme
