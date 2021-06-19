import { action } from '@storybook/addon-actions';

import Task from '../components/Task';

export default {
  title: 'Example/Task',
  component: Task,
  // argTypes: {

  //   // onPinTask: action('pin-task'),
  //   // onArchiveTask: action('archive-task'),
  //   // onPinTask: {},
  //   // onArchiveTask: {},

  // },
};



const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  template: '<Task v-bind="$props" v-on="$props"/>',
  // methods: {
  //   onPinTask: action('pin-task'),
  //   onArchiveTask: action('archive-task'),
  // }
});

export const Primary = Template.bind({});
Primary.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  pinTask: action('pin-task'),
  archiveTask: action('archive-task'),
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Primary.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Primary.args.task,
    state: 'TASK_ARCHIVED',
  },
};