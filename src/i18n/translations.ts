export type Locale = "id" | "en" | "zh";

export const locales: Locale[] = ["id", "en", "zh"];

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    label: string;
    about: string;
    products: string;
    clients: string;
    contact: string;
  };
  switcher: { label: string; id: string; en: string; zh: string };
  hero: {
    overline: string;
    titleTop: string;
    titleBottom: string;
    lead: string;
    primary: string;
    secondary: string;
    note: string;
  };
  about: {
    overline: string;
    title: string;
    lead: string;
    visionLabel: string;
    vision: string;
    missionLabel: string;
    mission: string;
    suppliesLabel: string;
    electrical: string;
    mechanical: string;
  };
  products: { overline: string; title: string; lead: string; note: string };
  clients: { overline: string; title: string; lead: string };
  contact: {
    overline: string;
    title: string;
    lead: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    faxLabel: string;
    salesLabel: string;
    emailCta: string;
    callCta: string;
    waCta: string;
  };
  catalog: {
    overline: string;
    title: string;
    lead: string;
    note: string;
    items: string;
    relatedBrands: string;
    powerSupply: { title: string; description: string };
    industrialParts: { title: string; description: string };
    pneumatic: { title: string; description: string };
    igbtModule: { title: string; description: string };
  };
  footer: { tagline: string; rights: string };
};

const id: Dictionary = {
  meta: {
    title: "PT. Dysquel Maju Sejahtera — Supplier Electrical & Mechanical",
    description:
      "General trading dan supplier electrical & mechanical untuk industri dan konsumen di Indonesia.",
  },
  nav: {
    label: "Navigasi",
    about: "Tentang",
    products: "Produk",
    clients: "Klien",
    contact: "Kontak",
  },
  switcher: { label: "Bahasa", id: "ID", en: "EN", zh: "中文" },
  hero: {
    overline: "Supplier industri · sejak 2011",
    titleTop: "PT. Dysquel",
    titleBottom: "Maju Sejahtera",
    lead: "Semua yang Anda butuhkan untuk kebutuhan electrical-mechanical. Kami membantu Anda mendapatkan informasi, harga, dan ketersediaan barang dengan cepat.",
    primary: "Lihat produk",
    secondary: "Hubungi kami",
    note: "Terdaftar di Indonesia sejak 2013",
  },
  about: {
    overline: "01 / Tentang kami",
    title: "Siapa kami",
    lead: "Kami adalah general trading dan supplier electrical & mechanical untuk barang industri maupun konsumen. Didirikan pada 2011 dan terdaftar di Indonesia pada 2013.",
    visionLabel: "Visi",
    vision:
      "Menjadi supplier yang baik dan maju untuk mencapai kepuasan pelanggan.",
    missionLabel: "Misi",
    mission:
      "Memberikan layanan optimal dengan komitmen kuat untuk memenuhi kebutuhan pelanggan.",
    suppliesLabel: "Pasokan",
    electrical: "Electrical",
    mechanical: "Mechanical",
  },
  products: {
    overline: "02 / Merek",
    title: "Merek yang kami pasok",
    lead: "Kami menyediakan produk electrical dan mechanical dari merek-merek terpercaya untuk kebutuhan industri.",
    note: "Hubungi kami untuk informasi harga dan ketersediaan.",
  },
  clients: {
    overline: "03 / Klien",
    title: "Dipercaya oleh industri",
    lead: "Pelanggan kami dari berbagai sektor di seluruh Indonesia.",
  },
  contact: {
    overline: "04 / Kontak",
    title: "Mari kita bicara",
    lead: "Kirim email atau hubungi tim sales kami untuk informasi harga dan ketersediaan barang.",
    addressLabel: "Alamat",
    emailLabel: "Email",
    phoneLabel: "Telepon",
    faxLabel: "Faks",
    salesLabel: "Kontak sales",
    emailCta: "Kirim email",
    callCta: "Telepon sekarang",
    waCta: "WhatsApp",
  },
  catalog: {
    overline: "Katalog produk",
    title: "Apa yang kami pasok",
    lead: "Foto produk dikelompokkan per kategori. Pilih kategori untuk melihatnya.",
    note: "Foto produk diambil dari katalog resmi PT. Dysquel Maju Sejahtera.",
    items: "item",
    relatedBrands: "Merek terkait",
    powerSupply: {
      title: "Power Supply",
      description: "Unit dan modul catu daya untuk kebutuhan industri.",
    },
    industrialParts: {
      title: "Industrial Parts",
      description: "Komponen industri termasuk encoder dan bagian mekanik.",
    },
    pneumatic: {
      title: "Pneumatic",
      description: "Komponen dan sistem pneumatik untuk otomasi industri.",
    },
    igbtModule: {
      title: "IGBT Module",
      description: "Modul daya semikonduktor untuk aplikasi industri.",
    },
  },
  footer: {
    tagline:
      "General trading & supplier electrical-mechanical untuk industri dan konsumen.",
    rights: "Seluruh hak cipta dilindungi.",
  },
};

