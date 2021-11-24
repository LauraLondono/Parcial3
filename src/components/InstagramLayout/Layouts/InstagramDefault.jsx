import React from 'react';
import { Feed } from "../../main";
import Header from "../Header/Header-Layout/Header";
import RecommendedLayout from "../Recommended/RecommendedLayout";
import StoryLayout from "../Stories/StoryLayout";

const InstagramDefault = () => {

  return (
    <div>
      <Header />
      <StoryLayout />
      <Feed />
      <RecommendedLayout userName='ValeParis2100' name='Valeria París' profilePic="https://picsum.photos/230"/>
    </div>
  )
};

export default InstagramDefault;
