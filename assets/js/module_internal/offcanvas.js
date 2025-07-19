export function offcanvasHandler(){
  const buttons = document.querySelectorAll('[data-sidebar]');
  const overlay = document.getElementById('overlay');
  buttons.forEach(btn => {
    const targetId = btn.getAttribute('data-sidebar');
    const targetEL = document.getElementById(targetId);

    btn.addEventListener('click', ()=>{
      targetEL.classList.toggle('sidebar--isOpen');
      overlay.classList.toggle('overlay--isActive');
    })
    
    overlay.addEventListener('click', ()=>{
      targetEL.classList.remove('sidebar--isOpen');
      overlay.classList.remove('overlay--isActive');
    })
  })
}