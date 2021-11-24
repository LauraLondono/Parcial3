import React, { useState } from 'react';


const PostHeader = (props) => {

  const [underlineText, setUnderlineText] = useState('none');

  const _stylesLayout = {
    headerPost: {
      width: '100%',
      height: '60px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: "center",
    },
    img: {
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      padding: '10px',
      cursor: 'pointer',
    },
    userName: {
      fontSize: '12px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: `${underlineText}`,
      width:'83%'
    },
    icon: {      
      width: '3%',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-end',
    }
  };

  return (
    <div style={_stylesLayout.headerPost}>
      <div>
        <img src={props.image} alt="" style={_stylesLayout.img} />
      </div>
      <span
        style={_stylesLayout.userName}
        onMouseEnter={() => setUnderlineText('underline')}
        onMouseOut={() => setUnderlineText('none')}
      >
        {props.userName}
      </span>
      <div style={_stylesLayout.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PostHeader;