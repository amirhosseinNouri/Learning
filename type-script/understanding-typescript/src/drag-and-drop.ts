/* Validation */

type ValidationOptions = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
};

function validate(value: string | number, options: ValidationOptions): Boolean {
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
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      console.log(userInput);
      this.clearInputs();
    }
  }

  private gatherUserInput(): [string, string, number] | void {
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

  private clearInputs() {
    [this.titleInput, this.descriptionInput, this.peopleInput].forEach(
      (input) => (input.value = ''),
    );
  }
}

const projectInput = new ProjectInput('project-input', 'app');
