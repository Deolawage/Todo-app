# Todo List

A browser-based Todo List application built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript course.

The project focuses on applying JavaScript fundamentals, object-oriented programming, modular architecture, DOM manipulation, and browser storage to build a functional task management application.

Rather than treating it as just a task tracker, I used this project as an opportunity to strengthen my ability to structure applications, manage state, separate concerns, and translate requirements into working features.

## Features

- **Project Management:** Create, select, and delete projects.
- **Task Management:** Create, view, and delete tasks within individual projects.
- **Task Priorities:** Assign Low, Medium, or High priority to tasks.
- **Due Dates:** Set deadlines for individual tasks.
- **Task Completion:** Mark tasks as completed or incomplete.
- **Task Details:** Select a task to view its description, due date, priority, and completion status.
- **Modal Form:** Create tasks through a popup form with backdrop dismissal and Escape-key support.
- **Persistent Storage:** Save projects, tasks, and selection states using the browser's Local Storage.
- **Empty States:** Provide helpful messages when there are no projects or tasks.
- **Responsive Layout:** Adapt the interface to different screen sizes.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- npm
- Browser Local Storage
- Git and GitHub

## Technical Implementation

Some of the concepts and implementation approaches explored during development include:

- **Object-Oriented Programming:** Used JavaScript classes to represent Todo items, Projects, and the Project Manager.
- **Modular Architecture:** Separated application logic, DOM manipulation, storage, and application control into dedicated modules.
- **State Management:** Centralised application state and coordinated updates through an application controller.
- **DOM Manipulation:** Dynamically created and updated interface elements using JavaScript.
- **Data Persistence:** Implemented a storage layer that serialises application data into JSON and reconstructs class instances when restoring saved data.
- **Webpack:** Configured a development and production build workflow with asset handling and CSS processing.

## What I Learned

This project challenged me to move beyond writing individual JavaScript functions and start thinking about how different parts of an application work together.

Some of my key learning experiences were:

- Understanding how to divide an application into smaller, independent modules.
- Working with classes, object relationships, and application state.
- Separating business logic from DOM manipulation.
- Handling data persistence and reconstructing objects from stored data.
- Managing interactions between the UI and application logic.
- Debugging issues involving module imports, DOM elements, event listeners, and state updates.
- Improving my ability to break down project requirements and implement features incrementally.

One of the biggest lessons was understanding that building an application involves more than making individual features work. Those features must also work together without compromising the overall structure.

## Project Context

This is a learning project from The Odin Project's JavaScript curriculum.

It represents part of my progression from learning JavaScript fundamentals to building more structured, interactive applications independently.

The project is not intended to be a finished commercial product. It is a practical demonstration of concepts learned and implemented throughout my development journey.

## Getting Started

To run the project locally:

1. Clone the repository.
2. Navigate into the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

Refer to `package.json` for available scripts.

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) — For the curriculum, project requirements, and learning resources.
