import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
const SDropDownM =  () => {

  return (
    <DropdownMenu >
    <DropdownMenuTrigger className="flex items-center focus:outline-none">
        Categories
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>Shop By Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {[
            { name: "All Products", path: "/shop" },
            { name: "Men's Collection", path: "/collection/Mens" },
            { name: "Women's Collection", path: "/collection/Women" },
            { name: "Accessories", path: "/collection/accessories" },
            { name: "Footwear", path: "/collection/footwear" },
        ].map((category) => (
            <DropdownMenuItem 
                key={category.name}
                className="px-4 py-2  ">
                <Link href={category.path} className="w-full block hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out">
                    {category.name}
                </Link>
            </DropdownMenuItem>
        ))}
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default SDropDownM