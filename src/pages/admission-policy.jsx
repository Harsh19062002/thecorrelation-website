'use client';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), { ssr: false });

export default function AdmissionPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admission Policy - TheCorrelation Educational Institute",
    "description": "Complete admission policy for TheCorrelation Educational Institute including registration fees, class schedules, refund policy, and enrollment terms.",
    "publisher": {
      "@type": "Organization",
      "name": "TheCorrelation Educational Institute",
      "url": "https://thecorrelation.in",
      "email": "admin@thecorrelation.in"
    },
    "dateModified": "2025-12-01",
    "inLanguage": "en-US"
  };

  const Section = ({ id, title, index, children }) => (
    <section
      id={id}
      className="mb-10 border-l-4 border-red-600 pl-6"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 flex items-center">
        <span
          className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm font-bold"
          aria-hidden="true"
        >
          {index + 1}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );

  return (
    <>
      <Head>
        <title>Admission Policy - TheCorrelation Educational Institute</title>
        <meta
          name="description"
          content="Complete admission policy for TheCorrelation Educational Institute including registration fees, class schedules, refund policy, and enrollment terms."
        />
        <meta
          name="keywords"
          content="admission policy, enrollment terms, registration fee, refund policy, education institute, TheCorrelation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Admission Policy - TheCorrelation" />
        <meta
          property="og:description"
          content="Comprehensive admission guidelines and policies for TheCorrelation Educational Institute"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecorrelation.in/admission-policy" />
        <meta property="og:site_name" content="TheCorrelation Educational Institute" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Admission Policy - TheCorrelation" />
        <meta
          name="twitter:description"
          content="Comprehensive admission guidelines and policies for TheCorrelation Educational Institute"
        />
        <meta name="entity" content="TheCorrelation Educational Institute" />
        <meta name="about" content="Admission, Policy, Enrollment, Education, Data Science, AI, TheCorrelation" />
        <link rel="canonical" href="https://thecorrelation.in/admission-policy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-screen mx-auto">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            
            {/* Header */}
            <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12 px-6 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-widest mb-2">
                ADMISSION POLICY
              </h1>
              <p className="text-lg opacity-90">TheCorrelation Educational Institute</p>
            </header>

            {/* Content */}
            <div className="p-6 sm:p-10 lg:p-14">

              <Section id="admission" title="Admissions Policy" index={0}>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mt-4">Registration Fee</h3>
                <div className="bg-gray-200 text-black rounded-lg p-5">
                  <strong className="text-lg sm:text-xl">Registration Fee: INR 5,000</strong>
                </div>
                <p>The registration fee of INR 5,000 is your seat reservation fee paid for a particular program. This fee is non-refundable and will get adjusted against the final fee payable by the student.</p>
                <p>The student will have to confirm his/her admission at least 2 days before the start of the session. To confirm your registration, you can either pay the full fee or make the first installment payment.</p>
                <div className="bg-red-50 border border-red-200 text-gray-900 rounded-lg p-4">
                  <strong className="text-red-600">Important:</strong> If a student does not confirm admission before the deadline, their seat will be released, and the registration fee forfeited.
                </div>
              </Section>

              <Section id="requirements" title="Basic Requirements" index={1}>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <ul className="space-y-3">
                    <li><strong>Processor:</strong> Latest i3/i5/i7 with 2.0GHz or above</li>
                    <li><strong>RAM:</strong> Minimum 4GB (8GB recommended)</li>
                    <li><strong>Internet:</strong> Stable high-speed connection for live sessions</li>
                  </ul>
                </div>
              </Section>

              <Section id="schedule" title="Class Timings & Schedule" index={2}>
                <p>Classes commence on weekdays with two available slots, communicated before each term.</p>
                <div className="overflow-x-auto rounded-lg shadow-sm mb-3">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-700 text-white">
                        <th className="text-left py-3 px-4 font-medium">Program</th>
                        <th className="text-left py-3 px-4 font-medium">Time Slots</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700">DS & AI</td>
                        <td className="py-3 px-4 text-gray-700">5:00 – 6:30 PM or 7:00 – 8:30 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-red-50 border border-red-200 text-gray-900 rounded-lg p-4">
                  <strong className="text-red-600">Note:</strong> Sessions may extend due to unforeseen circumstances, but TheCorrelation will not charge extra for extended hours or resources.
                </div>
              </Section>

              <Section id="tools" title="Tools" index={3}>
                <p>Open-source tools will be used. Premium tools only if trial versions are available. Students can use trial versions; no subscriptions will be provided.</p>
              </Section>

              <Section id="batch-transfer" title="Rules for Batch Transfer" index={4}>
                <ul className="space-y-2">
                  <li><strong>Free Transfer:</strong> Within 15 days of start (once only)</li>
                  <li><strong>Subsequent Transfers:</strong> INR 3,000</li>
                  <li><strong>After 15 Days:</strong> INR 3,000</li>
                  <li><strong>Completed Batches:</strong> 1/3rd fee for re-enrollment</li>
                </ul>
                <div className="bg-red-50 border border-red-200 text-gray-900 rounded-lg p-4">
                  <strong className="text-red-600">Important:</strong> Students must follow the new curriculum post transfer; earlier communications become void.
                </div>
              </Section>

              <Section id="fees" title="Fee Payment Schedule" index={5}>
                <p>Installments allowed up to 3 times. Students must pay on time as per acknowledgment receipt.</p>
                <p><strong>Grace Period:</strong> 15 days in exceptional cases; after that, ₹500/week late fee applies.</p>
              </Section>

              <Section id="loan" title="Student Loan Facility" index={6}>
                <ul className="space-y-2">
                  <li>Loan disputes to be resolved directly between student and provider.</li>
                  <li>EMI obligations continue even if batch transfer or pause applied.</li>
                </ul>
              </Section>

              <Section id="faculty" title="Faculty Allocation" index={7}>
                <p>Experienced faculty assigned per term; details shared before commencement.</p>
              </Section>

              <Section id="recordings" title="Access to Faculty Recordings" index={8}>
                <p>Sharing access beyond attended sessions is not permitted to maintain integrity.</p>
              </Section>

              <Section id="certificate" title="Issuance of Certificate" index={9}>
                <p>Certificates are issued only in the name of the enrolled student.</p>
              </Section>

              <Section id="refund" title="Refund Policy" index={10}>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-medium mb-2">10-Day Cooling-Off Period</h3>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Change batch/program free of cost</li>
                    <li>Withdraw with full fee refund minus ₹5,000 administrative fee</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 text-gray-900 rounded-lg p-4">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>No transfers or refunds after using Pause/Transfer benefits</li>
                    <li>Refunds processed within 45 days</li>
                    <li>No refund after 10 days cooling period</li>
                  </ul>
                </div>
              </Section>

              <Section id="issues" title="Handling Issues During Program" index={11}>
                <p>Students can apply for batch transfer for medical, travel, or workload reasons.</p>
                <p><strong>Maximum Pause:</strong> 6 months; beyond this, re-enrollment required.</p>
              </Section>

              <Section id="ip" title="TheCorrelation's Intellectual Property Rights" index={12}>
                <ul className="space-y-2">
                  <li>All content belongs to TheCorrelation and is IP protected.</li>
                  <li>Content cannot be reproduced or shared without written consent.</li>
                  <li>Users must not exploit TheCorrelation's materials commercially.</li>
                </ul>
              </Section>

              <Section id="thirdparty" title="Third-Party Intellectual Property" index={13}>
                <p>TheCorrelation respects third-party IP rights and addresses infringement notices promptly.</p>
                <p>Users infringing third-party IP indemnify TheCorrelation against claims.</p>
                <h3 className="text-xl font-medium mt-4 mb-2">Infringement Notices Must Include:</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Authorized signature</li>
                  <li>Description of product/work/IP</li>
                  <li>Location of infringing material</li>
                  <li>Contact details</li>
                  <li>Statement of unauthorized use in good faith</li>
                  <li>Statement under penalty of perjury of accuracy and authority</li>
                </ul>
              </Section>

            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 px-6 text-center">
              <p className="mb-1">&copy; 2025 TheCorrelation Educational Institute. All rights reserved.</p>
              <p className="text-sm opacity-80">This document contains the complete admission policy and terms of enrollment.</p>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}