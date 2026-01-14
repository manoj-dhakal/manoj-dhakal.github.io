function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  document.getElementById(pageId).classList.add('active');

  // Update button "active" state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    // Match button text to pageId
    if(btn.innerText.toLowerCase().includes(pageId)) {
      btn.classList.add('active');
    }
  });
}