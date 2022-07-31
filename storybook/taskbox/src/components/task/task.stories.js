import React from 'react';

import Task from './task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args) => <Task {...args} />;

const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
  },
};

const Pinned = Template.bind({});

Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

const Archived = Template.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

export { Default, Pinned, Archived };
