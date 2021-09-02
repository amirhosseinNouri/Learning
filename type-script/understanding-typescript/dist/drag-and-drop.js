"use strict";
/* Project State Management */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    addProject(title, description, people) {
        const newProject = new Project(Math.random().toString(), title, description, people, ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listener of this.listeners) {
            listener(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();
function validate(value, options) {
    let isValid = true;
    const { min, max, minLength, maxLength, required } = options;
    if (required) {
        isValid = isValid && value.toString().trim().length !== 0;
    }
    if (minLength != null && typeof value === 'string') {
        isValid = isValid && value.trim().length > minLength;
    }
    if (maxLength != null && typeof value === 'string') {
        isValid = isValid && value.trim().length < maxLength;
    }
    if (min !== null && min !== undefined && typeof value === 'number') {
        isValid = isValid && value > min;
    }
    if (max !== null && max !== undefined && typeof value === 'number') {
        isValid = isValid && value < max;
    }
    return isValid;
}
/* AutoBind Decorator */
function autoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjustedDescriptor;
}
class ProjectInput {
    constructor(templateId, rootId) {
        this.templateElement = document.querySelector(`#${templateId}`);
        this.root = document.querySelector(`#${rootId}`);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        this.setupSubmitHandler();
        this.attach();
    }
    attach() {
        this.root.insertAdjacentElement('afterbegin', this.element);
    }
    setupSubmitHandler() {
        this.element.addEventListener('submit', this.handleSubmit);
    }
    handleSubmit(e) {
        e.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
    gatherUserInput() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const people = this.peopleInput.value;
        const isTitleValid = validate(title, { required: true });
        const isDescriptionValid = validate(description, {
            required: true,
            minLength: 5,
        });
        const isPeopleValid = validate(people, { min: 1, max: 5, required: true });
        if (!isTitleValid || !isDescriptionValid || !isPeopleValid) {
            alert('Invalid input. Please try again.');
            return;
        }
        return [title, description, Number(people)];
    }
    clearInputs() {
        [this.titleInput, this.descriptionInput, this.peopleInput].forEach((input) => (input.value = ''));
    }
}
__decorate([
    autoBind
], ProjectInput.prototype, "handleSubmit", null);
class ProjectList {
    constructor(templateId, rootId, type) {
        this.type = type;
        this.templateElement = document.querySelector(`#${templateId}`);
        this.root = document.querySelector(`#${rootId}`);
        this.assignedProjects = [];
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${type}-projects`;
        projectState.addListener((projects) => {
            const filteredProjects = projects.filter((project) => {
                if (this.type === 'active') {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            });
            this.assignedProjects = filteredProjects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listElement = document.getElementById(`${this.type}-projects-list`);
        listElement.innerHTML = '';
        for (const project of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = project.title;
            listElement.appendChild(listItem);
        }
    }
    attach() {
        this.root.insertAdjacentElement('beforeend', this.element);
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent =
            this.type.toString().toUpperCase() + ' PROJECTS';
    }
}
const projectInput = new ProjectInput('project-input', 'app');
const activeProjectList = new ProjectList('project-list', 'app', 'active');
const finishedProjectList = new ProjectList('project-list', 'app', 'finished');
