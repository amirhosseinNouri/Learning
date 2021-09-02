"use strict";
class ProjectInput {
    constructor(templateId, rootId) {
        this.templateElement = document.querySelector(`#${templateId}`);
        this.root = document.querySelector(`#${rootId}`);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.root.insertAdjacentElement('afterbegin', this.element);
    }
}
const projectInput = new ProjectInput('project-input', 'app');
