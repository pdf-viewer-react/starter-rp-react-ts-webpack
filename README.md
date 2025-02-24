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
   git clone https://github.com/reactpdf/starter-rp-react-ts-webpack.git
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
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import {
  RPDocument,
  RPLayout,
  RPLayoutProps,
  RPViewer,
} from "@pdf-viewer/react";

export const PDFViewer = (props: RPLayoutProps) => (
  <RPDocument src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf">
    <RPLayout {...props}>
      <RPViewer />
    </RPLayout>
  </RPDocument>
);
```

2. **Use the component in the template**: Add the React PDF component to your template section

```tsx
import { RPConfig } from "@pdf-viewer/react";
import "./App.css";
import { PDFViewer } from "./components/PdfViewer";

function App() {
  return (
    <RPConfig>
      <div className="container">
        <PDFViewer />
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
