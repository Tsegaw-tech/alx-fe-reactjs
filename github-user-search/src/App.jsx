import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>GitHub User Search App</h1>

      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onSearch={() => console.log("Search:", username)}
      />
    </div>
  );
}

export default App;
