// app/data/releases.ts

export const appDetails = {
  audire: {
    name: "Audire",
    tagline: "Turn documents into audio instantly.",
    description: "Audire is an offline-first mobile application designed to convert PDF, Docx, and Text files into speech. Perfect for students and professionals who want to listen to documents on the go.",
    icon: "/audire-preview.png", // Using your existing preview image
    releases: [
      {
        version: "v1.0.0",
        date: "November 28, 2025",
        isLatest: true,
        downloadLink: "https://github.com/Maliseni1/ChizaLabs/releases/download/v1.0.0/audire.apk",
        notes: [
          "Initial Release",
          "Support for PDF and Text files",
          "Offline Text-to-Speech engine",
          "Background playback support"
        ]
      }
      // You can add older versions here in the future
    ]
  },
  cutcam: {
    name: "CutCam",
    tagline: "AI-Powered DIY Haircuts.",
    description: "Your personal AI barber assistant. Uses computer vision to guide your hand for the perfect self-haircut.",
    icon: "/cutcam-preview.png", 
    releases: [] // Empty array means "Coming Soon"
  }
};