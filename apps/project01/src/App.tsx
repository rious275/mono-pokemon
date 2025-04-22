// apps/project01/src/App.tsx
import { Button } from "@my-org/ui";
import { formatDate } from "@my-org/utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const today = new Date();

  return (
    <>
      <h1>Project 01</h1>
      <p>Today is {formatDate(today)}</p>
      <div className="card">
        <Button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
