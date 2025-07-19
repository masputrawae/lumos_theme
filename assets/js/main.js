import { themeHandler } from './module_internal/switch_theme'
import { offcanvasHandler } from './module_internal/offcanvas'

function main() {
  themeHandler()
  offcanvasHandler()
}

document.addEventListener('DOMContentLoaded', main)
