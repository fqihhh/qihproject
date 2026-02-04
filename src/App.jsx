import Layout from "./Layout/Layout";
import AlertButton from "./button/AlertButton";
import Catatan from "./Catatan/Catatan";
import NoteApp from "./note/NoteApp";

function App() {
  return (
    <Layout>
      {/* <h1>Welcome</h1>
      <p>Ini konten utama aplikasi gue.</p> */}
      <AlertButton text="Alert Button" message="yahhh" />
      <Catatan />
      <NoteApp />
    </Layout>
  );
}

export default App;