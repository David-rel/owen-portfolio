import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Link href='/portfolio/cars'>Cars</Link>
      <Link href='/portfolio/sports'>Sports</Link>
    </div>
  );
}

export default Portfolio