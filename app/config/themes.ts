export type SeasonalTheme = 'default' | 'christmas' | 'halloween' | 'valentine' | 'easter';

export interface ThemeConfig {
  name: string;
  colors: {
    primary: string; // Main brand color (e.g., blue-500)
    accent: string;  // Secondary color
    bgLight: string; // Light mode background tint
    bgDark: string;  // Dark mode background tint
  };
  icon: string;
}

export const seasonalThemes: Record<SeasonalTheme, ThemeConfig> = {
  default: {
    name: 'Default',
    colors: {
      primary: 'blue',
      accent: 'indigo',
      bgLight: 'bg-slate-50',
      bgDark: 'dark:bg-gray-950',
    },
    icon: '🔵'
  },
  christmas: {
    name: 'Holiday',
    colors: {
      primary: 'red',
      accent: 'green',
      bgLight: 'bg-red-50',
      bgDark: 'dark:bg-red-950/20',
    },
    icon: '🎄'
  },
  halloween: {
    name: 'Spooky',
    colors: {
      primary: 'orange',
      accent: 'purple',
      bgLight: 'bg-orange-50',
      bgDark: 'dark:bg-orange-950/20',
    },
    icon: '🎃'
  },
  valentine: {
    name: 'Love',
    colors: {
      primary: 'pink',
      accent: 'rose',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-950/20',
    },
    icon: '💖'
  },
  easter: {
    name: 'Spring',
    colors: {
      primary: 'teal',
      accent: 'yellow',
      bgLight: 'bg-teal-50',
      bgDark: 'dark:bg-teal-950/20',
    },
    icon: '🐰'
  }
};

export const getCurrentSeason = (): SeasonalTheme => {
  const date = new Date();
  const month = date.getMonth(); // 0-11 (Jan is 0)
  const day = date.getDate();

  // Christmas: Dec 1 - Dec 31
  if (month === 11) return 'christmas';
  
  // Halloween: Oct 1 - Oct 31
  if (month === 9) return 'halloween';

  // Valentine: Feb 1 - Feb 14
  if (month === 1 && day <= 14) return 'valentine';

  // Easter (Approximate for March/April)
  if (month === 2 || month === 3) return 'easter';

  return 'default';
};