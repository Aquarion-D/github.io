// Function to handle tab switching
function showTab(tabId, event) {
  // Get all content sections
  const contentSections = document.querySelectorAll('.content-section');
  
  // Get all tab buttons
  const tabs = document.querySelectorAll('.tab');
  
  // Hide all sections
  contentSections.forEach(section => {
      section.classList.remove('active');
  });
  
  // Deactivate all tabs
  tabs.forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
  });

  // Show the selected section and activate the corresponding tab
  document.getElementById(tabId).classList.add('active');
  event.target.setAttribute('aria-selected', 'true');
}

// Get all nav buttons
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', (event) => {
      const section = event.target.getAttribute('data-section');
      showTab(section, event);
  });
});
