import './App.css';
import "https://unpkg.com/elm-pep@1.0.6/dist/elm-pep.js";
import React from 'react';
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import Tile from 'ol/layer/Tile';
// import Vector from 'ol/layer/Vector';
// import { fromLonLat } from 'ol/proj';
// import Stroke from 'ol/style/Stroke';
// import interaction from 'ol/interaction';
// import Draw from 'ol/interaction/Draw';
// import Source from 'ol/source';
// import OSM from "ol/source/OSM";
// import Style from 'ol/style/Style';
// import Circle from 'ol/style/Circle';
// import Fill from 'ol/style/Fill';

import MapApp from "./Map/MapApp";

const App = () => {
  return(
    <div>
      <label>aaa</label>
      <MapApp />
      
    </div>
   );
}



// class Polygon extends React.Component {
//   static contextTypes = {
//     map: PropTypes.object
//   }

//   componentDidMount() {
//   	const source = new Vector({wrapX: false});
//     this.polygonBase = new Vector({ source });
//     this.context.map.addLayer(this.polygonBase);
		
// 		const styleFunction = feature => {
//       var geometry = feature.getGeometry();
//       console.log('geometry', geometry.getType());
//       if (geometry.getType() === 'LineString') {
//         var styles = [
//           new Style({
//             stroke: new Stroke({
//               color: 'rgba(255, 102, 0, 1)',
//               width: 3
//             })
//           })
//         ];
//         return styles;
//       }
// 			if (geometry.getType() === 'Point') {
//         var styles = [
//           new Style({
// 						image: new Circle({
//       	    	radius: 5,
//       	    	stroke: new Stroke({ color: 'rgba(255, 0, 0, 1)' }),
//       	    	fill: new Fill({ color: 'rgba(255, 0, 0, 0.5)' })
// 						})
//           })
//         ];
//         return styles;
//       }
//       if (geometry.getType() === 'Polygon') {
//         var styles = [
//           new Style({
//             stroke: new Stroke({
//               color: 'rgba(255, 102, 0, 0)',
//               width: 3
//             }),
//             fill: new Fill({
//               color: 'rgba(255, 102, 0, 0.3)'
//             })
//           })
//         ];
//         return styles;
//       }
//       return false;
//     };
    
//     // Define the polygon draw interaction
//     this.draw = new Draw({
//       source: source,
//       type: 'Polygon',
// 			style: styleFunction
//     });
//     // Add the draw interaction
//     this.context.map.addInteraction(this.draw);
		
// 		this.draw.on('drawstart', event => {
// 			this.polygonFirstCoordinate = event.feature.getGeometry().getFirstCoordinate();
// 		});
//   }

//   componentWillUnmount () {
//     this.context.map.removeInteraction(this.draw);
//   }

//   render() { return <p>Drawing polygon</p>; }
// }



// import React from "react"

// import MapPane from "./Map/MapPane";
// import TypeSelect from './TypeSelect'


//  const App = () =>{
//   return (
//   <div>
//     <MapPane />
//     <TypeSelect />

//   </div>
//   );
// }

export default App;
