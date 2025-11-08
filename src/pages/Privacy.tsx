import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Vaigence"
        description="Learn how Vaigence collects, uses, and protects your personal information. Our commitment to data privacy and security."
        canonical="https://vaigence.com/privacy"
        keywords="privacy policy, data protection, GDPR, CCPA, data privacy"
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last Updated: November 8, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Vaigence ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vaigence.com (the "Site") and use our services.
                </p>
                <p className="text-muted-foreground mb-4">
                  By using our Site and services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3">2.1 Personal Information You Provide</h3>
                <p className="text-muted-foreground mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Fill out contact forms or request information</li>
                  <li>Download resources (assessment guides, calculators, implementation guides)</li>
                  <li>Subscribe to our newsletter or email communications</li>
                  <li>Schedule consultations or meetings</li>
                  <li>Communicate with us via email or other channels</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Name and contact information (email address, phone number, company name)</li>
                  <li>Professional information (job title, department, company size)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.2 Information Automatically Collected</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our Site, we automatically collect certain information about your device and usage patterns:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, referring URLs)</li>
                  <li>Location data (approximate geographic location based on IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Service Delivery:</strong> To provide and maintain our services, respond to inquiries, and deliver requested resources</li>
                  <li><strong>Communication:</strong> To send you newsletters, marketing materials, and service updates (with your consent)</li>
                  <li><strong>Improvement:</strong> To analyze usage patterns and improve our Site and services</li>
                  <li><strong>Personalization:</strong> To customize content and recommendations based on your interests</li>
                  <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                  <li><strong>Business Operations:</strong> To manage our business operations and provide customer support</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>

                <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (email services, analytics providers, hosting services)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Third-Party Services:</h3>
                <p className="text-muted-foreground mb-4">
                  Our Site may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Encryption of data in transit using SSL/TLS</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
                <p className="text-muted-foreground mb-4">
                  Typical retention periods:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Contact form submissions: 2 years from last interaction</li>
                  <li>Newsletter subscriptions: Until you unsubscribe</li>
                  <li>Website analytics: 26 months</li>
                  <li>Legal and compliance records: As required by applicable law</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>

                <h3 className="text-xl font-semibold mb-3">General Rights:</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent was given</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">GDPR Rights (European Users):</h3>
                <p className="text-muted-foreground mb-4">
                  If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local data protection authority.
                </p>

                <h3 className="text-xl font-semibold mb-3">CCPA Rights (California Users):</h3>
                <p className="text-muted-foreground mb-4">
                  If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete, and the right to opt-out of the sale of personal information (we do not sell personal information).
                </p>

                <p className="text-muted-foreground mb-4">
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@vaigence.com" className="text-primary hover:underline">privacy@vaigence.com</a>. We will respond to your request within 30 days.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
                <p className="text-muted-foreground mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
                </p>
                <p className="text-muted-foreground mb-4">
                  If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. By using our Site and services, you consent to such transfer and processing.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">11. Email Marketing</h2>
                <p className="text-muted-foreground mb-4">
                  We may send you marketing emails about our services, resources, and updates. You can opt out of marketing emails at any time by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Clicking the "unsubscribe" link in any marketing email</li>
                  <li>Contacting us at <a href="mailto:hello@vaigence.com" className="text-primary hover:underline">hello@vaigence.com</a></li>
                  <li>Updating your email preferences in your account settings (if applicable)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Please note that even if you opt out of marketing emails, we may still send you transactional or administrative emails related to our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Posting the updated Privacy Policy on this page</li>
                  <li>Updating the "Last Updated" date at the top of this page</li>
                  <li>Sending you an email notification (for significant changes)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-2">
                  <p className="text-foreground"><strong>Vaigence</strong></p>
                  <p className="text-muted-foreground">Email: <a href="mailto:privacy@vaigence.com" className="text-primary hover:underline">privacy@vaigence.com</a></p>
                  <p className="text-muted-foreground">General Inquiries: <a href="mailto:hello@vaigence.com" className="text-primary hover:underline">hello@vaigence.com</a></p>
                  <p className="text-muted-foreground">Website: <a href="https://vaigence.com" className="text-primary hover:underline">https://vaigence.com</a></p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">14. Consent</h2>
                <p className="text-muted-foreground mb-4">
                  By using our Site and services, you consent to our Privacy Policy and agree to its terms. If you do not agree with this Privacy Policy, please do not use our Site or services.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
