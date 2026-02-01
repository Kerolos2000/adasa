# Adasa (عدسة) Clone Template 📸

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**Adasa** is a modern, responsive blog application designed with a premium aesthetic and a focus on Arabic content visualization. Built with the latest web technologies, it provides a seamless reading experience with a polished dark-themed interface.

## ✨ Features

- **🎨 Modern & Responsive Design**: Crafted with Tailwind CSS for a sleek, mobile-first experience that looks great on any device.
- **📝 Dynamic Blog Engine**: Browse through a curated list of articles and dive deep into engaging content with dedicated detail pages.
- **🌙 Premium Dark UI**: A sophisticated dark theme that is easy on the eyes and provides a high-end feel.
- **🔤 Arabic Typography**: Optimized for Arabic readability using the beautiful **Tajawal** font.
- **🧩 Modular Architecture**: scalable component-based structure using Angular's latest features.

## 🛠️ Tech Stack

- **Framework**: [Angular](https://angular.io/) (v20+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Font**: [Tajawal](https://fonts.google.com/specimen/Tajawal)
- **Package Manager**: NPM

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Kerolos2000/adasa.git
    cd adasa
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm start
    ```

    _Or run `ng serve` directly._

4.  **Open in your browser**
    Navigate to `http://localhost:4200/` to view the application. The app will automatically reload if you change any of the source files.

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/      # Shared reusable components
│   ├── core/            # Singleton services and core logic
│   ├── features/        # Feature modules (Home, Blog, etc.)
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── ...
├── assets/              # Static assets (Images, Fonts)
└── styles.css           # Global Tailwind styles
```

## 📜 Scripts

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run commit`: Commits changes using `git-cz`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
