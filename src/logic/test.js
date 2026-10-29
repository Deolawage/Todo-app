//Testing Logic

import ProjectManager from "./ProjectManager.js";

const manager = new ProjectManager();

// 1. Create two projects
const personal = manager.addProject("Personal");
const school = manager.addProject("School");
console.log("Projects:", manager.projects);
console.log("Selected ID:", manager.selectedProjectId);
console.log("Selected project:", manager.getSelectedProject());
console.log("Personal ID:", personal.id);
console.log("School ID:", school.id);
console.log("Project IDs:", manager.projects.map(project => project.id));
// 2. Check the initially selected project
console.log(manager.getSelectedProject().name);
// Expected: "Personal"

// 3. Select School
manager.selectProject(school.id);
console.log(manager.getSelectedProject().name);
// Expected: "School"

// 4. Try selecting a nonexistent project
manager.selectProject("invalid-id");
console.log(manager.getSelectedProject().name);
// Expected: "School"

// 5. Delete the selected project
manager.deleteProject(school.id);
console.log(manager.getSelectedProject().name);
// Expected: "Personal"

// 6. Delete the remaining project
manager.deleteProject(personal.id);
console.log(manager.getSelectedProject());
// Expected: null