import React from 'react';
import { Helmet } from 'react-helmet';
import ServicePlatformSection from './ServicePlatformSection';
import ScaleSuccessSection from './ScaleSuccessSection';
import LaunchStepsSection from './LaunchStepsSection';
import EcosystemSection from './EcosystemSection';
import AdvancedFeaturesSection from './AdvancedFeaturesSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Launch On-Demand Super Apps | Xmoveon</title>
      </Helmet>
      
      <main className="w-full bg-white overflow-x-hidden selection:bg-green-100">
        
        {/* Main wrapper with zero extra top/bottom padding to keep sections tight */}
        <div className="flex flex-col w-full">
          
          <HeroSection />
          
          {/* Reduced vertical spacing (gap-y) and tighter horizontal padding */}
          <div className="px-3 sm:px-6 lg:px-12 w-full space-y-0"> 
             <ServicePlatformSection />
             <ScaleSuccessSection />
          </div>

          <LaunchStepsSection />
          
          <div className="px-3 sm:px-6 lg:px-12 w-full space-y-0">
            <EcosystemSection />
            <AdvancedFeaturesSection />
            <WhyChooseSection />
            <TestimonialsSection />
          </div>

        </div>
        
      </main>
    </>
  );
};

export default LandingPage;