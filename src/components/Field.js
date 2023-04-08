import classNames from "classnames";

const Field = ({className, ...props}) => {
  const classes = classNames('border border-green-700 rounded-xl m-1', className)

  return <input className={classes} {...props} />;
};

export default Field;
