import React from 'react';
import './Character.scss';
import rick from '../../../assets/images/rick.png';
import man from '../../../assets/images/man.png';

function Character(props){
    return(
        props.start &&
        <div className="char-box">
            <img src={rick} className="portal" alt="" />
            <img src={man} className="man" alt="" />
        </div>
    )
}

export default Character;