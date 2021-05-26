export const CHANGE_THEME = 'CHANGE_THEME'

export const handleThemeChange = theme => ({ // action creator
  type: CHANGE_THEME,
  payload: theme
})
