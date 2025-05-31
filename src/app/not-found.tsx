import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">404</h2>
        <p className="text-xl mb-4">页面未找到</p>
        <Link href="/" className="text-primary hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  )
} 