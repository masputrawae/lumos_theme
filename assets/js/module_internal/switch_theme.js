export function themeHandler() {
  const KEY_THEME = 'theme'
  const elHtml = document.documentElement
  const buttons = document.querySelectorAll('[data-theme-toggle]')

  const switchTheme = theme => {
    elHtml.dataset.theme = theme
    buttons.forEach(btn => btn.classList.toggle('isDark', theme === 'dark'))
    sessionStorage.setItem(KEY_THEME, theme)
  }

  const initTheme = () => {
    let storageTheme
    try {
      storageTheme = sessionStorage.getItem(KEY_THEME)
    } catch (e) {
      storageTheme = null
    }

    const themeSystem = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    storageTheme ? switchTheme(storageTheme) : switchTheme(themeSystem)
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const storageTheme = sessionStorage.getItem(KEY_THEME)
      const newTheme = storageTheme === 'dark' ? 'light' : 'dark'
      switchTheme(newTheme)
    })
  })

  initTheme()
}
