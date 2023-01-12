import React, { useState, useRef } from 'react'



//const typeRef = useRef();



const TypeSelect = () => {
    const [type, setType] = useState("Point");

    const typeRef = useRef(null);

    return (
        <div>
            <label>Geometry type: </label>
            <select ref={typeRef} value={type} onChange={(event) => setType(event.target.value)}>
                <option value="Point">Point</option>
                <option value="LineString">LineString</option>
                <option value="Polygon">Polygon</option>
                <option value="Circle">Circle</option>
                <option value="None">None</option>
            </select>
            <label>{type}</label>
            <input type="button" value="Undo" id="undo" onclick ></input>
            
        </div>
    )
}

export default TypeSelect