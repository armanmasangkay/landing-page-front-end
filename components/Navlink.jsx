import { useState } from "react";
import FloatingCard from "./FloatingCard";
export default function Navlink(props) {

    const [showFloating, setShowFloating] = useState(false);

    function clickDrop() {
        setShowFloating(! showFloating);
    }

    function handleBlur() {
        setShowFloating(false);
    }

    return (
        <>
            <a href="#"  onClick={clickDrop} onBlur={handleBlur} className="text-m-grey text-sm lg:flex lg:items-center hidden hover:text-a-black">
                <span>{props.name}</span>
                {props.isDrop ? <img src={`images/icon-arrow-${ showFloating ? 'up' : 'down'}.svg`} className="ml-2" alt="" /> : '' }
            </a>
            {  props.isDrop ? <FloatingCard submenus={props.menu} isOpen={showFloating} height={props.dropHeight}/> : '' }
        </>
    );
}