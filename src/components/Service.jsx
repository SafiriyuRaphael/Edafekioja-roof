const Service = () => {
  const services = [
    {
      category: "Roofing Solutions",
      heading: "We provide a variety of roofing options that combine strength and style for both residential and commercial properties.",
      items: [
        {
          title: 'Aluminium Roofs',
          about: "Lightweight and corrosion-resistant, aluminium roofs are an ideal choice for those looking for a durable and cost-effective roofing solution. Their sleek finish complements modern architectural designs while providing long-term protection.",
          img:"/Services/aluminium roof.jpg"
        },
        {
          title: 'Stone-Coated Roofs',
          about: "Stone-coated roofing provides a stylish and durable solution with excellent weather resistance. The stone coating gives a premium look and increases the lifespan of the roof, making it a perfect choice for homeowners looking for both beauty and durability.",
          img:"/Services/stone coated.jpg"
        },
        {
          title: 'Metal Roofs (Steel, Zinc, Copper)',
          about: "These metal roofing options are strong, fire-resistant, and energy-efficient. Whether you choose steel, zinc, or copper, you are assured of a roof that is both robust and low-maintenance. Metal roofs are a smart investment for properties looking for long-lasting protection.",
          img:"/Services/metal roofing.png"
        },
        {
          title: 'Slate Roofs',
          about: "Slate roofs offer a timeless, elegant appearance while providing superior durability. Ideal for high-end homes and historic buildings, slate roofs are known for their longevity and premium look.",
          img:"/Services/slate roof.jpg"
        }
      ]
    },
    {
      category: "Door Solutions",
      heading: "Our doors are crafted to combine security, style, and functionality to suit every type of space.",
      items: [
        {
          title: "Aluminium Doors",
          about: "Aluminium doors are lightweight, secure, and perfect for contemporary designs. They offer easy maintenance and are highly resistant to corrosion, making them a practical choice for both residential and commercial applications.",
          img:"/Services/aluminium door.jpg"
        },
        {
          title: "Steel Doors",
          about: "Steel doors are robust and offer unmatched security and durability. They are an excellent choice for both homes and businesses looking for heavy-duty protection against external threats.",
          img:"/Services/glass window.png"
        },
        {
          title: "Glass Doors",
          about: "Glass doors are sleek and modern, allowing for greater natural light and open space designs. Perfect for contemporary homes and businesses, glass doors provide an elegant touch while maintaining security.",
          img:"/Services/glass door.jpg"
        }
      ]
    },
    {
      category: "Windows Solutions",
      heading: "Our window solutions combine energy efficiency with aesthetic appeal, enhancing both the interior and exterior of your home or business.",
      items: [
        {
          title: "Aluminium Windows",
          about: "Aluminium windows are corrosion-resistant and require minimal maintenance. They offer a sleek, modern design while providing excellent insulation, helping you save on energy costs in the long run.",
          img:"/Services/aluminium windows.jpg"
        },
        {
          title: "Glass Windows",
          about: "Glass windows allow natural light to flood your space, creating a bright, airy atmosphere. They are energy-efficient and help regulate the temperature inside your home or office, reducing heating and cooling costs.",
          img:"/Services/steel door.png"
        }
      ]
    },
    {
      category: "Felt Laying Services",
      heading: "We specialize in providing reliable felt laying services that protect your roof from the elements.",
      items: [
        {
          title: "Roofing Felt",
          about: "Roofing felt provides strong protection against weather elements, preventing moisture and water from damaging the structure of your roof. It’s an essential layer for ensuring the longevity of your roofing system.",
          img: "/Services/roofing-felt.jpg"
        },
        {
          title: "Torch-On Felt",
          about: "Torch-on felt is applied to flat roofs to create a durable, waterproof layer. This method ensures that your roof remains sealed and protected against leaks, especially in areas with heavy rainfall.",
          img:"/Services/torch-felt.jpg"
        }
      ]
    }
  ];

  return (
    <section>
      <div className='px-6 py-10'>
        <div className='text-xl py-2'>
       
        <h2 className="text-[#FF840E]">Our Services</h2>
        <p className='text-xl'>
          At Edafekioja, we offer a wide range of high-quality roofing, door, and window solutions. Our expert team ensures each installation is tailored to your needs, combining durability, aesthetics, and functionality.
        </p>
        
     
        </div>

        {/* Render the services here */}
        <div>
        {services.map((service, index) => (
        
          <div key={index}>
            <hr className='h-8 mt-4 border-t-8'/>
            <h2 className='text-[#FF840E]'>{service.category}</h2>
            <p className='md:text-xl lg:text-2xl'>{service.heading}</p>
            {service.items.map((item, idx) => (
             <div
             key={idx}
             className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-4"
           >
             {/* Title and Description */}
             <div className=" sm:text-left flex flex-col self-start">
               <h2 className="pt-7 ">{item.title}</h2>
               <p className="mt-2 md:text-xl lg:text-2xl">{item.about}</p>
             </div>
           
             {/* Image */}
             <div>
               <img
                 src={`${item.img}`}
                 alt={item.title}
                 loading="lazy"
                 className="sm:pt-7 rounded-2xl"
               />
             </div>
             
           </div>
           
            ))}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
