//11&12
import React from "react";
import "./SidebarOption.css";

function SidebarOption({title, Icon}){
    return (
        <div className="sidebarOption">
             
            {Icon && <Icon className="sidebarOption__icon"/>  /* icons package installed */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;