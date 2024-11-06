browser.runtime.onMessage.addListener((message) => {
  console.log("popup.js received message", message);
  if (message.action === "showNotes") {
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';
    notesContainer.innerHTML = '<h1>Hello world</h1>';
    message.notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.className = 'note';
      noteElement.textContent = note.title;
      notesContainer.appendChild(noteElement);
    });
  }
});