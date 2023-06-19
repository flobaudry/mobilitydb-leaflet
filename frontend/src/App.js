import './App.css';
import MVTLayer from "./components/MVTLayer";
import GeojsonLayer from "./components/GeojsonLayer";
import "leaflet/dist/leaflet.css";

function App() {
  const db_name = "persona"
  return (
    <div className={'App notransition'}>
      <MVTLayer db_name={db_name}/>
      <GeojsonLayer db_name={db_name}/>
    </div>
  );
}

export default App;
