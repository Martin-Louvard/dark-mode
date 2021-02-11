import React, { useContext } from 'react';
import VisualContext from '../../VisualContext'
import '../../main.css';


const DarkModeButton = () => {
    const mode = useContext(VisualContext);

    return(
    <label className="switch dark-mode" for="checkbox">
        <input type="checkbox" id="checkbox" onClick={mode.switch}/>
        <div className="slider round"></div>
    </label>
    )
};
export default DarkModeButton;