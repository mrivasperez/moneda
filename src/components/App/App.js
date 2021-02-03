import "./App.css";
import NavBar from "../Navigation/NavBar";
import AppLayout from "./AppLayout";
import Welcome from "../Welcome";
import { AppProvider } from "../AppProvider/AppProvider";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <NavBar />
        <Welcome />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
