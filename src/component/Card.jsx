import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ image, hoverImage, name, price, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="max-w-sm rounded-lg overflow-hidden p-4 bg-white text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <img
                className="w-full h-56 object-cover rounded-lg mb-4"
                src={isHovered ? hoverImage : image}
                alt={name}
            />

            {/* Name and Description */}
            <div>
                <h2 className="font-bold text-xl text-gray-800 mb-1">{name}</h2>
                <p className="text-gray-600 text-sm mb-2">{description}</p>
                <p className="text-gray-700 text-base font-medium mb-4">{price}</p>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
                <button className="w-full border-2 border-gray-300 py-2 px-4 rounded-lg text-gray-700">
                    + Kleurkaart voor €3,-
                </button>
                <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                    Ontdek deze kleur
                </button>
                
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    hoverImage: PropTypes.string.isRequired,    
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
