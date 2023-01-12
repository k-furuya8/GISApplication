import "https://unpkg.com/elm-pep@1.0.6/dist/elm-pep.js";
import {React,useEffect,useState,useRef} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import {Vector as VectorLayer} from 'ol/layer';
import { fromLonLat } from 'ol/proj';
import OSM from "ol/source/OSM";
import './MapApp.css';
import {Vector as VectorSorsce} from 'ol/source';

import Draw from "ol/interaction/Draw";

const MapApp = () => {
  const mapRef = useRef();

  const [map,setMap] = useState(null);

  const [type, setType] = useState("Point");

  const typeRef = useRef(null);

  const raster = new Tile({
    source: new OSM(),
  });
  
  const source = new VectorSorsce({wrapX: false});
  
  const vector = new VectorLayer({
    source: source,
  });

  // on component mount
  useEffect(() => {
    let mapObject = new Map({
      layers: [raster, vector],
      target: "map",
      view: new View({
        center: fromLonLat([139.767, 35.681]),
        zoom: 8,
      }),
    });
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    console.log(mapObject);
    console.log(mapRef);

    

    return () => mapObject.setTarget(undefined);
  }, []);

    

    return (
      <div className={"map"} ref={mapRef}>
        <label>Geometry type: </label>
        <select
          ref={typeRef}
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="Point">Point</option>
          <option value="LineString">LineString</option>
          <option value="Polygon">Polygon</option>
          <option value="Circle">Circle</option>
          <option value="None">None</option>
        </select>
        <label>{type}</label>
        {/* <DrawMap type = {type} olmap = {map} /> */}
      </div>
    );


}




//import './MapApp.css';

// class MapApp extends React.Component {
// 	constructor(props) {
//     super(props);

// 		// Define base layer
//   	this.baseLayer = new Tile({ source: new OSM() });
    
//   	// Define base view
//     this.baseView = new View({
//       center: fromLonLat([37.41, 8.82]),
//       zoom: 4
//     });

// 		// Add map, base view and layer
//     this.map = new Map({
//       layers: [this.baseLayer],
//       view: this.baseView
//     });
//   }
  
// 	static childContextTypes = {
//   	map: PropTypes.object
//   }
  
//   getChildContext() {
//   	return {
//       map: this.map
//     }
//   }
  
//   componentDidMount() {
//     // set map target element
//     this.map.setTarget(this.map);
//   }
	
//   render() {
//   	return (
//     <div ref="map">
//       <DrawMap />
//     </div>
//     );
//   }
// }


export default MapApp;
