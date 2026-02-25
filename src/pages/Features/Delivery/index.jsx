import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';
import Section9 from '../components/Section9';
import Section10 from '../components/Section10';
import Section11 from '../components/Section11';
import FAQSection from '../components/faqSection';

// Assets
import image1 from '../../../../public/assets/Card3.png';
import image2 from '../../../../public/assets/Card2.png';
import image3 from '../../../../public/assets/Card3.png';
import TaxiImage from '../../../../public/assets/Illustration.png';
import Illustrations from '../../../../public/assets/Illustrations.png';

// Icons
import {
  MenuIcon,
  SectionLayoutIcon,
  ScalesIcon,
  WindowCardIcon,
  ArrowButtonIcon,
  ClockIcon,
  CopyIcon,
  ShippingIcon,
  SuccessDocumentIcon,
  RectangleIcon,
  CTAArrowIcon,
  SetupIcon,
  AnalysisIcon,
  DurationIcon,
  LocationIcon,
} from '../../../svg/svgIcons';

import {
  FlutterIcon,
  NextjsIcon,
  ReactIcon,
  NodejsIcon,
  SqlIcon,
  PrismaIcon,
} from '../../../svg/toolsSvgIcons';

const TaxiPage = () => {
  return (
    /* Added a wrapper with overflow-x-hidden to prevent mobile horizontal scrolling */
    <main className="w-full overflow-x-hidden bg-white">
      {/* Section 1: Hero */}
      <Section1
        data={{
          title1: 'Xmoveon Parcel',
          title2: 'Power Your',
          highlightText1: 'Delivery &',
          highlightText2: 'Dispatch Business',
          subTitle: 'Launch your own parcel delivery platform with full ownership.',
          description:
            'Manage bookings, drivers, routes, and real-time deliveries — all under your brand.Pay once, own it forever — no subscriptions, no vendor lock-in.',
          image: '../../../../public/assets/Frame 1597883618.png',
          category: 'Delivery',
        }}
      />

      {/* Section 2: Trust/Social Proof */}
      <Section2
        data={{
          titleHighlight1: 'Trusted by Courier',
          titleHighlight2: 'Startups',
          titleMain: 'and Logistics Providers Worldwide',
          description:
            'Xmoveon Parcel helps delivery companies, eCommerce startups, and logistics networks launch reliable, scalable dispatch platforms that they own completely.',
          featureTitle: 'Trusted By',
          features: ['Courier Aggregators', 'E-Commerce Platforms ', 'Delivery Startups'],
          images: [image1, image2, image3],
        }}
      />

      {/* Section 3: Value Proposition */}
      <Section3
        data={{
          sideTitle: '',
          mainTitleHighlight1: 'Built for Scale. Designed for',
          mainTitleHighlight2: 'Efficiency',
          mainTitlePlain: '',
          topDescription:
            'Xmoveon Parcel combines automation, tracking, and analytics to streamline delivery operations — from pickup to proof of delivery.',
          showcaseImage: '../../../../public/assets/Illustrationsa.png',
          features: [
            {
              icon: <MenuIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'One-Time License',
              desc: 'Pay once, own forever.',
            },
            {
              icon: <SectionLayoutIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Rider & Merchant Apps',
              desc: 'Smooth, responsive, and intuitive.',
            },
            {
              icon: <ScalesIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Smart Route Optimization',
              desc: 'Deliver faster with intelligent path planning.',
            },
            {
              icon: <WindowCardIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Real-Time Tracking Dashboard',
              desc: 'Manage deliveries live from one control panel.',
            },
            {
              icon: <WindowCardIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: '100% White-Label',
              desc: 'Launch under your brand on web, iOS, and Android.',
            },
          ],
        }}
      />

      {/* Section 4: Ecosystem Roles */}
      <Section4
        data={{
          title: 'Empower Every Stakeholder',
          // Adjusted icon size for better mobile scaling
          leftIcon: <ArrowButtonIcon className="w-12 h-12 md:w-20 md:h-20" />,
          categories: [
            {
              label: 'Customers',
              image: '../../../../public/assets/Frame-a.png',
              features: [
                'Book parcel pickups in seconds',
                'Track delivery in real time',
                'Get instant notifications and receipts',
                'Rate service quality',
              ],
            },
            {
              label: 'Drivers / Couriers',
              image: '../../../../public/assets/Frame-b.png',
              features: [
                'Accept or reject delivery tasks',
                'Use in-app navigation and route optimization',
                'Update delivery status instantly',
                'View completed jobs and earnings',
              ],
            },
            {
              label: 'Vendors / Merchants',
              image: '../../../../public/assets/Frame-c.png',
              features: [
                'Schedule bulk or recurring pickups',
                'Manage multiple locations and accounts',
                'Access invoice summaries and delivery analytics',
                'Offer cash-on-delivery or prepaid options',
              ],
            },
          ],
        }}
      />

      {/* Section 5: Admin Features */}
      <Section5
        data={{
          ArrowButton: <ArrowButtonIcon className="w-20 h-20 md:w-32 md:h-32" />,
          title1: 'Admin',
          title2: 'Dashboard',
          title3: 'That Runs Your Logistics',
          title4: 'Operations',
          ctaButton: 'View Dashboard Demo',
          adminFeatures: [
            {
              icon: <ClockIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              text: 'Manage drivers, merchants, and delivery zones',
            },
            {
              icon: <CopyIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              text: 'Assign parcels automatically or manually',
            },
            {
              icon: <ShippingIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              text: 'Track every package from pickup to drop-off',
            },
            {
              icon: <RectangleIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              text: 'Generate invoices and payout reports',
            },
            {
              icon: <SuccessDocumentIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              text: 'Analyze performance with live analytics',
            },
          ],
        }}
      />

      {/* Section 6: Workflow */}
      <Section6
        data={{
          ArrowIcon: <CTAArrowIcon className="w-20 h-20 md:w-32 md:h-32" />,
          steps: [
            {
              number: '01',
              title: 'Customer books pickup',
              description: 'via mobile app or web portal',
            },
            {
              number: '02',
              title: 'Driver accepts dispatch',
              description: 'collects the parcel, and starts navigation.',
            },
            {
              number: '03',
              title: 'Real-time tracking',
              description: 'updates customer and admin dashboards',
            },
            {
              number: '04',
              title: ' Parcel delivered',
              description: 'proof of delivery captured, and payments processed automatically.',
            },
          ],
          endResult: 'End-to-end visibility and automation in one system.',
        }}
      />

      {/* Section 7: Monetization */}
      <Section7
        data={{
          titleHighlight: 'Flexible',
          titleMain: 'Monetization Models',
          ArrowIcon: <ArrowButtonIcon className="w-20 h-20 md:w-32 md:h-32" />,
          models: [
            {
              title: 'Per Delivery Commission',
              desc: 'Earn from every order completed',
              image: '../../../../public/assets/Revenue Growth.png',
            },
            {
              title: 'Merchant Subscription Plans',
              desc: 'Offer premium access to high-volume vendors',
              image: '../../../../public/assets/Revenue Growth.png',
            },
            {
              title: 'Surge Pricing & Service Fees',
              desc: 'Adjust rates dynamically during peak hours.',
              image: '../../../../public/assets/Revenue Growth.png',
            },
            {
              title: 'Promotions & Ads',
              desc: 'Enable banner ads or merchant promotions within the app.',
              image: '../../../../public/assets/Revenue Growth.png',
            },
          ],
        }}
      />

      {/* Section 8: Tech Stack */}
      <Section8
        data={{
          techStack: [
            { name: 'Flutter', logo: <FlutterIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Next.js', logo: <NextjsIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'React.js', logo: <ReactIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Node.js', logo: <NodejsIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'SQL', logo: <SqlIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Kotlin', logo: <PrismaIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            // Repeated icons will scroll horizontally in a responsive Section8 component
          ],
        }}
      />

      {/* Section 9: Testimonials & Stats */}
      <Section9
        data={{
          title1: 'Proven',
          title2: 'Performance & ',
          title3: 'Client Results',
          testimonial: {
            quote:
              'We launched our delivery service with Xmoveon Parcel and scaled to 10,000+ deliveries in 3 months.Full control, no hidden costs.',
            author: 'SwiftShip Founder',
          },
          footerDescription:
            'Xmoveon has helped startups, taxi operators, and agencies launch profitable mobility platforms in record time.',
          cards: [
            {
              highlightText: '10,000+',
              title: 'Orders Processed',
              image: image1,
              textColor: 'black',
            },
            { highlightText: '99.9%', title: 'Uptime', image: image2, textColor: 'white' },
            { highlightText: 'Global Deployments', title: '', image: image3, textColor: 'black' },
          ],
        }}
      />

      {/* Section 10: Additional Services */}
      <Section10
        data={{
          title1: 'Powerful Add',
          title2: 'Ons',
          description: "We don't just deliver software — we help you launch successfully.",
          services: [
            {
              icon: <SetupIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              label: 'Barcode Scanning Integration',
            },
            {
              icon: <AnalysisIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              label: 'Multi-City & Multi-Hub Management',
            },
            {
              icon: <DurationIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              label: 'Customer Wallet & Loyalty Points',
            },
            {
              icon: <LocationIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              label: 'Delivery Analytics & Heat Maps',
            },
            {
              icon: <LocationIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              label: 'Custom API Integrations',
            },
          ],
        }}
      />

      <Section11
        data={{
          disclaimer:
            'Xmoveon empowers logistics and delivery businesses with white-label software solutions that prioritize ownership, scalability, and transparency.Our mission: to help entrepreneurs and courier companies build long-term digital assets, not rent temporary tools.',
          highlight: 'Own your logistics — own your success.',
        }}
      />

      {/* FAQ Section */}
      <FAQSection
        data={{
          faqs: [
            {
              question: 'Do I get full source code?',
              answer:
                'Yes. You receive complete ownership with lifetime usage rights.',
            },
            {
              question: 'Can I launch it under my own brand?',
              answer: 'Absolutely. Xmoveon Parcel is fully white-label and brandable.',
            },
            {
              question: 'Is hosting included?',
              answer: 'You can self-host or choose your preferred cloud provider.',
            },
            {
              question: 'Are there monthly or hidden fees?',
              answer: 'No subscriptions. One-time payment only.',
            },
          ],
        }}
      />
    </main>
  );
};

export default TaxiPage;
