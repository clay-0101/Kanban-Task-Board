# Kanban Task Board

A responsive Kanban board where users can manage tasks across **To Do**, **In Progress** and **Completed** columns. Built as a frontend machine coding round project.

- **Live demo:** https://kanban-board-flax-pi.vercel.app/
- **Demo video:** https://drive.google.com/drive/folders/1j-oq6pPQXTcCTO2zDFU2M7oJQx_fA9AS?usp=sharing


---

## Features

| Feature | Description |
| --- | --- |
| Add task | Title, description, priority and due date |
| Edit / Delete | Update or remove any task from its card |
| Status | Move tasks between the three columns by changing the status |
| Search | Search tasks by title |
| Filter | Filter by priority and status |
| Persistence | Tasks are saved in LocalStorage and survive a page refresh |
| Responsive UI | Sidebar on desktop, slide-in menu on mobile, scrollable columns on small screens |
| UX states | Empty state, no-results state and basic form validation |

## Tech Stack

- **React 19** with **Vite**
- **Redux Toolkit** and **React Redux** for state management
- **React Hook Form** for the task form and validation
- **Tailwind CSS v4** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or newer (latest LTS recommended)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/clay-0101/Kanban-Task-Board.git
cd Kanban-Task-Board
```

No Git? On GitHub click **Code → Download ZIP**, extract it, then open the folder in a terminal.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Other commands

| Command | What it does |
| --- | --- |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project Structure

```
src/
├── app/
│   └── store.js          Redux store
├── slices/
│   ├── taskSlice.js      Tasks state (add, update, delete)
│   └── formSlice.js      Task form open/close and default values
├── hooks/                Custom hooks (sidebar, task form logic)
├── components/
│   ├── layout/           Sidebar, mobile sidebar, top bar, page header
│   └── board/            Board, column, task card, priority badge, task form
├── App.jsx
└── main.jsx
```

## State Management

- All tasks live in a single Redux slice (`taskSlice`) as a flat array. Each task has `id`, `title`, `description`, `priority`, `status` and `dueDate`.
- Columns are not stored separately. Each column shows the tasks whose `status` matches it, so moving a task only means changing its `status`.
- One shared task form is used for both **Add** and **Edit**. `formSlice` controls whether it is open and which task it is editing.
- The task list is saved to LocalStorage so data stays after a refresh.

## Key Decisions

- **Single source of truth:** one tasks array instead of one array per column, which keeps move, filter and search logic simple.
- **Small reusable components:** layout, board and form are split by responsibility, and logic lives in custom hooks to keep components focused on UI.
- **Redux Toolkit:** less boilerplate than plain Redux and safe state updates through Immer.
- **React Hook Form:** simple validation without managing every input by hand.
- **Mobile first:** columns scroll horizontally on small screens and become a three-column grid from tablet size.

## Author

Built by [clay-0101](https://github.com/clay-0101).
