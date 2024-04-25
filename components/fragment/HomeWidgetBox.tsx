'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {FC} from 'react'

export interface IHomeWidgetBoxProps {
  className: string
  title: string
  subTitle: string
  iconUrl: string
}

export const HomeWidgetBox: FC<IHomeWidgetBoxProps> = ({
  className,
  title,
  subTitle,
  iconUrl,
}) => {
  return (
    <div
      className={cn(
        'col-span-4 sm:col-span-2 p-5 flex flex-col justify-between xl:col-span-1 h-[260px] hover:cursor-pointer rounded-lg shadow-sm ',
        className
      )}>
      <div className="p-3 rounded-lg bg-white bg-opacity-35 w-[36px]">
        <Image src={iconUrl} width={50} height={50} alt="icon" />
      </div>
      <div>
        <h3 className="text-[24px] text-white font-bold">{title}</h3>
        <h6 className="text-[18px] text-white font-normal">{subTitle}</h6>
      </div>
    </div>
  )
}
