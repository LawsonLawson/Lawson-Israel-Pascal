const buttons = document.querySelectorAll(".tabs button");
const tabs = document.querySelectorAll(".tab");

// Utility to check if mobile
function isMobile() {
  return window.innerWidth <= 767;
}

// Mobile Layout Restructuring
function applyMobileLayout() {
  if (!isMobile()) return;

  const page = document.querySelector(".page-container");
  const profile = document.querySelector(".profile");
  const techStack = document.querySelector(".tech-stack-container");
  const contactCard = document.querySelector(".contact-sidebar-card");

  const about = document.getElementById("about");
  const projects = document.getElementById("projects");
  const stack = document.getElementById("stack");
  const contact = document.getElementById("contact");
  const contactForm = contact ? contact.querySelector(".contact-form") : null;

  if (!page || !profile || !about || !projects || !techStack || !stack || !contact) return;

  // Clear and rebuild the DOM order for mobile
  page.innerHTML = "";
  
  // Append sections in target order
  page.appendChild(profile);
  page.appendChild(about);
  page.appendChild(projects);
  page.appendChild(techStack);
  page.appendChild(stack);

  // Restructure contact section
  contact.innerHTML = "";
  const fadedLine = document.createElement("div");
  fadedLine.className = "faded-line";
  const contactTitle = document.createElement("h3");
  contactTitle.className = "command";
  contactTitle.innerText = "> echo \"Get in touch\"";
  
  contact.appendChild(contactTitle);
  contact.appendChild(fadedLine);
  if (contactCard) contact.appendChild(contactCard);
  if (contactForm) contact.appendChild(contactForm);
  
  page.appendChild(contact);
}

// Function to switch tabs
function switchTab(tabId) {
  // Guard: Don't switch tabs on mobile as they are all visible
  if (isMobile()) return;

  buttons.forEach(b => b.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  const activeTab = document.getElementById(tabId);

  if (activeBtn && activeTab) {
    activeBtn.classList.add("active");
    activeTab.classList.add("active");
    window.history.replaceState(null, null, `#${tabId}`);
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    switchTab(btn.dataset.tab);
  });
});

// Handle initial load
window.addEventListener("load", () => {
  if (isMobile()) {
    applyMobileLayout();
  } else {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
      switchTab(hash);
    }
  }
});

// Refresh on crossing breakpoint threshold to reset DOM structure
let wasMobile = isMobile();
window.addEventListener("resize", () => {
  if (isMobile() !== wasMobile) {
    location.reload();
  }
});