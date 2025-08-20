import "@/styles/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatAISection from "@/components/ChatAISection";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ChatAISection/>
    </>
  );
}
