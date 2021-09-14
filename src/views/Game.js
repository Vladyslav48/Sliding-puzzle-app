import Header from "../components/general/Header"
import React, { useState, useEffect } from "react";
import Board from "../components/game-components/Board";


const Game = () =>{
    const [imgUrl, setImgUrl] = useState("")
    let [helpNum, setHelpNum] = useState(true)

    //catches the url from Board component
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has("img")) {
        setImgUrl(urlParams.get("img"))
      }
    }, [])

    //Numbers help toggler
    const ToggleButton = (e)=>{
      if(helpNum === true){
         document.querySelectorAll(".helpNum").forEach(el => el.style.visibility = "hidden")
         setHelpNum(!helpNum )
         console.log(helpNum)
      }else{
        document.querySelectorAll(".helpNum").forEach(el => el.style.visibility = "visible")
        setHelpNum(!helpNum)
        console.log(helpNum)
      }
  }


    return(
        <div className="board">
            <Header />
            <div className="App">
              <h1>Sliding Puzzle Game</h1>
           
              <Board imgUrl={imgUrl}/>
              <div>
                  <button className="game-btn" onClick={ToggleButton}>Help with numbers (yes/no)</button>
              </div>
              <p className="recomendText">* you can choose the image to play with in your collection</p>
            </div>
        </div>
    )
}

export default Game;