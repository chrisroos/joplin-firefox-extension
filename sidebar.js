browser.runtime.onMessage.addListener((message) => {
    if (message.action === "showNotes") {
      const notesContainer = document.getElementById('notes');
      notesContainer.innerHTML = '';
      message.notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';

        const noteTitle = document.createElement('h3');
        noteTitle.textContent = note.title;
        noteElement.appendChild(noteTitle);

        const noteContent = document.createElement('p');
        noteContent.textContent = note.body;
        noteElement.appendChild(noteContent);

        const noteLink = document.createElement('a');
        noteLink.href = `joplin://x-callback-url/openNote?id=${note.id}`;
        noteLink.textContent = 'Open in Joplin';
        noteLink.target = '_blank';
        noteElement.appendChild(noteLink);

        notesContainer.appendChild(noteElement);
      });
    }
  });