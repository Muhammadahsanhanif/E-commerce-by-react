import { useState } from 'react';

function Termonil() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[{
            name: 'HOLDEN CAULFIELD',
            title: 'Senior Product Designer',
            imgSrc: 'https://dummyimage.com/302x302',
            text: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
          }, {
            name: 'ALPER KAMU',
            title: 'UI Developer',
            imgSrc: 'https://dummyimage.com/300x300',
            text: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
          }, {
            name: 'HENRY LETHAM',
            title: 'CTO',
            imgSrc: 'https://dummyimage.com/305x305',
            text: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
          }].map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div
                className={`h-full text-center transform transition-transform duration-500 ease-in-out ${
                  hoverIndex === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 transition-transform duration-300 ease-in-out"
                  src={testimonial.imgSrc}
                />
                <p className="leading-relaxed text-gray-700 transition-opacity duration-300 ease-in-out hover:opacity-80">
                  {testimonial.text}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Termonil;
