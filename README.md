# React PDF Starter Toolkit in React.js, TypeScript and Webpack

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with React, TypeScript and Webpack. It showcases how React PDF can be integrated and rendered as part of a React.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/pdf-viewer-react/starter-rp-react-ts-webpack.git
   cd starter-rp-react-ts-webpack
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run start
   # or
   yarn start
   # or
   pnpm run start
   # or
   bun run start
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import React from "react";
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPProviderProps,
  RPLayoutProps,
} from "@pdf-viewer/react";

interface Props {
  showToolbar?: boolean;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

export const AppPDFViewer = (props: Props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages/>
        </div>
      )}
    </RPProvider>
  );
};
```

2. **Use the component in the template**: Add the React PDF component to your template section

```tsx
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
```

## Examples

For more examples, please refer to the `src/App.tsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

---

Thank you for using React PDF! We hope this toolkit helps you build amazing React.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
