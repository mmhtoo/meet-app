import {HomeFullWidgetTime} from '@/components/fragment/HomeFullWidgetTime'
import Image from 'next/image'
import React, {FC, memo} from 'react'

const HomePage = () => {
  return (
    <main>
      <FullWidget />
    </main>
  )
}

export default HomePage

const FullWidget: FC = memo(() => {
  return (
    <section className="w-[100%] h-[372px] relative">
      <Image
        src={'/images/home-bg-1.png'}
        className="rounded-md shadow-md"
        alt="home-widget"
        fill
      />
      <HomeFullWidgetTime />
    </section>
  )
})
