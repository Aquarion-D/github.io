function showTab(tabId, event) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));

  // Remove active state from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show the clicked section and set the tab as active
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function toggleSubMenu(sectionId) {
  const subMenu = document.getElementById(sectionId);
  
  if (subMenu.classList.contains('active')) {
    subMenu.classList.remove('active');
  } else {
    subMenu.classList.add('active');
  }
}
