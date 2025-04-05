function showTab(tabId, event) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active-tab');
}