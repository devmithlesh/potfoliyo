import React from 'react'

function ProCard(props) {
    return (
        <>
            <div>
                <img src={props.image} alt={props.alts} className="bg-gray-200 py-1 px-1 img-box" />
                <a href={props.weblink}
                    className="text-xs text-gray-300 border-p cursor-pointer " target="_blank"
                    rel="noopener noreferrer">{props.title}</a>
            </div>
        </>
    )
}

export default ProCard;