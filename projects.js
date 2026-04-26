const projects = [
  {
    id: "shark-vacuum",
    category: "Shark",
    name: "Shark Cordless Vacuum",
    tagline: "cordless vacuum ergonomics & battery system",
    type: "Product Design — Case Study",
    year: "2024",
    skills: "Mechanical Engineering, SolidWorks, Prototyping, Human-Centered Design",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80",
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&h=900&q=80",
    intro: "A ground-up rethink of the cordless vacuum chassis focused on reducing user fatigue and eliminating battery anxiety during cleaning sessions.",
    sections: [
      {
        label: "Opportunity",
        content: "Cordless vacuum users struggle with battery life anxiety and awkward one-handed maneuverability during extended cleaning. Existing form factors concentrate weight away from the grip point, accelerating wrist fatigue."
      },
      {
        label: "Approach",
        content: "A redesigned chassis relocates the motor and battery assembly closer to the hand grip, lowering the effective centre of mass. Prototypes were validated through timed cleaning trials with participants across age groups."
      },
      {
        label: "Design",
        content: "The resulting form introduces a modular battery dock that allows hot-swapping mid-session. A single continuous surface from grip to nozzle reduces visual complexity and simplifies injection moulding tooling.",
        images: [
          "https://images.unsplash.com/photo-1527515637462-cff94aca55a3?auto=format&fit=crop&w=1400&h=900&q=80",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1400&h=900&q=80"
        ]
      }
    ]
  },
  {
    id: "ninja-kitchen",
    category: "Ninja",
    name: "Ninja Kitchen System",
    tagline: "countertop appliance CMF & form language",
    type: "Product Design — Case Study",
    year: "2023",
    skills: "Industrial Design, CMF, SolidWorks, User Research",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&h=600&q=80",
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&h=900&q=80",
    intro: "Elevating the Ninja countertop line through a considered CMF strategy and simplified geometry — making premium feel accessible.",
    sections: [
      {
        label: "Opportunity",
        content: "Kitchen countertop appliances at the mid-price tier often feel visually cluttered and are difficult to clean. An opportunity existed to define a stronger, more cohesive design language across the Ninja product family."
      },
      {
        label: "Approach",
        content: "User interviews and competitive teardowns revealed that cleaning difficulty and surface durability were the primary dissatisfiers. Material selection was re-evaluated against real kitchen conditions — steam, oil residue, and daily contact."
      },
      {
        label: "Design",
        content: "Simplified surface geometry reduces crevices that trap food debris. A unified colour and finish language across the product family creates a cohesive countertop presence. Matte soft-touch overmould on grip zones improves handling confidence.",
        images: [
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1400&h=900&q=80",
          "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1400&h=900&q=80"
        ]
      }
    ]
  },
  {
    id: "3d-enclosure",
    category: "Personal",
    name: "3D Printed Enclosure",
    tagline: "precision-fit electronics housing",
    type: "Personal Project",
    year: "2024",
    skills: "SolidWorks, FDM 3D Printing, Rapid Prototyping, DFM",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&h=600&q=80",
    hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&h=900&q=80",
    intro: "A purpose-built enclosure designed around a custom PCB — exploring the tolerances and surface quality achievable with desktop FDM printing.",
    sections: [
      {
        label: "Opportunity",
        content: "Off-the-shelf enclosures rarely accommodate custom PCB layouts without compromise. Designing for print from the start allows tight tolerances, integrated mounting bosses, and a surface quality suitable for a finished product."
      },
      {
        label: "Process",
        content: "Twelve print iterations refined wall thickness, snap-fit geometry, and port cutout tolerances. Each iteration was measured against a go/no-go gauge before functional testing."
      },
      {
        label: "Design",
        content: "The final enclosure uses a two-part snap-fit assembly with no exposed fasteners. A 0.2mm tolerance on all mating surfaces was achieved consistently across a Bambu Lab X1C. Internal rib geometry stiffens the shell without adding material to visible faces.",
        images: [
          "https://images.unsplash.com/photo-1565836132581-9f58b2a27b8e?auto=format&fit=crop&w=1400&h=900&q=80",
          "https://images.unsplash.com/photo-1567177663154-a0b7c68e6c28?auto=format&fit=crop&w=1400&h=900&q=80"
        ]
      }
    ]
  },
  {
    id: "human-centered",
    category: "Academic",
    name: "Human-Centered Design",
    tagline: "usability research and product iteration",
    type: "Academic Project",
    year: "2022",
    skills: "User Research, Sketching, Prototyping, Usability Testing",
    thumbnail: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&h=600&q=80",
    hero: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=1400&h=900&q=80",
    intro: "An end-to-end human-centred design project — from field observation through functional prototype — focused on a product category shaped by engineering constraints rather than user behaviour.",
    sections: [
      {
        label: "Research",
        content: "Ethnographic observation and semi-structured interviews surfaced friction points invisible to engineering-led design processes. Affinity mapping of 140+ data points produced three distinct user archetypes."
      },
      {
        label: "Process",
        content: "Six rounds of low- and mid-fidelity prototyping were conducted with representative users. Each round targeted a specific failure mode identified in the previous session, compressing the iteration cycle."
      },
      {
        label: "Outcome",
        content: "The final prototype reduced mean task completion time by 34% and scored significantly higher on perceived confidence in SUS testing. Key insight: removing a single interaction step eliminated the primary source of user error entirely.",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&h=900&q=80",
          "https://images.unsplash.com/photo-1609773335628-3e73da2de4ac?auto=format&fit=crop&w=1400&h=900&q=80"
        ]
      }
    ]
  }
];
