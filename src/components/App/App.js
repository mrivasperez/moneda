import "./App.css";
import NavBar from "../Navigation/NavBar";
import AppLayout from "./AppLayout";

import { AppProvider } from "../AppProvider/AppProvider";
import Settings from "../Pages/Settings/Settings";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <NavBar />
        <Settings />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
