import data from "./assets/movies_rnexgr.json";
import "./App.css";
import Section from "./components/Section";

const data_section = data[0];
function App() {
  return data.map((data_section) => {
    return (
      <Section
        category={data_section.category}
        images={data_section.images}
        // id={index}
      />
    );
  });
}

export default App;
