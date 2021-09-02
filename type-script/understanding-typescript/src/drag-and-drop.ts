class ProjectInput {
  templateElement: HTMLTemplateElement;
  root: HTMLDivElement;
  element: HTMLFormElement;

  constructor(templateId: string, rootId: string) {
    this.templateElement = document.querySelector(`#${templateId}`)!;
    this.root = document.querySelector(`#${rootId}`)!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';
    this.attach();
  }

  private attach() {
    this.root.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput('project-input', 'app');
