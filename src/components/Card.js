import React, {useContext, useState} from 'react';
import "./Card.scss";
import AppContext from "../Context/Context";


const Card = ({card, favorites = false , removepost}) => {
    const [like, setLike] = useState(favorites)
    const {  addFavorites,  setAddFavorites } = useContext(AppContext)

    function favorite(cardFav){
        setLike(!like)
        const findFavorites = addFavorites.find(item => item === cardFav)
        if(findFavorites){
            setAddFavorites(prev => prev.filter(item => item !== cardFav))
        }
        else{
            setAddFavorites(prev =>[...prev, cardFav])
        }
    }

    return (
        <div className="Card">
            <i className={like ? "fa fa-heart fa-2x" : "fa fa-heart-o fa-2x"}
               onClick={() => favorite(card)}
               aria-hidden="true"/>
            {card.hasOwnProperty("image") && card.image.hasOwnProperty("url")  ?
                <img
                    className="Card__img"
                    src={card.image.url}
                    alt="img-cat"
                /> : ""}
            <h3 className="Card__name">{card.name}</h3>
            <p className="Card__desc">{card.description}</p>
            <button className="Card__del" onClick={() => removepost(card)}>
                <img className="img" src="./delete.png" alt="delete"/>
            </button>
        </div>
    );
};

export default Card;