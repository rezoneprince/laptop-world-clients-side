import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, SetIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          SetIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
