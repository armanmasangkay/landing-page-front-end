import { useState } from "react";
import Navlink from "./Navlink";
import Sidebar from "./Sidebar";
import { companySub, featuresSub } from "../menus/menus";

export default function Nav() {
    const [showSideBar, setShowSideBar]=useState(false);
    const [showFloating, setShowFloating] =useState(false);

    function showMenu() {
        setShowSideBar(! showSideBar);
    }

    function toggleFloating() {
        setShowFloating(! showFloating);
    }

    return (
        <>
        <nav className="flex justify-between lg:justify-start space-x-10 p-4 items-center">
            <img src="images/logo.svg" className="mr-10" />
            <img src="images/icon-menu.svg" className="lg:hidden" onClick={showMenu}/>
            <div class="relative hidden lg:block">
                <Navlink name="Features"  menu={featuresSub} isDrop dropHeight='h-48'/>
            </div>

            <div class="relative hidden lg:block">
                <Navlink name="Company" menu={companySub} isDrop dropHeight='h-36' />
            </div>
           
            <Navlink name="Careers"/>
            <Navlink name="About"/>
            <div className="hidden lg:flex space-x-5 justify-end w-full text-m-grey text-sm">
                <button className="hover:text-a-black">Login</button>
                <button className="py-1 px-2 rounded-md border border-m-grey hover:text-a-black hover:border hover:border-a-black">Register</button>
            </div>
        </nav>
       
        <Sidebar show={showSideBar} handleClose={showMenu}></Sidebar>
        </>
    )
}