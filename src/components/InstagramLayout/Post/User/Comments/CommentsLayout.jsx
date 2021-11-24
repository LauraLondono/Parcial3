import React from 'react';
import Comment from './Comment'

const CommentLayout = (props) => {

    const _stylesLayout = {
        ig: {
            width: '100%',                        
        },
        text:{
            padding:'10px', 
            fontSize: '13px',
            cursor: 'pointer',
            color:'#a2a2a2',
        },
        addComment:{
            display:'flex',
            alignItems:'center',
            height:'40px',
            borderTop:'1px solid lightgray',
            paddingTop:'10px',
            paddingBottom:'10px',
            marginTop:'20px',
            icon:{
                width:'25px',
                height:'25px',
                padding:'10px',
                
            },
            input:{
                height:'100%',
                border:'none',
                width:'84%',                
            },
            postText:{
                color:'#0095f6',
                fontWeight:'bold',
                fontSize:'12.5px',
                opacity:'0.3',
                textAlign:'center',
                paddingLeft:'10px'

            }

        }
        
    };

    return (
        <div style={_stylesLayout.ig}>
            <span style={_stylesLayout.text}>View all 100 comments</span>
            <Comment userName='xoxoLola' text='lorem ipsum polredma'/>
            <Comment userName='biro9870' text='lorem ipsum polredma'/>
            <span style={_stylesLayout.text}>2 HOURS AGO</span>
            <div style={_stylesLayout.addComment}>
                <svg style={_stylesLayout.addComment.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="'#a2a2a2" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"/>
                </svg>
                <input style={_stylesLayout.addComment.input} type="text" placeholder="Add a comment..."/>
                <span style={_stylesLayout.addComment.postText}>Post</span>
            </div>
        </div>
    );
};

export default CommentLayout;