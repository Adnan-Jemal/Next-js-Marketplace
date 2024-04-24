"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <Button onClick={switchTheme}  className="bg-transparent border-2 border-secondary " variant="outline" size="icon" >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-90 scale-100 transition-all rotate-0 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
