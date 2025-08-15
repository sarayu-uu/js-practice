# JavaScript Practice Code Examples

This repository serves as a collection of JavaScript code examples, designed for practice and learning various concepts. It includes examples for different categories such as arrays, objects, strings, loops, and more.

The application dynamically loads and displays these code examples along with their corresponding output, making it easy to explore and understand different JavaScript functionalities.

## Features

- **Categorized Examples**: Code snippets are organized into logical categories (e.g., Arrays, Objects, Strings, Loops).
- **Code and Output Display**: Each example shows both the source code and its execution output.
- **Dynamic Updates**: The application automatically detects and includes new JavaScript files and folders added to the `src/examples` directory.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    cd java-script
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server and view the application in your browser:

```bash
npm run dev
# or
yarn dev
```

This command will:
1.  Generate the `src/data.ts` file by processing all JavaScript examples in `src/examples`.
2.  Start the Vite development server.

The application should open in your default browser, typically at `http://localhost:5173`.

### Adding New Examples

You can add new JavaScript code examples by following these steps:

1.  **Create a new category folder** (if it doesn't exist) inside `src/examples/`. For instance, `src/examples/new_category/`.
2.  **Add a new JavaScript file** inside your chosen category folder. For example, `src/examples/new_category/my_concept.js`.
3.  **Write your JavaScript code** in the new `.js` file. Ensure any output you want to display is printed to the console using `console.log()`.
4.  **Restart the development server** (`npm run dev`). The `generate-data.js` script will automatically pick up your new file, execute it to capture its output, and update the application's data.

## Project Structure

```
.
├── public/                 # Static assets
├── scripts/
│   └── generate-data.js    # Script to process examples and generate src/data.ts
├── src/
│   ├── App.tsx             # Main React application component
│   ├── data.ts             # Generated file containing code examples and outputs
│   ├── examples/           # Directory for all JavaScript code examples
│   │   ├── arrays/
│   │   │   └── filter.js
│   │   ├── loops/
│   │   │   └── loopsintro.js
│   │   ├── objects/
│   │   │   └── keys.js
│   │   └── strings/
│   │       └── reverse.js
│   └── ...                 # Other React/Vite related files
├── package.json            # Project dependencies and scripts
├── README.md               # This file
└── ...                     # Other configuration files
```

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite**: A fast build tool that provides a lightning-fast development experience.
-   **Prism.js**: A lightweight, extensible syntax highlighter.
-   **Node.js**: Used for running the data generation script.
