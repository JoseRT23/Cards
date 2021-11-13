import React from 'react'
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.url} alt='lang.svg' />
            <h3>{props.lang}</h3>
            <hr/>
            <p>{props.desc} 
            <br/><br/>
            <a href={`${props.page}`}>Ver más →</a>
            </p>
            
        </div>
    )
}

Card.propTypes = {
    lang: PropTypes.string,
    url: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
};

export default Card
