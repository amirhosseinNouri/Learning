"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        console.log(this.titleInput.value);
    }
}
__decorate([
    autoBind
], ProjectInput.prototype, "handleSubmit", null);
const projectInput = new ProjectInput('project-input', 'app');
