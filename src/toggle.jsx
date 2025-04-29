export default function ToggleCheck(prop){
    return(
        <div className="toggle">
            <input type="checkbox" className="check" value={prop.value}/>
            <div></div>
        </div>
    );
}