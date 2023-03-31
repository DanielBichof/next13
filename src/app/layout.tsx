import { Header } from '@/components/Header/Header'
import { ReactNode } from 'react'
import "./styles/App.css"

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
    <html className="html"lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
