'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// Memoized footer section component
const FooterSection = memo(({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
    {children}
  </div>
));

FooterSection.displayName = 'FooterSection';

// Memoized footer link component
const FooterLink = memo(({ href, children, external = false }) => {
  const linkClasses = "text-sm text-gray-300 hover:text-white hover:font-bold transition-all duration-200 block py-1";
  
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

FooterLink.displayName = 'FooterLink';

// Memoized social icon component
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

SocialIcon.displayName = 'SocialIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation data structure
  const footerData = {
    services: [
      { label: 'PG Programs', href: '/programs/postgraduate' },
      { label: 'Certification Courses', href: '/programs/certification' },
      { label: 'Career Acceleration', href: '/services/career-acceleration' },
      { label: 'Blogs & Resources', href: '/blog' },
    ],
    information: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Director', href: '/about-us' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact Us', href: '/contact' },
    ],
    platform: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Student Code of Conduct', href: '/student-code-of-conduct' },
      { label: 'Admission Policy', href: '/admission-policy' },
    ],
    social: [
      { 
        icon: Facebook, 
        href: 'https://facebook.com/thecorrelation', 
        label: 'Follow us on Facebook',
        hoverColor: 'hover:text-[#1877F2]'
      },
      { 
        icon: Twitter, 
        href: 'https://twitter.com/thecorrelation', 
        label: 'Follow us on Twitter',
        hoverColor: 'hover:text-[#1DA1F2]'
      },
      { 
        icon: Instagram, 
        href: 'https://instagram.com/thecorrelation', 
        label: 'Follow us on Instagram',
        hoverColor: 'hover:text-[#E4405F]'
      },
      { 
        icon: Linkedin, 
        href: 'https://linkedin.com/company/thecorrelation', 
        label: 'Connect with us on LinkedIn',
        hoverColor: 'hover:text-[#0A66C2]'
      },
      { 
        icon: Youtube, 
        href: 'https://youtube.com/@thecorrelation', 
        label: 'Subscribe to our YouTube channel',
        hoverColor: 'hover:text-[#FF0000]'
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
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
              Stay connected with us to learn more about our service platform and explore exciting opportunities.
            </p>
            
            {/* Contact Information */}
            <address className="not-italic text-sm text-gray-300 mb-4 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" aria-hidden="true" />
                <a href="tel:+911234567890" className="hover:text-white hover:font-bold transition-all">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@thecorrelation.com" className="hover:text-white hover:font-bold transition-all">
                  info@thecorrelation.com
                </a>
              </div>
            </address>

            {/* Social Media Links */}
            <div className="flex space-x-4" role="navigation" aria-label="Social media links">
              {footerData.social.map((social, index) => (
                <SocialIcon
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  hoverColor={social.hoverColor}
                />
              ))}
            </div>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-center items-center py-4">
  <p className="text-sm text-gray-400 text-center">
    © {currentYear} TheCorrelation Institute. All rights reserved.
  </p>
</div>


          {/* Schema.org markup hint */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "TheCorrelation Institute",
                "description": "Leading Data Science and AI Education Institute",
                "url": "https://thecorrelation.com",
                "logo": "https://thecorrelation.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Indore",
                  "addressRegion": "Madhya Pradesh",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-123-456-7890",
                  "contactType": "customer service",
                  "email": "info@thecorrelation.com"
                },
                "sameAs": [
                  "https://facebook.com/thecorrelation",
                  "https://twitter.com/thecorrelation",
                  "https://instagram.com/thecorrelation",
                  "https://linkedin.com/company/thecorrelation",
                  "https://youtube.com/@thecorrelation"
                ]
              })
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);