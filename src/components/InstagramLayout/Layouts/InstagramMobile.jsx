import React from 'react';
import { Feed } from "../../main";
import Header from "../Header/Header-Layout/Header";
import StoryLayout from "../Stories/StoryLayout";

const InstagramMobile = () => {

  return (
    <div>
      <Header />
      <StoryLayout />
      <Feed />
    </div>
  )
};

export default InstagramMobile;
