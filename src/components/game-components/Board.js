import React, { useState } from "react";
import Tile from "./ImgPiece";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./game-values"
import { canSwap, shuffle, swap, isSolved } from "./logic-functions"
import { motion } from 'framer-motion';


const Board = ({ imgUrl })=> {
  console.log(imgUrl)
  imgUrl = window.location.search.replace('?img=', '');
  console.log(imgUrl)
  let [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);


  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  const hasWon = isSolved(tiles)

  return (
    
    <>
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}>

        <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      </motion.div>
     
      {hasWon && isStarted && <div>Congratulations, you solved the puzzle 🎉🎉🎉</div>}
      {!isStarted ?
        (<button className="game-btn" onClick={() => handleStartClick() }>Start game</button>) 
        :
        (<button className="game-btn" onClick={() => handleShuffleClick()}>Restart game</button>)}
    </>
  );
}

export default Board;
