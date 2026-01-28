import Layout from "./Layout/Layout";
import AlertButton from "./button/AlertButton";

function App() {
  return (
    <Layout>
      {/* <h1>Welcome</h1>
      <p>Ini konten utama aplikasi gue.</p> */}
      <AlertButton text="Alert Button" message="Ini pesan alert" />
    </Layout>
  );
}

export default App;