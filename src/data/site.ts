export const site = {
  siteUrl: "https://disquel-maju-sejahtera.vercel.app",
  logo: "/images/logo.png",
  aboutImages: [
    "/images/about/1.jpg",
    "/images/about/2.jpg",
    "/images/about/3.jpg",
    "/images/about/4.jpg",
  ],
  address: [
    "Perkantoran Pulomas Satu, Gedung G-6",
    "Lantai Dasar, Room #08",
    "Jl. Ahmad Yani No.2, Jakarta Timur 13210",
    "INDONESIA",
  ],
  emails: ["sales@dysquel.com", "dysquel@yahoo.co.id"],
  phone: { href: "+622188385901", label: "+62-021-88385901" },
  fax: { label: "+62-021-883 85901" },
};

export const brands = [
  { name: "Semikron", image: "/images/brand/semikron.jpg" },
  { name: "Toshiba", image: "/images/brand/toshiba.jpg" },
  { name: "cosel", image: "/images/products/power-supply/power-supply-05.png" },
  {
    name: "metalwork pneumatic",
    image: "/images/brand/metalwork-pneumatic.png",
  },
  { name: "Fuji Electric", image: "/images/brand/fuji-electric.png" },
  { name: "Hy-Lok", image: "/images/brand/hy-lok.png" },
  { name: "Rittal", image: "/images/brand/rittal.png" },
  { name: "Mean Well", image: "/images/brand/meanwell.png" },
  { name: "Infineon", image: "/images/brand/infineon.jpg" },
  {
    name: "Bussman",
    image: "/images/products/industrial-parts/encoder-05.png",
  },
  { name: "Omron", image: "/images/products/industrial-parts/encoder-06.png" },
  {
    name: "Texas Instumentral",
    image: "/images/products/industrial-parts/encoder-10.jpg",
  },
  {
    name: "Jhonson Control",
    image: "/images/products/industrial-parts/encoder-11.jpg",
  },
  {
    name: "Panasonic",
    image: "/images/products/industrial-parts/encoder-12.png",
  },
  { name: "Tdk", image: "/images/products/industrial-parts/encoder-13.jpg" },
  {
    name: "Hestler",
    image: "/images/products/industrial-parts/encoder-14.jpg",
  },
  { name: "Idec", image: "/images/products/industrial-parts/encoder-15.jpg" },
  { name: "Siemen", image: "/images/products/industrial-parts/encoder-22.png" },
  {
    name: "Select-value",
    image: "/images/products/industrial-parts/encoder-17.jpg",
  },
  {
    name: "Parker Kuroda",
    image: "/images/products/industrial-parts/encoder-21.png",
  },
  { name: "Abb", image: "/images/products/industrial-parts/encoder-20.png" },
  {
    name: "sheider Electric",
    image: "/images/products/industrial-parts/encoder-19.png",
  },
  {
    name: "Eaton Vikers",
    image: "/images/products/industrial-parts/industrial-06.jpg",
  },
  {
    name: "Mitshubisi Electric",
    image: "/images/products/industrial-parts/industrial-05.jpg",
  },
  { name: "e-mc", image: "/images/products/pneumatic/pneumatic-05.jpg" },
  {
    name: "tpc-penuomatic",
    image: "/images/products/pneumatic/pneumatic-06.jpg",
  },
  {
    name: "Ixys",
    image: "/images/products/igbt-module/igbt-01.jpg",
  },
  { name: "ckd", image: "/images/products/pneumatic/pneumatic-07.jpg" },
  { name: "smc", image: "/images/products/pneumatic/pneumatic-08.png" },
];

export const sales = [
  { name: "Lestari", phone: "081318410918", wa: "6281318410918" },
  { name: "Franky", phone: "081380932632", wa: "6281380932632" },
];

export type ClientSector =
  | "textile"
  | "food-beverage"
  | "paper"
  | "hospitality"
  | "other";

export type Client = {
  name: string;
  location: string;
  sector: ClientSector;
  featured?: boolean;
  logo?: string;
};

