import React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>{
        document.title = `Ashpital | ${title}`;
    },[title])
};

export default UseTitle;