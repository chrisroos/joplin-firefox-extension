browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchNotes") {
      browser.storage.local.get('joplinToken', (data) => {
        const JOPLIN_API_TOKEN = data.joplinToken;
        if (!JOPLIN_API_TOKEN) {
          sendResponse({ error: 'Joplin API token is not set.' });
          return;
        }
        const searchUrl = `http://localhost:41184/search?query=${encodeURIComponent(message.url)}&token=${JOPLIN_API_TOKEN}`;
        fetch(searchUrl)
          .then(response => response.json())
          .then(data => {
            const notePromises = data.items.map(note => {
              const noteUrl = `http://localhost:41184/notes/${note.id}?fields=id,title,body&token=${JOPLIN_API_TOKEN}`;
              return fetch(noteUrl).then(response => response.json());
            });
            return Promise.all(notePromises);
          })
          .then(notes => sendResponse({ notes }))
          .catch(error => sendResponse({ error: error.message }));
      });
      return true; // Keep the message channel open for sendResponse
    }
  });