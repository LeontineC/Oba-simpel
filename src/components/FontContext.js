import React, { useState} from 'react';

export const FontContext = React.createContext({});

export const FontProvider = (props) => {
    const [fontSize, setFontSize] = useState(16);
    const value = {fontSize, setFontSize}; 
   

return (
<FontContext.Provider value={[fontSize, setFontSize]}>
    {props.children}</FontContext.Provider>
)
};



