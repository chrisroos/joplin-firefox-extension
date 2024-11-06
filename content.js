browser.runtime.sendMessage({ action: "fetchNotes", url: window.location.href }, response => {
  if (response.error) {
    console.error(response.error);
  } else {
    browser.runtime.sendMessage({ action: "showNotes", notes: response.notes });
  }
});