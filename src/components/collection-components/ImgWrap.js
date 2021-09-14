import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import { auth, projectFirestore} from '../../firebase';
import { useHistory } from "react-router-dom";


const ImageWrap = () => {
  const { docs } = useFirestore('users');
  const history = useHistory();

  // starts the game with the selected pict
  const playPic = (url) =>{
    history.push({
      // pathname: '/game',
      pathname: '/game',
      search: `?img=${url}`
    });

  }

  //deletes the selected picture
  const deletePic = async (clicked_id)=>{
    var user = auth.currentUser.uid
    console.log(clicked_id)
    const UserCol = projectFirestore.collection("users").doc(user)
    const userDat = (await UserCol.get()).data()
    console.log(userDat)
    UserCol.update({
      images: userDat.images.filter(val => val.url != clicked_id)
    })
  }

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div  key={doc} >
        <motion.div className="img-wrap"
          layout
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          
        </motion.div>
        <motion.div className="imgOptions" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            <button className="imgOption" onClick={() => playPic(doc.url)}>Play</button>
            <button className="imgOption" onClick={() => deletePic(doc.url)}>Delete</button>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default ImageWrap;