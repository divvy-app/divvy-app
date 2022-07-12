/**
 * @file Example file for how to use hooks inside functional components.
 *
 * This file is just regular JSX, but if you want to convert it to TSX, you just
 * have to:
 * 1. Change the filename extension to .tsx
 * 2. Uncomment all the other code that's currently commented out
 */
import React, { /** FC, */ useState } from "react";

// type Props = {
//   name: string;
// };

const TSTest /** : FC<Props> */ = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="hooks-example">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me, {name}!</button>
    </div>
  );
};

export default TSTest;
