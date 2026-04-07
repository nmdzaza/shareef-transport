export interface NavItem {
  id: string;
  label: string;
  href: string;
  title?: string;
}

export interface NavDropdownItem {
  id: string;
  label: string;
  href: string;
  title: string;
}

export const mobileNavLinks: NavItem[] = [
  {
    id: "how-it-works",
    label: "How it works",
    href: "/how-it-works/",
    title: "How it works",
  },
  { id: "about-us", label: "About Us", href: "/about-us/", title: "About Us" },
  { id: "blog", label: "Blog", href: "/blog/", title: "Blog" },
  { id: "reviews", label: "Reviews", href: "/reviews/", title: "Reviews" },
  { id: "faq", label: "FAQ", href: "/faq/", title: "FAQ" },
  { id: "contact", label: "Contact", href: "/contact/", title: "Contact" },
  {
    id: "moving-cost-calculator",
    label: "Moving Cost Calculator",
    href: "/moving-cost-calculator/",
    title: "Moving Cost Calculator",
  },
];

export const transportOptions: NavDropdownItem[] = [
  { id: "all", label: "All", href: "/what-we-do/", title: "All" },
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

export const whoWeServeOptions: NavDropdownItem[] = [
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
    id: "relocation",
    label: "Car Relocation Services",
    href: "/seasonal-auto-relocation/",
    title: "Car Relocation Services",
  },
  {
    id: "dealerships",
    label: "Car Dealerships",
    href: "/best-car-dealerships/",
    title: "Car Dealerships",
  },
  {
    id: "military",
    label: "Military Members",
    href: "/military-car-shipping/",
    title: "Military Members",
  },
];

export const desktopTopLinks: NavItem[] = [
  { id: "blog", label: "Blog", href: "/blog/", title: "Blog" },
  { id: "reviews", label: "Reviews", href: "/reviews/", title: "Reviews" },
  { id: "faq", label: "FAQ", href: "/faq/", title: "FAQ" },
  {
    id: "moving-cost-calculator",
    label: "Moving Cost Calculator",
    href: "/moving-cost-calculator/",
    title: "Moving Cost Calculator",
  },
  { id: "contact", label: "Contact", href: "/contact/", title: "Contact" },
];
