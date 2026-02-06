import { useImmerReducer } from "use-immer";
import { AContext } from "./AContext";
import AForm from "./AForm";
import ATable from "./Atable";
import "./AApp.css";

let id = 1;

const initialStudents = [];

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push({
        id: id++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas,
      });
      break;

    case "DELETE_STUDENT":
      const deleteIndex = draft.findIndex(s => s.id === action.id);
      if (deleteIndex !== -1) {
        draft.splice(deleteIndex, 1);
      }
      break;

    case "UPDATE_STUDENT":
      const index = draft.findIndex(s => s.id === action.student.id);
      if (index !== -1) {
        draft[index] = action.student;
      }
      break;

    default:
      break;
  }
}

export default function AApp() {
  const [students, dispatch] = useImmerReducer(
    studentReducer,
    initialStudents
  );

  return (
    <AContext.Provider value={{ students, dispatch }}>
      <h1>Data Siswa</h1>
      <AForm />
      <ATable />
    </AContext.Provider>
  );
}