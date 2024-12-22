import { MdSpaceDashboard } from "react-icons/md";
import { Contact, Instagram, SearchIcon } from "lucide-react";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LucideIcon } from "lucide-react";
import { MdNotifications } from "react-icons/md";
import { PiPulse } from "react-icons/pi";
import { GrIntegration } from "react-icons/gr";

export const DOMAIN: string = "http://localhost:3000";

export const Icons: Record<string, IconType | LucideIcon> = {
  dashboard: MdSpaceDashboard,
  automations: PiPulse,
  instagram: Instagram,
  notifications: MdNotifications,
  profile: IoPerson,
  settings: IoSettingsOutline,
  search: SearchIcon,
  contacts: Contact,
  integrations: GrIntegration,
};
