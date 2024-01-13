import React, { useEffect } from 'react';

const useTitle = (title) => {
      
    useEffect(()=>{
        document.title =`${title}/cineDore`
    },[title])
    return null
};

export default useTitle;