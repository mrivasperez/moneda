import "./App.css";
import NavBar from "../Navigation/NavBar";
import AppLayout from "./AppLayout";

import { AppProvider } from "../AppProvider/AppProvider";
import Settings from "../Pages/Settings/Settings";
import Content from "../Content";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <NavBar />
        <Content>
          <Settings />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
