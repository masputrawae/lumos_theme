export function offcanvasHandler() {
  const buttons = document.querySelectorAll('[data-sidebar]')
  buttons.forEach(btn => {
    const targetId = btn.getAttribute('data-sidebar')
    const targetEL = document.getElementById(targetId)

    btn.addEventListener('click', () => {
      targetEL.classList.toggle('sidebar--isOpen')
    })
  })
}
