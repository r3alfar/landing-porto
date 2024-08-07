// import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react"

// const mainNavItems = ['A', 'B', 'C'];

export default function DesktopNav() {
  return (
    // <div className="mr-4 hidden gap-2 md:flex">
    //   {mainNavItems.map((item, index) => (
    //     <Button key={index} variant="link">
    //       {item}
    //     </Button>
    //   ))}
    // </div>
    <div className="flex-row justify-center mt-8 mb-8 md:flex hidden">
      <NavigationMenu>
        <p className="mr-12">[LOGO]</p>
        <NavigationMenuList className="gap-x-8">
          <NavigationMenuItem>

            <NavigationMenuLink href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
              {/* <a href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
                Documentation
              </a> */}
              Documentation
            </NavigationMenuLink>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <NavigationMenuLink href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
              {/* <a href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
                Setting
              </a> */}
              Setting
            </NavigationMenuLink>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <NavigationMenuLink href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
              {/* <a href="/" className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-2 hover:rounded-lg">
                About
              </a> */}
              About
            </NavigationMenuLink>

          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="ml-12">
          {/* <ModeToggle /> */}
        </div>
        <div className="ml-2">
          <Button disabled size="icon">
            <Settings className="" />
          </Button>
        </div>
      </NavigationMenu>

    </div>
  );
}