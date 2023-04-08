import classNames from "classnames";

// add hover + onclick styling

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...remainingProps
}) {
  const classes = classNames(
    // "flex items-center",
    // "px-3 py-1.5",
    "border-2",
    // "m-1",
    {
      "border-green-800 bg-green-800": primary,
      "border-gray-900 bg-gray-800": secondary,
      "border-green-600 bg-green-500": success,
      "border-yellow-500 bg-yellow-400": warning,
      "border-red-600 bg-red-500": danger,
      "rounded-3xl": rounded,
      "text-white": !outline,
      "bg-gray-50": outline,
      "text-green-800": outline && primary,
      "text-gray-800": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    },
    className
  );

  return (
    <button className={classes} {...remainingProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    if (
      Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) >
      1
    ) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger must be chosen"
      );
    }
  },
};

export default Button;