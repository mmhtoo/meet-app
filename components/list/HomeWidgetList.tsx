import {homeWidgets} from '@/constants'
import {FC} from 'react'
import {HomeWidgetBox} from '../fragment/HomeWidgetBox'

export const HomeWidgetList: FC = () => {
  return (
    <section className="grid grid-cols-4 gap-3 my-5">
      {homeWidgets.map((homeWidget) => (
        <HomeWidgetBox key={homeWidget.title} {...homeWidget} />
      ))}
    </section>
  )
}
