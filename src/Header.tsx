import Image from 'next/image'
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Mybutton"
import { Search } from "lucide-react";
import { Lock } from "lucide-react";
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
export const dynamic="force-dynamic"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  
function Header()
{
    return (
      
           <header className="flex"> 
            {/* Logo - left
            <h1></h1> */}
            
            <div className="flex px-40 py-6 gap-1">
<Image src= '/images/Foodi.png' alt= 'Foodi Photo' width={80} height={50} />
             </div>
               
            {/* Nav bar -- right     */}
            <nav className="flex ">
        
         <NavigationMenu>
  <NavigationMenuList>

        <NavigationMenuItem> 
                                                                                                  
    <Link href="/home" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
     Home
    </NavigationMenuLink>
  </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Chinese</NavigationMenuLink>
        <NavigationMenuLink>Italian</NavigationMenuLink>
        <NavigationMenuLink>Asian</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Food Delivery</NavigationMenuLink>
        <NavigationMenuLink>Catering</NavigationMenuLink>
       </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      
    <Link href="/offers" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
     Offers
    </NavigationMenuLink>
  </Link>
    </NavigationMenuItem>
  </NavigationMenuList> 
</NavigationMenu>

            </nav>
            <div className="flex items-center justify-end px-40  " style={{ gap: '2rem' }}>
  <Search className="h-8 w-6 mr-4" />
  <Lock className="h-8 w-6 mr-4" />
  <Button asChild>
    <Link href="/login" className="bg-green-400 text-white rounded-full px-4 h-10 flex items-center justify-center"> < Phone />
      Contact
    </Link>
  </Button>
</div>
    
        </header>
            )
}


export default Header;

