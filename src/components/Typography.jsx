import "../styles/Typography.scss";

function Typography({
  variant = "p",
  children,
  size = "base",
  align = "left",
}) {
  const variants = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

  return (
    <>
      {variants.includes(variant) &&
        variants.map(
          (Item) =>
            Item === variant && (
              <Item
                className={`typography typography__size--${size} typography__align--${align} `}
              >
                {children}
              </Item>
            )
        )}
    </>
  );
}

export default Typography;
