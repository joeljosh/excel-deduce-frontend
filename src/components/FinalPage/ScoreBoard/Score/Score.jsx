import React from "react";
import './Score.scss'

const Score  = (props) => {
    const {index,name,score,img} = props;
    return(
        <>
            <div className={'d-flex lap-font h-100 w-100 score-background flex-row'}>
                <div className={'col-sm-1 pl-1'}>
                    <div className={'ml-3'}>{index}</div>
                </div >
                <div className={'col-sm-3'}>
                    <img src={img} className={"prof-img"} alt=""/>
                </div>
                <div className={'col-sm-5'} >
                    <div>{name}</div>
                </div>
                <div className={'col-sm-3'} >
                    <div>{score}</div>
                </div>
            </div>
        </>
    )
};

export default Score;