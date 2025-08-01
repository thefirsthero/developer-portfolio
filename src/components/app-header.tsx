import { mainMenu } from "@/config/menu";
import { AppLogo } from "./app-logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function AppHeader() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="w-full ~max-w-7xl mx-auto flex items-center gap-2 h-14 px-4 md:px-8 justify-between">
        <AppLogo />
        <nav className="hidden lg:flex gap-1 justify-center">
          {mainMenu.map((item) => (
            <Button
              key={item.to}
              variant="link"
              onClick={() => scrollTo(item.to)}
              className="text-foreground/70 hover:text-foreground"
            >
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              {item.title}
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-1 pt-4">
                {mainMenu.map((item) => (
                  <Button
                    key={item.to}
                    variant="link"
                    onClick={() => scrollTo(item.to)}
                    className="text-foreground/70 hover:text-foreground justify-start"
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.title}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
