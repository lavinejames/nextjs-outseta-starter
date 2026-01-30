'use client'

import { useState } from 'react'
import {
  RefreshCw,
  Menu,
  PieChart,
  MousePointerClick,
  Fingerprint,
  LayoutGrid,
  X,
  ChevronDown,
  Phone,
  CirclePlay,
} from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'

const products: { name: string; description: string; href: string; icon: LucideIcon }[] = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: PieChart },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: MousePointerClick },
  { name: 'Security', description: 'Your customers\u2019 data will be safe and secure', href: '#', icon: Fingerprint },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: LayoutGrid },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: RefreshCw },
]
const callsToAction: { name: string; href: string; icon: LucideIcon }[] = [
  { name: 'Watch demo', href: '#', icon: CirclePlay },
  { name: 'Contact sales', href: '#', icon: Phone },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-[0_1px_0_0_var(--border)]">
      <nav aria-label="Global">
        <div className="container mx-auto flex items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="HealthPlanning.co"
              src="/logo.svg"
              className="h-11 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent px-3 py-1 h-9 font-medium text-gray-900 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white p-0 shadow-lg outline-1 outline-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <NavigationMenuLink
                      key={item.name}
                      href={item.href}
                      className="group relative flex flex-row items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600" />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-medium text-gray-900">
                          {item.name}
                        </span>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="px-3 py-1 inline-flex items-center justify-center h-9 font-medium text-gray-900">
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="px-3 py-1 inline-flex items-center justify-center h-9 font-medium text-gray-900">
                Marketplace
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="px-3 py-1 inline-flex items-center justify-center h-9 font-medium text-gray-900">
                Company
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Button variant="outline" asChild>
            <a href="#">Log in</a>
          </Button>
          <Button asChild>
            <a href="#">Search facilities</a>
          </Button>
        </div>
        </div>
      </nav>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" showCloseButton={false} className="w-full sm:max-w-sm bg-white p-6 overflow-y-auto">
          <SheetTitle className="sr-only">Main menu</SheetTitle>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="HealthPlanning.co"
                src="/logo.svg"
                className="h-11 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Collapsible className="-mx-3">
                  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-medium text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDown aria-hidden="true" className="size-5 flex-none transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
