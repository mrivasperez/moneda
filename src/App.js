import "./App.css";
import NavBar from "./components/navigation/NavBar";
import AppLayout from "./components/AppLayout";
import Welcome from "./components/Welcome";

function App() {
  return (
    <AppLayout>
      <NavBar />
      <Welcome />
    </AppLayout>
  );
}

export default App;
