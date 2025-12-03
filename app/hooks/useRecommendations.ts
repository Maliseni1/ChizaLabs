import { useState, useEffect } from 'react';

// Define related apps logic
const recommendations = {
  'AI Tools': {
    title: "Since you like AI Tools...",
    suggestion: "Try PhotoGen",
    desc: "Generate stunning art from text in seconds.",
    link: "https://photo-gen-seven.vercel.app/",
    icon: "/photogen-preview.png"
  },
  'Productivity': {
    title: "Boost your Workflow",
    suggestion: "Check out Omnis",
    desc: "The universal file companion coming soon to Windows & Linux.",
    link: "#applications", // Anchors to the app list
    icon: "/omnis-preview.png"
  },
  'Health': {
    title: "Prioritize your Wellness",
    suggestion: "Explore Calon",
    desc: "The secure offline health journal and first aid guide.",
    link: "/apps/calon",
    icon: "/calon-preview.png"
  }
};

export function useRecommendations() {
  const [rec, setRec] = useState<any>(null);

  useEffect(() => {
    // 1. Get the user's last visited category from Local Storage
    const lastCategory = localStorage.getItem('chiza-interest');

    // 2. If we have a recommendation for that category, set it
    // @ts-ignore
    if (lastCategory && recommendations[lastCategory]) {
      // @ts-ignore
      setRec(recommendations[lastCategory]);
    }
  }, []);

  return rec;
}