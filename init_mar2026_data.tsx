// March 2026 Observation Cycle Data
// Based on Iran War Impact + Forma Design Week

export const march2026Events = [
  // Event 1: Iran War Impact on Global Textiles & CMF Systems
  {
    event_name: "Iran War Impact on Global Textiles & CMF Systems",
    event_date: "2026-03-01",
    event_type: "Geopolitical Event",
    domain: "Global manufacturing / textile industry / design materials",
    region: "Global",
    description: "Escalation of military conflict involving Iran creates volatility in oil markets and threatens maritime trade routes such as the Strait of Hormuz. Because many synthetic fibres rely on petrochemical feedstocks and global shipping routes pass through the region, the conflict produces ripple effects across textile production, dyeing, and material sourcing.",
    source_links: [],
    observation_cycle: "2026-03",
    analyst_name: "Saishriya Iyer",
    observed_evidence: {
      colour: {
        dominant: "Olive green, Charcoal grey, Navy blue, Sand/khaki neutrals",
        accents: "Neutral and utilitarian palettes, Reduced emphasis on bright seasonal colours"
      },
      material: {
        base: "Increased price volatility in polyester, nylon, and synthetic fibres; Greater interest in natural fibres such as cotton, wool, and linen; Manufacturers exploring blended fabrics to manage cost and supply risk"
      },
      finish: {
        surface: "Matte textile surfaces, Undyed or low-process fabrics, Mechanically finished textures rather than chemical coatings, Reduction in energy-intensive textile finishing processes"
      }
    },
    signals: [
      {
        signal_name: "Petrochemical Fibre Volatility",
        cmf_type: "Material",
        maturity: "Strong",
        description: "Synthetic fibres such as polyester and nylon experience cost increases due to reliance on petroleum-based raw materials",
        industries: ["Fashion", "Textiles", "Product", "Automotive", "Interiors"],
        confidence_band: "High",
        primary_industry: "Textiles"
      },
      {
        signal_name: "Wartime Utility Palette",
        cmf_type: "Colour",
        maturity: "Emerging",
        description: "Consumer markets shift toward practical, durable colours associated with workwear and military-inspired palettes",
        industries: ["Fashion", "Textiles", "Interiors", "Product"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Low-Energy Textile Finishing",
        cmf_type: "Finish",
        maturity: "Emerging",
        description: "Manufacturers reduce dyeing and chemical finishing processes because textile finishing is energy-intensive",
        industries: ["Textiles", "Fashion", "Interiors"],
        confidence_band: "Medium",
        primary_industry: "Textiles"
      },
      {
        signal_name: "Natural Fibre Resurgence",
        cmf_type: "Material",
        maturity: "Emerging",
        description: "Designers and manufacturers reconsider natural fibres as alternatives to petroleum-based synthetics",
        industries: ["Fashion", "Textiles", "Interiors"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      }
    ],
    editorial_summary: "The Iran conflict illustrates how geopolitical instability can influence the CMF ecosystem through energy markets and logistics networks. Synthetic fibres such as polyester depend heavily on petroleum derivatives, meaning oil price fluctuations directly affect textile manufacturing costs. As a result, manufacturers may simplify finishing processes, explore alternative fibre blends, and prioritise practical colour palettes associated with durability and long-term use. Over time, this environment may accelerate interest in natural fibres and low-energy textile finishing techniques, reshaping both material choices and aesthetic directions in fashion, interiors, and product design.",
    macro_context: "Rising oil and energy prices affecting petrochemical industries, Shipping disruptions increasing transport costs, Economic uncertainty shifting consumer demand toward durable goods",
    time_horizon: {
      immediate: "Energy price volatility and supply chain delays (0-6 months)",
      mid: "Textile manufacturers adjust sourcing and fibre blends (6-12 months)",
      long: "Possible structural shift toward natural fibres and regional supply chains (12-24 months)"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 4,
      material_feasibility: 5,
      cultural_resonance: 3
    }
  },

  // Event 2: Forma Design Week 2026
  {
    event_name: "Forma Design Week 2026",
    event_date: "2026-03-15",
    event_type: "Design Fair",
    domain: "Furniture / Product Design / Contemporary Materials",
    region: "Europe",
    description: "Forma Design Week 2026 presented contemporary furniture, lighting, and product design installations highlighting experimentation with sustainable materials, minimalist aesthetics, and industrial production techniques. The event featured emerging designers alongside established studios, emphasizing material innovation, modular systems, and restrained colour palettes.",
    source_links: [],
    observation_cycle: "2026-03",
    analyst_name: "Saishriya Iyer",
    observed_evidence: {
      colour: {
        dominant: "Charcoal grey, Off-white/bone neutral, Cool industrial grey, Muted earth tones",
        accents: "Oxidized green, Soft rust tones"
      },
      material: {
        base: "Recycled composite panels, Lightweight aluminum structures, Powder-coated steel frames, Bio-resin and recycled polymer materials, Engineered wood and laminated surfaces"
      },
      finish: {
        surface: "Ultra-matte powder-coated metals, Brushed aluminum surfaces, Soft-touch polymer coatings, Sandblasted mineral surfaces, Low-gloss industrial coatings"
      }
    },
    signals: [
      {
        signal_name: "Monochrome Industrial Palette",
        cmf_type: "Colour",
        maturity: "Strong",
        description: "Furniture and product collections increasingly use restrained monochrome colour systems dominated by greys, off-whites, and muted earth tones, reinforcing minimalist and industrial design aesthetics",
        industries: ["Interiors", "Product", "Automotive", "Digital"],
        confidence_band: "High",
        primary_industry: "Product"
      },
      {
        signal_name: "Sustainable Composite Materials",
        cmf_type: "Material",
        maturity: "Emerging",
        description: "Growing use of recycled composites, bio-resins, and engineered materials reflects increased focus on sustainability and circular manufacturing in contemporary design",
        industries: ["Product", "Interiors", "Automotive"],
        confidence_band: "Medium",
        primary_industry: "Product"
      },
      {
        signal_name: "Ultra-Matte Industrial Finishes",
        cmf_type: "Finish",
        maturity: "Strong",
        description: "Designers favour low-reflectivity surfaces, including powder-coated metals and soft-touch polymers, creating tactile and visually subdued product surfaces",
        industries: ["Product", "Interiors", "Automotive"],
        confidence_band: "High",
        primary_industry: "Product"
      }
    ],
    editorial_summary: "Forma Design Week 2026 highlighted a continued movement toward minimalist industrial design aesthetics supported by sustainable material experimentation. Designers emphasised restrained monochrome palettes, tactile matte finishes, and recycled composite materials, reinforcing broader shifts toward circular design and material efficiency. These CMF signals are likely to influence furniture, product design, automotive interiors, and digital interface aesthetics as industries adopt similar material and surface strategies.",
    macro_context: "Increasing emphasis on sustainable material innovation, Rising interest in minimalist industrial aesthetics, Growth of circular design and recycled material systems",
    time_horizon: {
      immediate: "Product and furniture collections adopt neutral monochrome palettes (0-6 months)",
      mid: "Wider use of recycled composites in interiors and product manufacturing (6-12 months)",
      long: "Expansion of matte industrial finishes across multiple consumer industries (12-24 months)"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 4,
      material_feasibility: 5,
      cultural_resonance: 3
    }
  }
];