const en: Dictionary = {
  meta: {
    title: "PT. Dysquel Maju Sejahtera — Electrical & Mechanical Supplier",
    description:
      "General trading and supplier of electrical and mechanical goods for industry and consumers in Indonesia.",
  },
  nav: {
    label: "Navigation",
    about: "About",
    products: "Products",
    clients: "Clients",
    contact: "Contact",
  },
  switcher: { label: "Language", id: "ID", en: "EN", zh: "中文" },
  hero: {
    overline: "Industrial supplier · since 2011",
    titleTop: "PT. Dysquel",
    titleBottom: "Maju Sejahtera",
    lead: "Everything you need for electrical-mechanical requirements. We help you get information, pricing, and availability quickly.",
    primary: "Explore products",
    secondary: "Contact us",
    note: "Registered in Indonesia since 2013",
  },
  about: {
    overline: "01 / About us",
    title: "Who we are",
    lead: "We are a general trading company and supplier of electrical and mechanical goods for both industrial and consumer needs. Founded in 2011 and registered in Indonesia in 2013.",
    visionLabel: "Vision",
    vision:
      "Become a good and advanced supplier to obtain customer satisfaction.",
    missionLabel: "Mission",
    mission:
      "Provide optimum service with strong commitment in order to meet customer requirements.",
    suppliesLabel: "Supplies",
    electrical: "Electrical",
    mechanical: "Mechanical",
  },
  products: {
    overline: "02 / Brands",
    title: "Brands we supply",
    lead: "We provide electrical and mechanical products from trusted brands for industrial requirements.",
    note: "Contact us for pricing and availability.",
  },
  clients: {
    overline: "03 / Clients",
    title: "Trusted by industry",
    lead: "Our customers span a wide range of sectors across Indonesia.",
  },
  contact: {
    overline: "04 / Contact",
    title: "Let's talk",
    lead: "Send an email or reach our sales team for pricing and product availability.",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    faxLabel: "Fax",
    salesLabel: "Sales contacts",
    emailCta: "Send an email",
    callCta: "Call now",
    waCta: "WhatsApp",
  },
  catalog: {
    overline: "Product catalog",
    title: "What we supply",
    lead: "Product photos grouped by category. Select a category to explore.",
    note: "Product photos sourced from the official PT. Dysquel Maju Sejahtera catalog.",
    items: "items",
    relatedBrands: "Related brands",
    powerSupply: {
      title: "Power Supply",
      description:
        "Power supply units and modules for industrial requirements.",
    },
    industrialParts: {
      title: "Industrial Parts",
      description:
        "Industrial components including encoders and mechanical parts.",
    },
    pneumatic: {
      title: "Pneumatic",
      description:
        "Pneumatic components and systems for industrial automation.",
    },
    igbtModule: {
      title: "IGBT Module",
      description: "Semiconductor power modules for industrial applications.",
    },
  },
  footer: {
    tagline:
      "General trading & electrical-mechanical supplier for industry and consumers.",
    rights: "All rights reserved.",
  },
};

const zh: Dictionary = {
  meta: {
    title: "PT. Dysquel Maju Sejahtera — 电气与机械供应商",
    description:
      "为印度尼西亚工业与民用客户提供电气及机械产品的一般贸易与供应服务。",
  },
  nav: {
    label: "导航",
    about: "关于我们",
    products: "产品",
    clients: "客户",
    contact: "联系",
  },
  switcher: { label: "语言", id: "ID", en: "EN", zh: "中文" },
  hero: {
    overline: "工业供应商 · 创立于 2011 年",
    titleTop: "PT. Dysquel",
    titleBottom: "Maju Sejahtera",
    lead: "满足您所有电气与机械需求。我们帮助您快速获取产品信息、报价和库存情况。",
    primary: "查看产品",
    secondary: "联系我们",
    note: "2013 年于印度尼西亚注册",
  },
  about: {
    overline: "01 / 关于我们",
    title: "关于我们",
    lead: "我们是面向工业与民用客户的电气及机械产品一般贸易与供应商。公司创立于 2011 年，并于 2013 年在印度尼西亚注册。",
    visionLabel: "愿景",
    vision: "成为优秀且不断进步的供应商，以客户满意为目标。",
    missionLabel: "使命",
    mission: "以坚定的承诺提供最优服务，满足客户需求。",
    suppliesLabel: "供应范围",
    electrical: "电气",
    mechanical: "机械",
  },
  products: {
    overline: "02 / 品牌",
    title: "我们供应的品牌",
    lead: "我们提供来自知名品牌的电气与机械产品，满足各类工业需求。",
    note: "请联系我们获取报价与库存信息。",
  },
  clients: {
    overline: "03 / 客户",
    title: "深受行业信赖",
    lead: "我们的客户遍布印度尼西亚各行各业。",
  },
  contact: {
    overline: "04 / 联系",
    title: "与我们联系",
    lead: "请发送邮件或联系销售团队，获取报价与产品库存信息。",
    addressLabel: "地址",
    emailLabel: "邮箱",
    phoneLabel: "电话",
    faxLabel: "传真",
    salesLabel: "销售联系人",
    emailCta: "发送邮件",
    callCta: "立即致电",
    waCta: "WhatsApp",
  },
  catalog: {
    overline: "产品目录",
    title: "我们的供应产品",
    lead: "产品照片按类别分组。选择类别即可查看。",
    note: "产品图片来源于 PT. Dysquel Maju Sejahtera 官方目录。",
    items: "项",
    relatedBrands: "相关品牌",
    powerSupply: {
      title: "Power Supply",
      description: "满足工业需求的电源模块与单元。",
    },
    industrialParts: {
      title: "Industrial Parts",
      description: "工业部件，包括编码器及机械零件。",
    },
    pneumatic: {
      title: "Pneumatic",
      description: "用于工业自动化的气动元件与系统。",
    },
    igbtModule: {
      title: "IGBT Module",
      description: "用于工业应用的半导体功率模块。",
    },
  },
  footer: {
    tagline: "面向工业与客户的电气机械一般贸易与供应商。",
    rights: "保留所有权利。",
  },
};

export const translations: Record<Locale, Dictionary> = { id, en, zh };
