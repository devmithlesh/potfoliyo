import React from 'react'

function ArchvCard(props) {
    return (
        <>
            <div>
                <img src={props.image} alt={props.alts} className="bg-gray-200 py-1 px-1 img-box" />
                <a href={props.image}
                    className="text-xs border-p" target="_blank"
                    rel="noopener noreferrer">{props.title}</a>
            </div>
        </>
    )
}

export default ArchvCard;