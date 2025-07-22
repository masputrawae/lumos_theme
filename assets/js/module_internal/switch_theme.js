export function themeHandler() {
  const KEY_THEME = 'theme'
  const elHtml = document.documentElement
  const buttons = document.querySelectorAll('[data-theme-toggle]')

  const switchTheme = theme => {
    elHtml.dataset.theme = theme
    buttons.forEach(btn => btn.classList.toggle('isDark', theme === 'dark'))
    sessionStorage.setItem(KEY_THEME, theme)
    updateGiscusTheme(theme)
  }

  const updateGiscusTheme = theme => {
    const apply = () => {
      const iframe = document.querySelector('iframe.giscus-frame')
      if (!iframe) return false

      iframe.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: theme === 'dark' ? 'dark' : 'light',
            },
          },
        },
        'https://giscus.app'
      )

      return true
    }
    if (apply()) return
    const interval = setInterval(() => {
      if (apply()) clearInterval(interval)
    }, 1000)
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
