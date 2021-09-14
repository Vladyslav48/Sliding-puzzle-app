import { useState, useEffect } from 'react';
import { auth, projectFirestore } from '../firebase';


const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const currentUserId = auth.currentUser.uid
  const [user, setUser] = useState(currentUserId);

  //retrives the images from DB in real time
  useEffect(() => {
    const unsub = projectFirestore.collection(collection).doc(user).onSnapshot(doc => {
      let docData = doc.data()
      console.log(docData)
      let userImgs = []
      docData.images.map(img=>{
        userImgs.push({ id: img.id, url: img.url})
      })
      setDocs(userImgs)
      
    })


    return () => unsub();
  }, [collection]);
  
  return { docs };
}

export default useFirestore;

