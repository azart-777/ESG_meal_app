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
                <div className='we-did-it__text-slogan'>
                    <h2 className='we-did-it__slogan'>{slogan}</h2>
                </div>
                    <div className='we-did-it__text-message'>
                        <p className='we-did-it__message'>{message}</p>
                    </div>
            </div>
            <div className='we-did-it__card-list-content'>
                {cardData.map((card, index) => (
                <div className='we-did-it__card-list'>
                    <div key={index} className='list-card'>
                        <div className='list-card__list-title'>
                            <h3 className='list-card__title'>{card.title}</h3>
                        </div>
                        <div className='list-card__list-sentences'>
                            <ul className='list-card__sentences'>
                                {card.sentences.map((sentence, idx) => (
                                    <li key={idx} className='list-card__sentence'>{sentence}</li>
                                ))}
                            </ul>
                        </div>
                     </div>
                </div>
                ))}
            </div>

        </div>
    );
};

export default WeDidItContent;
