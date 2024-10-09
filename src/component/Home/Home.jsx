import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon, CircleDot, DotIcon, MessageSquareMoreIcon, StarIcon } from 'lucide-react';
import React, { useState } from 'react';
import Card from '../Card';
import Card2 from '../Card2';




import Slider from '../Slider';

function Home() {

  const cardData = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/dune-muurverf-571762.jpg?v=1709306310',
      hoverImage: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/dune-muurverf-852176.jpg?v=1709306310',
      name: 'DUNE LAK',
      price: '€65,00',
      description: 'LAK',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/dune-muurverf-571762.jpg?v=1709306310',
      hoverImage: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/dune-lak-803636.jpg?v=1709306307',
      name: 'Dune muurverf',
      price: '€70,00',
      description: 'Muurverf',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/dune-muurverf-571762.jpg?v=1709306310',
      hoverImage: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/products/coral-muurverf-652855.jpg?v=1709291659',
      name: 'View Coral muurverf',
      price: '€75,00',
      description: 'Muurverf',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/files/Shades-by-Eric-Kuster-verfaccessoires-ANZA-verf-Micmex-muurverf-roller-10cm-2.jpg?v=1709641838',
      hoverImage: 'https://cdn.shopify.com/s/files/1/0731/9388/1903/files/Shades-by-Eric-Kuster-verfaccessoires-ANZA-verf-Micmex-muurverf-roller-18cm-1.jpg?v=1709641838',
      name: 'Verfrollers voor muurverf',
      price: '€80,00',
      description: 'Rollers',
    },
  ];

  //left images slides
  const sliderImages = [
    "//shadesbyerickuster.com/cdn/shop/files/orignal.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/off-white.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/grey.jpg?v=1715943291",
    "//shadesbyerickuster.com/cdn/shop/files/green.jpg?v=1715924683",
    "//shadesbyerickuster.com/cdn/shop/files/taupe.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/mustard.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/brown.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/plum.jpg?v=1715924684",
    "//shadesbyerickuster.com/cdn/shop/files/nude.jpg?v=1715924683",
    "//shadesbyerickuster.com/cdn/shop/files/blue.jpg?v=1715924684",

  ];

  const imageText = [
    "8 Original Shades",
    "8 Shades of Off-white",
    "8 Shades of Grey",
    "8 Shades of Green",
    "8 Shades of Taupe",
    "8 Shades of Mustard",
    "8 Shades of Brown",
    "8 Shades of Plum",
    "8 Shades of nude",
    "8 Shades of Blue",
  ];

  const rightSections = [
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',

      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',

      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
    ],
    [

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
    ],
    [

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
    ],
    [

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },
    ],
    [
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/ibiza-salt-muurverf-684156.jpg?v=1710383481',
        name: 'Deur',
        description: 'Soil Lak',
        price: '€65,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/sunstone-muurverf-424999.jpg?v=1709223408',
        name: 'Dune muurverf',
        description: 'Dusk Muurverf',
        price: '€70,00',
      },
      {
        image: '//shadesbyerickuster.com/cdn/shop/products/bark-lak-597032.jpg?v=1709389002',
        name: 'Verfrollers voor muurverf',
        description: 'Rollers',
        price: '€80,00',
      },

      {
        image: '//shadesbyerickuster.com/cdn/shop/products/drift-muurverf-296894.jpg?v=1709306312',
        name: 'View Coral muurverf',
        description: 'Muurverf',
        price: '€75,00',
      },

    ],

  ];

  const card2Data = [
    {
      card2image: '//shadesbyerickuster.com/cdn/shop/files/Hallway-wall.png?v=1715851236',
      btnText: 'Muurverf',
    },
    {
      card2image: '//shadesbyerickuster.com/cdn/shop/files/Hallway-Plafond.png?v=1715851236',
      btnText: 'Plafondverf',
    },
    {
      card2image: '//shadesbyerickuster.com/cdn/shop/files/Hallway-wall.png?v=1715851236',
      btnText: 'Muurverf',
    },
    {
      card2image: '//shadesbyerickuster.com/cdn/shop/files/Hallway-Plafond.png?v=1715851236',
      btnText: 'Plafondverf',
    },
  ]

  const cards = [1, 2, 3, 4, 5];
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleReviewPrev = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleReviewNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));

  }


  return (
    <>
      <div className="relative w-full h-screen">

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover animate-zoomVideo"

        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/9ddf77bba1d74f6da22ad0ae06c94043.mp4"
            type="video/mp4"

          />

        </video>


        <div className="absolute bottom-20 left-10 text-white z-10">
          <h1 className="text-2xl font-bold mb-2 font-serif">Wall Perfection</h1>
          <h3 className="text-xl font-serif">Shades by Eric Kuster verf collectie</h3>
        </div>

        <div className='fixed bottom-4 right-9 flex align-middle justify-center p-3 rounded-xl z-50' style={{ backgroundColor: '#625d52' }}>
          <div className='flex flex-row gap-2 items-center'>
            <MessageSquareMoreIcon
              className='h-5 w-5 text-white'
            />
            <span className='font-serif text-lg text-white'>Contact</span>
          </div>

        </div>

      </div>

      {/* ICON AND TEXT  */}
      <div className="hidden  w-full  py-3 md:flex justify-around items-center" style={{ backgroundColor: '#e3dfda' }}>

        <div className="flex flex-row items-center space-x-2">
          <img
            src="https://shadesbyerickuster.com/cdn/shop/files/Gemaakt_met_liefde.png?v=1700136676"
            alt="Icon 1"
            className="w-10 h-10 mb-2 object-contain"
          />
          <span className="text-gray-700 text-sm">Gemaakt met liefde</span>
        </div>


        <div className="flex flex-row items-center space-x-2">
          <span className="text-gray-700 text-sm">4.8</span>
          <img
            src="https://shadesbyerickuster.com/cdn/shop/files/rating.png?v=1709017199"
            alt="Icon 2"
            className="h-12 w-16  object-contain "
          />
          <span className="text-gray-700 text-sm">1000+ Reviews</span>
        </div>


        <div className="flex flex-row items-center space-x-2">
          <img
            src="https://shadesbyerickuster.com/cdn/shop/files/Next_day_delivery.png?v=1699013624"
            alt="Icon 3"
            className="w-10 h-10 mb-2  object-contain"
          />
          <span className="text-gray-700 text-sm">Volgende dag geleverd</span>
        </div>


        <div className="flex flex-row items-center space-x-2">
          <img
            src="https://shadesbyerickuster.com/cdn/shop/files/6a._kwast.png?v=1699208681"
            alt="Icon 4"
            className="w-10 h-10 mb-2 object-contain"
          />
          <span className="text-gray-700 text-sm">Kleur perfectie</span>
        </div>
      </div>

      {/* CARDS  */}
      <div className="container mx-auto p-6">
        {/* Section with heading, subheading, and button */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-black font-serif ">Shades by Eric Kuster</h1>
            <h3 className="text-xl mb-4 text-black font-serif">Ga aan de slag met onze best verkochte kleuren en creëer jouw ultieme woonbeleving</h3>
          </div>

          <button className="  px-8 py-5 rounded-2xl  text-black" style={{ backgroundColor: '#d1cabc' }}>
            Ontdek alle kleuren
          </button>
        </div>


        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              hoverImage={card.hoverImage}
              name={card.name}
              price={card.price}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* TWO CARD  */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg px-12">

        <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-1/2 bg-gray-200 p-4 py-14 rounded-lg h-full">

          <img src="//shadesbyerickuster.com/cdn/shop/products/favorites-a5-sample-pack-487352.jpg?v=1696361295" alt="img" className="w-36 h-40 rounded-2xl" />


          <div className='flex flex-col justify-between h-full'>
            <h3 className="text-2xl font-semibold mb-2 text-black font-serif">Favorites Pack</h3>
            <p className="text-gray-600 mb-2">Test de 4 best verkochte Shades by Eric Kuster kleur samples gemakkelijk thuis uit en kies jouw droomkleur</p>
            <p className="text-gray-800 font-semibold mb-4">Total: €9,00</p>


            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              voeg toe aan mijn winkelmand
            </button>
          </div>
        </div>


        <div className="w-full lg:w-1/2 h-full">
          <img src="https://shadesbyerickuster.com/cdn/shop/files/Shades-by-eric-kuster-8-SHADES-of-GREY-Inspiration-Sands_7f232035-b40b-4bc9-9ecd-bf30b2591938.jpg?v=1715233858" alt="img" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* SLIDER PRODUCT SECTION*/}
      <div className='px-14 hidden md:block'>
        <div className="flex justify-between ">
          <div>
            <h2 className='text-black text-2xl'>Kleurcombinaties</h2>
            <img src="https://cdn.shopify.com/s/files/1/0860/5315/9223/files/handtekening_zwart.webp?v=1711728502" alt="signature"
              className="w-20 h-10 ml-24 mt-1 object-contain"
            />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0731/9388/1903/files/pro_ico2.jpg?v=1715768967" alt="dots" />
          </div>
        </div>
        {/* big div  */}
        <div>
          <Slider images={sliderImages}
            rightSections={rightSections}
            imagesText={imageText}
          />


        </div>

      </div>

      {/* VIDEO WITH IMAGE */}
      <div className='w-full  bg-[#ebe9e7] px-14 mt-4 hidden md:block'>
        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='w-1/2 rounded-2xl bg-[#ebe9e7] m-8'>

            <img className='w-full rounded-3xl  object-contain' src="//shadesbyerickuster.com/cdn/shop/files/eric_pro.jpg?v=1715076859" alt="standing man" />
          </div>

          <div className='w-1/2 bg-white rounded-3xl p-7 m-8'>
            <div className=''>

              <video className="w-full rounded-xl" autoPlay muted loop>
                <source src="https://cdn.shopify.com/videos/c/o/v/b157e21d16334e1aa8c212e471ead3fd.mp4" type="video/mp4" />

              </video>


              <span className='text-black font-serif text-4xl'>How to Use</span>
            </div>
            <div className='mt-4'>
              {/* <label htmlFor="options" className="block text-black font-serif text-xl mb-2">Select Option:</label> */}
              <select id="options" className="w-full border border-gray-300 rounded-lg p-2 text-black">
                <option value="" disabled selected>Lees hier de stappen </option>
                <option value="option1">Plak de vloer af</option>
                <option value="option2">Repareer gaatjes in je muur</option>
                <option value="option3">Schuur alle oneffenheden weg</option>
                <option value="option4">Primer de muur</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* CARD 2 //4 door */}

      <div className='w-full bg-white px-14 py-9'>
        <div>
          <h2 className='text-black text-2xl md:text-3xl  font-serif p-3'>Ervaringen van klanten</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {card2Data.map((cards, index) => (
            <Card2
              key={index}
              card2image={cards.card2image}
              btnText={cards.btnText}
            />
          ))}
        </div>
      </div>





      {/* Review crousal  */}
      <div className='w-full bg-[#ebe9e7] px-5 md:px-14 mt-8'>
        <div className='flex flex-col md:flex-row  justify-between pt-8'>
          <div>
            <h2 className='text-black'>Ervaringen van klanten</h2>
            <div>
              <span className="flex  gap-1">
                <StarIcon className='h-5 w-5 fill-[#625d52] ' />
                <StarIcon className='h-5 w-5 fill-[#625d52]' />
                <StarIcon className='h-5 w-5 fill-[#625d52]' />
                <StarIcon className='h-5 w-5 fill-[#625d52]' />
                <StarIcon className='h-5 w-5 fill-[#625d52]' />
                <span className='text-black'> 331 beoordelingen</span>
              </span>
            </div>
          </div>

          <div>
            <button className="bg-[#625d52] text-white py-2 px-4 rounded-xl hover:bg-gray-800 mt-2 md:mt-0">
              Bekijik alle reviews
            </button>
          </div>
        </div>

        {/* REVIEW CARD */}
        <div className='h-full  w-screen '>
          <div className='flex overflow-hidden '>
            {cards.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-transform my-2`} 
                style={{
                  transform: `translateX(-${currentReviewIndex * 100}%)`,
                }}
              >
                <div className='bg-[#625d52] border-1 border-white p-4 mt-5 rounded-3xl w-1/3 md:w1/2 lg:w-1/2'  > {/* Adjusted padding here */}
                  <div className='flex justify-between'>
                    <span className="flex gap-1">
                      <StarIcon className='h-5 w-5 fill-[#625d52] text-white' />
                      <StarIcon className='h-5 w-5 fill-[#625d52] text-white' />
                      <StarIcon className='h-5 w-5 fill-[#625d52] text-white' />
                      <StarIcon className='h-5 w-5 fill-[#625d52] text-white' />
                      <StarIcon className='h-5 w-5 fill-[#625d52] text-white' />
                    </span>
                    <span className='font-serif text-lg text-white'>Geverifieerd</span>
                  </div>
                  <div>
                    <p className='p-2 font-serif text-white'> {/* Adjusted padding here */}
                      Snelle levering. Ik kon zelfs kiezen wanneer ik het afgeleverd wilde hebben. Zeer stevige verpakking. En uiteraard een geweldig mooie kleur!!
                    </p>
                  </div>
                  <div>
                    <p className='flex justify-center text-xl font-semibold text-white'>Rob Canton</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-around'>
            <button
              onClick={handleReviewPrev}
              className="transform bg-gray-700 text-white px-2 py-1 rounded-md"
            >
              <ArrowBigLeftDashIcon />
            </button>
            <button
              onClick={handleReviewNext}
              className="transform bg-gray-700 text-white px-2 py-1 rounded-md"
            >
              <ArrowBigRightDashIcon />
            </button>
          </div>
        </div>


      </div>



      {/* Two Pictures  */}

      <div className='bg-[#ebe9e7] w-full h-full pb-10'>
        <div className='pt-3'>
          <h2 className='text-black text-center font-serif text-4xl '>Ontdek alle merken</h2>
        </div>

        <div className='flex flex-col md:flex-col lg:flex-row px-14 gap-3 mt-6'>
          <div>
            <img src="//shadesbyerickuster.com/cdn/shop/files/pearls_1.jpg?v=1715248937" alt=""
              className='rounded-2xl'
            />

            <button className="w-full bg-[#625d52] text-white mt-2 py-2 px-4 rounded-xl hover:bg-[#49453f]">
              Pearls by Eric kuster
            </button>
          </div>
          <div>
            <img src="https://shadesbyerickuster.com/cdn/shop/files/ombree.jpg?v=1715249074" alt=""
              className='rounded-2xl'
            />
            <button className="w-full bg-[#625d52] text-white mt-2 py-2 px-4 rounded-xl hover:bg-[#49453f]">
              Ombré by Eric Kuster

            </button>
          </div>
        </div>
      </div>

      {/* uncomplete Pictures  */}

      <div className='object-contain'>
        <img src="//shadesbyerickuster.com/cdn/shop/files/whitttt_1.jpg?v=1715316508" alt="" />
      </div>


      {/* Text or Signature  */}

      <div className='bg-[#ebe9e7] pt-3'>

        <div className='flex flex-col items-center'>
          <div className=''>
            <p className='text-3xl text-center text-black font-serif'>Inspired By Nature</p>
          </div>
          <div>
            <img src="//shadesbyerickuster.com/cdn/shop/files/handtekening_zwart_sign.png?v=1715254092" alt=""
              className='h-14 object-contain'
            />
          </div>
        </div>

      </div>


      {/* newsletter */}

      {/* <div className='w-full bg-[#ebe9e7] h-screen'>

        <div className="flex justify-end items-center h-full px-14 relative ">

          <div className='absolute z-30  flex justify-center '>
            <div className='bg-[#c6b8a9] h-44 w-96 rounded-2xl'>
              <div className='flex justify-between p-3'>
                <p className='text-black'> Meld je aan en ontvang 5% korting</p>
                <button className='bg-[#ebe9e7] text-black rounded-md p-1'>  Inspiratie</button>
              </div>
              <hr />
              <div className='p-2'>
                <label className='text-black' htmlFor="Email">Email</label>
                <br />
                <div className='p-1 flex justify-between'>
                  <input type="text" name="" placeholder='email' id=""
                    className='w-full p-2 rounded-2xl'
                  />
                  <button className=" bg-[#625d52] text-white py-2 px-4 rounded-xl hover:bg-[#49453f]">
                    parmanshu
                  </button>
                </div>

              </div>

            </div>
          </div>

          <div className="w-80 h-80 flex items-center justify-center">
            <img
              src="//shadesbyerickuster.com/cdn/shop/files/Kopie_van__DSC0647-instagram.jpg?v=1715242652&width=1024"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>


        </div>
      </div> */}

      <div className='w-full bg-[#ebe9e7] h-80 md:h-screen'>
        <div className="flex justify-end items-center h-full px-14 relative">

          {/* Email Card */}
          <div className='absolute left-5  z-30 md:flex md:justify-center '
            style={{ width: '90%', top: '30%' }}>
            <div className='bg-[#c6b8a9] h-52 w-full max-w-2xl rounded-2xl shadow-lg backdrop-blur-lg bg-opacity-50 p-4'>
              <div className='flex justify-between p-3'>
                <p className='text-black text-lg  font-serif'> Meld je aan en ontvang 5% korting</p>
                <button className='bg-[#ebe9e7] text-[#625d52] rounded-2xl p-2 cursor-default font-serif inline-flex items-center'> <CircleDot className=' animate-pulse px-1' /> Inspiratie</button>
              </div>
              <hr />
              <div className='p-4'>
                <label className='text-black block mb-2 font-serif' htmlFor="Email">Email</label>
                <div className='flex space-x-2'>
                  <input type="text" placeholder='email'
                    className='w-full p-2 rounded-xl bg-white bg-opacity-70 shadow-inner focus:outline-none focus:ring-2 text-black focus:ring-[#625d52]' />
                  <button className="bg-[#625d52] text-white py-2 px-5 rounded-xl hover:bg-[#49453f] font-serif">
                    Meld
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="w-96 h-96  items-center justify-center hidden md:block">
            <img
              src="//shadesbyerickuster.com/cdn/shop/files/Kopie_van__DSC0647-instagram.jpg?v=1715242652&width=1024"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
