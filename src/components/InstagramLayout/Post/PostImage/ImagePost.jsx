import React from 'react';

const ImagePost = (props) => {
    const _stylesLayout = {
        img: {
            width: '100%',
            height: '100%',
            margin:0            
        },
    };

    return (
        <div>
            <img src={props.image} alt="" style={_stylesLayout.img} />
        </div>
    );
};

export default ImagePost;