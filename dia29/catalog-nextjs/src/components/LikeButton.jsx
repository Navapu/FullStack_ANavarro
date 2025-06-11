"use client"
import { useState } from "react";
import { Button } from "./ui/Button";

const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const textlike = likes ? `❤️ ${likes}` : 'Like ! ❤️'
    return ( 
            <Button onClick={() => {
                setLikes(prev => prev +1 )
            }} size="sm">
                {textlike}
            </Button>
     );
}
 
export default LikeButton;