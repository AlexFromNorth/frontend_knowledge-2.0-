import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const getDates = async (coll) => {
  const citiesCol = collection(db, coll);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc);
  return cityList;
};

// const cityRef = doc(db, "cities", "BJ");
// setDoc(cityRef, { capital: true }, { merge: true });

export const updateDocument = async (collection, document, text) => {
  // await setDoc(doc(db, collection, document), {
  await updateDoc(doc(db, collection, document), {
    info: text,
  });
};

export const addComments = async (
  collection,
  document,
  text,
  id,
  name,
  time,
) => {
  await updateDoc(doc(db, collection, document), {
    [id]: {
      user: name,
      text: text,
      time: time,
    },
  });
};

// export const updateDocument = async (collection, document) => {
//   try {
//     await collection(db, collection).doc(document).updateDoc({
//       info: "test",
//     });
//     console.log("The document has been successfully updated");
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// };
