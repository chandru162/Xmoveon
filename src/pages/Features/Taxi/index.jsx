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
import self1 from '../../../../public/assets/Green1.png';
import self2 from '../../../../public/assets/Black1.png';
import self3 from '../../../../public/assets/Green3.png'




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
    <main className="w-full overflow-x-hidden bg-white">
      
      <Section1
        data={{
          title2: 'Launch Your',
          highlightText1: 'Branded Ride-',
          highlightText2: 'Hailing Platform',
          subTitle: 'Connect drivers and passengers instantly.',
          description:
            'Build your own taxi booking app like Uber or Bolt — fully white-label, one-time purchase, and no recurring fees.',
          image: '../../../../public/assets/251.png',
        }}
      />
      <Section2
        data={{
          titleHighlight1: 'Trusted by Taxi',
          titleHighlight2: 'Startups',
          titleMain: ' and Fleet Owners Worldwide',
          description: 'Join hundreds of growing mobility businesses already powered by Xmoveon.',
          featureTitle: 'Perfect for',
          features: [
            'Fleet owners modernizing their dispatch systems',
            'Entrepreneurs launching local ride-hailing startups',
            'Agencies building white-label transport apps',
          ],
          images: [self1, self2, self3],
        }}
      />

       <Section3
        data={{
          sideTitle: 'Why Choose Us?',
          mainTitleHighlight1: 'Built for Scale.',
          mainTitleHighlight2: 'Designed for Success.',
          mainTitlePlain: '',
          topDescription:
            'Xmoveon combines power, performance, and flexibility — helping you go live faster while owning your technology outright.',
          showcaseImage: Illustrations,
          features: [
            {
              icon: <MenuIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm"/>,
              title: 'One-Time License',
              desc: 'No subscriptions. Pay once, own forever.',
            },
            {
              icon: <SectionLayoutIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Native iOS & Android Apps',
              desc: 'Smooth, responsive, and intuitive.',
            },
            {
              icon: <ScalesIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Advanced Dispatch System',
              desc: 'Match riders and drivers in real time.',
            },
            {
              icon: <WindowCardIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Powerful Admin Dashboard',
              desc: 'Monitor trips, earnings, and performance metrics.',
            },
            {
              icon: <WindowCardIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />,
              title: 'Customizable & White-Label',
              desc: 'Your brand, your colors, your rules.',
            },
          ],
        }}
      />

      <Section4
        data={{
          title: 'Built for Everyone in the Mobility Ecosystem',
          // Adjusted icon size for better mobile scaling
          leftIcon: <ArrowButtonIcon className="w-12 h-12 md:w-20 md:h-20" />,
          categories: [
            {
              label: 'Riders',
              image: '../../../../public/assets/apple-logo (1) 1 [Vectorized].png',
              features: [
                'Real-time booking and tracking',
                'Estimated fares before ride confirmation',
                'Digital payment options and ride history',
                'Rating and feedback for quality assurance',
              ],
            },
            {
              label: 'Drivers',
              image: '../../../../public/assets/apple-logo (1) 1 [Vectorized]a.png',
              features: [
                'Simple onboarding and ID verification',
                'Accept or decline rides instantly',
                'Navigation with in-app maps and routes',
                'Live earnings and trip summaries',
              ],
            },
            {
              label: 'Fleet Owners',
              image: '../../../../public/assets/apple-logo (1) 1 [Vectorized]b.png',
              features: [
                'Manage multiple vehicles and drivers',
                'Assign or reassign rides effortlessly',
                'Set individual commission rates',
                'Track revenue, trips, and performance',
              ],
            },
          ],
        }}
      />

    <Section5
        data={{
          ArrowButton: <ArrowButtonIcon className="w-20 h-20 md:w-32 md:h-32" />,
          title1: 'The',
          title2: 'Control Center',
          title3: 'for Your Taxi',
          title4: 'Business',
          ctaButton: 'View Dashboard Demo',
          adminFeatures: [
            { icon: <ClockIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, text: 'Real-time fleet visibility with interactive maps' },
            { icon: <CopyIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, text: 'Dynamic pricing, surge rules, and coupon controls' },
            { icon: <ShippingIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, text: 'Trip, driver, and user management in one interface' },
            { icon: <RectangleIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, text: 'Analytics dashboards for business insights' },
            { icon: <SuccessDocumentIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, text: 'Automated billing and payout management' },
          ],
        }}
      />

        <Section6
        data={{
          ArrowIcon: <CTAArrowIcon className="w-20 h-20 md:w-32 md:h-32" />,
          steps: [
            { number: '01', title: 'Riders book rides', description: 'via your app.' },
            { number: '02', title: 'Nearby drivers receive ride requests', description: 'in real time.' },
            { number: '03', title: 'Driver accepts, completes trip,', description: 'and payment is processed automatically.' },
            { number: '04', title: 'Admin monitors', description: 'the entire operation via dashboard analytics.' },
          ],
          endResult: 'Fast, transparent, and profitable mobility management.',
        }}
      />

      <Section7
        data={{
          titleHighlight: 'Smart',
          titleMain: 'Monetization Models',
          ArrowIcon: <ArrowButtonIcon className="w-20 h-20 md:w-32 md:h-32" />,
          models: [
            { title: 'Commission per Ride', desc: 'Earn a cut from every completed trip.', image: '../../../../public/assets/Rectangle 40033.png' },
            { title: 'Subscription Plans', desc: 'Offer flexible driver membership options.', image: '../../../../public/assets/Rectangle 40033.png' },
            { title: 'Surge & Dynamic Pricing', desc: 'Boost earnings during peak hours.', image: '../../../../public/assets/Rectangle 40033.png' },
            { title: 'Promotions & Ads', desc: 'Monetize in-app space with local brand partnerships.', image: '../../../../public/assets/Rectangle 40033.png' },
          ],
        }}
      />

    <Section8
        data={{
          techStack: [
            { name: 'Flutter', logo: <FlutterIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Next.js', logo: <NextjsIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'React.js', logo: <ReactIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Node.js', logo: <NodejsIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'SQL', logo: <SqlIcon className="w-8 h-8 md:w-10 md:h-10" /> },
            { name: 'Kotlin', logo: <PrismaIcon className="w-8 h-8 md:w-10 md:h-10" /> },
          ],
        }}
      />

        <Section9
        data={{
          title1: 'Proven',
          title2: 'Performance & ',
          title3: 'Client Success',
          testimonial: {
            quote: 'Xmoveon Taxi helped us scale our ride-hailing startup across three cities within 4 months — no downtime, full control.',
            author: 'CityCab Founder',
          },
          footerDescription: 'Xmoveon has helped startups, taxi operators, and agencies launch profitable mobility platforms in record time.',
          cards: [
            { highlightText: '5000+', title: 'Active Drivers', image: self1, textColor: 'black' },
            { highlightText: '99.9%', title: 'Uptime', image: self2, textColor: 'white' },
            { highlightText: 'Global Deployments', title: '', image: self3, textColor: 'black' },
          ],
        }}
      />

      <Section10
        data={{
          title1: 'Comprehensive ',
          title2: 'Services & Support',
          description: "We don't just deliver software — we help you launch successfully.",
          services: [
            { icon: <SetupIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, label: 'App Installation & Server Setup' },
            { icon: <AnalysisIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, label: 'App Store & Play Store Deployment' },
            { icon: <DurationIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, label: 'Documentation & Customization Support' },
            { icon: <LocationIcon className="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm" />, label: 'Lifetime Code Ownership Guarantee' },
          ],
        }}
      />

    <Section11
    data={{
          disclaimer:
            'At Xmoveon, we believe in giving businesses the freedom to own their platforms.Our mission is to empower entrepreneurs and mobility providers with world-class, self-hosted solutions — with no subscriptions, no lock-ins, and total transparency',
          highlight: 'Technology should serve your business, not control it.',
        }}
     />

      <FAQSection
        data={{
          faqs: [
            { question: 'Do I get full ownership?', answer: 'Yes. You receive the complete source code and lifetime license' },
            { question: 'Can I publish it under my brand?', answer: 'Absolutely. It’s a fully white-label system.' },
            { question: 'Is hosting included?', answer: 'You can host it anywhere — cloud or self-hosted.' },
            { question: 'Any recurring costs?', answer: 'None. It’s a one-time payment only.' },
          ],
        }}
      /> 
    </main>
  );
};

export default TaxiPage;