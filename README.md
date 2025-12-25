# Hi, I'm Adithya R Kulkarni 👋

### 🚀 Student | MERN Developer | UI/UX Enthusiast

I am a passionate builder driven by the challenge of solving problems through code. While my roots are in **C++** and **Java**, my playground is the **MERN Stack**, where I focus on creating seamless user experiences with a sharp eye for **UI/UX**.

- 🔭 **Currently:** Diving deep into AI integration and advanced React patterns.

- 💡 **Passion:** Finding "cool stuff" to build that pushes the boundaries of what I know.

- 🛠️ **Philosophy:** "Building things that work. Fixing things that don't."

---

### 🛠️ My Tech Toolbox

| Category | Tools & Languages |
| :--- | :--- |
| **Languages** | `C++`, `Java`, `JavaScript (ES6+)` |
| **Frontend** | `React.js`, `Redux`, `Tailwind CSS`, `UI/UX Design` |
| **Backend** | `Node.js`, `Express.js`, `MongoDB` |
| **Currently Exploring** | `AI/ML Frameworks`, `Next.js` |

---

### 📂 What I'm working on

*Check out my pinned repositories to see my latest experiments in:*

* **MERN Applications:** Full-stack solutions with clean architecture.

* **Algorithm Challenges:** Solving complex problems in C++ and Java.

* **Design-to-Code:** Turning high-fidelity UI/UX concepts into functional reality.

---

### 🎧 Beyond the Code

When the screen is off and the IDE is closed, you'll find me:

* 🎵 Lost in **music** (my primary fuel for creativity).

* 🧠 Researching new tech trends and AI breakthroughs.

* 🤝 Looking for collaborative projects to ignite my passion.

**Let's build something cool together!**

📫 [Email Me](mailto:your-email@example.com) | 🔗 [LinkedIn](https://linkedin.com/in/your-profile)

# Portfolio Website - MERN Stack

A full-featured portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows you to showcase both technical and non-technical projects with an admin panel for easy management.

## Features

- **Frontend**: React with responsive design
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Admin Panel**: Easy project management interface
- **CRUD Operations**: Create, Read, Update, Delete projects
- **Filtering**: Filter projects by category and type
- **Responsive Design**: Works on all device sizes

## Project Structure

```
portfolio-website/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── hooks/
    │   └── ...
    └── ...
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and go to `http://localhost:5173` for the frontend
2. Access the admin panel at `http://localhost:5173/admin`
3. Use the admin panel to add, edit, and delete projects
4. View all projects at `http://localhost:5173/projects`

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects (with optional query parameters: category, projectType, featured)
- `GET /api/projects/:id` - Get a specific project by ID
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

## Deployment

### Backend Deployment

1. Set environment variables:
   - `NODE_ENV`: production
   - `PORT`: Port number (e.g., 5000)
   - `MONGODB_URI`: MongoDB connection string

2. Build and start the server:
   ```bash
   npm start
   ```

### Frontend Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.)

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Styling**: CSS3 with custom properties
- **Development**: Vite (frontend), Nodemon (backend)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.