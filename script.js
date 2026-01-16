function showPage(pageId) {
  // 1. Hide all sections
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    // Force opacity to 0 for a cleaner transition if you have CSS transitions
    page.style.display = 'none'; 
  });

  // 2. Show the target section
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = 'flex'; // Use flex to maintain our centering
    // Small timeout allows the display:flex to register so the CSS opacity transition works
    setTimeout(() => {
      activePage.classList.add('active');
    }, 10);
  }

  // 3. Update Nav Button "active" styling
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    
    const btnText = btn.innerText.toLowerCase();
    
    // Logic: If page is 'intro', highlight 'home'. Otherwise, match the text.
    if (pageId === 'intro' && btnText.includes('home')) {
      btn.classList.add('active');
    } else if (btnText.includes(pageId)) {
      btn.classList.add('active');
    }
  });

  // 4. Mobile UX: Always scroll to top when changing pages
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}