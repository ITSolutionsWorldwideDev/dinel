// packages\extension\content.js
(() => {
  // Minimal, job-relevant fields only
  const profile = {
    fullName: document.querySelector('[data-anonymize="person-name"]')?.innerText || document.querySelector("h1")?.innerText || null,
    headline: document.querySelector('[data-anonymize="headline"]')?.innerText || document.querySelector(".text-body-medium")?.innerText || null,
    location: document.querySelector(".text-body-small")?.innerText || null,
    profileUrl: window.location.href,
    importedAt: new Date().toISOString(),
    source: "linkedin-extension",
  };

  // Send data to background worker
  chrome.runtime.sendMessage({
    type: "PROFILE_PREVIEW",
    payload: profile,
  });

  /* chrome.runtime.sendMessage({
    type: 'LINKEDIN_PROFILE_EXTRACTED',
    payload: profile
  }); */
})();

/* 

const fullName = document.querySelector('[data-anonymize="person-name"]')?.innerText;
const headline = document.querySelector('[data-anonymize="headline"]')?.innerText;
const name = fullName || document.querySelector("h1")?.innerText || null;

*/
