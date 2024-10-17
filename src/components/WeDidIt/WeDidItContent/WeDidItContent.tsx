import React from 'react';
import './WeDidItContent.scss';

interface WeDidItProps {
    slogan: string;
    message: string;
    shortDescription: string;
    cardData: {
        title: string;
        sentences: string[];
    }[];
}

const WeDidItContent: React.FC<WeDidItProps> = ({ slogan, message, shortDescription, cardData }) => {
    return (
        <div className='we-did-it'>
            <div className='we-did-it__content'>
                <h2 className='we-did-it__slogan'>{slogan}</h2>
                <p className='we-did-it__message'>{message}</p>
            </div>
            <div className='we-did-it__card-list'>
                {cardData.map((card, index) => (
                    <div key={index} className='list-card'>
                        <h3 className='list-card__title'>{card.title}</h3>
                        <ul className='list-card__sentences'>
                            {card.sentences.map((sentence, idx) => (
                                <li key={idx} className='list-card__sentence'>{sentence}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeDidItContent;
