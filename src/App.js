import "./App.css";
import AppBar from "./components/AppBar";
import AppLayout from "./components/AppLayout";
import Welcome from "./components/Welcome";

function App() {
  return (
    <AppLayout>
      <AppBar />
      <Welcome />
    </AppLayout>
  );
}

export default App;
