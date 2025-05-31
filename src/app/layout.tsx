import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '临沂智程职通劳务有限公司',
  description: '提供证书报名、零工市场信息、外出劳务信息等服务的综合性平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 临沂智程职通劳务有限公司. 保留所有权利.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 