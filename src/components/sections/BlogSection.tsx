import React from "react";

const posts = [
  {
    title: "How Much Does It Cost to Ship a Car in 2026?",
    excerpt:
      "Car shipping costs vary based on distance, vehicle type, and transport method. Here's everything you need to know about getting the best rate.",
    image: import.meta.env.BASE_URL + "blog-cost-guide.jpg",
    date: "March 15, 2026",
    readTime: "5 min read",
    href: "#/blog/how-much-does-it-cost-to-ship-a-car",
  },
  {
    title: "Open vs Enclosed Car Transport: Which Should You Choose?",
    excerpt:
      "Choosing between open and enclosed transport depends on your vehicle's value and your budget. We break down the pros and cons of each option.",
    image: import.meta.env.BASE_URL + "blog-open-transport.jpg",
    date: "March 8, 2026",
    readTime: "4 min read",
    href: "#/blog/open-vs-enclosed-car-transport",
  },
  {
    title: "5 Tips for Preparing Your Car for Shipping",
    excerpt:
      "Before your vehicle gets picked up, there are a few important steps to take to ensure a smooth and damage-free shipping experience.",
    image: import.meta.env.BASE_URL + "blog-enclosed-transport.jpg",
    date: "February 28, 2026",
    readTime: "3 min read",
    href: "#/blog/5-tips-preparing-car-for-shipping",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a1f44]">Most Recent Articles</h2>
          <p className="text-neutral-500 mt-2">Tips, insights, and guides for vehicle shipping</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#b8960c] bg-[#fdf6e3] px-3 py-1 rounded-full">
                    {post.date}
                  </span>
                  <span className="text-xs text-neutral-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#0a1f44] text-lg font-bold leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <a
                  href={post.href}
                  className="mt-5 inline-block text-sm font-semibold text-[#b8960c] hover:text-[#0a1f44] transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
