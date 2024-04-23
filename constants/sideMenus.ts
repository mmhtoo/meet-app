export interface ISideMenu {
  label: string
  href: string
  iconUrl: string
}

export const sideMenus: ISideMenu[] = [
  {
    label: 'Home',
    href: '/',
    iconUrl: '/icons/home.svg',
  },
  {
    label: 'Upcoming Meets',
    href: '/upcoming-meetings',
    iconUrl: '/icons/incoming.svg',
  },
  {
    label: 'Previous',
    href: '/previous-meetings',
    iconUrl: '/icons/previous.svg',
  },
  {
    label: 'Recordings',
    href: '/recordings',
    iconUrl: '/icons/recording.svg',
  },
  {
    label: 'Personal Room',
    href: '/personal-room',
    iconUrl: '/icons/add.svg',
  },
]
