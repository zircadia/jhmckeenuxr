import Head from 'next/head'
import Image from 'next/image'
import Splash from '../../components/common/splash'

export default function Writing() {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <meta name="Writing by J. Henry McKeen" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash pageTitle="UX Writing" mainSaying="" textBody="" actionButton="" imgUrl="/images/typewriter.jpg" imgAlt="a typewriter sitting on dark rustic wood plank surface"/>
      <div className="writing container">
        <div className="card blog" id="1">
          <a href="/writing/generative-vs-tactical">
          <span className="type">blog</span>
          <p className="title">Generative vs. Tactical Research</p>
          <p className="tagline"></p>
          </a>
        </div>
        <div className="card article" id="2">
          <a href="/writing/title">
          <span className="type">article</span>
          <p className="title"></p>
          <p className="tagline"></p>
          </a>
        </div>
        <div className="card blog" id="3">
          <a href="/writing/title">
          <span className="type">blog</span>
          <p className="title"></p>
          <p className="tagline"></p>
          </a>
        </div>
      </div>
    </div>
  )
}