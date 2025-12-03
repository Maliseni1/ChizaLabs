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
    isAvailable: true, 
    content: `
      <p>Artificial Intelligence has moved from analyzing data to creating art. Generative AI models are reshaping how designers, marketers, and artists approach visual content. At Chiza Labs, we harnessed this power to build <strong>PhotoGen</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">How It Works</h3>
      <p>Most modern AI image generators use a process called "Latent Diffusion." Imagine a TV screen full of static noise. The AI is trained to gradually remove that noise until a clear image emerges. By guiding this process with text prompts (e.g., "a futuristic city in Zambia"), we can control exactly what image appears out of the static.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">The Impact on Creativity</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Rapid Prototyping:</strong> Designers can generate ten variations of a logo concept in seconds.</li>
        <li><strong>Accessibility:</strong> You don't need to be a master painter to visualize your ideas.</li>
        <li><strong>Cost Efficiency:</strong> Small businesses can generate custom assets without expensive photoshoots.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-8 mb-4">The Future with PhotoGen</h3>
      <p>PhotoGen is designed to make this technology accessible. We are working on optimizing our models to understand local contexts better, ensuring that African narratives are represented accurately in the AI art space.</p>
    `
  },
  {
    id: 3,
    title: "The Future of Offline-First Apps",
    date: "October 28, 2025",
    excerpt: "With apps like Audire, local-first computing is making a comeback. Learn why offline capability is a crucial feature for African markets.",
    image: "/audire-preview.png",
    slug: "future-offline-first-apps",
    isAvailable: true,
    content: `
      <p>In a world obsessed with 5G and cloud computing, there is a quiet revolution happening in software development: <strong>Local-First Software</strong>. At Chiza Labs, we believe this is the key to unlocking digital potential in Africa.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">The Connectivity Challenge</h3>
      <p>While internet penetration is growing, consistent high-speed connectivity remains a luxury in many parts of the world. An app that stops working when the signal drops is an app that fails its user. This is why we built <strong>Audire</strong> and <strong>Calon</strong> to work 100% offline.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">Why Offline Matters</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Reliability:</strong> Your health data (Calon) or documents (Audire) should be accessible whether you are in a city center or a remote village.</li>
        <li><strong>Speed:</strong> Local apps don't wait for server responses. They react instantly to your touch.</li>
        <li><strong>Privacy:</strong> Data stored on your device belongs to you. It reduces the risk of cloud data breaches.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-8 mb-4">Building for the Edge</h3>
      <p>Creating offline apps is harder than building cloud apps. It requires sophisticated synchronization logic and efficient local databases. But the result—a resilient, fast, and empowering tool for the user—is worth the effort.</p>
    `
  },
  // --- COMING SOON (2026) ---
  {
    id: 4,
    title: "The Role of Computer Vision in Personal Grooming",
    date: "January 15, 2026",
    excerpt: "How AI is moving from our screens to our mirrors. We explore the tech stack behind CutCam and the future of AR beauty tools.",
    image: "/cutcam-preview.png", // Reusing CutCam image
    slug: "computer-vision-grooming",
    isAvailable: false
  },
  {
    id: 5,
    title: "Securing Health Data on Mobile Devices",
    date: "February 10, 2026",
    excerpt: "Privacy is paramount when dealing with medical history. A deep dive into the encryption standards used in Calon.",
    image: "/calon-preview.png", // Reusing Calon image
    slug: "securing-health-data",
    isAvailable: false
  },
  {
    id: 6,
    title: "Omnis: Redefining Cross-Platform Productivity",
    date: "March 22, 2026",
    excerpt: "Why we are building a universal file companion for Windows, Linux, and Mobile. The challenge of a unified ecosystem.",
    image: "/omnis-preview.png", // Reusing Omnis image
    slug: "omnis-cross-platform",
    isAvailable: false
  }
];