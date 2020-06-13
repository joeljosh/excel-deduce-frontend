import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './Notice.scss';

function Notice (props) {
    const fsize = (num) => {
        if(props.level === 12){
          return 6;
        }else if(num >= 150){
          return 3;
        }else if(num >= 100){
          return 4;
        }else if(num >= 50){
          return 6;
        }else if(num >= 15){
          return 8;
        }else{
          return 10;
        }
    }

    return(
        <div className={`notice text-center cursor-default`} style={{fontSize: `${fsize(props.question.length)}vh`}} >
            <FontAwesomeIcon
                onClick={() => props.toggle()}
                className="close cursor-pointer"
                icon={faTimesCircle}
            />
            <div className="p">
                <p>{props.question}</p>
            </div>
        </div>
    );
}

export default Notice;