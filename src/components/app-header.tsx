import { mainMenu } from "@/config/menu";
import { cn } from "@/lib/utils";
import { AppLogo } from "./app-logo";
import { Button } from "./ui/button";
import { appConfig } from "@/config/app";
import GitHub from "./icons/github";
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
      <div className="w-full ~max-w-7xl mx-auto flex items-center gap-2 h-14 px-4 md:px-8">
        <AppLogo />
        <div className="ml-4 flex-1 flex items-center justify-between">
          <nav className="hidden md:flex gap-1">
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
          <div className="flex items-center gap-1 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
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
          <nav className="flex gap-1">
            <a
              href={appConfig.github.url}
              title={appConfig.github.title}
              target="_blank"
              rel="noreferrer"
              className={cn("size-8")}
            >
              <GitHub />
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
