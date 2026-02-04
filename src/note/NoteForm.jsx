import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [level, setLevel] = useState(1);

    

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLevelChange(e) {
        setLevel(e.target.value);
    }

    function handleClick(e) {
        setText('');
        setName('');
        setLevel(1);
        onAddNote(text, name, level);
    }

    return (<>
    <input placeholder="Add Note" value={text} onChange={handleChange}/>
    <input placeholder="Add Name" value={name} onChange={handleNameChange}/>
    <input type="number" placeholder="Add Level" value={level} onChange={handleLevelChange}/>
    <button onClick={handleClick}>Add</button>
    </>)
}