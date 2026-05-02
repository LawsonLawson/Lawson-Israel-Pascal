const buttons = document.querySelectorAll(".tabs button");
const tabs = document.querySelectorAll(".tab");


// Function to switch tabs
function switchTab(tabId) {
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


// Handle page refresh
window.addEventListener("load", () => {
 const hash = window.location.hash.replace("#", "");
 if (hash && document.getElementById(hash)) {
   switchTab(hash);
 }
});
