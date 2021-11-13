import React, { Fragment } from 'react';
import Card from './Card';


const Cards = () => {

    const data = [
            {
              "lang": "Python",
              "url": "https://cdn.svgporn.com/logos/python.svg",
              "page": "https://www.python.org/",
              "desc": "Python es un lenguaje de programación interpretado y orientado a objetos similar a PERL, que ha ganado popularidad debido a su clara sintaxis y legibilidad."
            },
            {
              "lang": "Java",
              "url": "https://cdn.svgporn.com/logos/java.svg",
              "page": "https://www.java.com/es/",
              "desc": "Java es un lenguaje de programación y una plataforma informática comercializada por primera vez en 1995 por Sun Microsystems."

            },
            {
              "lang": "React",
              "url": "https://cdn.svgporn.com/logos/react.svg",
              "page": "https://reactjs.org/",
              "desc": "React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."

            },
            {
              "lang": "PHP",
              "url": "https://cdn.svgporn.com/logos/php.svg",
              "page": "https://www.php.net/manual/es/intro-whatis.php",
              "desc": "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ "

            }      
    ];

    return (
        <Fragment>
            <h1 style={{
                textAlign:'center',
                margin: '2.5em auto 2em'
                }}>Lenguajes de programación</h1>
            <div className='card_principal'>
                { 
                data.map(({lang, url, page, desc}) => {
                    return <Card key={lang} lang={lang} url={url} page={page} desc={desc}/>
                }) 
                }
            </div>
        </Fragment>
    )
}

export default Cards
