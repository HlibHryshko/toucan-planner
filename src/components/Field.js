import classNames from "classnames";

const Field = ({ password, className, ...props }) => {
  const classes = classNames(
    "border border-green-700 rounded-xl m-1",
    className
  );

  return <input type={password && 'password' }className={classes} {...props} />;
};

export default Field;
