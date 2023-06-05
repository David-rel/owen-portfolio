import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Owenw.Photography</title>
      </Head>
      <h1>Portfolio</h1>
      <Link href="/portfolio/cars">Cars</Link>
      <Link href="/portfolio/sports">Sports</Link>
      <Link href="/portfolio/misc">Miscellaneous</Link>
    </div>
  );
}

export default Portfolio