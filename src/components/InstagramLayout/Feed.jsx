import React from 'react';
import Post from './Post/Post';
import useWindowSize from "../useWindowSize";

const Feed = () => {

  const { width } = useWindowSize();

  const _stylesLayout = {
    ig: {     
      width: '45.5%',  
      height:'100vh',
      backgroundColor: 'transparent',
      position:'relative',      
      margin:'20px',
      top: '50px',
      marginLeft:'25%',      
    },
    ig2: {     
      width: '45.5%',  
      height:'100vh',
      backgroundColor: 'transparent',
      position:'relative',      
      margin:'20px',
      top: '50px',
      marginLeft:'15.5%',      
    },
  };

  return (
    <div>
      {width <= 768 && (
        <>
          <div style={_stylesLayout.ig}>
            <Post userName='PaulaXOXO' profilePic='https://picsum.photos/200' image='https://picsum.photos/500' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='LisaT' profilePic='https://picsum.photos/204' image='https://picsum.photos/501' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Julie4509' profilePic='https://picsum.photos/202' image='https://picsum.photos/502' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Mari_Polo' profilePic='https://picsum.photos/201' image='https://picsum.photos/509' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='K_rod' profilePic='https://picsum.photos/205' image='https://picsum.photos/505' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='HannaPR' profilePic='https://picsum.photos/206' image='https://picsum.photos/506' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='DianaR04' profilePic='https://picsum.photos/199' image='https://picsum.photos/499' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='FeliCano_20' profilePic='https://picsum.photos/198' image='https://picsum.photos/498' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Gisss21' profilePic='https://picsum.photos/207' image='https://picsum.photos/497' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='NicolDiaz23' profilePic='https://picsum.photos/195' image='https://picsum.photos/496' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
          </div>          
        </>
      )}
      {width > 768 && (
        <>
        <div style={_stylesLayout.ig2}>
            <Post userName='PaulaXOXO' profilePic='https://picsum.photos/200' image='https://picsum.photos/500' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='LisaT' profilePic='https://picsum.photos/204' image='https://picsum.photos/501' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Julie4509' profilePic='https://picsum.photos/202' image='https://picsum.photos/502' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Mari_Polo' profilePic='https://picsum.photos/201' image='https://picsum.photos/509' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='K_rod' profilePic='https://picsum.photos/205' image='https://picsum.photos/505' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='HannaPR' profilePic='https://picsum.photos/206' image='https://picsum.photos/506' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='DianaR04' profilePic='https://picsum.photos/199' image='https://picsum.photos/499' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='FeliCano_20' profilePic='https://picsum.photos/198' image='https://picsum.photos/498' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='Gisss21' profilePic='https://picsum.photos/207' image='https://picsum.photos/497' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
            <Post userName='NicolDiaz23' profilePic='https://picsum.photos/195' image='https://picsum.photos/496' caption='Lorem ipsum sdfg rtygf aojfg rtyg'/>
          </div>       
        </>
      )}
    </div>
  );
};

export default Feed;