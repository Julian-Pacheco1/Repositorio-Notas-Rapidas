const noteText = document.getElementById('noteText');
const addNoteBtn = document.getElementById('addNote');
const notesContainer = document.getElementById('notesContainer');

// Almacenamiento temporal en memoria
let notes = [];

addNoteBtn.addEventListener('click', () => {
  const text = noteText.value.trim();
  if (text === '') return alert('Escribe una nota antes de agregarla.');

  const note = { id: Date.now(), text };
  notes.push(note);

  renderNotes();
  noteText.value = '';
});

function renderNotes() {
  notesContainer.innerHTML = '';

  notes.forEach(note => {
    const div = document.createElement('div');
    div.classList.add('note');
    div.innerHTML = `
      <p>${note.text}</p>
      <button class="delete-btn" onclick="deleteNote(${note.id})">X</button>
    `;
    notesContainer.appendChild(div);
  });
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  renderNotes();
}
