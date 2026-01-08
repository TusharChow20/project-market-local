import {
  Smartphone,
  Sparkles,
  Shirt,
  Home,
  Watch,
  Gamepad2,
  Book,
  Utensils,
  LucideIcon,
} from "lucide-react";

type IconName = 
  | "Smartphone"
  | "Sparkles"
  | "Shirt"
  | "Home"
  | "Watch"
  | "Gamepad2"
  | "Book"
  | "Utensils";

const iconMap: Record<IconName, LucideIcon> = {
  Smartphone,
  Sparkles,
  Shirt,
  Home,
  Watch,
  Gamepad2,
  Book,
  Utensils,
};

export const getIcon = (iconName: string, className?: string) => {
  const IconComponent = iconMap[iconName as IconName];
  
  if (!IconComponent) {
    return <Smartphone className={className} />; // fallback
  }
  
  return <IconComponent className={className} />;
};