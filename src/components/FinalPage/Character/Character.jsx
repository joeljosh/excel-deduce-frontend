import React, {useEffect, useState} from 'react';
import './Character.scss';
import rick from '../../../assets/images/rick.png';
import man from '../../../assets/images/man.png';
import manPeace from '../../../assets/images/man-front.png';


function Character(props){

    const [isFront,setIsfront] = useState(false);

    useEffect(()=>{
        if(props.start){
            setTimeout( ()=>{
                setIsfront(true)
            },5000)
        }
    },[props.start]);

    return(
        props.start &&
        <div className="char-box">
            <img src={rick} className="portal" alt="" />
            <img src={isFront? manPeace :man} className="man" alt="" />
        </div>
    )
}

export default Character;