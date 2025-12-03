// app/data/posts.ts

export const blogPosts = [
  {
    id: 1,
    title: "Why Every Business Needs a Modern Website",
    date: "November 05, 2025",
    excerpt: "In today's digital-first world, your website is your most powerful asset. We explore why having a sleek, performant site matters.",
    image: "/chizalabs-logo.png", 
    slug: "why-business-needs-modern-website",
    isAvailable: true,
    content: `
      <p>In the digital age, a website is often the first interaction a potential customer has with your brand. It's your 24/7 salesperson, your brand ambassador, and the central hub of your marketing efforts. But simply "having" a website isn't enough anymore.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Credibility and Trust</h3>
      <p>75% of consumers admit to making judgments on a company's credibility based on the company's website design. If your site looks outdated, users assume your business is outdated. A modern, clean interface signals professionalism and competence.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Performance is Money</h3>
      <p>Speed kills—or rather, the lack of it does. Amazon found that every 100ms of latency cost them 1% in sales. Modern frameworks like Next.js (which Chiza Labs uses) ensure your site loads instantly, keeping users engaged and reducing bounce rates.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Mobile First</h3>
      <p>Over 60% of web traffic comes from mobile devices. A responsive design isn't a feature; it's a necessity. Modern websites adapt fluidly to any screen size, ensuring a seamless experience whether your customer is on a laptop in the office or a phone on the go.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">Conclusion</h3>
      <p>Invest in your digital presence. It's the highest ROI asset your business can own today.</p>
    `
  },
  {
    id: 2,
    title: "A Guide to AI-Powered Image Generation",
    date: "November 01, 2025",
    excerpt: "From DALL-E to Stable Diffusion, we break down the technology behind tools like PhotoGen and how they are changing creativity.",
    image: "/photogen-preview.png",
    slug: "guide-to-ai-image-generation",
    isAvailable: false, // Set to true if you want to enable this link
    content: "Content coming soon..."
  },
  {
    id: 3,
    title: "The Future of Offline-First Apps",
    date: "October 28, 2025",
    excerpt: "With apps like Audire, local-first computing is making a comeback. Learn why offline capability is a crucial feature for African markets.",
    image: "/audire-preview.png",
    slug: "future-offline-first-apps",
    isAvailable: false,
    content: "Content coming soon..."
  }
];