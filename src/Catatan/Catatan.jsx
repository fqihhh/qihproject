import { useState } from "react";
import "./Catatan.css";

export default function DaftarNama() {
  const [name, setNama] = useState("");
  const [listNama, setListNama] = useState([]);

  function tambahNama() {
    if (name === "") return;
    setListNama([...listNama, name]);
    setNama("");
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setNama(e.target.value)}
        className="input"
      />

      <button onClick={tambahNama} className="button">
        Add Name
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((item, index) => (
            <tr key={index}>
              
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}