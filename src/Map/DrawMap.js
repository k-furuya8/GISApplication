import "https://unpkg.com/elm-pep@1.0.6/dist/elm-pep.js";
import {React,useEffect } from "react";
import Draw from "ol/interaction/Draw";
import {Vector as VectorSorsce} from 'ol/source';

const DrawMap = ({ type, olmap }) => {

  let draw;
  const source = new VectorSorsce({ wrapX: false });
  //this.polygonBase = new Vector({ source });
  function addInteraction() {
    if (type !== "None") {
      draw = new Draw({
        Source: source,
        type: type,
      });
      olmap.addInteraction(draw);
    }
  }

  useEffect(() =>{
    olmap.removeInteraction(draw);
    addInteraction();
  },[type])

  return (
    <div>
      <label>aaa</label>
    </div>
  );
};




// class DrawMap extends React.Component {
//     static contextTypes = {
//       map: PropTypes.object
//     }

//     componentDidMount() {
//         const source = new Vector({wrapX: false});
//       this.polygonBase = new Vector({ source });
//       this.context.map.addLayer(this.polygonBase);

//           const styleFunction = feature => {
//         var geometry = feature.getGeometry();
//         console.log('geometry', geometry.getType());
//         if (geometry.getType() === 'LineString') {
//           var styles = [
//             new Style({
//               stroke: new Stroke({
//                 color: 'rgba(255, 102, 0, 1)',
//                 width: 3
//               })
//             })
//           ];
//           return styles;
//         }
//               if (geometry.getType() === 'Point') {
//           var styles = [
//             new Style({
//                           image: new Circle({
//                     radius: 5,
//                     stroke: new Stroke({ color: 'rgba(255, 0, 0, 1)' }),
//                     fill: new Fill({ color: 'rgba(255, 0, 0, 0.5)' })
//                           })
//             })
//           ];
//           return styles;
//         }
//         if (geometry.getType() === 'Polygon') {
//           var styles = [
//             new Style({
//               stroke: new Stroke({
//                 color: 'rgba(255, 102, 0, 0)',
//                 width: 3
//               }),
//               fill: new Fill({
//                 color: 'rgba(255, 102, 0, 0.3)'
//               })
//             })
//           ];
//           return styles;
//         }
//         return false;
//       };

//       // Define the polygon draw interaction
//       this.draw = new Draw({
//         source: source,
//         type: 'Polygon',
//               style: styleFunction
//       });
//       // Add the draw interaction
//       this.context.map.addInteraction(this.draw);

//           this.draw.on('drawstart', event => {
//               this.polygonFirstCoordinate = event.feature.getGeometry().getFirstCoordinate();
//           });
//     }

//     componentWillUnmount () {
//       this.context.map.removeInteraction(this.draw);
//     }

//     render() { return <p>Drawing polygon</p>; }
//   }

export default DrawMap;
