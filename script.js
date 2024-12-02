document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        // Remove 'active' class from all tabs and contents
        tabs.forEach((t) => t.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));
  
        // Add 'active' class to clicked tab and corresponding content
        this.classList.add('active');
        const target = document.getElementById(this.dataset.tab);
        if (target) {
          target.classList.add('active');
        }
      });
    });
  });

// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Function to switch tabs
    function switchTab(tabId) {
      // Remove 'active' class from all tabs and content
      tabs.forEach(tab => tab.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  
      // Add 'active' class to the clicked tab and corresponding content
      const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
      const activeContent = document.getElementById(tabId);
  
      activeTab.classList.add('active');
      activeContent.classList.add('active');
    }
  
    // Event listeners for each tab button
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
  });
