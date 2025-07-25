import { themeHandler } from './module_internal/switch_theme'
import { offcanvasHandler } from './module_internal/offcanvas'
import { treeHandler } from './module_internal/tree_collapsible'
import { tocHandler } from './module_internal/toc_highlight'
import { modalSearchHandler } from './module_internal/search'
import { searchHandler } from './module_internal/search'
import { linkPreviewHandler } from './module_internal/link_preview'
function main() {
  themeHandler()
  offcanvasHandler()
  treeHandler()
  tocHandler()
  modalSearchHandler()
  searchHandler()
  linkPreviewHandler()
}

document.addEventListener('DOMContentLoaded', main)
