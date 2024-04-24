import VisuallyHidden from "./VisuallyHidden";
import Icon from "../Icon";

export default {
  title: "components/VisuallyHidden",
  component: VisuallyHidden,
};

export const Default = {
  render: () => (
    <div>
      <Icon id="search" />
      <VisuallyHidden>Search</VisuallyHidden>
    </div>
  ),
};
