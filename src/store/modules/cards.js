import axios from "axios";

const key = "ecfb8665-13f7-43e1-8370-90ce3996dc51"


const GET_CARDS = "GET_CARDS";
const DELETE_CARD = "DELETE_CARD";
const SHOW_FAVORITE = "SHOW_FAVORITE"


const defaultState = {
    cards: [],
}

export default (state = defaultState, {type, payload}) => {
    switch (type){
        case GET_CARDS:
            return { ...state, cards: payload.data}
        case DELETE_CARD:
            return {...state, cards: state.cards.filter(del => del !== payload)}
        case SHOW_FAVORITE:
            return {...state , cards: state.cards.filter(card => payload.find(fav => fav === card ))}
        default:
            return state
    }
}



export const getCards = () => async  (dispatch) => {
    try{
        const data = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${key}`)
        dispatch({ type: GET_CARDS, payload: data })
    }
    catch (error){
        alert("Ошибка:" + error)
    }
}

export const deleteCard = (item) => async  (dispatch) =>  {
      dispatch ({ type: DELETE_CARD, payload: item})
}

export const showFavorite = (favorites) => (dispatch) => {
    dispatch({ type: SHOW_FAVORITE, payload: favorites})
}





