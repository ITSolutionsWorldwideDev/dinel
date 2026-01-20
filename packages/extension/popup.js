// packages/extension/popup.js
const consentCheckbox = document.getElementById("consent");
const importBtn = document.getElementById("importBtn");
// const statusEl = document.getElementById('status');

const statusEl = document.getElementById("connectionStatus");

chrome.storage.local.get(["token", "tenantId"], (result) => {
  if (!result.token || !result.tenantId) {
    statusEl.textContent = "Not connected";
    statusEl.style.color = "red";
    importBtn.disabled = true;
  } else {
    statusEl.textContent = "Connected";
    statusEl.style.color = "green";
    importBtn.disabled = false;
  }
});

// chrome.runtime.onMessage.addListener((msg) => {
//   if (msg.type === "PROFILE_PREVIEW") {
//     document.getElementById("preview").innerText =
//       JSON.stringify(msg.payload, null, 2);
//   }
// });

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "PROFILE_PREVIEW") {
    document.getElementById("preview").textContent =
      JSON.stringify(msg.payload, null, 2);
  }
});

const checkRes = await fetch(`${API_URL}/check`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "X-Tenant-Id": tenantId,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ linkedinUrl: profile.profileUrl })
});

const check = await checkRes.json();

if (check.exists) {
  statusEl.textContent = "Profile already exists – will update.";
}




/* ===========================    */

consentCheckbox.addEventListener("change", () => {
  importBtn.disabled = !consentCheckbox.checked;
});

importBtn.addEventListener("click", async () => {
  statusEl.textContent = "Reading profile…";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab.url.includes("linkedin.com")) {
    statusEl.textContent = "Please open a LinkedIn profile.";
    return;
  }

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ["content.js"],
    },
    () => {
      statusEl.textContent = "Profile imported.";
    }
  );
});
