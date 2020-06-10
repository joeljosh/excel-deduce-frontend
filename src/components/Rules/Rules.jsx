import React, {useContext} from "react";
import './Rules.scss'
import {Context} from "../../context/context";

const Rules = () => {
    const cont  = useContext(Context);

    if(cont.isRule){
        return(
        <div className={"rules-box"}>
            <div className={"div  pem-5"}>

                <div className={'text-center mb-3 rules-heading col'}>
                    <u>Rules</u>
                </div>
                <ul>
                    <li className={'mb-2'}>
                        <b>Answer Format</b>
                        <p>
                            The answer should be in lowercase and without space or special characters. <br/>For example if the answer is Hello World! it should be written as helloworld.
                        </p>
                    </li>
                    <li className={'mb-2'}>
                        <b>Hints</b>
                        <p>
                           Hints would be provided at predefined times (So don't beg for clues).
                        </p>
                    </li>
                    {/*<li className={'mb-2'}>*/}
                    {/*    <b>Final Level</b>*/}
                    {/*    <p>*/}
                    {/*        The final round is CTF, find the flag and type it in the "correct" place (Remember every word matters).*/}
                    {/*    </p>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <button onClick={()=>cont.setIsRule(false)} className={'btn btn-close-hint btn-light'}>
                CLOSE
            </button>
        </div>
    )
    } else {
        return (
            <>
            </>
        )
    }
};

export default Rules