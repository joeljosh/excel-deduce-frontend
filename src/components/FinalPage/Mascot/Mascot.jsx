import React, {useState} from "react";
//import Avatar from '../../../assets/images/mascot.png'
import './Mascot.scss'
import GIF from '../../../assets/images/confetti.gif'
import ScoreBoard from "../ScoreBoard/ScoreBoard";


const Mascot  = () => {
    const [starts,setStarts] = useState(false);

    return(
        <>
            <div className={" avatar-cover position-relative"}>
                <img src={GIF} className={'gif-popper'} alt=""/>
                <ScoreBoard start={starts} setStart={setStarts} />
            </div>
        </>
    )
};

export default Mascot