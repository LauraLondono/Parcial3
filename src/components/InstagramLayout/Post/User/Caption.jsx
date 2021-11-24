import React, { useState } from 'react';

const Icons = (props) => {

    const [underlineText, setUnderlineText] = useState('none');

  const _stylesLayout = {
    ig: {     
      width: '100%',           
    },

    userName:{
      fontSize: '12px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: `${underlineText}`,
      padding:'10px'
    },
    text:{
        fontSize: '12px',
        cursor:'text',        
    }
  };

  return (
    <div style={_stylesLayout.ig}>
        <span
        style={_stylesLayout.userName}
        onMouseEnter={() => setUnderlineText('underline')}
        onMouseOut={() => setUnderlineText('none')}
      >
        {props.userName}
      </span>
      <span style={_stylesLayout.text}>{props.text}</span>
    </div>
  );
};

export default Icons;