import React from 'react'
import { useState } from 'react';

const useToggle = (arr,initialPos=0) => {
  const[pos,setPos] = useState(initialPos);

  const toggleState = () => {
    if(pos<arr.length-1){
       setPos(pos => pos+1);
    }
    else{
        setPos(0);
    }
}
return [arr[pos],toggleState]
}

export default useToggle;