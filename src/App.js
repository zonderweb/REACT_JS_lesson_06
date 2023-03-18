import "./App.css";
import Test1 from "./Test1";

function App() {
  return (
    <>
      <div className="title">
        <h1>SPRINT 06. Жизненный цикл компонентов в Реакт</h1>
      </div>
      <div className="container">
        <Test1 arg={77} />
      </div>
    </>
  );
}

export default App;
