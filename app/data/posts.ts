// app/data/posts.ts

export const blogPosts = [
  {
    id: 1,
    title: "Why Every Business Needs a Modern Website",
    date: "November 05, 2025",
    excerpt: "In today's digital-first world, your website is your most powerful asset. We explore why having a sleek, performant site matters.",
    image: "/chizalabs-logo.png", // We can use a placeholder for now
    slug: "why-business-needs-modern-website",
    isAvailable: true
  },
  {
    id: 2,
    title: "A Guide to AI-Powered Image Generation",
    date: "November 01, 2025",
    excerpt: "From DALL-E to Stable Diffusion, we break down the technology behind tools like PhotoGen and how they are changing creativity.",
    image: "/photogen-preview.png",
    slug: "guide-to-ai-image-generation",
    isAvailable: false // We can use this to disable the link if the post isn't written yet
  },
  {
    id: 3,
    title: "The Future of Offline-First Apps",
    date: "October 28, 2025",
    excerpt: "With apps like Audire, local-first computing is making a comeback. Learn why offline capability is a crucial feature for African markets.",
    image: "/audire-preview.png",
    slug: "future-offline-first-apps",
    isAvailable: false
  }
];