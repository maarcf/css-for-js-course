import IconInput from "./IconInput";

export default {
  title: "components/IconInput",
  component: IconInput,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["search", "at-sign"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "large"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = args => <IconInput {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
Medium.args = {
  placeholder: "Search…",
  label: "Search",
  icon: "search",
  size: "medium",
};
export const Large = Template.bind({});
Large.args = {
  placeholder: "Search…",
  label: "Search",
  icon: "search",
  size: "large",
};
