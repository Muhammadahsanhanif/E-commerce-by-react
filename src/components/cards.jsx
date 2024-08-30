import { motion } from 'framer-motion';

function Cards({ image, title, price }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 p-4 w-full">
      {/* Card Container */}
      <motion.div
        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
        whileHover={{ scale: 1.03 }} // Slightly scale up the card on hover
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <a className="block relative h-48 rounded-t-lg overflow-hidden">
          <motion.img
            alt={title}
            className="object-cover object-center w-full h-full"
            src={image}
            whileHover={{ scale: 1.05 }} // Slight zoom effect on image hover
            transition={{ duration: 0.3 }}
          />
        </a>

        {/* Content Container */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-gray-800 text-lg font-semibold mb-2">
            {title}
          </h3>
          {/* Price */}
          <p className="text-indigo-600 text-xl font-bold mb-4">${price}</p>
          {/* Action Button */}
          <motion.button
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }} // Slightly scale up the button on hover
            transition={{ duration: 0.3 }}
          >
            View More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
