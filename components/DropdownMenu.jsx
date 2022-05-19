import { useState } from "react";
import Submenu from "./Submenu";

export default function DropdownMenu(props) {

    const [collapse, setCollapse] = useState(false);


    function handleClick () {
      setCollapse (! collapse);
    }
    return (
        <div className="mt-4">
          <a href="#" onClick={handleClick} className="flex items-center">{props.name}
           <img src={`images/icon-arrow-${collapse ? 'up' : 'down'}.svg`} className="mx-2"/>
          </a>

          <div className={`flex flex-col ${collapse ? props.height : 'h-0'} transition-[height] duration-300 ease overflow-hidden`}>
            
              {props.submenus.map((value, index)=> {
                return <Submenu src={value.src} name={value.name} key={index} indented/>
              })}

          </div>
        </div>

    );

}