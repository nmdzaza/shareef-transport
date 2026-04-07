import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export interface BlogPost {
  id: string;
  title: string;
  href: string;
  internalTo?: string;
  imageUrl: string;
  readTime: string;
  date: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "car-vending-machine",
    title: "How a Car Vending Machine Works & What Steps to Take Before You Buy",
    href: "https://shareeftransport.com/how-a-car-vending-machine-works-what-steps-to-take-before-you-buy/",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=340&fit=crop",
    readTime: "5 MIN",
    date: "Feb 22, 2026",
    excerpt: "Learn how car vending machines work, what to expect during pickup, and the key steps to take before buying a car online in 2026.",
  },
  {
    id: "buying-car-california",
    title: "Buying a Car from California: What Out-of-State Buyers Need to Know",
    href: "https://shareeftransport.com/buying-a-car-from-california/",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=340&fit=crop",
    readTime: "8 MIN",
    date: "Feb 18, 2026",
    excerpt: "Thinking about buying a car from California? Discover how the country's biggest auto market affects pricing, taxes, inspections, and vehicle shipping.",
  },
  {
    id: "market-demand-used-car-values",
    title: "How Market Demand Affects Used Car Values",
    href: "https://shareeftransport.com/how-market-demand-affects-used-car-values/",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=340&fit=crop",
    readTime: "4 MIN",
    date: "Feb 15, 2026",
    excerpt: "Discover the key demand factors that affect used car pricing and how you can use market trends to sell your vehicle at the right time.",
  },
  {
    id: "boost-resale-value",
    title: "How to Boost Your Car's Resale Value with Simple Fixes",
    href: "https://shareeftransport.com/how-to-boost-your-cars-resale-value-with-simple-fixes/",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop",
    readTime: "4 MIN",
    date: "Feb 12, 2026",
    excerpt: "Small improvements can make a big difference. Learn which quick fixes and upgrades can significantly increase your car's resale value.",
  },
  {
    id: "auto-transport-insurance",
    title: "What Kind of Insurance Do Auto Transport Companies Carry?",
    href: "https://shareeftransport.com/what-kind-of-insurance-do-auto-transport-companies-carry/",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=340&fit=crop",
    readTime: "6 MIN",
    date: "Feb 10, 2026",
    excerpt: "Learn what kind of insurance auto transport companies carry, what cargo insurance covers, and how your vehicle is protected during shipping with Shareef Transport.",
  },
  {
    id: "weather-impact-car-shipping",
    title: "How Does Weather Impact Car Shipping?",
    href: "https://shareeftransport.com/how-does-weather-impact-car-shipping/",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=340&fit=crop",
    readTime: "7 MIN",
    date: "Feb 08, 2026",
    excerpt: "Wondering if bad weather can delay your car shipment? Explore how storms and seasonal conditions impact car shipping and how Shareef Transport helps reduce disruptions.",
  },
  {
    id: "auto-transport-cross-country",
    title: "How Does Auto Transport Work for Cross-Country Moves?",
    href: "https://shareeftransport.com/auto-transport-for-cross-country-moves/",
    imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=340&fit=crop",
    readTime: "8 MIN",
    date: "Feb 05, 2026",
    excerpt: "Wondering what happens after you book auto transport? This guide explains the cross-country shipping process, timelines, tracking, and what to expect at delivery.",
  },
  {
    id: "fuel-prices-auto-transport",
    title: "How Do Fuel Prices Affect Auto Transport Rates?",
    href: "https://shareeftransport.com/how-do-fuel-prices-affect-auto-transport-rates/",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=340&fit=crop",
    readTime: "5 MIN",
    date: "Feb 03, 2026",
    excerpt: "Learn how rising fuel prices influence auto transport rates, shipping costs, and delivery timelines. Shareef Transport explains fuel surcharges and pricing factors.",
  },
  {
    id: "broker-vs-carrier",
    title: "Auto Transport Broker vs Carrier: Who Should You Book With?",
    href: "https://shareeftransport.com/auto-transport-carrier-vs-broker/",
    imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=340&fit=crop",
    readTime: "6 MIN",
    date: "Jan 29, 2026",
    excerpt: "The world of vehicle transport is more complex than you may imagine, with unique characteristics differentiating it from other freight economies.",
  },
  {
    id: "ship-multiple-vehicles",
    title: "How to Ship Multiple Vehicles at Once: A Complete Guide",
    href: "https://shareeftransport.com/ship-multiple-vehicles-at-once/",
    imageUrl: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=340&fit=crop",
    readTime: "4 MIN",
    date: "Jan 25, 2026",
    excerpt: "A complete guide to shipping multiple vehicles at once, including costs, transport options, and preparation tips from Shareef Transport experts.",
  },
  {
    id: "how-much-does-it-cost-to-ship-a-car",
    title: "How Much Does It Cost to Ship a Car in 2026?",
    href: "#/blog/how-much-does-it-cost-to-ship-a-car",
    internalTo: "/blog/how-much-does-it-cost-to-ship-a-car",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=340&fit=crop",
    readTime: "8 MIN",
    date: "Mar 15, 2026",
    excerpt: "Distance, vehicle size, open vs. enclosed, fuel prices, and seasonal demand all affect your rate. Here's the full 2026 breakdown with real numbers.",
  },
  {
    id: "open-vs-enclosed-car-transport",
    title: "Open vs Enclosed Car Transport: Which Should You Choose?",
    href: "#/blog/open-vs-enclosed-car-transport",
    internalTo: "/blog/open-vs-enclosed-car-transport",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop",
    readTime: "7 MIN",
    date: "Mar 10, 2026",
    excerpt: "Open transport is cheaper and faster. Enclosed protects luxury and classic cars. Here's exactly when to use each and what the cost difference looks like.",
  },
  {
    id: "5-tips-preparing-car-for-shipping",
    title: "5 Tips for Preparing Your Car for Shipping",
    href: "#/blog/5-tips-preparing-car-for-shipping",
    internalTo: "/blog/5-tips-preparing-car-for-shipping",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=340&fit=crop",
    readTime: "6 MIN",
    date: "Mar 5, 2026",
    excerpt: "A clean car, ¼ tank of gas, photos from every angle — prep your vehicle the right way before the carrier arrives with this step-by-step checklist.",
  },
];

