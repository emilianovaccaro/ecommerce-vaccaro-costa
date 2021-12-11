import db from './firebaseConfig';
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async (catId) => {
  let q;
  if(catId){
    q = query(collection(db, 'product'), where('category', '==', catId));
  } else {
    q = query(collection(db, 'product'), orderBy('title'))
  }

  const querySnapshot = await getDocs(q);
  const productosFirestore = querySnapshot.docs.map(docu => ({
    id: docu.id,
    ...docu.data()
  }));
  return productosFirestore;
  };

  export const productosOne = async (productId) => {
    const docRef = doc(db, 'product', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
      return {
          id: productId,
          ...docSnap.data()
      }
    }
    else {
      console.log('error')
    }
  }