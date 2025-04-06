function showTab(tabId, event) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));

  // Remove active state from all tabs
  const tabs = document.querySelectorAll('.nav-button');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show the clicked section and set the tab as active
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Collapsible submenu logic
function toggleSubMenu(sectionId) {
  const subMenu = document.getElementById(sectionId);
  subMenu.classList.toggle('active');
}
