import React, {useState} from "react";

function Hex2rgb() {
  
    const [form, setForm] = useState({
        hex: "",
        rgb: ""
    });

    const number = num => {
        if (num.length == 7) {
            console.log(num);
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(num);
            console.log(result);
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
        console.log(value.length);
        number(value)
    }
  /* 
  onSubmit={handleSubmit}
  const handleSubmit = (evt) => {
         evt.preventDefault();
               
         
         setForm({hex: "",
                 rgb: ""})
    };*/

 /* <button className="spanLi">ОК</button>*/

   return (
    <div>
        <form >
           
                        
            <input maxLength="7" className="input" type="text" name="hex" value={form.hex} onChange={handleFormChange} />
            <input className="input" type="text" name="rgb" value={form.rgb} onChange={handleFormChange} />
            
           
        </form>
      
    </div>
   )
}


  

export default Hex2rgb;