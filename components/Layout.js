import Footer from "./common/Footer";
import Header from "./common/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="root">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
