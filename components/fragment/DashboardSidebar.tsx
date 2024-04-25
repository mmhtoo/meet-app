'use client'
import {sideMenus} from '@/constants'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React, {FC} from 'react'

export const DashboardSidebar: FC = () => {
  const pathname = usePathname()

  return (
    <div className="w-[15%] h-screen bg-dark-1 shadow-sm">
      <div className="flex justify-center gap-1 w-[100%]  py-5 px-2">
        <h3 className="text-white font-extrabold text-[26px] uppercase">
          Meet
        </h3>
      </div>
      <ul className="px-2 gap-2">
        {sideMenus.map((sideMenu) => (
          <Link href={sideMenu.href} key={sideMenu.label}>
            <li
              className={cn(
                'p-3 flex items-center gap-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-70 transition-opacity',
                {
                  'bg-blue-1': pathname === sideMenu.href,
                }
              )}>
              <Image
                src={sideMenu.iconUrl}
                width={20}
                height={20}
                alt={sideMenu.label}
              />
              <span className="text-white text-[18px] font-semibold">
                {sideMenu.label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
