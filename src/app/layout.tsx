import './globals.css'
import localFont from 'next/font/local'

const vazir = localFont({
  src: [
    {
      path: '../fonts/Vazir.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Vazir-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir'
})

export const metadata = {
  title: 'ABC Consulting',
  description: 'مشاوره تخصصی سالن‌های زیبایی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable}`}>
      <body>{children}</body>
    </html>
  )
}
