import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import ExtensionList from "./components/ExtensionList";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="flex flex-col items-center justify-center ">
      <Header />
      <Navbar filter={filter} setFilter={setFilter} />
      <ExtensionList filter={filter} />
    </main>
  );
}

export default App;
