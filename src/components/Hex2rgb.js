import React, {useState} from "react";

function Hex2rgb() {
    const [hexToRgb, setHexToRgb] = useState({
        hex: '',
        rgb: ''
    })
   
   /*const toRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }*/
   
    const hexToRgbChange = (evt) => {
        const {name, value} = evt.target;
        setHexToRgb((prevHexToRgb) => ({[name]: value}))
        
    }
     
    return <div>
                <form >
                    <input type="text" name="hex" value={hexToRgb.hex} onChange={hexToRgbChange} />
                    <input type="text" name="rgb" value={hexToRgb.rgb}  onChange={hexToRgbChange}  />
                </form>
    
          </div>
}


  

export default Hex2rgb;