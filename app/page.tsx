import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'



// General Notes:
// - Components inside the app folder are server components.



export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <Link href="/users">Users</Link>
      <ProductCard /> */}
    </main>
  )
}
