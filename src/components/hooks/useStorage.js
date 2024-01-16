/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { storage, db, timestamp } from "../../firebase/Config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
