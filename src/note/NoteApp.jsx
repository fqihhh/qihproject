  import { useImmerReducer } from "use-immer";
  import NoteForm from "./NoteForm.jsx";
  import NoteList from "./NoteList.jsx";
  import "./NoteApp.css";

  let id = 0;

  const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: false },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn React", done: false },
  ];

  function notesReducer(notes, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return [
          ...notes,
          {
            id: id++,
            text: action.text,
            nama: action.nama,
            level: action.level,
            done:false,
          }
        ];
      case "CHANGE_NOTE":
        return notes.map(note =>
          note.id === action.note.id ? {...note, text:action.note.text,done: action.note.done} : note
        );
      
      case "DELETE_NOTE":
        return notes.filter(note => note.id !== action.note.id);
      default:
        return notes;
    }
  }

  export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer (notesReducer, initialNotes);

    function handleAddNote(text, nama, level) {
      dispatch({ type: "ADD_NOTE", text, nama, level });
    }

    function handleChangeNote(note) {
      dispatch({ type: "CHANGE_NOTE", note });
    }

    function handleDeleteNote(note) {
      dispatch({ type: "DELETE_NOTE", note });
    }

    return (
      <div>
        <h1>Note App</h1>
        <NoteForm onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          onChange={handleChangeNote}
          onDelete={handleDeleteNote}
        />
      </div>
    );
  }