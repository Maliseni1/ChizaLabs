export const appDetails = {
  audire: {
    name: "Audire",
    category: "Productivity",
    tagline: "Turn documents into audio instantly.",
    description: "Audire is an offline-first mobile application designed to convert PDF, Docx, and Text files into speech. Perfect for students and professionals who want to listen to documents on the go.",
    icon: "/audire-preview.png",
    releases: [
      {
        version: "v2.0.0",
        date: "December 06, 2025",
        isLatest: true,
        downloads: [
          {
            type: "Modern (Recommended)",
            label: "Download for Modern Phones",
            subLabel: "Samsung, Pixel, Infinix, Tecno (arm64)",
            file: "Audire-v2.0.0-Modern.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v2.0.0/Audire-v2.0.0-Modern.apk",
            highlight: true
          },
          {
            type: "Legacy",
            label: "Download for Older Devices",
            subLabel: "Older Androids (armeabi-v7a)",
            file: "Audire-v2.0.0-Legacy.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v2.0.0/Audire-v2.0.0-Legacy.apk",
            highlight: false
          },
          {
            type: "PC / Emulator",
            label: "Download for PC",
            subLabel: "Emulator / Chromebook (x86_64)",
            file: "Audire-v2.0.0-PC.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v2.0.0/Audire-v2.0.0-PC.apk",
            highlight: false
          }
        ],
        notes: [
          "🎉 MAJOR UPDATE: Complete design overhaul",
          "📸 Camera Scanner (OCR): Snap & Listen instantly",
          "🔖 Interactive Bookmarks: Tap any word to save your spot",
          "🌙 Sleep Timer: Auto-pause after 10-60 mins",
          "🎨 New Dashboard with Quick Actions & Categories",
          "🌍 Pro Translation: Offline Bemba, Nyanja, French, Spanish",
          "🔊 Advanced Audio: Pitch, Speed, & Voice Selection",
          "⬇️ Auto-Update checker built-in"
        ]
      },
      {
        version: "v1.1.2",
        date: "November 29, 2025",
        isLatest: false,
        downloads: [
          {
            type: "Modern (Recommended)",
            label: "Download for Modern Phones",
            subLabel: "Most Samsungs, Pixels, Tecno, Infinix (arm64)",
            file: "Audire-v1.1.2-Modern.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v1.1.2/Audire-v1.1.2-Modern.apk",
            highlight: false
          },
          {
            type: "Legacy",
            label: "Download for Older Phones",
            subLabel: "Older devices (armeabi-v7a)",
            file: "Audire-v1.1.2-Legacy.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v1.1.2/Audire-v1.1.2-Legacy.apk",
            highlight: false
          },
          {
            type: "PC / Emulator",
            label: "Download for PC / Emulator",
            subLabel: "ChromeOS, Android Studio (x86_64)",
            file: "Audire-v1.1.2-PC.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v1.1.2/Audire-v1.1.2-PC.apk",
            highlight: false
          }
        ],
        notes: [
          "Optimized App Size: Reduced by 60% using split ABIs",
          "Improved TTS engine responsiveness",
          "Added support for Docx parsing",
          "Minor UI bug fixes for small screens"
        ]
      },
      {
        version: "v1.0.0",
        date: "November 28, 2025",
        isLatest: false,
        downloads: [
          {
            type: "Universal",
            label: "Download APK (Universal)",
            subLabel: "Original large release",
            file: "app-release.apk",
            link: "https://github.com/Maliseni1/Audire/releases/download/v1.0.0/app-release.apk",
            highlight: false
          }
        ],
        notes: [
          "Initial Release",
          "Support for PDF and Text files",
          "Offline Text-to-Speech engine"
        ]
      }
    ]
  },
  cutcam: {
    name: "CutCam",
    category: "AI Tools",
    tagline: "AI-Powered DIY Haircuts.",
    description: "Your personal AI barber assistant. Uses computer vision to guide your hand for the perfect self-haircut.",
    icon: "/cutcam-preview.png", 
    releases: [
      {
        version: "v1.0.0",
        date: "November 29, 2025",
        isLatest: true,
        downloads: [
          {
            type: "Universal",
            label: "Download APK",
            subLabel: "Initial Release",
            file: "app-release.apk", 
            link: "https://github.com/Maliseni1/CutCam/releases/download/v1.0.0/app-release.apk",
            highlight: true
          }
        ],
        notes: [
          "Initial Release v1.0.0",
          "Real-time head detection using Computer Vision",
          "Step-by-step guard recommendations",
          "Offline functionality"
        ]
      }
    ]
  },
  calon: {
    name: "Calon",
    category: "Health",
    tagline: "Secure Wellness & Health Hub.",
    description: "Your all-in-one hub for proactive wellness. Track symptoms securely, get medication reminders, access offline first aid guides, and find nearby health facilities instantly.",
    icon: "/calon-preview.png",
    releases: [
      {
        version: "v1.0.0",
        date: "December 03, 2025",
        isLatest: true,
        downloads: [
          {
            type: "Universal",
            label: "Download APK",
            subLabel: "Initial Release",
            file: "app-release.apk",
            link: "https://github.com/Maliseni1/calon-releases/releases/download/v1.0.0/app-release.apk",
            highlight: true
          }
        ],
        notes: [
          "Initial Release v1.0.0",
          "Secure Local Health Journal (Symptoms, Vitals)",
          "Smart Medication Reminders",
          "Offline First Aid Database (CPR, Burns, etc.)",
          "GPS Health Facility Locator"
        ]
      }
    ]
  }
};