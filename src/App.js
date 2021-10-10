
import './App.css';
import {useEffect, useState} from "react";
// import axios from "axios";
import Card from "./components/Card";
import AppContext from "./Context/Context";
import ContentLoader from "react-content-loader";
import { connect } from "react-redux";
import {getCards as getCardsAction} from "./store/modules/cards";
import { deleteCard as deleteCardAction} from "./store/modules/cards";
import {showFavorite as showFavoriteAction}  from "./store/modules/cards";


const key = "ecfb8665-13f7-43e1-8370-90ce3996dc51"

function App( {myCards, getCards, deleteCard, showFavorite }) {

  // const [card, setCard] = useState([])
  const [addFavorites, setAddFavorites] = useState([])
  const [sort, setSort] = useState("all")

  const elementOnPage = 8


  useEffect(() => {
    // (async function getCards() {
    //   try{
    //     const data = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${key}`)
    //     setCard(data.data)
    //   }
    //  catch (error){
    //     alert("Ошибка:" + error)
    //  }
    // })();
    getCards()
  },[])


  function clickMouseDown(){
      setSort("likes")
  }

  function clickMouseLeave(){
      setSort("all")
  }

    function removeCard(item){
    deleteCard(item)
    setAddFavorites(prev => prev.filter(fav => fav !== item))
  }

  return (

      <div className="App">
          <AppContext.Provider value={{ removeCard, addFavorites,  setAddFavorites }}>
              <div className="App-controlSorting">
                  <label className="App-controlSorting__text">Sorting by
                      <button
                          className="App-controlSorting__select"
                          onMouseDown={() => clickMouseDown()}
                          onMouseUp={() => clickMouseLeave()}
                      > Show likes
                      </button>
                  </label>
              </div>
              <div className="App-content">
                  {myCards.length > 1 ?  myCards.
                      filter(card => sort === "likes" ? addFavorites.
                      find(fav => fav === card) : card).
                  map((cards, index) =>
                      <Card
                          key={index}
                          card={cards}
                          removepost={deleteCard}
                          favorites={addFavorites.find(fav => fav === cards)}
                      />) :
                      (([...Array(elementOnPage)].map((item,index) =>
                          <div
                              key={index}
                              className="Card-info">
                              <ContentLoader
                                  speed={2}
                                  width={300}
                                  height={400}
                                  viewBox="0 0 155 265"
                                  backgroundColor="#f3f3f3"
                                  foregroundColor="#ecebeb">
                                  <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                                  <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                                  <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                                  <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                                  <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                              </ContentLoader>
                          </div>)))}
              </div>
          < /AppContext.Provider>
      </div>
  );
}

const mapStateProps = (state) =>{

    return {
        myCards: state.cards.cards
    }
}

export default connect(
    mapStateProps,
    {
        getCards : getCardsAction,
        deleteCard: deleteCardAction,
        showFavorite: showFavoriteAction,
    }
)(App);
