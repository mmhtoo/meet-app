import React, {PropsWithChildren} from 'react'

export default function AuthScreenLayout(props: PropsWithChildren) {
  return (
    <main className="h-screen flex justify-center items-center">
      {props.children}
    </main>
  )
}
