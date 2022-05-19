export default function Submenu(props) {
    return (
        <div className={`flex items-baseline justify-start mt-4 ${props.indented ? 'ml-4': '' }`}>
            <img src={props.src} alt="" className="mr-3" />
            <a href="#">{props.name}</a>
        </div>
    );
}