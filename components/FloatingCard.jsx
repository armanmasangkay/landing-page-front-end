import Submenu from "./Submenu";

export default function FloatingCard(props) {
    return (
        <div className={`w-max absolute mt-4 shadow-2xl border border-gray-100 rounded-lg bg-white transition-all duration-200 overflow-hidden ${props.isOpen ? props.height + ' p-6 pt-2' : 'h-0 p-0 border-0'}`}>
            {props.submenus.map((value, index) => {
                return <Submenu src={value.src} name={value.name} key={index} indented={false}/>
            })}
        </div>
    );
}