import { action } from '@storybook/addon-actions';

import Task from '../components/Task';

export default {
  title: 'Example/Task',
  component: Task,
  argTypes: {
    // onPinTask: {},
    // onArchiveTask: {},
    // task: {
    //   id: '1',
    //   title: 'Test Task',
    //   state: 'TASK_INBOX',
    //   updatedAt: new Date(2018, 0, 1, 9, 0),
    // },
  },
};

// export const actionsData = {
//   onPinTask: action('pin-task'),
//   onArchiveTask: action('archive-task'),
// };

const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  // ...actionsData,
  template: '<Task v-bind="$props" v-on="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    // ...Primary.args.task,
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    // ...Primary.args.task,
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
    state: 'TASK_ARCHIVED',
  },
};