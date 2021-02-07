import "./App.css";
import NavBar from "../Navigation/NavBar";
import AppLayout from "./AppLayout";

import { AppProvider } from "../AppProvider/AppProvider";
import Settings from "../Pages/Settings/Settings";
import Content from "../Content";
import Dashboard from "../Pages/Dashboard/Dashboard";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <NavBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
