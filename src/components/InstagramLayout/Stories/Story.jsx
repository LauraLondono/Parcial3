import React from 'react';

const StoryLayout = (props) => {
  const _stylesLayout = {
    story: {     
      display:'flex',
      flexFlow:'column',
      alignItems:'center',
      width:'8%',
      height:'100%',
      padding:'15px',
      cursor:'pointer' 
    },
    storyImage:{
        borderRadius:'50%',        
        width:'100%'
    },
    userName:{
      fontSize:'12px'
    },
  
  };

  return (
    <div style={_stylesLayout.story}>
      <div >
        <img src={props.image} alt="" style={_stylesLayout.storyImage}/>
      </div>
      <span style={_stylesLayout.userName}>{props.userName}</span>
    </div>  
  );
};

export default StoryLayout;