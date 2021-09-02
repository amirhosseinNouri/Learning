"use strict";
/* Validation */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
            console.log(userInput);
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
const projectInput = new ProjectInput('project-input', 'app');
