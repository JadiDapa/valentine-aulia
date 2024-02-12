import { useContext } from "react";
import Envelope from "./component/Envelope";
import First from "./section/First";
import { ViewContext } from "./context/ViewContext";
import Second from "./section/Second";
import Third from "./section/Third";

const App = () => {
  const { view } = useContext(ViewContext) ?? { view: "envelope" };

  return (
    <div className="overflow-hidden h-screen">
      {view === "envelope" && <Envelope />}
      {view === "first" && <First />}
      {view === "second" && <Second />}
      {view === "third" && <Third />}
    </div>
  );
};

export default App;
