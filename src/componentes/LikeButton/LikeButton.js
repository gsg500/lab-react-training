import {useState} from 'react';
const tipoCor = ['purple','blue','green','yellow','orange','red'];

function LikeButton() {
    let [number, setNumber] = useState({amountOfLikes: 0});
    let clickLike = () => {
        setNumber({ amountOfLikes: number.amountOfLikes + 1 })};
    let style = {backgroundColor: tipoCor[number.amountOfLikes % tipoCor.length]};    
    return ( <>
    <button onClick={clickLike} style={style}> 
    {number.amountOfLikes} Likes 
    </button> </>
    )
};

export default LikeButton