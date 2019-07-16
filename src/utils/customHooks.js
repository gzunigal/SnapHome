import { useState, useEffect } from "react";

export function useFetch(url, defaultData = {}) {
  const [data, updateData] = useState(defaultData);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(url);
      const json = await resp.json();
      updateData(json);
    }
    fetchData();
  }, [url]);

  return data;
}

