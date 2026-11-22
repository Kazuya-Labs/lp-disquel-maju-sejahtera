export const site = {
  siteUrl: "https://disquel-maju-sejahtera.vercell.app",
  logo: "/images/logo.png",
  heroImage: "/images/hero.jpg",
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
  { name: "Desy", phone: "089690645168", wa: "6289690645168" },
  { name: "Sandro Ginting", phone: "087748450114", wa: "6287748450114" },
  { name: "Franky", phone: "081380932632", wa: "6281380932632" },
];

export const clients = [
  "PT. Indorama Synthetics Tbk — Jakarta",
  "PT. Indorama Polychem Indonesia — Jakarta",
  "PT. Mutu Gading Tekstil — Solo",
  "PT. Multikimia Intipelangi — Cikarang",
  "Merlynn Park Hotel — Jakarta",
  "PT. Sunrise Bumi Tekstil — Bekasi",
  "Manhattan Hotel — Kuningan, Jakarta",
  "PT. Hamparan Mega Jaya — Tangerang",
  "PT. Natura Bina Mitra — Jakarta",
  "PT. Indorama Petrochemicals — Cilegon",
  "PT. Dharma Eka Perkakas — Jakarta",
  "PT. Elektrindodaya Pakarnusa — Bandung",
  "PT. The Master Steel (3) Mfg — Pulo Gadung",
  "PT. Harmoni Mitra Sukses — Jakarta",
  "PT. Nestle Indofood Citra Rasa Indonesia — Karawang",
  "ABE Electrical — Banda Aceh",
  "PT. Propan Raya — Curug, Tangerang",
  "CV. Bintang Surya Tehnik — Tangerang",
  "PT. Indah Kiat Pulp & Paper Tbk — Cilegon",
  "B Hotel — Bali",
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
