export interface FooterLink {
  id: string;
  label: string;
  href: string;
  title: string;
}

export interface FooterSection {
  id: string;
  heading: string;
  links: FooterLink[];
}

export const quickLinks: FooterLink[] = [
  {
    id: "car-shipping-calculator",
    label: "Car Shipping Calculator",
    href: "/car-shipping-calculator/",
    title: "Car Shipping Calculator",
  },
  {
    id: "moving-cost-calculator",
    label: "Moving Cost Calculator",
    href: "/moving-cost-calculator/",
    title: "Moving Cost Calculator",
  },
  {
    id: "car-value-calculator",
    label: "Car Value Calculator",
    href: "/car-value-calculator/",
    title: "Car Value Calculator",
  },
  {
    id: "how-it-works",
    label: "How it works",
    href: "/how-it-works/",
    title: "How it works",
  },
  { id: "about-us", label: "About Us", href: "/about-us/", title: "About Us" },
  { id: "contact", label: "Contact", href: "/contact/", title: "Contact" },
  { id: "blog", label: "Blog", href: "/blog/", title: "Blog" },
  { id: "team", label: "Team", href: "/team/", title: "Team" },
  { id: "press", label: "Press", href: "/press/", title: "Press" },
  { id: "sitemap", label: "Sitemap", href: "/sitemap/", title: "Sitemap" },
  { id: "help", label: "Help", href: "/help/", title: "Help" },
];

export const whoWeServeLinks: FooterLink[] = [
  {
    id: "auto-auctions",
    label: "Auto Auctions",
    href: "/best-online-car-auction-websites-to-buy-a-car/",
    title: "Auto Auctions",
  },
  {
    id: "online-sellers",
    label: "Online Car Sellers",
    href: "/sell-my-car/",
    title: "Online Car Sellers",
  },
  {
    id: "dealerships",
    label: "Best Car Dealerships",
    href: "/best-car-dealerships/",
    title: "Best Car Dealerships",
  },
  {
    id: "military",
    label: "Military Members",
    href: "/military-car-shipping/",
    title: "Military Members",
  },
  {
    id: "relocation",
    label: "Car Relocation Services",
    href: "/seasonal-auto-relocation/",
    title: "Car Relocation Services",
  },
];

export const transportOptionLinks: FooterLink[] = [
  {
    id: "door-to-door",
    label: "Door-to-door Car Shipping",
    href: "/door-to-door-shipping/",
    title: "Door-to-door Car Shipping",
  },
  {
    id: "open-hauler",
    label: "Open Car Hauler",
    href: "/open-auto-transport/",
    title: "Open Car Hauler",
  },
  {
    id: "enclosed-hauler",
    label: "Enclosed Car Hauler",
    href: "/enclosed-auto-transport/",
    title: "Enclosed Car Hauler",
  },
  {
    id: "expedited",
    label: "Expedited Car Shipping",
    href: "/expedited-auto-shipping/",
    title: "Expedited Car Shipping",
  },
  {
    id: "cross-country",
    label: "Cross Country Car Shipping",
    href: "/ship-a-car-across-country/",
    title: "Cross Country Car Shipping",
  },
  {
    id: "another-state",
    label: "Ship Car to Another State",
    href: "/ship-car-to-another-state/",
    title: "Ship Car to Another State",
  },
  {
    id: "classic-car",
    label: "Classic Car Shipping",
    href: "/classic-car-auto-shipping/",
    title: "Classic Car Shipping",
  },
];

export const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/shareeftransport",
    title: "Shareef Transport Facebook Page",
    iconSrc: "https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-32.svg",
    alt: "Icon",
    className:
      "text-white text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto]",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/shareeftransport",
    title: "Shareef Transport Instagram Page",
    iconSrc: "https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-33.svg",
    alt: "Icon",
    className:
      "text-white text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] ml-6",
  },
  {
    id: "twitter",
    href: "https://twitter.com/shareeftransport",
    title: "Shareef Transport Twitter Page",
    iconSrc: "https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-34.svg",
    alt: "Icon",
    className:
      "text-white text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] ml-6",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/shareeftransport",
    title: "Shareef Transport YouTube Channel",
    iconSrc: "https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-35.svg",
    alt: "Icon",
    className:
      "text-white text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] ml-6",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/shareeftransport",
    title: "Shareef Transport LinkedIn Page",
    iconSrc: "https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-36.svg",
    alt: "Icon",
    className:
      "text-white text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] ml-6",
  },
];
