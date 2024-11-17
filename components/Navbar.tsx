"use client"
import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import ModeToggle from './theme-switcher'

function Navbar() {
  return (
    <Menubar className='sticky top-0 z-50'>
    <MenubarMenu>
      <MenubarTrigger className='text-slate-400'>GARUDA</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
      
    </MenubarMenu>
    <ModeToggle/>
  </Menubar>
  )
}

export default Navbar








