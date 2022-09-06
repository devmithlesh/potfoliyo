import React from 'react'

function ArchvCard(props) {
    return (
        <>
            <div>
                <a href={props.image}
                    className="text-xs border-p" target="_blank"
                    rel="noopener noreferrer">
                    <img src={props.image} alt={props.alts} className="bg-gray-200 py-1 px-1 img-box transform hover:scale-105 ease-out duration-700 mb-1" />
                    {props.title}
                </a>
            </div>
        </>
    )
}

export default ArchvCard;