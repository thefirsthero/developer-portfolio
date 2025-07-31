import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Wrench,
  GraduationCap,
} from "lucide-react";

export const mainMenu = [
  { title: "Home", to: "hero", icon: Home },
  { title: "About", to: "about", icon: User },
  { title: "Skills", to: "skills", icon: Wrench },
  { title: "Experience", to: "experience", icon: Briefcase },
  { title: "Projects", to: "projects", icon: Code },
  { title: "Education", to: "education", icon: GraduationCap },
  { title: "Contact", to: "contact", icon: Mail },
];