function BlogCard({ post, isFirst }: { post: BlogPost; isFirst: boolean }) {
  const cardClass = isFirst
    ? "bg-gray-50 shadow-none box-border caret-transparent basis-full min-h-[auto] min-w-[auto] transform-none border border-zinc-200 rounded-md border-solid md:shadow-[rgba(3,15,37,0.08)_0px_6px_24px_0px] md:basis-[48%] md:translate-y-[-3px]"
    : "bg-gray-50 box-border caret-transparent basis-full min-h-[auto] min-w-[auto] border border-zinc-200 rounded-md border-solid md:basis-[48%]";

  const ImageWrapper = post.internalTo
    ? ({ children }: { children: React.ReactNode }) => (
        <Link to={post.internalTo!} className="text-blue-600 box-border caret-transparent hover:text-sky-700">
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <a href={post.href} className="text-blue-600 box-border caret-transparent hover:text-sky-700">
          {children}
        </a>
      );

  const TitleWrapper = post.internalTo
    ? ({ children }: { children: React.ReactNode }) => (
        <Link to={post.internalTo!} className="text-blue-600 hover:text-sky-700">{children}</Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <a href={post.href} className="text-blue-600 hover:text-sky-700">{children}</a>
      );

  return (
    <div className={cardClass}>
      <ImageWrapper>
        <div
          className="bg-no-repeat bg-cover h-[260px] bg-center rounded-t-md"
          style={{ backgroundImage: `url('${post.imageUrl}')` }}
        />
      </ImageWrapper>
      <div className="box-border caret-transparent mt-4 pb-8 px-8">
        <div className="flex gap-4 text-slate-400 text-sm font-semibold uppercase mb-2">
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <TitleWrapper>
          <h2 className="text-blue-950 text-xl font-semibold leading-7 mb-2">{post.title}</h2>
        </TitleWrapper>
        <TitleWrapper>
          <p className="text-slate-400 leading-[22.4px]">{post.excerpt}</p>
        </TitleWrapper>
        {post.internalTo && (
          <Link
            to={post.internalTo}
            className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:text-sky-700"
          >
            Read More →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>Shareef Transport Blog | Car Shipping Tips &amp; Guides</title>
        <meta name="description" content="Expert car shipping tips, cost guides, and transport advice from Shareef Transport." />
      </Helmet>
      <Header />
      <main role="main" className="mt-[75px] md:mt-40">
        <section className="pt-[30px] md:pt-0">
          <div className="max-w-[1200px] text-center w-full mx-auto px-[15px]">
            <h1 className="text-slate-900 text-2xl font-semibold leading-[28.8px] mb-2 pb-5 md:text-[44px] md:leading-[52.8px]">
              Shareef Transport Blog
            </h1>
            <p className="text-slate-400 text-base leading-6 mb-4 md:text-xl md:leading-[30px]">
              Tips, guides, and insights on vehicle shipping from Shareef Transport.
            </p>
          </div>
        </section>
        <section className="py-[35px] md:py-[70px]">
          <div className="max-w-[1200px] w-full mx-auto px-[15px]">
            <div className="gap-x-5 flex flex-wrap gap-y-5 mt-[26px]">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} isFirst={index === 0} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
