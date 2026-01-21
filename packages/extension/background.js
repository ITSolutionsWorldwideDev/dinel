// packages/extension/background.js
const API_URL = "http://localhost:3002/api/linkedin/import";

async function sendToApi(payload) {
  try {
    const { token, tenantId } = await chrome.storage.local.get([
      "token",
      "tenantId"
    ]);

    if (!token || !tenantId) {
      throw new Error("Not connected");
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Tenant-Id": tenantId,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ profile: payload })
    });

    if (res.status === 401) {
      await chrome.storage.local.clear();
      chrome.notifications.create({
        type: "basic",
        title: "Reconnect required",
        message: "Please reconnect the extension from settings.",
        iconUrl: "icons/icon128.png"
      });
      return;
    }

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Import failed");
    }

    chrome.notifications.create({
      type: "basic",
      title: "Import successful",
      message: "Candidate imported successfully.",
      iconUrl: "icons/icon128.png"
    });

  } catch (err) {
    chrome.notifications.create({
      type: "basic",
      title: "Import error",
      message: err.message,
      iconUrl: "icons/icon128.png"
    });
  }
}

// Listen for profile data from content script
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "LINKEDIN_PROFILE_EXTRACTED") {
    sendToApi(msg.payload);
  }
});

// Listen for pairing from admin app
if (chrome.runtime.onMessageExternal) {
  chrome.runtime.onMessageExternal.addListener(
    (message, sender, sendResponse) => {
      if (message.type === "PAIR_EXTENSION") {
        chrome.storage.local.set({
          token: message.token,
          tenantId: message.tenantId,
          user: message.user
        });
        sendResponse({ success: true });
      }
    }
  );
}


/* async function sendToApi(payload) {
  try {
    const { token, tenantId } = await chrome.storage.local.get([
      "token",
      "tenantId",
    ]);

    if (!token || !tenantId) {
      throw new Error("Not connected");
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Tenant-Id": tenantId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profile: payload }),
    });

    if (res.status === 401) {
      chrome.storage.local.clear();
      chrome.notifications.create({
        type: "basic",
        title: "Reconnect required",
        message: "Please reconnect the extension from settings.",
        iconUrl: "icons/icon128.png",
      });
      return;
    }

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error ?? "Import failed");
    }

    chrome.notifications.create({
      type: "basic",
      title: "Import successful",
      message: "Candidate imported successfully.",
      iconUrl: "icons/icon128.png",
    });
  } catch (err) {
    chrome.notifications.create({
      type: "basic",
      title: "Import error",
      message: err.message,
      iconUrl: "icons/icon128.png",
    });
  }
}

if (chrome.runtime.onMessageExternal) {
  chrome.runtime.onMessageExternal?.addListener(
    (message, sender, sendResponse) => {
      if (message.type === "PAIR_EXTENSION") {
        chrome.storage.local.set({
          token: message.token,
          tenantId: message.tenantId,
          user: message.user
        });
        sendResponse({ success: true });
      }
    }
  );
} */
