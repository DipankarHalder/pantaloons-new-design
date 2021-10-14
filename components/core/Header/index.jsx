import Link from 'next/link';
import { BiSearch, BiUserCircle, BiHeart, BiCartAlt } from "react-icons/bi";

export default function Header() {
  return (
    <div className="app-cover-header">
      <div className="app-container">
        <div className="app-header">
          <div className="app-logo">
            <Link href="/"><a><img src="/logo.svg" alt="pantaloons" /></a></Link>
          </div>
          <div className="app-navigation">
            <ul>
              <li><Link href="/"><a>Women</a></Link></li>
              <li><Link href="/"><a>Men</a></Link></li>
              <li><Link href="/"><a>Kids</a></Link></li>
              <li><Link href="/"><a>Home Decor</a></Link></li>
              <li><Link href="/"><a>Accessories</a></Link></li>
              <li><Link href="/"><a>Brands</a></Link></li>
            </ul>
          </div>
          <div className="app-shot-info">
            <ul>
              <li><span><BiSearch /></span></li>
              <li><span><BiUserCircle /></span></li>
              <li><span><BiHeart /></span></li>
              <li><span><BiCartAlt /></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
