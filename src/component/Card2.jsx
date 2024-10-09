import React from 'react'

function Card2({card2image, btnText}) {
    return (
        <div className='mb-20 md:mb-0'>
            <img
                className="w-full h-full object-cover rounded-xl mb-4"
                src={card2image}
                alt={card2image}
            />
            <button className="w-full bg-[#625d52] text-white py-2 px-4 rounded-xl hover:bg-[#49453f]">
                {btnText}
            </button>
        </div>
    )
}

export default Card2
