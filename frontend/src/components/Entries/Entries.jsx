import { useState } from "react";
import "./Entries.css"
import PriceLabel from "../PriceLabel/PriceLabel";

export default function AutoFocusInputs() {
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const [isGenerateClicked, toggleGenerate] = useState(false)

  

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" && values[index].trim() !== "") {
      event.preventDefault();
    
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

 const generateBtnIsClicked = () =>{
    toggleGenerate(prevValue => !prevValue)

}

const entriesFunction = () =>  (
<div style={{ textAlign: "left" ,padding:"5px" }}>
    <div style={{marginBottom:"5px"}}>
    <label htmlFor="name">Style : </label>
    <input
        name="Style"
        id="input-0"
        type="text"
        value={values[0]}
        onChange={(e) => handleChange(0, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 0)}
        required
    />
    </div>

    <div style={{marginBottom:"5px"}}>
    <label htmlFor="email">Size : </label>
    <input
        id="input-1"
        type="text"
        name="Size"
        value={values[1]}
        onChange={(e) => handleChange(1, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 1)}
        required
    />
    </div>

    <div     style={{marginBottom:"5px"}}>
    <label htmlFor="phone">Colour : </label>
    <input
        name="Colour"
        id="input-2"
        type="text"
        value={values[2]}
        onChange={(e) => handleChange(2, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 2)}
        required
    />
    </div>

    <div  style={{marginBottom:"5px"}}>
    <label htmlFor="city">QTY : </label>
    <input
        name="QTY"
        id="input-3"
        type="text"
        value={values[3]}
        onChange={(e) => handleChange(3, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 3)}
        required
    />
    </div>

    <div style={{marginBottom:"5px"}}>
    <label htmlFor="state">Material : </label>
    <input
        name="Material"
        id="input-4"
        type="text"
        value={values[4]}
        onChange={(e) => handleChange(4, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 4)}
        required
    />
    </div>

    <div  style={{marginBottom:"5px"}}>
    <label htmlFor="country">MRP : </label>
    <input
        name="MRP"
        id="input-5"
        type="text"
        value={values[5]}
        onChange={(e) => handleChange(5, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 5)}
        required
    />
    </div>

    <div  >
    <button  className ="button" onClick={generateBtnIsClicked}>Generate</button>
    </div>
</div>)

const priceLabelFunction = () => 
    (<div className="price-label-container">
        <div className="label-inner-container">
            <div className="bar-code-container">
                <h1 className="bar-code">BAR CODE</h1>
                {/* <hr className="bar-code-hr"/> */}

            </div>
            <div>
                <h1 className="brand-name">PRΞÐ</h1>
                <hr className="brand-name-hr"/>
                
            </div>
            <div className="info-parent-container" >
                <div className="flex-item-container info-container">
                    <p className="first-col-text">Style</p>
                    <p>:</p>
                    <p className="first-col-text-1">{values[0]}</p>

                </div>

                <div className="flex-item-container info-container">
                    <p className="first-col-text">Size</p>
                    <p>:</p>
                    <p className="first-col-text-1">{values[1]}</p>

                </div>

                <div className="flex-item-container info-container">
                    <p className="first-col-text">Colour</p>
                    <p>:</p>
                    <p className="first-col-text-1">{values[2]}</p>

                </div>

                <div className="flex-item-container info-container">
                    <p className="first-col-text">QTY</p>
                    <p >:</p>
                    <p className="first-col-text-1">{values[3]}</p>

                </div>

                <div className="flex-item-container info-container">
                    <p className="first-col-text">Material</p>
                    <p >:</p>
                    <p className="first-col-text-1">{values[4]}</p>

                </div>


             

                
                <h1>MRP : ₹{ values[5]}</h1> 
                

                


            </div>
            <hr className="footer-hr"/>
            <div className="footer-container">
            {/* <hr className="footer-hr"/> */}
                
                <p className="footer-paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt turpis vel velit sagittis, eget ultricies purus volutpat. Duis in nisi sed libero feugiat scelerisque.</p>
            </div> 
        </div>
        
        

    </div>)




  return (isGenerateClicked ? priceLabelFunction(): entriesFunction());
}




