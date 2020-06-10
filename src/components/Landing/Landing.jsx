import React, {useContext, useState} from "react";
import './Landing.scss'
import {Context} from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
//import Box from '../../assets/images/BOX.png'
// import Man from '../../assets/images/man-front.png'


const Landing = (props) => {
    const cont = useContext(Context);
    const [game, setGame] = useState(false);

    return(
        <div className={"cover"}>
            {/*<div className={"triangle-black"}>*/}
            {/*</div>*/}
            {/*<div className={"button-red"}>*/}
            {/*    <div className={"button-text"}>*/}
            {/*        START GAME*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"character"}>*/}
            {/*    <img src={Man} alt=""/>*/}
            {/*</div>*/}
            <div className={"box"}>
                <div className={`box-text ${game ? "box-tra" : ""}`}>
                    <p>Roy stands at the door of the castle.</p>
                    <p>This is the day he proves himself.</p>
                    <p>Roy Cheshire is the last of the Jackson Cheshires and the sole heir to their fortune. But to
get it, he must live up to the family name. </p>
                    <p>The sole way he can do so is to enter the castle at the end of the road, walk through 20
doors by solving baffling puzzles and behold the glory of Palisa, the mystical land whose
entrance lies at the very last door. Only thus can he stand upright and claim the legacy of the
Cheshires as his birthright. </p>
                    <p>Do you have the wit and the nerve to walk in Roy's feet, to stretch your hand out and grasp
the legacy as your own? </p>
                    <p>Onward we go. </p>
                    <FontAwesomeIcon className="play cursor-pointer" icon={faPlayCircle} onClick={()=>props.history.push('/game')} />
                </div>
                <div className={"green-button cursor-pointer"} onClick={()=>setGame(true)}>
                    <div>
                        START
                    </div>
                </div>
                <div className={"rule-btn green-button cursor-pointer"} onClick={()=>cont.setIsRule(true)}>
                    <div>
                        RULES
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;