

# My First Backend Project

A json based storage notes web application for creating, saving, and managing notes.

<img width="1916" height="911" alt="Screenshot 2026-04-24 185801" src="https://github.com/user-attachments/assets/c60b7884-9671-4622-a9a5-c7b1941fa50e" />
<img width="1919" height="904" alt="Screenshot 2026-04-24 185749" src="https://github.com/user-attachments/assets/89e59782-8f84-4d3a-b56f-55cd0ba62de6" />

For full video [click here](https://www.linkedin.com/feed/update/urn:li:activity:7453443049914945536/).


## Key Features

* **Zero Reload Architecture:** The UI stays perfectly synced with the backend using `fetch` API, hence gets realtime updated.
* **Auto Draft Recovery:** Unsaved text and the currently open note are automatically backed up to 'sessionStorage' to survive accidental page refreshes.
* **Custom UI & Animations:** Features a modern general notes app UI.
* **Loca JSON Database:** Lightweight backend storage using Node.js and the Express File System module.

## TechStack

**Frontend:**
* HTML5 & CSS3
* JavaScript (ES6 Modules, Async/Await, DOM Manipulation)
* Web Storage API (`sessionStorage`)

**Backend:**
* Node.js
* Express.js
* EJS (Embeded JavaScript Templating)

---

## Future Updates:
* **SearchBar:** There is currently a searchbar but it doesn't work.
* **Authentication:** After learning JWT Authentication I will apply it.
* **Mongo DB:** Adding MongoDB and replacing the current json structure.

---

## Getting Started

Follow these instructions to get a copy of the projext and running on your local machine.

### Prerequisites
* You need to have [Node.js](https://nodejs.org) installed on your computer.
* And then you can download `nodemon` but not necessary.

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamarthMathur-ai/Note_App.git<img width="1919" height="904" alt="Screenshot 2026-04-24 185749" src="https://github.com/user-attachments/assets/3d1d65a7-020f-4ee2-a194-56dc3c70f798" />
   cd Note_App
   npm install
   node server.js
   # or use nodemon if you have it installed
   # nodemon server.js
   # Navigate to http://localhost:8080

## What I learned
Building this project solidified my understanding of:
* Connecting a frontend UI to a Node.js backend using RESTful routes(`GET`, `POST`, `DELETE`). The videos that I used for referances are following:
   1. For basic API learning: [Youtube Link](https://www.youtube.com/watch?v=GZvSYJDk-us&t=471s).
   2. For routing learning this playlist: [Youtube Link](https://www.youtube.com/watch?v=cJAyEOZQUQY&t=17s).
 
* Using sessionStorage for data persistence across page reloads. (I used ai to learn this).
* Modularizing JavaScript files to keep code clean and maintainable.
   
   
























