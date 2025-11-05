## About
This is a personal running blog built with Next.js as part of my goal to strengthen my skills in modern full-stack web development.
The project simulates a real-world content site, where new posts are expected to be published regularly. To support this, I built a custom SQLite schema to store blog posts and content blocks. This lays the groundwork for a future Content Management System (CMS) so blog posts can be created without touching the codebase.

The goal of this project is to:
- Learn and apply Next.js best practices
- Build a dynamic and scalable content platform
- Gain experience with database integration & content workflows
- Demonstrate skills relevant to industry projects & client-driven requirements

This is a learning project and will continue to evolve as I improve performance, content workflows, and eventually add a CMS interface.

## Tech Stack
- Next.js
- React
- Javascript
- Tailwind CSS
- SQLite (custom schema)
- Vercel (deployment & hosting)

## Database structure
Blog data is stored in a custom SQLite schema with two tables: one for post metadata and one for content blocks (headings, images, text).


Posts table: Stores metadata for each blog entry.
-- Table: posts
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  front_image TEXT NOT NULL,
  tags TEXT,
  description TEXT
);


Content table: Stores individual content blocks for each post.
-- Table: content
CREATE TABLE content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Headline', 'Image', 'Text')),
  content TEXT,
  image_description TEXT,
  image_alt TEXT,
  sequence_number INTEGER NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);


## Roadmap
# Completed
- Built blog UI & page structure
- Designed and implemented SQLite database schema
- Fetched and rendered blog content dynamically
- Deployed on Vercel

# To Do
- Build CMS interface for creating posts


## Getting Started
First, run the development server inside the folder:
cd pnpblog
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


