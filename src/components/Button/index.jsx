import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded", square: "rounded-none" };
const variants = {
  outline: {
    red_700: "border border-red-700 border-solid text-red-700",
    white_A700: "border border-solid border-white-A700 text-white-A700",
    blue_gray_100: "border-blue_gray-100 border-solid border-t text-indigo-800",
    blue_gray_101: "border-indigo-800 border-solid border-2 text-indigo-800",
  },
  fill: {
    red_50: "bg-red-50 text-red-700",
    deep_purple_A700_14: "bg-deep_purple-A700_14",
    indigo_800: "bg-indigo-800 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = {
  xs: "p-2",
  sm: "p-3",
  md: "p-[22px] sm:px-5",
  lg: "p-8 sm:px-5",
  xl: "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "red_700",
    "white_A700",
    "blue_gray_100",
    "red_50",
    "deep_purple_A700_14",
    "indigo_800",
  ]),
};

export { Button };
