import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PlayersList from "./components/Players/PlayersList";
import N from "./layouts/N";
import Carous from "./components/Ca/Carous";
import Toste from "./components/Une/Toste";

function App() {
  return (
    <>
      <N />
      <br />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "-47px",
        }}
      >
        FOOTBALL
      </h1>
      <Carous />
      <Toste />
      <PlayersList />
    </>
  );
}

export default App;
