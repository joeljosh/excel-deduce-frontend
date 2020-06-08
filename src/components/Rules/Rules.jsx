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
                    <u>Rules And Regulations</u>
                </div>
                <ul>
                    <li className={'mb-2'}>
                        <b>Answer Format</b>
                        <p>
                            The answer should be in submitted in lower case and without space. <br/> Example, if the right answer is Harry Potter it should be submitted as harrypotter.
                        </p>
                    </li>
                    <li className={'mb-2'}>
                        <b>Rules 1</b>
                        <p>
                            This is the rule
                        </p>
                    </li>
                    <li className={'mb-2'}>
                        <b>Rules 1</b>
                        <p>
                            This is the rule
                        </p>
                    </li>
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