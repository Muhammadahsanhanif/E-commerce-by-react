function Cards({image, title, price}) {
    return(
       <div  className="lg:w-1/4 md:w-1/2 p-10 w-full  flex flex-wrap -m-4" >
       <a className="block relative h-48 rounded overflow-hidden">
         <img
           alt="ecommerce"
           className="object-cover object-center w-full h-full block"
           src={image}
         />
       </a>
       <div className="mt-4">
         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {title}
         </h3>
         
         <p className="mt-1">{price}</p>
       </div>
     </div>
    )
   
   }
   export default Cards;