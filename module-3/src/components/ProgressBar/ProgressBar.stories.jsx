import ProgressBar from "./ProgressBar";

export default {
  title: "components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 100 },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: {
    size: "small",
    value: 50,
  },
};

const Template = args => <ProgressBar {...args} />;

export const Small = Template.bind({});
export const Medium = {
  args: {
    size: "medium",
    value: 80,
  },
};
export const Large = {
  args: {
    size: "large",
    value: 100,
  },
};
