import DropdownMenu from "./DropdownMenu";
import { featuresSub, companySub } from "../menus/menus";
export default function Sidebar(props) {
   
    return (
        <>
        <div className={`w-screen h-screen bg-black opacity-50 absolute top-0 ${props.show ? '' : 'hidden'}`}></div>

        <div className={`h-screen w-60 absolute top-0 right-0 bg-a-white p-5 text-m-grey ${ props.show ? 'translate-x-0' : 'translate-x-60' } transition-transform duration-300`}>
           <img src="images/icon-close-menu.svg" className="ml-auto mb-8" alt="" onClick={props.handleClose} />
           <div className="flex flex-col">
                <DropdownMenu name="Features" submenus={featuresSub} height='h-40'/>
                <DropdownMenu name="Company" submenus={companySub} height='h-32'/>
                <a href="#" className="mt-4">Carreers</a>
                <a href="#" className="mt-4">About</a>
                <div className="flex flex-col space-y-2">
                    <button className="mt-10">Login</button>
                    <button className="border border-a-black rounded-lg py-1.5">Register</button>
                </div>
            </div>
        </div>
        </>
    );
}