"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, X, Leaf, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Wallet", href: "/wallet" },
  { name: "Events", href: "/events" },
  { name: "Community", href: "/community" },
  { name: "Impact", href: "/impact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="glass-card sticky top-0 z-50 w-full neon-glow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary animate-pulse-glow border rounded-sm" />
              <div className="absolute inset-0 h-8 w-8 text-accent opacity-50 animate-ping"></div>
            </div>
            <span className="text-xl font-bold gradient-text font-[family-name:var(--font-poppins)]">GreenRewards</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="glass hover:neon-glow-accent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-all duration-300 hover:text-primary hover:scale-105 font-[family-name:var(--font-inter)] border rounded-md px-2 py-1",
                pathname === item.href ? "text-primary neon-glow" : "text-muted-foreground hover:neon-glow-accent",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full glass hover:neon-glow">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-user-avatars.png" alt="Profile" />
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">PS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 glass-card neon-glow" align="end" forceMount>
              <DropdownMenuItem className="hover:bg-primary/10 transition-colors">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 transition-colors">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-card neon-glow px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Leaf className="h-8 w-8 text-primary animate-pulse-glow" />
                <span className="text-xl font-bold gradient-text font-[family-name:var(--font-poppins)]">
                  GreenRewards
                </span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="glass hover:neon-glow-accent -m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-primary/10 transition-all duration-300 hover:scale-105",
                        pathname === item.href ? "text-primary neon-glow" : "text-foreground",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex items-center gap-4">
                  <ThemeToggle />
                  <Avatar className="h-8 w-8 glass hover:neon-glow">
                    <AvatarImage src="/diverse-user-avatars.png" alt="Profile" />
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">PS</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
