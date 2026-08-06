⚛️ React + Vite

A modern React application powered by Vite, delivering an exceptional developer experience with blazing-fast startup times, instant Hot Module Replacement (HMR), and highly optimized production builds.

---

✨ Overview

This project uses React for building interactive user interfaces and Vite as the next-generation frontend tooling. Together, they provide a fast, lightweight, and efficient development workflow.

Key Benefits

- ⚡ Lightning-fast development server
- 🔥 Instant Hot Module Replacement (HMR)
- 📦 Optimized production builds
- 🧹 Code quality with Oxlint
- 🏗️ Modern ES Modules support
- 🚀 Easy configuration and scalability
- 🎯 Excellent developer experience

---

📁 Project Structure

project/
├── public/          # Static assets
├── src/             # Application source code
├── index.html       # Application entry point
├── package.json     # Project metadata & dependencies
├── vite.config.js   # Vite configuration
└── README.md

---

⚙️ React Plugins

Vite officially supports two React plugins:

"@vitejs/plugin-react"

- Uses Oxc for fast JSX transformation
- Supports React Fast Refresh
- Recommended for most React applications

"@vitejs/plugin-react-swc"

- Uses the SWC compiler
- Extremely fast compilation
- Great choice for larger projects and faster builds

Choose the plugin that best matches your project's performance and tooling requirements.

---

🧠 React Compiler

The React Compiler is intentionally disabled in this template to preserve optimal development and build performance.

If your project requires it, you can enable the compiler by following the official React documentation:

https://react.dev/learn/react-compiler/installation

---

🧹 Linting

This template includes Oxlint to help maintain clean, consistent, and high-quality code.

For production-grade applications, using TypeScript with type-aware linting is highly recommended. You can refer to the official React + Vite TypeScript template for guidance:

https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

---

🚀 Getting Started

Install dependencies

npm install

Start the development server

npm run dev

The application will be available at:

http://localhost:5173

Build for production

npm run build

Preview the production build

npm run preview

---

📚 Learn More

- React — https://react.dev
- Vite — https://vitejs.dev
- Oxc — https://oxc.rs
- SWC — https://swc.rs

---

🤝 Contributing

Contributions, issues, and feature requests are always welcome.

If you discover a bug or have an idea for improvement, feel free to open an issue or submit a pull request.

---

📄 License

This project is licensed under the MIT License.