# 💼 Job Portal — Frontend

A modern, responsive Job Portal built with **React 18** and **Material UI**. Users can browse, search, post, edit, and delete job listings through a clean interface that connects to a Spring Boot REST API backend.

🌐 **Live Demo:** [job-portal-three-lemon.vercel.app](https://job-portal-three-lemon.vercel.app/)
🔗 **Backend Repo:** [JobApplication_Backend](https://github.com/Sathish292004/JobApplication_Backend)

---

## ✨ Features

- 📋 Browse all job postings in a responsive card/list layout
- 🔍 Search jobs by keyword in real time
- ➕ Add new job opportunities via a form
- ✏️ Edit and update existing job details
- 🗑️ Delete job postings
- 🎨 Animated particle background using tsParticles
- 📱 Fully responsive — works on desktop and mobile
- ⚡ Fast REST API integration via Axios

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI framework |
| Material UI (MUI) | 5.15.0 | Component library & styling |
| Emotion | 11.x | MUI styling engine |
| Axios | 1.6.2 | HTTP client for API calls |
| React Router DOM | 6.21.0 | Client-side routing |
| tsParticles | 3.0.2 | Animated particle background |
| react-tsparticles | 2.12.2 | React wrapper for tsParticles |

---

## 📂 Project Structure

```
JobApplication_Frontend/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable React components
│   ├── App.js               # Root component & routes
│   └── index.js             # App entry point
├── db.json                  # Local JSON server data (dev/mock)
├── package.json
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher
- The [backend service](https://github.com/Sathish292004/JobApplication_Backend) running locally or accessible via URL

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sathish292004/JobApplication_Frontend.git

# 2. Navigate into the project
cd JobApplication_Frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at `http://localhost:3000`.

### Available Scripts

| Script | Description |
|---|---|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

---

## 🌐 Backend API Connection

The frontend communicates with the Spring Boot REST API. By default, Axios calls are made to:

```
http://localhost:8080
```

To change the API base URL, update the Axios configuration in your component/service files. The backend must be running for any CRUD operations to work.

**API Endpoints consumed:**

| Method | Endpoint | Action |
|---|---|---|
| GET | `/jobPosts` | Fetch all job postings |
| GET | `/jobPost/{id}` | Fetch a single job by ID |
| GET | `/jobPosts/keyword/{keyword}` | Search jobs by keyword |
| POST | `/jobPost` | Create a new job posting |
| PUT | `/jobPost` | Update an existing job |
| DELETE | `/jobPost/{id}` | Delete a job posting |

---

## 🚀 Deployment

The frontend is deployed on **Vercel**.

To deploy your own instance:

```bash
npm run build
```

Then upload the `/build` folder to Vercel, Netlify, or any static hosting provider. Make sure the backend API URL is correctly set before building.

---

## 👨‍💻 Author

**Sathish Kumar B**

🔗 GitHub: [github.com/Sathish292004](https://github.com/Sathish292004)

---

⭐ If you found this useful, consider giving the repo a star!
