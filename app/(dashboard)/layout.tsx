import {DashboardSidebar} from '@/components/fragment/DashboardSidebar'
import {SignedIn, UserButton} from '@clerk/nextjs'
import React, {FC, PropsWithChildren} from 'react'

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <div className="w-screen h-screen max-h-screen flex justify-between">
      <DashboardSidebar />
      <div className="w-[85%] h-full max-h-full ">
        <DashboardHeader />
        <main className="w-[100%] h-[90%] max-h-[90%] p-5">
          {props.children}
        </main>
      </div>
    </div>
  )
}

const DashboardHeader: FC = () => {
  return (
    <header className="w-[100%] px-10 py-5 flex justify-end bg-dark-1  items-center">
      <SignedIn>
        <UserButton afterSignOutUrl="/auth/sign-in" />
      </SignedIn>
    </header>
  )
}
