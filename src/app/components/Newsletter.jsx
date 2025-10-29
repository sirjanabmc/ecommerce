"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (

<section className="relative overflow-hidden bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] py-20 mb-[-40px] px-6 text-center">

  {/* Subtle light effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>

  <div className="relative z-10 max-w-2xl mx-auto text-white">
    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
      Stay in <span className="text-pink-400">Style</span>
    </h2>

    {/* Description */}
    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
      Subscribe to our newsletter and be the first to know about new arrivals,
      exclusive offers, and expert fashion tips — straight to your inbox.
    </p>

    {/* Form */}
    {!submitted ? (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-lg"
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full sm:flex-1 px-5 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-pink-500/30 flex items-center gap-2"
        >
          Subscribe <Send size={18} />
        </button>
      </form>
    ) : (
      <p className="text-green-400 font-semibold text-lg mt-4">
        Thank you for subscribing! 💌
      </p>
    )}
  </div>

  {/* Floating fashion accent blobs */}
  <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
</section>

  );
}
