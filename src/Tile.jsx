export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-20 w-20 bg-blue-300 text-center rounded-lg"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-20 w-20 bg-blue-500 rounded-lg">
          <Content
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              height: "80%",
              margin: "5 auto ",
              color: "white"
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-20 w-20 text-blue-200">
          <Content
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              height: "80%",
              margin: "5 auto ",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
