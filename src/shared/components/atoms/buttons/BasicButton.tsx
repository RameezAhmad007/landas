import type { BasicButtonProps } from "../../../types/buttonTypes";
import classNameMerge from "../../../utils/classNameMerge";

const BasicButton = ({
  className = "",
  style = {},
  children = "",
  isDisabled = false,
  type = "button",
  title = "",
  childenClassName = "",
  onClick = () => {},
}: BasicButtonProps) => {
  return (
    <button
      className={classNameMerge([className])}
      style={{
        ...style,
      }}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      title={title}
    >
      <span className={classNameMerge([childenClassName])}>{children}</span>
    </button>
  );
};

export default BasicButton;
