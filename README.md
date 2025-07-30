# Blog Application

A full-stack blog application built with a React frontend and a Node.js/Express backend. Users can create, view, and filter blog posts with image uploads and category-based filtering.

## Features

- **Create Blog Posts**: Write and publish blog posts with images
- **Category Filtering**: Filter posts by categories (Nature, Travel, Technology, Politics)
- **Image Upload**: Upload and display images with blog posts
- **Responsive Design**: Clean, mobile-friendly interface with Tailwind CSS
- **Database Storage**: PostgreSQL database for persistent data storage

## Tech Stack

**Frontend:**
- React 18+ with React Router
- Tailwind CSS for styling
- Axios for API calls
- Date formatting with dateformat library

**Backend:**
- Node.js with Express
- PostgreSQL database
- Multer for file uploads
- CORS enabled

## Installation

### Prerequisites
- Node.js (v14+)
- PostgreSQL database
- npm or yarn

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anexinwilson/blog-app.git
   cd blog-app
   ```

#### Backend Setup

2. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

3. **Install backend dependencies**:
   ```bash
   npm install
   ```

4. **Environment Setup**:
   Create a `.env` file in the `backend` directory:
   ```env
   DB_USER=your_postgres_user
   DB_PASSWORD=your_postgres_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=blog_db
   ```

5. **Database Setup**:
   Create the blogs table in PostgreSQL:
   ```sql
   CREATE TABLE blogs (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     image VARCHAR(255),
     post TEXT NOT NULL,
     category VARCHAR(100),
     createdon TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

6. **Create uploads directory**:
   ```bash
   mkdir uploads
   ```

7. **Start backend server**:
   ```bash
   npm start
   ```
   Server runs on `http://localhost:8000`

#### Frontend Setup

8. **Navigate to frontend directory**:
   ```bash
   cd ../frontend
   ```

9. **Install frontend dependencies**:
   ```bash
   npm install
   ```

10. **Start development server**:
    ```bash
    npm run dev
    ```
    Application runs on `http://localhost:5173`

## Usage

1. **View Blogs**: Home page displays all blog posts in a grid layout
2. **Filter by Category**: Click category links in the navigation to filter posts
3. **Read Full Post**: Click any blog card to read the complete article
4. **Create New Post**: Click "+ New Post" button to create a blog post
5. **Upload Images**: Select an image file when creating a new post

## API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/blog`           | Get all blogs                |
| GET    | `/blog/:category` | Get blogs by category        |
| GET    | `/blog/:id`       | Get single blog by ID        |
| POST   | `/blog`           | Create new blog              |
| POST   | `/blogimage`      | Upload image                 |

## Project Structure

```
blog-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── BlogCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── CreateBlog.jsx
│   │   │   └── Layout.jsx
│   │   ├── api/
│   │   │   └── API.js
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── db/
│   │   └── conn.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
└── README.md
```

## Dependencies

**Frontend:**
- react
- react-router-dom
- axios
- dateformat
- tailwindcss

**Backend:**
- express
- pg (PostgreSQL client)
- multer
- cors
- dotenv
