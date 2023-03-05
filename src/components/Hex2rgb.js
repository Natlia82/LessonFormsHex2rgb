import React, {useState} from "react";

function Hex2rgb() {
  
    const [form, setForm] = useState({
        hex: "",
        rgb: ""
    });

    const number = num => {
        if (num.length == 7) {
         
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(num);
         
            if (result) {
                setForm((prevForm) => ({...prevForm, rgb : 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')'}));  
            } else {
                setForm((prevForm) => ({...prevForm, rgb : 'ERRER'}));  
            }
        } else setForm((prevForm) => ({...prevForm, rgb : ''}));  
    }

    const handleFormChange = (evt) => {
        const {name, value} = evt.target;
        setForm((prevForm) => ({...prevForm, [name] : value}));
        number(value);
    }
    
   //rgb(52,73,94)
   return (
    <div style={{backgroundColor: form.rgb}}>
        <div className="contener">
        <form >
            <div >             
               <input color="read" maxLength="7" className="input" type="text" name="hex" value={form.hex} onChange={handleFormChange} />
            </div> 
            <div>
               <input readOnly className="input" type="text" name="rgb" value={form.rgb} onChange={handleFormChange} />
            </div>
           
        </form>
        </div>
      
    </div>
   )
}


  

export default Hex2rgb;