import { useState, useEffect } from "react";
import { db } from "../../firebase/Config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
