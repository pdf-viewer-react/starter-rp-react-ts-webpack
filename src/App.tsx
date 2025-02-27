import React from "react";
import "./App.css";
import { RPConfig } from "@pdf-viewer/react";
import { AppPDFViewer } from "./components/AppPDFViewer";

function App() {
  return (
    <RPConfig licenseKey="">
      <div className="container">
        <h1>React PDF Starter Toolkit in React.js, Typescript and Webpack</h1>
        <br />
        <h2>Default Toolbar</h2>
        <AppPDFViewer />
        <h2>Without Toolbar</h2>
        <AppPDFViewer
          showToolbar={false}
          defaultLayoutProps={{
            style: { width: "100%", height: "550px" },
          }}
        />
        <h2>Mobile</h2>
        <AppPDFViewer
          defaultLayoutProps={{
            style: { width: "500px" },
          }}
        />
      </div>
    </RPConfig>
  );
}

export default App;
