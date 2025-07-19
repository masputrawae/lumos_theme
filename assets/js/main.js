import { themeHandler } from './module_internal/switch_theme'
import { offcanvasHandler } from './module_internal/offcanvas'
import { treeHandler } from './module_internal/tree_collapsible'

function main() {
  themeHandler()
  offcanvasHandler()
  treeHandler()
}

document.addEventListener('DOMContentLoaded', main)
