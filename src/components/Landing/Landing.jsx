import React, {useContext} from "react";
import './Landing.scss'
import {Context} from "../../context/context";
//import Box from '../../assets/images/BOX.png'
// import Man from '../../assets/images/man-front.png'


const Landing = (props) => {
    const cont = useContext(Context);
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
                <div className={"box-text"}>
                    <i>This is a sample text for the Game</i>
                </div>
                <div className={"green-button"} onClick={()=>props.history.push('/game')}>
                    <div>
                        START
                    </div>
                </div>
                <div className={"rule-btn green-button"} onClick={()=>cont.setIsRule(true)}>
                    <div>
                        RULES
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;