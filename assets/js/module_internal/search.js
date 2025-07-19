export function modalSearchHandler() {
  const openBtns = document.querySelectorAll('[data-modal="searchBar"]')
  const searchBar = document.getElementById('searchBar')
  const searchInput = searchBar.querySelector('#search-input')
  const closeBtn = searchBar.querySelector('#searchModalClose')

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      searchBar.classList.add('is-active')
      searchInput.focus()
    })
  })

  closeBtn.addEventListener('click', () => {
    searchBar.classList.remove('is-active')
    searchInput.blur()
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchBar.classList.remove('is-active')
      searchInput.blur()
    }
  })
}
