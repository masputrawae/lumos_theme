function updateGiscusThemeFromStorage() {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return

  const storageTheme = sessionStorage.getItem('theme') || 'light'

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: storageTheme === 'dark' ? 'dark' : 'light',
        },
      },
    },
    'https://giscus.app'
  )
}

export function themeHandler() {
  const KEY_THEME = 'theme'
  const elHtml = document.documentElement
  const buttons = document.querySelectorAll('[data-theme-toggle]')

  const switchTheme = theme => {
    elHtml.dataset.theme = theme
    buttons.forEach(btn => btn.classList.toggle('isDark', theme === 'dark'))
    sessionStorage.setItem(KEY_THEME, theme)
    updateGiscusThemeFromStorage()
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

    switchTheme(storageTheme || themeSystem)
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const storageTheme = sessionStorage.getItem(KEY_THEME)
      const newTheme = storageTheme === 'dark' ? 'light' : 'dark'
      switchTheme(newTheme)
    })
  })

  initTheme()
  window.addEventListener('load', () => {
    setTimeout(updateGiscusThemeFromStorage, 500)
  })
}
