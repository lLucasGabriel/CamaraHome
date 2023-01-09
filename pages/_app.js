import Layout from "../components/layout/index.js"
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}