import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import Head from "next/head";

export default function PrivacyPolicy() {
  const sectionsRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for better performance than scroll event
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <> 
    <Head>
        <title>Privacy Policy | TheCorrelation</title>

        <meta
          name="description"
          content="Read TheCorrelation’s Privacy Policy to understand how we collect, use, protect, and process your personal data while using our website and services."
        />

        
      </Head>
      <div className="bg-[#dfe3e8] min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200" role="banner">
          
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-18" role="main">
          <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-[fadeIn_0.6s_ease-in]">
            {/* Page Title */}
            <header className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                <time dateTime="2024-12-01">Last updated: December 2025</time>
              </p>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" aria-hidden="true"></div>
            </header>

            {/* Content Sections */}
            <div className="space-y-5">
              {/* Section 1 */}
              <section 
                ref={el => sectionsRef.current[0] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-1"
              >
                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">1</span>
                  What Do We Do With Your Information?
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>When you enroll in any of our courses, as part of visiting our website, we collect the personal information you give us, such as your name, address, and email address. When you browse our website, we also automatically receive your computer's internet protocol (IP) address to provide us with information that helps us learn about your browser and operating system.</p>
                  <p><strong className="text-gray-900">Email marketing (if applicable):</strong> We may send you emails about our institute, new courses, and other updates with your permission.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section 
                ref={el => sectionsRef.current[1] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-2"
              >
                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">2</span>
                  Consent
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">How do you get my consent?</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery, or return a purchase, we imply that you consent to our collecting and using it for that specific reason only.</p>
                    <p className="text-gray-700 leading-relaxed">If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I withdraw my consent?</h3>
                    <p className="text-gray-700 leading-relaxed">Suppose after you opt-in, and you change your mind. In that case, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by contacting us at <a href="mailto:admin@sophosknowledgeservices.com" className="text-red-600 hover:text-red-800 underline font-medium">admin@sophosknowledgeservices.com</a> or by clicking on Unsubscribe in our emails.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section 
                ref={el => sectionsRef.current[2] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-3"
              >
                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">3</span>
                  Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed">We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
              </section>

              {/* Section 4 */}
              <section 
                ref={el => sectionsRef.current[3] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-4"
              >
                <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">4</span>
                  Payment
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>We use ICICI Payment Gateway for processing payments. We/ICICI Payment Gateway do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
                  <p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.</p>
                  <p>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
                  <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                    <p className="font-medium text-gray-900 mb-2">For more information about ICICI Payment Gateway:</p>
                    <a href="https://www.icicibank.com/Personal-Banking/onlineservice/online-services/payment-gateway/index.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline break-all">https://www.icicibank.com/Personal-Banking/onlineservice/online-services/payment-gateway/index.html</a>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section 
                ref={el => sectionsRef.current[4] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-5"
              >
                <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">5</span>
                  Third-Party Services
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                  <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their privacy policies regarding the information we are required to provide to them for your purchase-related transactions.</p>
                  <p>For these providers, we recommend that you read their privacy policies to understand how these providers will handle your personal information.</p>
                  <p>In particular, remember that certain providers may be located in or have facilities located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                  <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                    <p className="font-medium text-gray-900">Important Note:</p>
                    <p className="text-gray-700 mt-2">Once you leave our institute's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section 
                ref={el => sectionsRef.current[5] = el}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 opacity-0 border border-red-100"
                aria-labelledby="section-6"
              >
                <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3" aria-hidden="true">6</span>
                  Links
                </h2>
                <p className="text-gray-700 leading-relaxed">When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
              </section>
            </div>

            {/* Contact Information */}
            <aside className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-red-600 text-white rounded-lg p-6 md:p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-4">Questions About This Privacy Policy?</h3>
                <p className="mb-4">If you have any questions or concerns about our privacy policy, please don't hesitate to contact us.</p>
                <a 
                  href="mailto:admin@sophosknowledgeservices.com" 
                  className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
                  aria-label="Contact us via email at admin@sophosknowledgeservices.com"
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  admin@sophosknowledgeservices.com
                </a>
              </div>
            </aside>
          </article>
        </main>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}