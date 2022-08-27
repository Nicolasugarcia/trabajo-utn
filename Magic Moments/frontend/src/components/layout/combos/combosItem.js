import React from "react";

const CombosItem = (props) => {
    const {titulo, imagen, body, } = props;
    return (
        <div className="combos">
            <h3>{titulo}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <hr/>
        </div>
    );
}

export default CombosItem;