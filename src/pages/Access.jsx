import React, { useEffect, useState } from "react";
import SyncLoader from "react-spinners/ClipLoader";
const Access = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      {
        loading  ? <SyncLoader color="#36d7b7" /> : 
       ( <div>
          <h2 className=" text-3xl font-bold mb-4">Order Sucessfull </h2>
          <p>Your Order Has Been Successfully Placed</p>
        </div>
        )
      }
      
    </div>
  );
};

export default Access;
