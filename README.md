React + Vite

This project is built with React and Vite, providing a fast, modern development experience with lightning-fast Hot Module Replacement (HMR), optimized builds, and an efficient development workflow.

Features

- ⚡ Fast development powered by Vite
- ⚛️ Built with React
- 🔥 Instant Hot Module Replacement (HMR)
- 📦 Optimized production builds
- 🧹 Code quality enforced with Oxlint
- 🚀 Easy to extend and customize

Available React Plugins

This template supports two official React plugins:

- "@vitejs/plugin-react" (https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) – Uses Oxc for fast JSX transformation and React Fast Refresh.
- "@vitejs/plugin-react-swc" (https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc) – Uses SWC for high-performance compilation.

Choose the plugin that best fits your project's performance and tooling requirements.

React Compiler

The React Compiler is not enabled by default to maintain faster development and build performance.

If you'd like to enable it, follow the official React documentation:

https://react.dev/learn/react-compiler/installation

Linting

This project uses Oxlint to help maintain clean, consistent, and high-quality code.

For production applications, it is recommended to use TypeScript with type-aware linting. You can refer to the official React + Vite TypeScript template for setup instructions:

https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

Getting Started

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build

Preview the production build locally:

npm run preview