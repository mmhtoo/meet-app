'use client'

import {format} from 'date-fns'
import {FC, useEffect, useState} from 'react'

export const HomeFullWidgetTime: FC = () => {
  const now = new Date()
  const [currentTime, setCurrentTime] = useState(now)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 10 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="absolute left-[32px] bottom-[32px]">
      <h1 className="text-white text-[72px] font-extrabold">
        {format(currentTime, 'hh:mm')}
        <span className="text-[24px] ms-3 font-medium">{format(now, 'a')}</span>
      </h1>
      <h3 className="text-white text-[24px] font-medium">
        {format(now, 'cccc, dd LLLL yyyy')}
      </h3>
    </div>
  )
}
