import { ChevronDown, Menu, Search, ShoppingCart, User2Icon } from 'lucide-react';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button, } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5" style={{ backgroundColor: '#625d52' }}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://shadesbyerickuster.com/cdn/shop/files/SHADES-NEW-LOGO-WHITE-INSTA.png_2.webp?v=1677343786&width=240"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className=" hidden md:block text-white  font-medium rounded-lg text-sm px-1 lg:px-3 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <User2Icon />
                        </Link>
                        <Link
                            to="#"
                            className="text-white focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-3 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <Search />
                        </Link>
                        <Link
                            to="#"
                            className="text-white focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-3 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <ShoppingCart />
                        </Link>


                        <Link
                            to="#"
                            className=" hidden sm:block text-gray-900 bg-white  font-medium rounded-xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                        >
                            Download Colour Guide
                        </Link>

                        <div className="md:hidden lg:hidden">
                            {/* MOBILE RESPONSIVE */}
                            <MobileNavbar />

                        </div>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row space-x-0 lg:space-x-8 lg:mt-0 font-serif">
                            <li className="group relative grid">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100  lg:border-0  lg:p-0`
                                    }
                                >
                                    Verf

                                    <div className="absolute hidden group-hover:grid grid-cols-4 gap-4 w-full bg-white shadow-lg py-4 px-6">

                                        <ul className="absolute hidden group-hover:block group-hover:pt-3 bg-white shadow-lg ">
                                            <li>
                                                <NavLink
                                                    to="/home1"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home1
                                                </NavLink>


                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home2"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home3"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home3
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </NavLink>
                            </li>

                            <li className="group relative">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100  lg:border-0  lg:p-0`
                                    }
                                >
                                    Kleurtesters

                                    <div className="absolute hidden group-hover:grid grid-cols-4 gap-4 w-full bg-white shadow-lg py-4 px-6">

                                        <ul className="absolute hidden group-hover:block group-hover:pt-3 bg-white shadow-lg ">
                                            <li className='flex flex-row'>
                                                <NavLink
                                                    to="/home1"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home1
                                                </NavLink>


                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home2"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home3"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home3
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </NavLink>
                            </li>

                            <li className="group relative">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100  lg:border-0  lg:p-0`
                                    }
                                >
                                  Inspiratie

                                    <div className="absolute hidden group-hover:grid grid-cols-4 gap-4 w-full bg-white shadow-lg py-4 px-6">

                                        <ul className="absolute hidden group-hover:block group-hover:pt-3 bg-white shadow-lg ">
                                            <li className='flex flex-row'>
                                                <NavLink
                                                    to="/home1"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home1
                                                </NavLink>


                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home2"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home3"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home3
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </NavLink>
                            </li>

                            <li className="group relative">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100  lg:border-0  lg:p-0`
                                    }
                                >
                                   Projectsets
                                    <div className="absolute hidden group-hover:grid grid-cols-4 gap-4 w-full bg-white shadow-lg py-4 px-6">

                                        <ul className="absolute hidden group-hover:block group-hover:pt-3 bg-white shadow-lg ">
                                            <li className='flex flex-row'>
                                                <NavLink
                                                    to="/home1"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home1
                                                </NavLink>


                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home2"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home3"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home3
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </NavLink>
                            </li>

                            <li className="group relative">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` text-white block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100  lg:border-0  lg:p-0`
                                    }
                                >
                                  About us


                                    <div className="absolute hidden group-hover:grid grid-cols-4 gap-4 w-full bg-white shadow-lg py-4 px-6">

                                        <ul className="absolute hidden group-hover:block group-hover:pt-3 bg-white shadow-lg ">
                                            <li className='flex flex-row'>
                                                <NavLink
                                                    to="/home1"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home1
                                                </NavLink>


                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home2"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home2
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/home3"
                                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                                >
                                                    Home3
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </NavLink>
                            </li>



                        </ul>
                    </div>

                </div>

            </nav>


        </header>
    );
}

const MobileNavbar = () => {

    return (
        <Sheet>

            <SheetTrigger asChild>
                <Button variant="outline " className="text-e">
                    <Menu className=' text-white' />
                </Button>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetHeader className="flex-row items-center mt-5 justify-between">
                    <SheetTitle>Shades</SheetTitle>


                    <div className="ml-auto">
                        <User2Icon />
                    </div>
                </SheetHeader>

                <hr />
                {[...Array(5)].map((_, index) => (
                    <DropdownMenu className="relative  flex-1" key={index}>

                        <DropdownMenuTrigger>

                            <NavLink to="/" className="text-black py-2 hover:bg-gray-300 flex items-center justify-between">

                                <span>Home</span>
                                <ChevronDown className="h-4 w-5" />
                            </NavLink>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className={`absolute left-0 right-0 w-full overflow-hidden  '
                            }`}

                        >
                            <DropdownMenuItem>
                                <NavLink to={`/home1`} className="text-black py-2 hover:bg-gray-200">
                                    Home1
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <NavLink to={`/home2`} className="text-black py-2 hover:bg-gray-200">
                                    Home2
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <NavLink to={`/home3`} className="text-black py-2 hover:bg-gray-200">
                                    Home3
                                </NavLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}
                <SheetFooter>
                    {/* <h3>parmanshu</h3>  */}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

