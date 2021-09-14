import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, auth } from '../firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //uoploads the image to the Firebase Storage 
   useEffect(() => {
    const currentUserId = auth.currentUser.uid
    const storageRef = projectStorage.ref(file.name);
   
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = new Date().getTime();
      const currentUserData = (await projectFirestore.collection('users').doc(currentUserId).get()).data();
      const images = currentUserData.images
      console.log(currentUserData)
      await projectFirestore.collection('users').doc(currentUserId).set({
        images: [...images,  {url,createdAt } ]
      
    })
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
