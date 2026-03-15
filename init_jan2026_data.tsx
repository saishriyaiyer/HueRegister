// Script to initialize January 2026 CMF observation data
// This data should be submitted via POST to /cmf/events endpoint

export const january2026Events = [
  {
    event_name: "Capture of Venezuelan President Nicolás Maduro & Viral Nike Tech Fleece 'Maduro Fit'",
    event_date: "2026-01-14",
    event_type: "Geopolitical Event / Cultural Trend",
    domain: "Consumer Behaviour / Fashion",
    region: "Global",
    description: "Following the military capture of Venezuelan President Nicolás Maduro by U.S. forces, a widely shared photograph showing him in a grey Nike Tech Fleece tracksuit went viral globally. The tracksuit sold out rapidly, becoming a viral cultural and retail moment.",
    source_links: ["euronews", "Cybernews", "The National"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        dominant: "Heather Grey Nike Tech Fleece",
        termed: "'Maduro grey' trending on social platforms",
        accents: "Black Nike Swoosh minimal accent"
      },
      material: {
        base: "Nike Tech Fleece – spacer fabric",
        content: "Recycled polyester and cotton blend (~50% sustainable)"
      },
      finish: {
        descriptors: ["Soft matte fleece exterior", "Low sheen textile surface", "Clean minimal seams"]
      }
    },
    signals: [
      {
        signal_name: "Athleisure Grey Revival",
        cmf_type: "Colour",
        maturity: "Emerging",
        description: "Mid-grey tone tied to viral 'Maduro grey' phenomenon surging in consumer searches and retail behaviour",
        industries: ["Fashion", "Textiles", "Automotive", "Interiors", "Product", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Sustainable Performance Fabricity",
        cmf_type: "Material",
        maturity: "Emerging",
        description: "Increased attention to comfortable, resilient fleece materials with recycled content",
        industries: ["Fashion", "Textiles", "Product"],
        confidence_band: "Medium",
        primary_industry: "Textiles"
      },
      {
        signal_name: "Matte Comfort Surface",
        cmf_type: "Finish",
        maturity: "Established",
        description: "Soft, low-luster textile surfaces associated with casual/daily wear",
        industries: ["Fashion", "Product", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      }
    ],
    editorial_summary: "In early 2026, a geopolitical event produced one of the most unpredictable CMF reverberations in recent memory. An image of Maduro in Nike Tech Fleece went globally viral, generating extraordinary earned media and sparking widespread interest in its mid-grey colourway. This moment underscores how visual elements from world events can trigger consumer behaviour and elevate neutral palettes in popular culture.",
    macro_context: "Viral social culture, earned media effect, shift to relatability",
    time_horizon: {
      immediate: "Persisting high search interest for grey tones & athletic comfort wear",
      mid: "Diffusion into mainstream athleisure colour stories",
      long: "Secondary influence in interiors and digital UX neutrals"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 3,
      material_feasibility: 4,
      cultural_resonance: 4
    }
  },
  
  {
    event_name: "LEGO® SMART Play™ Launch",
    event_date: "2026-01-05",
    event_type: "Product Launch / CES Exhibition",
    domain: "Product / Toy Innovation",
    region: "Global",
    description: "LEGO unveils SMART Play platform featuring Smart Bricks, Smart Tags, and Smart Minifigures which respond to physical movement with light and sound effects, without screens",
    source_links: ["lego.com"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        palette: "Classic LEGO primary palette (white/grey/black/red)",
        light_behavior: "Smart Brick light effects (interactive RGB)"
      },
      material: {
        base: "ABS plastic (standard LEGO)",
        embedded_tech: "Custom ASIC chip, accelerometer, sensors, speaker, wireless charging"
      },
      finish: {
        surface: "Smooth injection-moulded plastic",
        treatment: "Standard LEGO matte to semi-gloss"
      }
    },
    signals: [
      {
        signal_name: "Interactive Light Response",
        cmf_type: "Colour",
        maturity: "Emerging",
        description: "Light behaviour as colour expression rather than static palette",
        industries: ["Product", "Interiors", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Product"
      },
      {
        signal_name: "Tech-Embedded Plastics",
        cmf_type: "Material",
        maturity: "Emerging",
        description: "Integration of sensors and electronics into traditional plastic forms",
        industries: ["Product", "Automotive", "Interiors"],
        confidence_band: "Low-Med",
        primary_industry: "Product"
      },
      {
        signal_name: "Low-Gloss Functional Surfaces",
        cmf_type: "Finish",
        maturity: "Established",
        description: "Matte practical finishes for interactive toy surfaces",
        industries: ["Product", "Automotive", "Fashion"],
        confidence_band: "Low",
        primary_industry: "Product"
      }
    ],
    editorial_summary: "The LEGO SMART Play platform represents a significant evolution in plastic toy systems, blending classic modular construction with interactive light and sound responses. The CMF impact is currently more about behavioural interactivity than traditional colour palette shifts, with light behaviour emerging as a new expressive vector.",
    macro_context: "Consumer demand for screen-free interactivity, technology convergence",
    time_horizon: {
      immediate: "Launch interest and spring retail cycle",
      mid: "Expanded Smart Play sets & creator ecosystem influence",
      long: "Broader adoption of interactive toy concepts"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 2,
      material_feasibility: 3,
      cultural_resonance: 3
    }
  },

  {
    event_name: "Gold leaf covers every surface of artist Ignasi Monreal's 'impractical' home",
    event_date: "2026-01-15",
    event_type: "Architectural / Interior Feature",
    domain: "Architecture / Interiors",
    region: "Europe (Madrid, Spain)",
    description: "Spanish artist transforms his Madrid flat into a gold-leafed interior, covering walls, ceilings, doors, and hinges with gold-plated copper sheets",
    source_links: ["Architectural Digest India"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        dominant: "Metallic gold (high chroma, warm yellow hue)",
        contrast: "Black principal bedroom contrasts with gold"
      },
      material: {
        base: "Gold leaf on copper sheeting",
        application: "Hand-applied sheets (specialist spent four months)"
      },
      finish: {
        surface: "Metallic, continuous reflective finish",
        reflectivity: "High with slight texture from leaf seams"
      }
    },
    signals: [
      {
        signal_name: "Total Metallic Saturation",
        cmf_type: "Colour",
        maturity: "Emerging",
        description: "Complete environmental saturation with single metallic hue",
        industries: ["Fashion", "Interiors", "Product", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Interiors"
      },
      {
        signal_name: "Gilded Surface Materiality",
        cmf_type: "Material",
        maturity: "Emerging",
        description: "Architectural-scale gilding as material narrative",
        industries: ["Interiors", "Product", "Fashion"],
        confidence_band: "Medium",
        primary_industry: "Interiors"
      },
      {
        signal_name: "High Reflective Textural Finish",
        cmf_type: "Finish",
        maturity: "Emerging",
        description: "Reflective surfaces with visible handcraft texture",
        industries: ["Interiors", "Automotive", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Interiors"
      }
    ],
    editorial_summary: "Ignasi Monreal's gold-leafed home presents a bold experiment in spatial CMF saturation, where gold transcends ornamentation to become the defining aesthetic of an entire living environment. The project's influence is most visible in high-end fashion metallics, luxury interior highlights, and designer product finishes.",
    macro_context: "Cultural luxury expression, emotional/experiential design, artistic experimentation",
    time_horizon: {
      immediate: "Editorial amplification & visual culture inspiration",
      mid: "High-end interior highlights & selected fashion interpretations",
      long: "Diffusion into subtler metallic accents"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 3,
      material_feasibility: 3,
      cultural_resonance: 4
    }
  },

  {
    event_name: "Indigo exhibition at Hampi Art Labs",
    event_date: "2026-01-20",
    event_type: "Exhibition / Cultural Event",
    domain: "Art & Textiles / Cultural Heritage",
    region: "India (Hampi)",
    description: "Exhibition explores the deep artistic, cultural, and emotional layers of indigo as a pigment and dye, showcasing traditional indigo-dyed textiles and contemporary interpretations",
    source_links: ["Architectural Digest India"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        dominant: "Indigo (deep blue)",
        range: "Light to deep saturated indigo gradients",
        secondary: "Natural undyed whites/creams as contrast"
      },
      material: {
        base: "Natural fibres (cotton, linen, silk)",
        dyeing: "Natural indigo pigment, hand-dyed textiles"
      },
      finish: {
        surface: "Matte, soft dyed surface",
        texture: "Slight unevenness from handcraft dye absorption"
      }
    },
    signals: [
      {
        signal_name: "Authentic Indigo Gradient",
        cmf_type: "Colour",
        maturity: "Strong",
        description: "Deep saturated indigo spectrum with organic tonal variations",
        industries: ["Fashion", "Textiles", "Interiors", "Digital"],
        confidence_band: "High",
        primary_industry: "Textiles"
      },
      {
        signal_name: "Heritage Dye Materiality",
        cmf_type: "Material",
        maturity: "Established",
        description: "Natural indigo dye with traditional craft techniques",
        industries: ["Textiles", "Fashion", "Interiors"],
        confidence_band: "High",
        primary_industry: "Textiles"
      },
      {
        signal_name: "Matte Organic Surface",
        cmf_type: "Finish",
        maturity: "Strong",
        description: "Soft, naturally uneven surfaces celebrating handcraft",
        industries: ["Interiors", "Fashion", "Digital"],
        confidence_band: "High",
        primary_industry: "Textiles"
      }
    ],
    editorial_summary: "The Hampi Art Labs indigo exhibition reframes indigo as more than a colour—it's a cultural and emotional archive encoded in fibres and dyes. The exhibition underscores a broader design shift: raw, hand-tinted, historically rooted colour is replacing flat, synthetic blues with texture-rich authenticity.",
    macro_context: "Cultural heritage resurgence, sustainability & natural material interest, emotional storytelling",
    time_horizon: {
      immediate: "Editorial impact and artisan spotlighting",
      mid: "Slow growth in craft-driven collections",
      long: "Broader adoption of indigo heritage palettes"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 3,
      material_feasibility: 4,
      cultural_resonance: 5
    }
  },

  {
    event_name: "Saba Azad's Velvet Luxe Style Twist",
    event_date: "2026-01-18",
    event_type: "Fashion Feature / Celebrity Style",
    domain: "Fashion",
    region: "India",
    description: "Elle India fashion editorial highlighting Saba Azad's festive velvet ensemble—deep blue velvet kurti with gold embroidery and green dhoti pants",
    source_links: ["Elle India"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        primary: "Deep blue velvet (#001f4d), Jewel-toned green (#005f3f)",
        accents: "Gold embroidery (metallic yellow)"
      },
      material: {
        base: "Velvet fabric (plush, dense pile)",
        embroidery: "Metallic thread with gold detailing"
      },
      finish: {
        surface: "Velvet's natural low-to-medium sheen",
        contrast: "Metallic embroidery with reflective light-catching"
      }
    },
    signals: [
      {
        signal_name: "Regal Jewel Velvet",
        cmf_type: "Colour",
        maturity: "Strong",
        description: "Deep sapphire and emerald jewel tones with velvet richness",
        industries: ["Fashion", "Textiles", "Interiors", "Digital"],
        confidence_band: "High",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Plush Velvet Materiality",
        cmf_type: "Material",
        maturity: "Strong",
        description: "Velvet's tactile warmth as seasonal luxury fabric",
        industries: ["Fashion", "Textiles", "Interiors"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Metallic Embroidery Accents",
        cmf_type: "Finish",
        maturity: "Established",
        description: "Reflective metallic embroidery highlights",
        industries: ["Fashion", "Textiles", "Product", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      }
    ],
    editorial_summary: "Saba Azad's styling anchors itself in the rich tactile world of velvet, pairing deep sapphire blue and emerald green with delicate gold embroidery. Velvet's prominence drives seasonal wardrobe choices and influences adjacent design domains: from rich upholstery to deep UI palettes.",
    macro_context: "Seasonality (winter/festive), cultural tradition (ethnic wear aesthetics), celebrity influence",
    time_horizon: {
      immediate: "Peak seasonal interest in festive collections",
      mid: "Velvet influence in transitional outerwear",
      long: "Jewel tone palettes migrate into lifestyle and interiors"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 4,
      material_feasibility: 3,
      cultural_resonance: 4
    }
  },

  {
    event_name: "Samsung's smart fridges with voice-controlled doors",
    event_date: "2026-01-05",
    event_type: "Product / Tech Report (CES 2026)",
    domain: "Consumer Electronics / Appliances",
    region: "Global",
    description: "Samsung introduces voice-driven door mechanisms for Family Hub smart refrigerators, enabling hands-free opening and closing through Bixby voice commands",
    source_links: ["SamMobile"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        base: "White/neutral finishes",
        accents: "Stainless steel/silver trim",
        digital_ui: "Black background with colored icons"
      },
      material: {
        base: "Powder-coated steel panels, tempered glass shelving",
        components: "Plastic control components, metal hinges",
        sensors: "Integrated microphones and voice sensors"
      },
      finish: {
        surface: "Matte / semi-gloss appliance finishes",
        screen: "Glossy digital display surface"
      }
    },
    signals: [
      {
        signal_name: "Smart White Appliance Palette",
        cmf_type: "Colour",
        maturity: "Established",
        description: "Neutral appliance colors for modern home tech integration",
        industries: ["Product", "Interiors", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Product"
      },
      {
        signal_name: "Mixed Functional Materials",
        cmf_type: "Material",
        maturity: "Established",
        description: "Sensor-equipped surfaces blending steel, glass, and smart components",
        industries: ["Automotive", "Product", "Interiors", "Digital"],
        confidence_band: "High",
        primary_industry: "Product"
      },
      {
        signal_name: "Matte-Semi-Gloss Appliance Surfaces",
        cmf_type: "Finish",
        maturity: "Strong",
        description: "Balance of matte and semi-gloss for sophisticated appliance design",
        industries: ["Product", "Automotive", "Interiors", "Digital"],
        confidence_band: "High",
        primary_industry: "Product"
      }
    ],
    editorial_summary: "Samsung's voice-activated smart fridges underscore convergence in consumer product design where touchless interaction meets neutral appliance elegance. The design language of neutral finishes, integrated sensors, and accessible interaction spaces is influencing interiors, automotive trim schemes, and IoT devices.",
    macro_context: "Consumer demand for touchless/accessible interfaces, AI integration, minimal aesthetic preference",
    time_horizon: {
      immediate: "Retail interest & adoption of voice-enabled appliances",
      mid: "Expansion of neutral accessible design in home tech",
      long: "Smart integration across adjacent consumer products"
    },
    confidence_inputs: {
      source_authority: 3,
      cross_domain_alignment: 4,
      material_feasibility: 5,
      cultural_resonance: 4
    }
  },

  {
    event_name: "Nimrat Kaur — Raw Mango Black Sari with Gold Accents",
    event_date: "2025-12-30",
    event_type: "Fashion Feature / Celebrity Style",
    domain: "Fashion / Ethnic Wear",
    region: "India / Global",
    description: "Elle India editorial highlighting Nimrat Kaur's styling of a Raw Mango black sari with subtle gold accents, emphasizing craft and heritage-inspired details",
    source_links: ["Elle India"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        primary: "Deep black (rich inky black base)",
        accents: "Gold-toned border and jewelry",
        makeup: "Bold red lip"
      },
      material: {
        textile: "Handwoven sari (likely cotton/silk blend from Raw Mango)",
        embellishment: "Gold-toned detailing (metallic threads or brocade)",
        jewelry: "Classic gold earrings and minimal accessories"
      },
      finish: {
        sari: "Matte to soft lustre textile finish",
        gold: "Shimmering metallic highlights without high gloss",
        makeup: "Luminous skin with matte-rich red lip"
      }
    },
    signals: [
      {
        signal_name: "Classic Black Base",
        cmf_type: "Colour",
        maturity: "Strong",
        description: "Deep black as commanding foundation for ethnic and evening wear",
        industries: ["Fashion", "Textiles", "Interiors", "Product", "Digital"],
        confidence_band: "High",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Gold Accent Resonance",
        cmf_type: "Material / Colour",
        maturity: "Strong",
        description: "Gold accents adding luminosity without overt glamour",
        industries: ["Fashion", "Textiles", "Product", "Interiors"],
        confidence_band: "High",
        primary_industry: "Fashion"
      },
      {
        signal_name: "Subtle Matte + Metallic Contrast",
        cmf_type: "Finish",
        maturity: "Emerging",
        description: "Interplay of matte textile and selective metallic highlights",
        industries: ["Interiors", "Product", "Digital"],
        confidence_band: "Medium",
        primary_industry: "Fashion"
      }
    ],
    editorial_summary: "Nimrat Kaur's styling encapsulates a timeless, restrained aesthetic that bridges traditional ethnic dressing with contemporary minimalism. The deep black base functions as a commanding canvas, while gold accents add luminosity—a nuanced interplay of heritage and modernity that communicates both ceremony and calm authority.",
    macro_context: "Heritage craft and minimal luxury, emotional refinement, cultural resonance",
    time_horizon: {
      immediate: "Editorial diffusion into seasonal styling",
      mid: "Broader adoption in capsule collections and accessory palettes",
      long: "Integration into interiors and digital design via contrast palettes"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 4,
      material_feasibility: 4,
      cultural_resonance: 5
    }
  },

  {
    event_name: "Air purifiers review amid worsening AQI in Indian cities",
    event_date: "2026-01-05",
    event_type: "Product reporting / Tech roundup",
    domain: "Consumer Technology / Home Appliances",
    region: "India",
    description: "Hindustan Times reviews air purifiers for worsening AQI conditions, comparing features, coverage, filtration, and design finishes",
    source_links: ["Hindustan Times"],
    observation_cycle: "2026-01",
    analyst_name: "Material Colour Office",
    observed_evidence: {
      colour: {
        base: "Predominantly white, black, gray/neutral across models",
        indicators: "Multicolored LED/digital displays (red/yellow/green for AQI)"
      },
      material: {
        housing: "Powder-coated steel or plastic housings",
        filters: "HEPA (True HEPA, H13, HEPA14), activated carbon",
        controls: "Plastic buttons, app-controlled electronics"
      },
      finish: {
        surface: "Matte or soft-touch plastic/metal panels",
        displays: "LED/gloss display windows"
      }
    },
    signals: [
      {
        signal_name: "Neutral Appliance Base Palette",
        cmf_type: "Colour",
        maturity: "Established",
        description: "White/black/gray neutrals for home appliance integration",
        industries: ["Product", "Interiors", "Digital"],
        confidence_band: "High",
        primary_industry: "Product"
      },
      {
        signal_name: "Functional Filtration Materiality",
        cmf_type: "Material",
        maturity: "Strong",
        description: "Performance-first materials (HEPA, activated carbon) as design signifiers",
        industries: ["Automotive", "Product", "Interiors"],
        confidence_band: "High",
        primary_industry: "Product"
      },
      {
        signal_name: "Matte Industrial Home Finish",
        cmf_type: "Finish",
        maturity: "Strong",
        description: "Durable matte surfaces for everyday home appliances",
        industries: ["Product", "Interiors", "Automotive"],
        confidence_band: "High",
        primary_industry: "Product"
      }
    ],
    editorial_summary: "Amid worsening air quality, air purifiers have become essential functional home appliances with design languages that are as pragmatic as their performance. A consistent neutral palette, functional filtration materials, and matte industrial finishes define the current CMF signature, reflecting how product design adapts to sustained environmental stressors.",
    macro_context: "Persistent pollution crisis, usability & accessibility, digital integration",
    time_horizon: {
      immediate: "High relevance as pollution remains urgent",
      mid: "Continued product refinement and mainstream integration",
      long: "Broader impact on holistic home hygiene products"
    },
    confidence_inputs: {
      source_authority: 4,
      cross_domain_alignment: 3,
      material_feasibility: 5,
      cultural_resonance: 4
    }
  }
];
