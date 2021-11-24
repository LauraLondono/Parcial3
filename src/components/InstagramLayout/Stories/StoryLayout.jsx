import React from 'react';
import Story from './Story';
import useWindowSize from "../../useWindowSize";

const StoryLayout = () => {

  const { width } = useWindowSize();

  const _stylesLayout = {
    stories: {     
      width: '45.5%',
      height:'110px',
      backgroundColor: 'white',
      position:'relative',
      top:'54px',
      margin:'30px',
      marginLeft:'25%',
      border:'1px solid #dbdbdb',
      borderRadius:'3px',
      display:'flex',
      alignContent:'center',   
    },

    stories1: {     
      width: '45.5%',
      height:'110px',
      backgroundColor: 'white',
      position:'relative',
      top:'54px',
      margin:'30px',
      marginLeft:'15.5%',
      border:'1px solid #dbdbdb',
      borderRadius:'3px',
      display:'flex',
      alignContent:'center',   
    },
  };

  return (
    <div>
      {width <= 768 && (
        <>
          <div style={_stylesLayout.stories}>
            <Story userName='biro9870' image='https://picsum.photos/201'/>
            <Story userName='Ana' image='https://picsum.photos/202'/>
            <Story userName='lolaP_' image='https://picsum.photos/203'/>
            <Story userName='jul34' image='https://picsum.photos/198'/>
            <Story userName='mauYolo98' image='https://picsum.photos/199'/>
            <Story userName='Peter_M' image='https://picsum.photos/200'/>
          </div>
        </>
      )}
      {width > 768 && (
        <>
          <div style={_stylesLayout.stories1}>
            <Story userName='biro9870' image='https://picsum.photos/201'/>
            <Story userName='Ana' image='https://picsum.photos/202'/>
            <Story userName='lolaP_' image='https://picsum.photos/203'/>
            <Story userName='jul34' image='https://picsum.photos/198'/>
            <Story userName='mauYolo98' image='https://picsum.photos/199'/>
            <Story userName='Peter_M' image='https://picsum.photos/200'/>
            <Story userName='FerGP' image='https://picsum.photos/197'/>
            <Story userName='Polo_M' image='https://picsum.photos/204'/>
          </div>
        </>
      )}
    </div>
  );

};

export default StoryLayout;