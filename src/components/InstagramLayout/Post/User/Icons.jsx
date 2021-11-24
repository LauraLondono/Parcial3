import React from 'react';

const Icons = () => {

  const hover = (e) => {
    e.target.style.fill = '#a2a2a2';
  }

  const noHover = (e) => {
    e.target.style.fill = 'black';
  }

  const _stylesLayout = {
    ig: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    iconsLeft: {
      display: 'flex',
      alignitems: 'center',
      justifyContent: 'space-between',
      padding: '15px',
      width:'20%',      
    },
    iconRight: {
      display: 'flex',
      alignitems: 'center',
      justifyContent: 'flex-end', 
      padding: '15px',     
      width:'15%',   
      marginLeft:'55%'
    },
    icon: {
      width: '20%',
      cursor: 'pointer'
    }
  };

  return (
    <div style={_stylesLayout.ig}>
      <div style={_stylesLayout.iconsLeft}>
        <svg 
        style={_stylesLayout.icon} 
        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        >
          <path onMouseEnter={hover}
        onMouseOut={noHover} d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
        </svg>

        <svg style={_stylesLayout.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path onMouseEnter={hover}
        onMouseOut={noHover}  d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" /></svg>

          <svg style={_stylesLayout.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
          <path onMouseEnter={hover}
        onMouseOut={noHover}  d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"/>
          </svg>
      </div>
      <div style={_stylesLayout.iconRight}>
        <svg style={_stylesLayout.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path onMouseEnter={hover}
        onMouseOut={noHover} d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" />
        </svg>
      </div>
    </div>
  );
};

export default Icons;