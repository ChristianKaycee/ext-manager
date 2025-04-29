import Toggle from "./toggle";
export default function Extension(prop){
    return(

        <div className={prop.darkmode ? "extension-list-item e-theme-dark" : "extension-list-item e-theme-light"}>
            <div className="up">
                <div className="img">
                    <img src={prop.logo} alt={prop.name}/>
                </div>
                <div className="right">
                    <p className="title">{prop.name}</p>
                    <p className={prop.darkmode ? "desc d-theme-dark" : "desc d-theme-light"}>{prop.description}</p>
                </div>
            </div>
            <div className="down">
                <button className={prop.darkmode ? "rem-theme-dark" : "rem-theme-light"}>Remove</button>
                <Toggle value={prop.isActive}/>
            </div>
        </div>
    );
}