import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cybertik: - kiberdrošības pakalpojumi</title>
        <meta name="robots" content="index,follow">
        <meta name="description" content="Kiberdrošība - mēs specializējamies socialajā inženierijā, veicam apmācības, testējam un veicam auditus. Esi pārliecināts par sava uzņēmuma drošību ar cybertik">
        <meta name="keywords" content="Kiberdrošība, IT drošība, Datu drošība, IT drošības apmācibas "></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Cybertik:</h1>
    </div>
  )
}
