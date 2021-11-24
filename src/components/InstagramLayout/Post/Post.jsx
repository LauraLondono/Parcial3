import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import ImagePost from './PostImage/ImagePost';
import Icons from './User/Icons';
import Caption from './User/Caption';
import CommentLayout from './User/Comments/CommentsLayout'

const Post = (props) => {
  const _stylesLayout = {
    ig: {     
      width: '100%',  
      backgroundColor: 'white',
      position:'relative',      
      marginBottom:'30px',
      display:'flex',
      flexFlow:'column',
      border:'1px solid #dbdbdb',
      borderRadius:'3px'     
    },
  };
  
  return (
    <div style={_stylesLayout.ig}>
      <PostHeader userName={props.userName} image={props.profilePic}/>
      <ImagePost image={props.image}/>
      <Icons/>
      <Caption userName={props.userName} text={props.caption}/>
      <CommentLayout/>

    </div>
  );
};

export default Post;