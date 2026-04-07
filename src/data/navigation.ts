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
  { id: "how-it-works", label: "How it works", href: "#how-it-works", title: "How it works" },
  { id: "about-us", label: "About Us", href: "#about", title: "About Us" },
  { id: "blog", label: "Blog", href: "#/blog", title: "Blog" },
  { id: "reviews", label: "Reviews", href: "#testimonials", title: "Reviews" },
  { id: "faq", label: "FAQ", href: "#faq", title: "FAQ" },
  { id: "contact", label: "Contact", href: "#contact", title: "Contact" },
  { id: "moving-cost-calculator", label: "Get a Quote", href: "#quote", title: "Get a Quote" },
];

export const transportOptions: NavDropdownItem[] = [
  { id: "all", label: "All Services", href: "#services", title: "All Services" },
  { id: "door-to-door", label: "Door-to-door Car Shipping", href: "#services", title: "Door-to-door Car Shipping" },
  { id: "open-hauler", label: "Open Car Hauler", href: "#/open-auto-transport", title: "Open Car Hauler" },
  { id: "enclosed-hauler", label: "Enclosed Car Hauler", href: "#/enclosed-auto-transport", title: "Enclosed Car Hauler" },
  { id: "expedited", label: "Expedited Car Shipping", href: "#quote", title: "Expedited Car Shipping" },
  { id: "cross-country", label: "Cross Country Car Shipping", href: "#quote", title: "Cross Country Car Shipping" },
  { id: "another-state", label: "Ship Car to Another State", href: "#quote", title: "Ship Car to Another State" },
  { id: "classic-car", label: "Classic Car Shipping", href: "#/enclosed-auto-transport", title: "Classic Car Shipping" },
];

export const whoWeServeOptions: NavDropdownItem[] = [
  { id: "auto-auctions", label: "Auto Auctions", href: "#quote", title: "Auto Auctions" },
  { id: "online-sellers", label: "Online Car Sellers", href: "#quote", title: "Online Car Sellers" },
  { id: "relocation", label: "Car Relocation Services", href: "#quote", title: "Car Relocation Services" },
  { id: "dealerships", label: "Car Dealerships", href: "#contact", title: "Car Dealerships" },
  { id: "military", label: "Military Members", href: "#quote", title: "Military Members" },
];

export const desktopTopLinks: NavItem[] = [
  { id: "blog", label: "Blog", href: "#/blog", title: "Blog" },
  { id: "reviews", label: "Reviews", href: "#testimonials", title: "Reviews" },
  { id: "faq", label: "FAQ", href: "#faq", title: "FAQ" },
  { id: "moving-cost-calculator", label: "Moving Cost Calculator", href: "#quote", title: "Moving Cost Calculator" },
  { id: "contact", label: "Contact", href: "#contact", title: "Contact" },
];