export const clients: Client[] = [
  {
    name: "PT. Indorama Synthetics Tbk",
    location: "Jakarta",
    sector: "textile",
    logo: "/images/clients/indorama-syntetic.png",
    featured: true,
  },
  {
    name: "PT. Indorama Polychem Indonesia",
    location: "Jakarta",
    sector: "other",
  },
  {
    name: "PT. Mutu Gading Tekstil",
    location: "Solo",
    sector: "textile",
    logo: "/images/clients/mutu-gading-tekstil.png",
    featured: true,
  },
  { name: "PT. Multikimia Intipelangi", location: "Cikarang", sector: "other" },
  {
    name: "Merlynn Park Hotel",
    location: "Jakarta",
    sector: "hospitality",

    logo: "/images/clients/merlin-park-hotel.png",
    featured: true,
  },
  {
    name: "PT. Sunrise Bumi Tekstil",
    location: "Bekasi",
    sector: "textile",
    logo: "/images/clients/sunrise-bumi-textil.jpeg",
    featured: true,
  },
  {
    name: "Manhattan Hotel",
    location: "Kuningan, Jakarta",
    sector: "hospitality",
    logo: "/images/clients/manhattan-hotel.jpg",
    featured: true,
  },
  { name: "PT. Hamparan Mega Jaya", location: "Tangerang", sector: "other" },
  { name: "PT. Natura Bina Mitra", location: "Jakarta", sector: "other" },
  { name: "PT. Indorama Petrochemicals", location: "Cilegon", sector: "other" },
  { name: "PT. Dharma Eka Perkakas", location: "Jakarta", sector: "other" },
  {
    name: "PT. Elektrindodaya Pakarnusa",
    location: "Bandung",
    sector: "other",
  },
  {
    name: "PT. The Master Steel (3) Mfg",
    location: "Pulo Gadung",
    sector: "other",
  },
  { name: "PT. Harmoni Mitra Sukses", location: "Jakarta", sector: "other" },
  {
    name: "PT. Nestle Indofood Citra Rasa Indonesia",
    location: "Karawang",
    sector: "food-beverage",

    logo: "/images/clients/nestle.png",
    featured: true,
  },
  { name: "ABE Electrical", location: "Banda Aceh", sector: "other" },
  {
    name: "PT. Propan Raya",
    location: "Curug, Tangerang",
    sector: "other",
    logo: "/images/clients/propan.jpg",
    featured: true,
  },
  { name: "CV. Bintang Surya Tehnik", location: "Tangerang", sector: "other" },
  {
    name: "PT. Indah Kiat Pulp & Paper Tbk",
    location: "Cilegon",
    sector: "paper",
    logo: "/images/clients/indah-kilat-paper.webp",
    featured: true,
  },
  { name: "B Hotel", location: "Bali", sector: "hospitality" },
];

export type ProductCategoryId =
  | "power-supply"
  | "industrial-parts"
  | "pneumatic"
  | "igbt-module";

export type ProductCategory = {
  id: ProductCategoryId;
  images: string[];
  relatedBrands?: string[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "power-supply",
    images: [
      "/images/products/power-supply/power-supply-01.jpg",
      "/images/products/power-supply/power-supply-02.jpg",
      "/images/products/power-supply/power-supply-03.jpg",
      "/images/products/power-supply/power-supply-04.jpg",
    ],
    relatedBrands: ["Mean Well", "cosel"],
  },
  {
    id: "industrial-parts",
    images: [
      "/images/products/industrial-parts/encoder-01.jpg",
      "/images/products/industrial-parts/encoder-02.jpg",
      "/images/products/industrial-parts/encoder-03.jpg",
      "/images/products/industrial-parts/encoder-04.jpg",
      "/images/products/industrial-parts/encoder-07.jpg",
      "/images/products/industrial-parts/encoder-08.jpg",
      "/images/products/industrial-parts/encoder-09.jpg",
      "/images/products/industrial-parts/industrial-01.jpg",
      "/images/products/industrial-parts/encoder-16.jpg",
      "/images/products/industrial-parts/industrial-02.jpg",
      "/images/products/industrial-parts/encoder-18.jpg",
      "/images/products/industrial-parts/industrial-03.jpg",
      "/images/products/industrial-parts/industrial-04.jpg",
    ],
    relatedBrands: [
      "Omron",
      "Texas Instumentral",
      "Jhonson Control",
      "Panasonic",
      "Hestler",
      "Bussman",
      "Idec",
      "Mitshubisi Electric",
      "Siemen",
      "Abb",
      "sheider Electric",
      "Eaton",
      "Parker Kuroda",
      "Select-value",
    ],
  },
  {
    id: "pneumatic",
    images: [
      "/images/products/pneumatic/pneumatic-01.jpg",
      "/images/products/pneumatic/pneumatic-02.jpg",
      "/images/products/pneumatic/pneumatic-03.jpg",
      "/images/products/pneumatic/pneumatic-04.jpg",
    ],
    relatedBrands: [
      "metalwork pneumatic",
      "e-mc",
      "tpc-penuomatic",
      "ckd",
      "smc",
    ],
  },
  {
    id: "igbt-module",
    images: [
      "/images/products/igbt-module/igbt-02.png",
      "/images/products/igbt-module/igbt-03.avif",
      "/images/products/igbt-module/igbt-03.png",
      "/images/products/igbt-module/igbt-05.png",
    ],
    relatedBrands: [
      "Semikron",
      "Infineon",
      "Toshiba",
      "Fuji Electric",
      "Mitshubisi Electric",
      "Ixys",
    ],
  },
];
