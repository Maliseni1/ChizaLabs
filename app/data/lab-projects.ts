export const labProjects = [
  {
    id: 'datawallet',
    title: 'DataWallet',
    status: 'Concept',
    description: 'A carrier-agnostic mobile data wallet for ZedMobile, MTN, and Airtel. It solves the problem of expiring data bundles by allowing users to store, rollover, and gift unused data across multiple networks.',
    disclaimer: 'Disclaimer: Independent R&D project. Not currently partnered with mentioned carriers. Feasibility dependent on stakeholder engagement.',
    tech: ['Next.js 16', 'Tailwind v4', 'Mobile Payment API'],
    image: '/datawallet-logo.png', 
  },
  {
    id: 'hike',
    title: 'Hike',
    status: 'Prototype',
    description: 'A ride-hailing app designed for reliability in every situation. Hike keeps working even when your internet connection is weak or unstable using offline-first technology and SMS fallback.',
    disclaimer: 'Focus: Solving ride accessibility in areas with shaky connectivity.',
    tech: ['Flutter', 'Offline-First', 'SMS Gateway', 'Geolocation'],
    image: '/hike-logo.png', 
  },
  {
    id: 'vault-chain',
    title: 'VaultChain',
    status: 'Alpha',
    description: 'A decentralized password manager that stores encrypted credentials on the blockchain. Users retain full control with no central servers. Access via dApp wallet authentication.',
    disclaimer: 'Security First: Master password is never stored. Data is AES-256 encrypted client-side before touching the chain.',
    tech: ['Solidity', 'Web3.js', 'IPFS', 'AES-256'],
    image: '/chizalabs-logo.png', // Placeholder until you have a logo
  },
  {
    id: 'phish-guard',
    title: 'PhishGuard AI',
    status: 'Concept',
    description: 'An AI chatbot simulator for social engineering defense training. It acts as a scammer (HR, Bank, Support) to train users on recognizing and resisting real-world phishing attempts.',
    disclaimer: 'Educational Tool: Designed for security awareness training only.',
    tech: ['OpenAI API', 'Python', 'React Native', 'NLP'],
    image: '/chizalabs-logo.png', // Placeholder
  },
  {
    id: 'cyber-score',
    title: 'Cyber Hygiene Score',
    status: 'Prototype',
    description: 'A personal cybersecurity auditor app. Scans device settings, password habits, and 2FA usage to generate a "Hygiene Score" (0-100) and provides custom improvement advice.',
    disclaimer: 'Privacy: Analysis happens locally on-device. No sensitive data leaves the phone.',
    tech: ['Flutter', 'Android API', 'Local ML', 'Firebase'],
    image: '/chizalabs-logo.png', // Placeholder
  }
];