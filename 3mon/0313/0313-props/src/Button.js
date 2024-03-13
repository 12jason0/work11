const Button = (props) => {
  const { link, children } = props;
  return (
    <a href={link}>
      <button>{children}</button>
    </a>
  );
};

export default Button;
