import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import ServicePlatformSection from './ServicePlatformSection';
import ScaleSuccessSection from './ScaleSuccessSection';
import LaunchStepsSection from './LaunchStepsSection';
import EcosystemSection from './EcosystemSection';
import AdvancedFeaturesSection from './AdvancedFeaturesSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';
import Home from '../Home';
import DemoPopup from './DemoPopup';


const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Launch On-Demand Super Apps in 7 Days | Xmoveon No-Code Platform</title>
        <meta name="description" content="Build taxi, food delivery, grocery & service marketplace apps without coding. Xmoveon platform has processed 10+ billion dollars. Launch your super app in 7 days with full support." />
        <meta property="og:title" content="Launch On-Demand Super Apps in 7 Days | Xmoveon No-Code Platform" />
        <meta property="og:description" content="Build taxi, food delivery, grocery & service marketplace apps without coding. Xmoveon platform has processed 10+ billion dollars. Launch your super app in 7 days with full support." />
      </Helmet>
      
      <main className="w-full bg-white">
        <HeroSection />
        <ServicePlatformSection />
        <ScaleSuccessSection />
        <LaunchStepsSection />
        <EcosystemSection />
        <AdvancedFeaturesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FooterSection />
       
         {/*  <Home/>   */}
        
       
      </main>
    </>
  );
};

export default LandingPage;