import React from "react";

const Examples = () => {

  const normalscapeImages = Array.from({ length: 40 }, (_, i) => ({
    img: `./Projects/normalscape (${i + 2}).jpg`,
  }));

  const lpImages = Array.from({ length: 26 }, (_, i) => ({
    img: `./Projects/LP (${i + 1}).jpg`,
  }));

  const images = [...normalscapeImages, ...lpImages];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.img}
            alt={`Project ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
            onError={(e) => {
              e.target.src = "./fallback.jpg";
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Examples;
