import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firestore";

const useFetchCollection = <T>(collectionPath: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionPath));
        const tempArray: T[] = [];
        querySnapshot.forEach((doc) => {
          tempArray.push(doc.data() as T);
        });
        setData(tempArray);
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
  }, [collectionPath]);

  return { data, loading, error };
};

export default useFetchCollection;
