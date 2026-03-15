import React, { useState, useEffect } from 'react';
import { Shield, CheckSquare, Square } from 'lucide-react';

interface PrivacyModalProps {
  onAccept: () => void;
}

export function PrivacyModal({ onAccept }: PrivacyModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('hue-register-privacy-accepted');
    if (!hasAccepted) {
      setShowModal(true);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrolledToBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 50;
    if (scrolledToBottom && !hasScrolled) {
      setHasScrolled(true);
    }
  };

  const handleAccept = () => {
    if (!hasAgreed) return;
    
    localStorage.setItem('hue-register-privacy-accepted', 'true');
    setShowModal(false);
    document.body.style.overflow = 'unset';
    onAccept();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <div className="bg-white border-4 border-black w-full max-w-5xl h-[95vh] flex flex-col">
        {/* Fixed Header */}
        <div className="border-b-4 border-black p-8 bg-white flex-shrink-0">
          <div className="flex items-center gap-4 mb-3">
            <Shield size={48} className="text-black" />
            <div>
              <h1 className="text-3xl tracking-tight uppercase">Terms of Use, Privacy Policy & Ethical Disclosure</h1>
              <p className="text-sm mt-2 tracking-wide">HUE REGISTER</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">Last updated: December 2025</p>
        </div>

        {/* Scrollable Content */}
        <div 
          className="flex-1 overflow-y-auto p-8 space-y-8"
          onScroll={handleScroll}
        >
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hue Register is an independent colour forecasting and cultural analysis platform founded in 2025. 
              This document governs the use of our website, publications, tools, and research outputs, and explains 
              how we handle data, intellectual property, and ethical responsibilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>By accessing or using Hue Register, you acknowledge that you have read, understood, and agreed 
              to the terms outlined below.</strong>
            </p>
          </section>

          {/* About Hue Register */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">About Hue Register</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hue Register documents and analyses colour through cultural, material, psychological, and socio-economic lenses. 
              Our work is editorial, interpretive, and research-driven.
            </p>
            <div className="border-l-4 border-black pl-6 py-2 bg-gray-50">
              <p className="text-gray-700 leading-relaxed mb-3">Hue Register:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Is not a standards body</li>
                <li>• Does not issue certifications</li>
                <li>• Does not provide commercial guarantees</li>
                <li>• Does not claim ownership over colours</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                All insights are offered as reference material for designers, researchers, brands, and cultural practitioners.
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Terms of Use</h2>
            
            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-2">You may:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Access and read publicly available content</li>
              <li>• Reference insights for personal, academic, or professional research</li>
              <li>• Share links to Hue Register content with clear attribution</li>
            </ul>

            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Restricted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-2">You may not:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Copy, reproduce, or redistribute content without written permission</li>
              <li>• Present Hue Register insights as exclusive or proprietary forecasts</li>
              <li>• Use content for automated scraping, resale, or dataset training</li>
              <li>• Train or fine-tune competing AI systems using Hue Register content</li>
              <li>• Misrepresent Hue Register as an official colour authority or standard</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content published by Hue Register — including:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4 text-gray-700">
              <div>• Text</div>
              <div>• Colour narratives</div>
              <div>• Forecast frameworks</div>
              <div>• CMF directions</div>
              <div>• Naming systems</div>
              <div>• Graphics and visual language</div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              — is protected under applicable copyright and intellectual property laws. 
              "Hue Register" and associated naming structures are proprietary identifiers. 
              Limited quotation is permitted only with clear attribution.
            </p>
          </section>

          {/* No Professional or Commercial Warranty */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">No Professional or Commercial Warranty</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hue Register provides editorial analysis, not guarantees.
            </p>
            <div className="border border-black p-6 bg-gray-50">
              <p className="text-gray-700 leading-relaxed mb-3">All colour forecasts:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Are interpretive, not deterministic</li>
                <li>• Reflect cultural readings at a specific moment in time</li>
                <li>• May evolve as social, technological, and environmental contexts change</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Hue Register is not liable for business, design, or commercial decisions made using its content.</strong>
              </p>
            </div>
          </section>

          {/* External References & Links */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">External References & Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Hue Register may reference third-party platforms, publications, events, or public sources for research transparency. 
              We do not control, endorse, or audit third-party content and are not responsible for their accuracy, availability, 
              or practices.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hue Register follows data minimisation and privacy-by-design principles.
            </p>

            <h3 className="text-xl tracking-wide uppercase mb-3">Information We Collect</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>We do not collect personal data by default.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect limited information only if voluntarily provided:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Name</li>
              <li>• Email address</li>
              <li>• Professional affiliation (optional)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may also collect non-identifiable technical data, such as:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Anonymised IP information</li>
              <li>• Browser type</li>
              <li>• Page interaction metrics (aggregated)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>We do not collect sensitive personal data.</strong>
            </p>
          </section>

          {/* Purpose of Data Use */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Purpose of Data Use</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Any collected data is used solely to:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Provide access to publications or updates (if requested)</li>
              <li>• Respond to enquiries</li>
              <li>• Improve website performance and usability</li>
              <li>• Ensure site security and prevent misuse</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>We do not sell, trade, or monetise personal data.</strong>
            </p>
          </section>

          {/* Legal Basis for Processing */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Data is processed under:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Explicit user consent</li>
              <li>• Legitimate purpose under India's Digital Personal Data Protection Act, 2023</li>
              <li>• Legitimate interest where applicable</li>
              <li>• Legal or compliance obligations</li>
            </ul>
          </section>

          {/* Data Storage & Security */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Data Storage & Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We apply reasonable technical and organisational safeguards:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Secure hosting environments</li>
              <li>• Restricted access controls</li>
              <li>• Encrypted connections where applicable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Data is retained only for as long as necessary for its stated purpose.
            </p>
          </section>

          {/* Cookies & Analytics */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Cookies & Analytics</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Hue Register uses:</p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Essential cookies</li>
              <li>• Basic analytics for site performance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>No behavioural profiling or targeted advertising is conducted.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users may manage cookies through browser settings.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Data may be shared only:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• With trusted service providers for operational needs (hosting, email delivery)</li>
              <li>• Under confidentiality obligations</li>
              <li>• When required by law</li>
            </ul>
          </section>

          {/* International Data Transfers */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              If data is processed outside India, appropriate safeguards are applied to ensure protection equivalent 
              to Indian and international standards.
            </p>
          </section>

          {/* User Rights */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">You may request:</p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Access to your data</li>
              <li>• Correction or deletion</li>
              <li>• Withdrawal of consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Requests can be made via the contact details provided on the website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Hue Register is not intended for individuals under 18 years of age.
            </p>
          </section>

          {/* Ethical AI & Forecasting Disclosure */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Ethical AI & Forecasting Disclosure</h2>
            
            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Human-in-the-Loop Declaration</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>All computational signals are reviewed, filtered, and interpreted by human designers before publication.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">AI tools may assist with:</p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Pattern synthesis</li>
              <li>• Language structuring</li>
              <li>• Organising large volumes of public information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>AI does not independently generate forecasts.</strong>
            </p>

            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Human-Led Forecasting</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Hue Register's colour predictions are:</p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-4">
              <li>• Conceptual and interpretive</li>
              <li>• Led by human cultural analysis</li>
              <li>• Grounded in observation of design, material, and societal signals</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Forecasts are editorial readings, not statistical predictions.</strong>
            </p>

            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Transparency in Methodology</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Our work draws from:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Design, fashion, and material culture</li>
              <li>• Architecture, interiors, and product innovation</li>
              <li>• Social, environmental, and technological contexts</li>
              <li>• Psychological and emotional climate analysis</li>
            </ul>

            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Responsible Forecasting Principles</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Hue Register commits to:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Avoiding fear-based or manipulative narratives</li>
              <li>• Avoiding claims of certainty or inevitability</li>
              <li>• Respecting cultural nuance and material context</li>
              <li>• Acknowledging subjectivity and change over time</li>
            </ul>

            <h3 className="text-xl tracking-wide uppercase mb-3 mt-6">Intellectual Integrity</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Hue Register does not:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Claim exclusivity over colours</li>
              <li>• Present forecasts as universal truths</li>
              <li>• Imply endorsement by Pantone, WGSN, or any other forecasting institution</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Hue Register shall not be liable for indirect, incidental, 
              or consequential damages arising from use of the site or reliance on its content.
            </p>
          </section>

          {/* Governing Law */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This document is governed by the laws of India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              International users acknowledge that local data protection rights may also apply.
            </p>
          </section>

          {/* Updates to This Document */}
          <section className="border-t-4 border-black pt-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Updates to This Document</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This policy may be updated periodically.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The latest version will always be available on the website with the revised date.
            </p>
          </section>

          {/* Compliance Statement */}
          <section className="border-t-4 border-black pt-8 pb-8">
            <h2 className="text-2xl tracking-wide uppercase mb-4">Compliance Statement</h2>
            <div className="border border-black p-6 bg-gray-50">
              <p className="text-gray-700 leading-relaxed mb-3">This document is designed to comply with:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• India's Digital Personal Data Protection Act, 2023</li>
                <li>• GDPR and UK GDPR principles</li>
                <li>• International internet governance and ethical AI practices</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Fixed Footer */}
        <div className="border-t-4 border-black p-8 bg-white flex-shrink-0">
          <div className="space-y-6">
            {/* Checkbox */}
            <button
              onClick={() => setHasAgreed(!hasAgreed)}
              className="flex items-start gap-4 w-full text-left group cursor-pointer"
            >
              <div className="flex-shrink-0 mt-0.5">
                {hasAgreed ? (
                  <CheckSquare size={24} className="text-black" />
                ) : (
                  <Square size={24} className="text-black group-hover:text-gray-600" />
                )}
              </div>
              <p className="text-gray-700 leading-relaxed">
                I understand that Hue Register is an independent, editorial forecasting platform.
              </p>
            </button>

            {/* Accept Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                By accepting, you acknowledge that you have read, understood, and agree to these terms.
              </p>
              <button
                onClick={handleAccept}
                disabled={!hasAgreed}
                className={`px-12 py-4 tracking-wider uppercase border-2 border-black transition-colors ${
                  hasAgreed
                    ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
