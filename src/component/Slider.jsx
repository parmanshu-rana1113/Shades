import { ChevronLeftCircleIcon, ChevronRightCircleIcon, SeparatorHorizontal } from 'lucide-react';
import React, { useState } from 'react';

const Slider = ({ images, rightSections, imagesText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setCurrentSlide((prev) => (prev === 0 ? imagesText.length - 1 : prev - 1));

    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCurrentSlide((prev) => (prev === imagesText.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="flex justify-between items-center">
                {/* Left Image */}
                <div className="w-2/3">
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex}`}
                        className="w-full h-full rounded-l-3xl"
                    />
                </div>

                {/* Right Section */}
                <div className="w-1/3 p-4  flex flex-col gap-4 bg-gray-200">
                    {/*  Cards */}
                    <div className="grid grid-cols-1 gap-2">
                        {rightSections[currentIndex].map((section, idx) => (
                            <>
                                <div className="flex flex-row bg-white p-2.5 rounded-xl shadow-md justify-around items-center ">
                                    <div key={idx} className="flex flex-col">

                                        <h2 className="text-xl text-black font-serif">{section.name}</h2>
                                        <p className="text-black text-sm font-serif">{section.description}</p>

                                        <button className="w-full border-2 border-gray-300 py-1 px-4 rounded-lg text-gray-700 bg-[#d1cabc] hover:bg-gray-100">
                                            + Kleurkaart voor €3,-
                                        </button>
                                        <button className=" m-1 w-full bg-gray-700 text-white py-1 px-4 rounded-lg hover:bg-gray-800">
                                            Ontdek deze kleur
                                        </button>

                                    </div>

                                    <img src={section.image} alt={section.name} className="h-28 w-24 rounded-xl mb-2 " />
                                </div>

                            </>

                        ))}
                    </div>
                </div>
            </div>


            <div className='flex justify-around'>
                <button
                    onClick={handlePrev}
                    className="bg-gray-400 text-white px-3 py-2 rounded-full hover:bg-gray-600 mt-4"
                >

                    <ChevronLeftCircleIcon />
                </button>
                <span className="text-lg text-gray-800 font-serif mt-2">
                    {imagesText[currentSlide]}
                    </span>
                   
                <button
                    onClick={handleNext}
                    className="bg-gray-400 text-white px-3 py-2 rounded-full hover:bg-gray-500 mt-4"
                >
                    <ChevronRightCircleIcon />
                </button>

            </div>

        </>
    );
};

export default Slider;
