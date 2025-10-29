import Image from "next/image";
import FeaturedProducts from "./components/prodct";
import Newsletter from "./components/Newsletter";


export default function Home() {
  // 🪶 Categories Data
  const categories = [
    {
      title: "Women",
      subtitle: "Elegant & Modern",
      image: "/1.jpg",
    },
    {
      title: "Men",
      subtitle: "Classic & Contemporary",
      image: "/2.jpg",
    },
    {
      title: "Accessories",
      subtitle: "Complete Your Look",
      image: "/3.jpg",
    },
  ];

  return (
    <div className="h-full bg-white text-gray-900">
      {/* 🌟 Hero Section */}
     <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Fashion Collection"
        fill
        priority
        className="object-cover object-center transition-transform duration-[2000ms] ease-in-out hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Text Content */}
      <div className="relative z-10 px-8 md:px-20 text-white max-w-2xl animate-fadeInUp text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover Your{" "}
          <span className="text-pink-500 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Perfect Style
          </span>
        </h1>
        <p className="text-base md:text-xl mb-8 text-gray-200 leading-relaxed">
          Explore our handpicked collection of modern fashion — from timeless
          basics to statement pieces that define your personality.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center md:justify-start">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/30 transition duration-300 ease-in-out">
            Shop Now
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
            View Collections
          </button>
        </div>
      </div>
    </section>
      {/* 🛍️ Shop by Category Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            Discover our carefully curated collections designed to elevate your
            wardrobe with premium quality and modern design.
          </p>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-8 left-8 text-left text-white">
                  <h3 className="text-3xl font-bold mb-1 tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 text-sm uppercase tracking-widest">
                    {category.subtitle}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
      <FeaturedProducts />
      <Newsletter/>
    </div>
  );
}
