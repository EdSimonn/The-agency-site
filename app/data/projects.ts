// app/data/projects.ts

export interface Project {
  id: string | number; // Fixed: used primitive types instead of 'Key'
  title: string;
  category: string;

  // LOGIC: You can provide an image OR a video
  image?: string;
  video?: string;

  services: string;
  description: string;
  ctaText: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Asus Marketing",
    category: "Digital, Agency",
    // SCENARIO A: This project uses an IMAGE
    image: "/images/w-c-u-img-1.png",

    services: "Branding • Web Design",
    description: "A custom-crafted digital experience.",
    ctaText: "View Case Study",
    year: "2023",
  },
  {
    id: 2,
    title: "Urban Shadows",
    category: "Photography",
    // SCENARIO B: This project uses a VIDEO (behaves like a GIF)
    image: "/images/w-c-u-img-1.png",

    services: "Art Direction • Editorial",
    description: "A showcase of evocative photographic work.",
    ctaText: "Explore Collection",
    year: "2024",
  },
  {
    id: 3,
    title: "Neon Dreams",
    category: "Landing Page",
    // SCENARIO C: Another Video
    image: "/images/w-c-u-img-1.png",

    services: "UI/UX Design • Motion",
    description: "A high-conversion landing page.",
    ctaText: "Discover Live Site",
    year: "2022",
  },
  {
    id: 4,
    title: "Extra Project",
    category: "Web App",
    // SCENARIO D: Another Image
    image: "/images/w-c-u-img-1.png",
    services: "Web Development • Next.js",
    description: "An extra project to test functionalities.",
    ctaText: "View Project",
    year: "2024",
  },
];

// // app/data/projects.ts

// export interface Project {
//   // Fixed: changed 'Key' to 'string | number' to avoid import errors
//   id: string | number;
//   title: string;
//   category: string;

//   // Fixed: Added videoUrl because ProjectCard needs it.
//   // You can keep 'image' if you want a fallback, but 'videoUrl' is required now.
//   videoUrl: string;

//   services: string;
//   description: string;
//   ctaText: string;
//   year?: string; // Optional, as used in your card
// }

// export const projects: Project[] = [
//   {
//     id: 1, // Fixed: Added ID
//     title: "Asus Marketing",
//     category: "Digital, Agency",
//     // Fixed: Added a sample video URL (replace with your local path like '/videos/asus.mp4')
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-working-at-office-4694/1080p.mp4",
//     services: "Branding • Web Design",
//     description:
//       "A custom-crafted digital experience designed to elevate the brand.",
//     ctaText: "View Case Study",
//     year: "2023",
//   },
//   {
//     id: 2, // Fixed: Added ID
//     title: "Urban Shadows",
//     category: "Photography",
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-walking-in-a-city-at-night-4229/1080p.mp4",
//     services: "Art Direction • Editorial",
//     description:
//       "A showcase of evocative photographic work, focusing on urban landscape.",
//     ctaText: "Explore Collection",
//     year: "2024",
//   },
//   {
//     id: 3, // Fixed: Added ID
//     title: "Neon Dreams",
//     category: "Landing Page",
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-abstract-neon-lights-4663/1080p.mp4",
//     services: "UI/UX Design • Motion",
//     description:
//       "A high-conversion landing page designed with vibrant, modern aesthetics.",
//     ctaText: "Discover Live Site",
//     year: "2022",
//   },
//   {
//     id: 4, // Fixed: Added ID
//     title: "Extra Project",
//     category: "Web App",
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-4682/1080p.mp4",
//     services: "Web Development • Next.js",
//     description: "An extra project to test the view more button functionality.",
//     ctaText: "View Project",
//     year: "2024",
//   },
// ];
