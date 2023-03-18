import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

export default function Header() {
   return (
    <header className="flex flex-col sm:flex-row m-5 ml-10 justify-between items-center h-auto">
     <Image 
       className="object-contain" 
       src="https://www.zapit.io/zapit_logo.svg" 
       width={200} 
       height={100} alt="logo"
     />
     
     <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="COINS" Icon={BadgeCheckIcon} />
        <HeaderItem title="TOKEN" Icon={CollectionIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
     </div>
    </header>
   )
}