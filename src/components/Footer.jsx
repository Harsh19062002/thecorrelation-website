"use client";

import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ---------- Footer Section ---------- */
const FooterSection = memo(({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
    {children}
  </div>
));

FooterSection.displayName = "FooterSection";

/* ---------- Footer Link ---------- */
const FooterLink = memo(({ href, children, external = false }) => {
  const linkClasses =
    "text-sm text-gray-300 hover:text-white hover:font-bold transition-all duration-200 block py-1";

  if (external) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
});

FooterLink.displayName = "FooterLink";

/* ---------- Social Icon ---------- */
const SocialIcon = memo(({ href, icon: Icon, label, hoverColor }) => (
  <a
    href={href}
    className={`text-gray-400 transition-all duration-200 hover:scale-110 transform ${hoverColor}`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer me"
  >
    <Icon size={20} aria-hidden="true" />
  </a>
));

SocialIcon.displayName = "SocialIcon";

/* ---------- Footer ---------- */
const Footer = () => {
  // ✅ Hydration-safe year handling
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerData = {
    services: [
      { label: "PG Programs", href: "/courses/post-graduation-program" },
      {
        label: "Certification Courses",
        href: "/courses/chartered-data-science",
      },
      { label: "Blogs & Resources", href: "/blog" },
    ],
    information: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Director", href: "/about-us" },
      { label: "Contact Us", href: "/contact" },
    ],
    platform: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Student Code of Conduct", href: "/student-code-of-conduct" },
      { label: "Admission Policy", href: "/admission-policy" },
    ],
    social: [
      {
        icon: Facebook,
        href: "https://www.facebook.com/share/19zT4tt1iN/",
        label: "Follow us on Facebook",
        hoverColor: "hover:text-[#1877F2]",
      },
      {
        icon: Twitter, // X (Twitter) icon – correct usage
        href: "https://x.com/The_Correlation",
        label: "Follow us on X",
        hoverColor: "hover:text-black",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/thecorrelation.in?igsh=enhkNHRidXRwdHU4",
        label: "Follow us on Instagram",
        hoverColor: "hover:text-[#E4405F]",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/thecorrelation/",
        label: "Connect with us on LinkedIn",
        hoverColor: "hover:text-[#0A66C2]",
      },
      {
        icon: Youtube,
        href: "https://www.youtube.com/@Thecorrelation_in",
        label: "Subscribe to our YouTube channel",
        hoverColor: "hover:text-[#FF0000]",
      },
    ],
  };

  return (
    <footer className="bg-gray-800 text-white py-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Services */}
          <FooterSection title="Services">
            <nav aria-label="Services navigation">
              <ul className="space-y-1">
                {footerData.services.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterSection>

          {/* Information */}
          <FooterSection title="Information">
            <nav aria-label="Information navigation">
              <ul className="space-y-1">
                {footerData.information.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterSection>

          {/* Platform */}
          <FooterSection title="Platform">
            <nav aria-label="Platform policies navigation">
              <ul className="space-y-1">
                {footerData.platform.map((item, index) => (
                  <li key={index}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterSection>

          {/* Get In Touch */}
          <FooterSection title="Get In Touch">
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Stay connected with us to learn more about our service platform
              and explore exciting opportunities.
            </p>

            <address className="not-italic text-sm text-gray-300 mb-4 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  TheCorrelation, Third Floor, Plot No 275, PU4, behind Malhar
                  Mega Mall, Scheme 54 PU4, Indore, Madhya Pradesh 452011
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+917415346222"
                  className="hover:text-white hover:font-bold transition-all"
                >
                  +91 7415346222
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:admissions@thecorrelation.in"
                  className="hover:text-white hover:font-bold transition-all"
                >
                  admissions@thecorrelation.in
                </a>
              </div>
            </address>

            <div className="flex space-x-4" aria-label="Social media links">
              {footerData.social.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear || "2024"} TheCorrelation Institute. All rights
            reserved.
          </p>

          {/* Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "TheCorrelation Institute",
                description: "Leading Data Science and AI Education Institute",
                url: "https://thecorrelation.com",
                logo: "https://thecorrelation.com/logo.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Indore",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-7415346222",
                  contactType: "customer service",
                  email: "admissions@thecorrelation.in",
                },
              }),
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
