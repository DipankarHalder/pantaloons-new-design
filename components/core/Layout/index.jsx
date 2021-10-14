import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <Fragment>
      <Head>
        <meta name='keywords' content={props.keywords} />
        <meta name='description' content={props.description} />
        <title>{props.title}</title>
      </Head>
      <div className="app-full-content">
        <Header />
        <div className="app-body">
          {props.children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

Layout.defaultProps = { 
  title: 'Pantaloons',
  keywords: 'upto 20% off, upto 30% off, upto 40% off, under 999, under 699, under 899, kids wear sale, womens clothing sale, mens clothing sale, fashion sale, kids clothing sale,shirts, trousers online, jeans, t shirts online, ethnic sets, jackets, active wear, tees, tops, dresses',
  description: 'Grab our #StyleYourChange Deals on Womens Clothing, Mens Clothing & Kids Clothing with Free Alterations/Exchange - Your Pantaloons Online Apparel Shopping Just Got Bigger!'
}