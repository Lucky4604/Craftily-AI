"use client";
import Link from 'next/link';
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils';
import React from 'react'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import FreeCounter from './FreeCounter';

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });
const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
      },
      {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/image',
      },
      {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-orange-700",
        href: '/video',
      },
      {
        label: 'Music Generation',
        icon: Music,
        color: "text-emerald-500",
        href: '/music',
      },
      {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        href: '/code',
      },
      {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
      },
];



interface SidebarProps {
  apiLimitCount:number;
};
const Sidebar = ({
  apiLimitCount=0
}:SidebarProps) => {
    const pathname = usePathname();
  return (
    <div className='space y-4 py-4 flex flex-co; h-full bg-[#111827] text-white'>
        <div className='px-3 py-2 flex-1 '>
            <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
                <div className='relative w-14 h-8 mr-4'>
                    <img
                     src="/Designer.png"
                    className='rounded-3xl'
                    />
                </div>
                <h1 className={cn("text-2xl font-bold mt-4", poppins.className)}>Craftify</h1>
            </Link>
            <div className="space-y-8 whitespace-nowrap">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>  
       
        {/* <FreeCounter 
        apiLimitCount={apiLimitCount} /> */}
       
        </div>
        
       
          
       
       
    </div>
  )
}

export default Sidebar