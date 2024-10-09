import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#625d52] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">


        <div>
          <img src="//shadesbyerickuster.com/cdn/shop/files/footer_logo.png?height=217&v=1719990139" alt="Shades Logo" className="mb-4" />
        </div>


        <div>
          <h3 className="font-bold mb-3 font-serif text-xl">Klantenservice</h3>
          <ul>
            <li className="mb-2"><a href="#">Contact opnemen</a></li>
            <li className="mb-2"><a href="#">Order tracking</a></li>
            <li className="mb-2"><a href="#">Verzending & retourneren</a></li>
            <li className="mb-2"><a href="#">Betaalmethodes</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Assortiment */}
        <div>
          <h3 className="font-bold mb-3 font-serif text-xl">Assortiment</h3>
          <ul>
            <li className="mb-2"><a href="#">Muurverf</a></li>
            <li className="mb-2"><a href="#">Wall Scrub</a></li>
            <li className="mb-2"><a href="#">Lak</a></li>
            <li className="mb-2"><a href="#">Primer</a></li>
            <li className="mb-2"><a href="#">Samples & testers</a></li>
            <li><a href="#">Verf accessoires</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold mb-3 font-serif text-xl">Volg ons op Social Media</h3>
          <div className="flex gap-2 mb-4">

            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/13051/13051693.png" alt="pintrest" className='h-10 w-28 object-contain' /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" className='h-10 w-28 object-contain' /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/11515/11515930.png" alt="Snapchat" className='h-10 w-28 object-contain' /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" alt="YouTube" className='h-10 w-28 object-contain' /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="Facebook" className='h-10 w-28 object-contain' /></a>
          </div>

          <h3 className="font-bold mb-3 font-serif text-xl">Betaal veilig</h3>
          <div className="flex gap-2">
            <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Payment Method " className='h-14 w-16 object-contain' />
            <img src="https://cdn-icons-png.flaticon.com/128/1440/1440517.png" alt="Payment Method " className='h-14 w-16 object-contain' />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Payment Method " className='h-14 w-16 object-contain' />
            <img src="https://cdn-icons-png.flaticon.com/128/16174/16174514.png" alt="Payment Method " className='h-14 w-16 object-contain' />
            <img src="https://cdn-icons-png.flaticon.com/128/16174/16174534.png" alt="Payment Method " className='h-14 w-16 object-contain' />

          </div>
        </div>
      </div>


      <div className=" py-4 mt-8 text-center">
        <hr />
        <a href="#" className="text-sm md:text-md text-white mx-4 relative inline-block group">
          Privacybeleid
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-sm md:text-md text-white mx-4 relative inline-block group">
          Algemene voorwaarden
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-sm md:text-md text-white mx-4 relative inline-block group">
          Cookies
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>

      </div>
    </footer>
  );
}

export default Footer;
