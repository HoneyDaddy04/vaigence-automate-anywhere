import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | Vaigence"
        description="Read Vaigence's Terms of Service governing the use of our website and automation services."
        canonical="https://vaigence.com/terms"
        keywords="terms of service, terms and conditions, legal terms, service agreement"
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last Updated: November 8, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Vaigence ("Company," "we," "us," or "our") governing your access to and use of the vaigence.com website (the "Site") and any services, content, and features we provide (collectively, the "Services").
                </p>
                <p className="text-muted-foreground mb-4">
                  By accessing or using our Site and Services, you agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use the Site or Services.
                </p>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the Site after such changes constitutes your acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground mb-4">
                  Vaigence provides AI-powered automation consulting and implementation services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Workflow automation strategy and consulting</li>
                  <li>Business process optimization services</li>
                  <li>n8n automation implementation and support</li>
                  <li>Automation readiness assessments</li>
                  <li>Educational resources and tools (guides, calculators, templates)</li>
                  <li>Custom automation solutions</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  The specific services provided to you may be subject to separate service agreements, statements of work, or proposals that supplement these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Eligibility and Account Registration</h2>

                <h3 className="text-xl font-semibold mb-3">3.1 Eligibility</h3>
                <p className="text-muted-foreground mb-4">
                  You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these requirements.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.2 Business Use</h3>
                <p className="text-muted-foreground mb-4">
                  Our Services are intended for business and professional use. If you are accessing the Services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
                </p>

                <h3 className="text-xl font-semibold mb-3">3.3 Account Accuracy</h3>
                <p className="text-muted-foreground mb-4">
                  You agree to provide accurate, current, and complete information when communicating with us or requesting Services. You are responsible for maintaining the accuracy of your information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Transmit any harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Collect or harvest information about other users without consent</li>
                  <li>Use automated systems (bots, scrapers) without our written permission</li>
                  <li>Reverse engineer, decompile, or disassemble any portion of the Services</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                  <li>Use the Services to spam, harass, or harm others</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to suspend or terminate your access to the Services if you violate this Acceptable Use Policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold mb-3">5.1 Our Content</h3>
                <p className="text-muted-foreground mb-4">
                  All content on the Site, including but not limited to text, graphics, logos, images, software, audio, video, and data compilations (collectively, "Content"), is the property of Vaigence or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  The Vaigence name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Vaigence. You may not use these marks without our prior written permission.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Limited License</h3>
                <p className="text-muted-foreground mb-4">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site and Services for your personal or internal business purposes, subject to these Terms. This license does not include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Any right to resell or commercial use of the Services or Content</li>
                  <li>Any right to modify, distribute, or create derivative works</li>
                  <li>Any right to download or copy Content (except resources explicitly offered for download)</li>
                  <li>Any use of data mining, robots, or similar automated tools</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.3 Downloadable Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Resources provided for download (such as assessments, guides, and calculators) are licensed for your internal business use only. You may not redistribute, resell, or sublicense these resources without our express written permission.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.4 User Content</h3>
                <p className="text-muted-foreground mb-4">
                  If you submit any content, feedback, suggestions, or communications to us ("User Content"), you grant us a worldwide, perpetual, irrevocable, royalty-free license to use, reproduce, modify, publish, and distribute such User Content for any purpose.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services and Links</h2>
                <p className="text-muted-foreground mb-4">
                  Our Site may contain links to third-party websites, services, or resources that are not owned or controlled by Vaigence. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
                <p className="text-muted-foreground mb-4">
                  You acknowledge and agree that we are not responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services available through such websites or resources.
                </p>
                <p className="text-muted-foreground mb-4">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party sites or services that you visit.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">7. Service Fees and Payment Terms</h2>

                <h3 className="text-xl font-semibold mb-3">7.1 Free Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Certain resources and content on our Site are provided free of charge. We reserve the right to modify, suspend, or discontinue any free offerings at any time without notice.
                </p>

                <h3 className="text-xl font-semibold mb-3">7.2 Paid Services</h3>
                <p className="text-muted-foreground mb-4">
                  If you engage us for paid consulting or implementation services, the specific fees, payment terms, deliverables, and timelines will be set forth in a separate service agreement or statement of work.
                </p>
                <p className="text-muted-foreground mb-4">
                  Unless otherwise specified in writing:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Fees are payable in advance or as specified in the agreement</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>Late payments may incur interest charges</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Warranties</h2>

                <h3 className="text-xl font-semibold mb-3">8.1 "As Is" Basis</h3>
                <p className="text-muted-foreground mb-4 uppercase font-semibold">
                  THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-muted-foreground mb-4 uppercase font-semibold">
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.2 No Guarantee of Results</h3>
                <p className="text-muted-foreground mb-4">
                  While we strive to provide high-quality services and accurate information, we do not guarantee any specific results from using our Services. ROI projections, efficiency estimates, and other performance metrics provided are illustrative and based on assumptions that may not apply to your specific situation.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.3 Information Accuracy</h3>
                <p className="text-muted-foreground mb-4">
                  We make reasonable efforts to ensure that information on our Site is accurate and up-to-date. However, we do not warrant the accuracy, completeness, or timeliness of any information provided. You should verify all information before relying on it for business decisions.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.4 Service Availability</h3>
                <p className="text-muted-foreground mb-4">
                  We do not guarantee that the Site will be available at all times or that it will be free from errors, viruses, or other harmful components. We may suspend or discontinue any part of the Services at any time without notice.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4 uppercase font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL VAIGENCE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-muted-foreground mb-4">
                  In jurisdictions that do not allow the exclusion or limitation of incidental or consequential damages, our liability shall be limited to the maximum extent permitted by law.
                </p>
                <p className="text-muted-foreground mb-4 uppercase font-semibold">
                  OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to indemnify, defend, and hold harmless Vaigence and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Your access to or use of the Site or Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights, including intellectual property rights</li>
                  <li>Any User Content you submit or transmit through the Services</li>
                  <li>Your violation of any applicable laws or regulations</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">11. Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  In the course of providing Services, we may have access to your confidential business information. We agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Keep your confidential information secure and use it only for providing Services</li>
                  <li>Not disclose your confidential information to third parties without your consent (except as required by law)</li>
                  <li>Implement reasonable security measures to protect your information</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  For significant engagements, we may enter into a separate Non-Disclosure Agreement (NDA) that governs the handling of confidential information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>

                <h3 className="text-xl font-semibold mb-3">12.1 Termination by You</h3>
                <p className="text-muted-foreground mb-4">
                  You may stop using the Site and Services at any time. If you have engaged us for paid services, termination rights will be governed by the applicable service agreement.
                </p>

                <h3 className="text-xl font-semibold mb-3">12.2 Termination by Us</h3>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to suspend or terminate your access to the Site and Services at any time, with or without cause, with or without notice, including if:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>You violate these Terms or any applicable law</li>
                  <li>We suspect fraudulent, abusive, or illegal activity</li>
                  <li>We discontinue the Services</li>
                  <li>Continued provision would cause legal liability</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">12.3 Effect of Termination</h3>
                <p className="text-muted-foreground mb-4">
                  Upon termination, your right to use the Services will immediately cease. Sections of these Terms that by their nature should survive termination (including intellectual property provisions, disclaimers, and limitations of liability) will survive.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>

                <h3 className="text-xl font-semibold mb-3">13.1 Informal Resolution</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any dispute with us, you agree to first contact us at <a href="mailto:hello@vaigence.com" className="text-primary hover:underline">hello@vaigence.com</a> and attempt to resolve the dispute informally before initiating any legal proceedings.
                </p>

                <h3 className="text-xl font-semibold mb-3">13.2 Governing Law</h3>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Vaigence is registered, without regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-semibold mb-3">13.3 Jurisdiction and Venue</h3>
                <p className="text-muted-foreground mb-4">
                  Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in the jurisdiction where Vaigence is registered. You consent to the personal jurisdiction of such courts and waive any objection to venue.
                </p>

                <h3 className="text-xl font-semibold mb-3">13.4 Arbitration</h3>
                <p className="text-muted-foreground mb-4">
                  For disputes involving amounts less than $10,000, you and Vaigence agree to resolve disputes through binding arbitration in accordance with the rules of the American Arbitration Association. Either party may seek injunctive relief in court to protect intellectual property rights.
                </p>

                <h3 className="text-xl font-semibold mb-3">13.5 Class Action Waiver</h3>
                <p className="text-muted-foreground mb-4">
                  You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">14. General Provisions</h2>

                <h3 className="text-xl font-semibold mb-3">14.1 Entire Agreement</h3>
                <p className="text-muted-foreground mb-4">
                  These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Vaigence regarding the Services and supersede all prior agreements and understandings.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.2 Severability</h3>
                <p className="text-muted-foreground mb-4">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be modified to reflect the parties' intent as closely as possible.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.3 Waiver</h3>
                <p className="text-muted-foreground mb-4">
                  Our failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of Vaigence.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.4 Assignment</h3>
                <p className="text-muted-foreground mb-4">
                  You may not assign or transfer these Terms or your rights and obligations without our prior written consent. We may assign these Terms without restriction.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.5 Force Majeure</h3>
                <p className="text-muted-foreground mb-4">
                  We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, epidemics, government actions, telecommunications failures, or utility failures.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.6 Notices</h3>
                <p className="text-muted-foreground mb-4">
                  We may provide notices to you via email, posting on the Site, or other reasonable means. You must provide notices to us at the contact information provided below.
                </p>

                <h3 className="text-xl font-semibold mb-3">14.7 Relationship</h3>
                <p className="text-muted-foreground mb-4">
                  Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between you and Vaigence.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-2">
                  <p className="text-foreground"><strong>Vaigence</strong></p>
                  <p className="text-muted-foreground">Email: <a href="mailto:hello@vaigence.com" className="text-primary hover:underline">hello@vaigence.com</a></p>
                  <p className="text-muted-foreground">Legal Inquiries: <a href="mailto:legal@vaigence.com" className="text-primary hover:underline">legal@vaigence.com</a></p>
                  <p className="text-muted-foreground">Website: <a href="https://vaigence.com" className="text-primary hover:underline">https://vaigence.com</a></p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">16. Acknowledgment</h2>
                <p className="text-muted-foreground mb-4">
                  BY USING OUR SITE AND SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
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
