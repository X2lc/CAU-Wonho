const MyComponent = ({ highlighted, theme }) => (
    <div className={classNames("MyComponent", { highlighted }, theme)}>Hello</div>
    <div className={`MyComponent ${theme} ${highlighted ? "highlighted" : ""}`}>
      Hello
    </div>
  );