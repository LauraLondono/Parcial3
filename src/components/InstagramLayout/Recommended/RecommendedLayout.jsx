import React, { useState } from 'react';
import RecommendedElement from '../Recommended/RecommendedElement';

const RecommendedLayout = (props) => {

  const [underlineText, setUnderlineText] = useState('none');

  const _stylesLayout = {
    recom: {
      width: '50%',
      height: '100%',
      backgroundColor: '#fafafa',
      position: 'fixed',
      zIndex: '2',
      right: 0,
      top: '55px',
      left: '61.5%',
      display: 'flex ',
      flexFlow: 'column',
      marginLeft:'10px',
    },
    words: {
      display: 'flex ',
      justifyContent: 'space-evenly',
      flexFlow: ' row wrap',
      width: '42%',
      textAlign:'left'
    },
    individual: {
      color: '#d3d3d3',
      fontSize: '11px',
     
      paddingRight: '5px',
      cursor:'pointer'
    },
    individual2: {
      color: '#d3d3d3',
      fontSize: '11px',
    },
    user:{
      display:'flex',
      alignItems:'center',
      width: '43%',
      marginTop:'40px',
      marginBottom:'16px'
    },
    img: {
      borderRadius: '50%',
      width: '55px',
      height: '55px',
      padding: '10px',
      paddingRight:'10px',
      cursor: 'pointer',
    },
    info:{
      display:'flex',
      flexFlow:'column',
      width:'54%',
      paddingLeft:'10px' 
    },
    username:{
      fontWeight:'bold',
      fontSize:'13px',
      color:'#3f3f3f',
      textDecoration: `${underlineText}`,
      cursor:'pointer'
    },
    name:{
      fontSize:'12px',
      color:'#acacac'
    },
    text:{
      color:'#0095f6',
      fontWeight:'bold',
      fontSize:'11px',
      cursor:'pointer' 
    },
    text2:{
      color:'#929292',
      fontWeight:'bold',
      fontSize:'13px',
      marginRight:'17%',
      marginLeft:'5px' 
    },
    text3:{    
      fontSize:'12px' 
    }
  };

  return (
    <div style={_stylesLayout.recom}>
      <div style={_stylesLayout.user}>
        <img src={props.profilePic} alt="" style={_stylesLayout.img} />
        <div style={_stylesLayout.info}>
          <span style={_stylesLayout.username} onMouseEnter={() => setUnderlineText('underline')}
        onMouseOut={() => setUnderlineText('none')}>{props.userName}</span>
          <span style={_stylesLayout.name}>{props.name}</span>
        </div>
        <span style={_stylesLayout.text}>Switch</span>
      </div>
      <div >
        <span style={_stylesLayout.text2}>Suggestions For You</span>
        <span style={_stylesLayout.text3}>See all</span>
      </div>

      < RecommendedElement userName='Pablo_Rios' image="https://picsum.photos/200"/>
      < RecommendedElement userName='IsaaaDom_2101' image="https://picsum.photos/300"/>
      < RecommendedElement userName='Dani_XO_03' image="https://picsum.photos/250"/>
      < RecommendedElement userName='LiloDias09_98' image="https://picsum.photos/220"/>
      < RecommendedElement userName='Pablo_Rios' image="https://picsum.photos/260"/>
      
      <div style={_stylesLayout.words}>
        <span style={_stylesLayout.individual}>About</span>
        <span style={_stylesLayout.individual}>Help</span>
        <span style={_stylesLayout.individual}>Press</span>
        <span style={_stylesLayout.individual}>API</span>
        <span style={_stylesLayout.individual}>Jobs</span>
        <span style={_stylesLayout.individual}>Privacy</span>
        <span style={_stylesLayout.individual}>Terms</span>
        <span style={_stylesLayout.individual}>Locations</span>
        <span style={_stylesLayout.individual}>Top Accounts</span>
        <span style={_stylesLayout.individual}>Hashtags</span>
        <span style={_stylesLayout.individual}>Language</span>
        <span style={_stylesLayout.individual2}>© 2021 INSTAGRAM FROM META</span>
      </div>

    </div>
  );
};

export default RecommendedLayout;