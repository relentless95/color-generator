import { useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Color from "./components/Color";

function App() {
  const [colors, setColors] = useState();

  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
}

export default App;
