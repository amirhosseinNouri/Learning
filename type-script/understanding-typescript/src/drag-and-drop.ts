/* AutoBind Decorator */
function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };

  return adjustedDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  root: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor(templateId: string, rootId: string) {
    this.templateElement = document.querySelector(`#${templateId}`)!;
    this.root = document.querySelector(`#${rootId}`)!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInput = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      '#description',
    )! as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      '#people',
    )! as HTMLInputElement;

    this.setupSubmitHandler();
    this.attach();
  }

  private attach() {
    this.root.insertAdjacentElement('afterbegin', this.element);
  }

  private setupSubmitHandler() {
    this.element.addEventListener('submit', this.handleSubmit);
  }

  @autoBind
  private handleSubmit(e: Event) {
    e.preventDefault();
    console.log(this.titleInput.value);
  }
}

const projectInput = new ProjectInput('project-input', 'app');
