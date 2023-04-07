import { Header } from "./components/Header";
import { Controls } from "./components/Controls";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Controls />
      </Main>
    </div>
  );
}

export default App;
