import { LucideIcon } from "lucide-react";

export interface TCategory {
  id: number;
  name: string;
  icon: React.ReactElement<LucideIcon>;
  color: string;
  count: string;
}
