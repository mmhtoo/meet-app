import {IHomeWidgetBoxProps} from '@/components/fragment/HomeWidgetBox'

export const homeWidgets: IHomeWidgetBoxProps[] = [
  {
    className: 'bg-[#FF742E]',
    iconUrl: '/icons/add.svg',
    title: 'New Meeting',
    subTitle: 'Set up a new meeting',
  },
  {
    className: 'bg-[#0E78F9]',
    iconUrl: '/icons/user-add.svg',
    title: 'Join Meeting',
    subTitle: 'via invitiation link',
  },
  {
    className: 'bg-[#830EF9]',
    iconUrl: '/icons/schedule-calendar.svg',
    title: 'Schedule Meetng',
    subTitle: 'Plan your meeting',
  },
  {
    className: 'bg-[#F9A90E]',
    iconUrl: '/icons/recording.svg',
    title: 'View Recordings',
    subTitle: 'Meeting recordings',
  },
]
