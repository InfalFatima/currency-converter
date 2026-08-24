# 💱 Currency Converter

A modern, responsive currency converter built with **React.js** that allows users to convert between different currencies using real-time exchange rates fetched from an external API.

## ✨ Features

* 🌍 Convert between multiple currencies
* 💱 Swap source and target currencies
* 📊 Display current exchange rates
* ⚡ Fetch exchange rates dynamically through an API
* 📱 Fully responsive design
* ⏳ Loading state while fetching exchange rates
* ⚠️ Error handling for failed API requests
* 🎨 Clean and modern user interface

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Vite**
* **REST API**
* **React Hooks**

  * `useState`
  * `useEffect`
  * Custom Hooks

## 🔌 API

This project uses the **ExchangeRate-API** to retrieve the latest currency exchange rates.

API endpoint:

```text
https://open.er-api.com/v6/latest/{currency}
```

The selected source currency is dynamically inserted into the endpoint to retrieve the latest available exchange rates.

## 📂 Project Structure

```text
currency-converter/
├── public/
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> The exact project structure may vary depending on the current implementation.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/InfalFatima/currency-converter.git
```

### 2. Navigate to the project directory

```bash
cd currency-converter
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🧠 What I Learned

While building this project, I practiced and improved my understanding of:

* React functional components
* `useState`
* `useEffect`
* Custom React Hooks
* Passing props between components
* Handling user input
* Fetching data from REST APIs
* Working with asynchronous JavaScript
* Conditional rendering
* Loading and error states
* Responsive UI development with Tailwind CSS
* Component reusability
* Managing application state

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

## 🎯 Future Improvements

Some improvements that could be added in the future:

* Add more detailed exchange-rate information
* Add currency search functionality
* Add historical exchange-rate charts
* Add favorite currencies
* Add dark/light theme support
* Improve accessibility
* Add automated testing

## 📸 Screenshots

*Add screenshots of the application here.*

Example:

```text
Desktop View
Mobile View
```

## 🌐 Live Demo

*Add your deployed project link here.*

## 👩‍💻 Author

**Infal Fatima**

GitHub:
https://github.com/InfalFatima

## 📄 License

This project is created for learning and portfolio purposes.
