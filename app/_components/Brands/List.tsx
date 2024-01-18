import React from "react";
import BigWidget from "./BigWidget";

export default function List({ data }: any) {
  return (
    <div>
      {data && data.map((item: any, index: number) => (
        <BigWidget key={index} data={item.attributes} index={index}/>
      ))}
    </div>
  );
}
