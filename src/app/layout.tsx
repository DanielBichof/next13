import { Header } from '@/components/Header'
import { ReactNode } from 'react'


export const metadata = {
  title: 'Shoes for you ',
  description: 'Find the best shoes for you',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
