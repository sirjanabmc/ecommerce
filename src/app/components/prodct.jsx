"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart } from "lucide-react";

const products = [
  {
    name: "Classic White T-Shirt",
    price: 29.99,
    oldPrice: 39.99,
    image: "/tshiet.jpg",
    tag: "SALE",
    tagColor: "bg-red-500 text-white",
  },
  {
    name: "Denim Jacket",
    price: 89.99,
    oldPrice: 99.99,
    image: "/jacket.jpg",
    tag: "NEW",
    tagColor: "bg-green-500 text-white",
  },
  {
    name: "Black Dress",
    price: 79.99,
    oldPrice: 89.99,
    image: "/black.jpg",
    tag: "HOT",
    tagColor: "bg-yellow-400 text-black",
  },
  {
    name: "Casual Sneakers",
    price: 120.0,
    oldPrice: 150.0,
    image: "/shooes.jpg",
    tag: "SALE",
    tagColor: "bg-red-500 text-white",
  },
  {
    name: "Wool Sweater",
    price: 99.99,
    oldPrice: 129.99,
    image: "/whitet.jpg",
    tag: "TRENDING",
    tagColor: "bg-pink-500 text-white",
  },
  {
    name: "Leather Handbag",
    price: 79.0,
    oldPrice: 99.0,
    image: "/bag (2).jpg",
    tag: "HOT",
    tagColor: "bg-yellow-400 text-black",
  },
];

const FeaturedProducts = () => {
  return (
  
    <section className="bg-gradient-to-b from-gray-50 to-white py-4 px-6 md:px-12">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
          Featured Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handpicked favorites that define modern fashion and timeless quality
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group transition-all"
          >
            {/* Product Tag */}
            {product.tag && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${product.tagColor}`}
              >
                {product.tag}
              </span>
            )}

            {/* Image */}
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Action Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-black/25 transition-opacity duration-300">
                <button className="bg-white p-3 rounded-full shadow hover:bg-pink-600 hover:text-white transition-colors">
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white p-3 rounded-full shadow hover:bg-pink-600 hover:text-white transition-colors">
                  <Eye size={20} />
                </button>
                <button className="bg-white p-3 rounded-full shadow hover:bg-pink-600 hover:text-white transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-pink-600 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
