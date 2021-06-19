import { action } from '@storybook/addon-actions'

import MyButton from '../components/Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  onClick: action('click-primary'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  onClick: action('click-secondary'),
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  // onClick: action('click'),
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  // onClick: action('click'),
};
