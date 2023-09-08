import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firestore";

const useFetchDocument = <T>(collectionPath: string, docId: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const documentRef = doc(db, collectionPath, docId);
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          setData(documentSnapshot.data() as T);
        } else {
          setData(null);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error("An unknown error occurred."));
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [collectionPath, docId]);

  return { data, loading, error };
};

export default useFetchDocument;
