import "@/styles/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full min-w-full overflow-clip ">
      <Navbar />

      <main className="w-full min-w-full">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
