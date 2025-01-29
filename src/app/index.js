// /pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Organic Mushrooms</title>
        <meta name="description" content="Fresh, organic mushrooms straight from our farm." />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Welcome to Organic Mushrooms</h1>
        <p>We offer fresh, organic mushrooms delivered straight from our farm to your table.</p>
        <button>Order Now</button>
      </main>

      <Footer />
    </div>
  );
}
