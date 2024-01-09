import React from "react";
import Skeleton from "react-loading-skeleton";

function loading() {
  return (
    <div className="p-5 md:p-12">
      <Skeleton />
      <Skeleton width={200} />

      <div
        className="flex flex-col justify-center items-center pl-0 m-5 ml-0 
      md:p-10 md:items-start md:justify-start md:flex-row"
      >
        <Skeleton width={400} height={350} />
        <div className="pl-0 mt-10 md:pl-5 md:mt-0">
          <Skeleton width={300} />
          <Skeleton width={250} />
          <Skeleton width={200} />
          <br />
          <Skeleton width={600} height={100} />
          <br />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default loading;
