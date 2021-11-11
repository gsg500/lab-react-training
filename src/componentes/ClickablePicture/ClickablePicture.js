import { useState } from 'react';

function ClickablePicture(props) {
const [img, setImg] = useState(props.img);
function OutImg(){
    if (img === props.img){
        setImg(props.imgClicked);
       } else {
           setImg(props.img);
       }
}
return <img onClick={OutImg} src={img} alt=''/>  
}

export default ClickablePicture;