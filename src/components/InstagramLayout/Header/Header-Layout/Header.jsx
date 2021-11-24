import React from 'react';
import HomeIcon from '../HeaderComponents/HomeIcon';
import SearchBar from '../HeaderComponents/SearchBar';
import Icons from '../HeaderComponents/Icons';


const Header = () => {
  const _stylesLayout = {
    header: {
      width: '100%',
      height: '52px',
      backgroundColor: 'white',
      position: 'fixed',
      zIndex: '2',
      top: 0,
      border: '1px solid #dbdbdb',
      display: "flex",
      alignItems: "center",
      justifyContent:'space-evenly',
    },
  };

  return (
    <div style={_stylesLayout.header}>
      <HomeIcon />
      <SearchBar />
      <Icons/>
    </div>
  );
};

export default Header;