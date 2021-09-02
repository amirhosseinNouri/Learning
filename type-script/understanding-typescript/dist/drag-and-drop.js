"use strict";
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
        this.element.addEventListener('submit', this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.titleInput.value);
    }
}
const projectInput = new ProjectInput('project-input', 'app');
