/**
 * @file Example file for how to use hooks inside functional components.
 *
 * To convert this to JSX, just remove everything related to ExampleProps and
 * then rename the file extension to .jsx.
 */
import React, { useState } from "react";

type ExampleProps = {
  name?: string;
};

const HooksExample = ({ name }: ExampleProps) => {
  const [count, setCount] = useState(0);
  const displayName = name || "Pal";

  return (
    <div className="hooks-example">
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click me, {displayName}!
      </button>
    </div>
  );
};

export default HooksExample;
