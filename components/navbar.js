import Link from 'next/link'
import React from 'react'

function navbar() {
  return (
    <div>
      <h1>Owenw.Photography</h1>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="https://www.instagram.com/owenw.photography/">
        Instagram icon
      </Link>
    </div>
  );
}

export default navbar