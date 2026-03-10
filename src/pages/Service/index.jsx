import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import FooterSection from '../LandingPage/FooterSection';
import TestimonialsSection from '../LandingPage/TestimonialsSection';
import WhyChooseSection from '../LandingPage/WhyChooseSection';
import FAQ from '../LandingPage/FAQ';
import Who from '../ExtraPage/Who';
import WhatCan from '../ExtraPage/WhatCan';
import Panels from '../ExtraPage/panels';
import Options from '../ExtraPage/Options';
import WhyBusinesses from '../ExtraPage/WhyBusiness';
import WhyChoose from '../ExtraPage/WhyChoose';
import WhySection from '../ExtraPage/WhySection';
import Testi from '../ExtraPage/Testi';
import DemoPopup from '../LandingPage/DemoPopup';
import Why from '../ExtraPage/Why';


import {
  LayoutIcon,
  PayPalIcon,
  ProfileCardIcon,
  StarIcon,
  ChatSearchIcon,
  PricingIcon,
} from '../../svg/svgIcons';
import Testo from '../ExtraPage/Testo';



const Service = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Commission management');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e?.target?.value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission logic here
  };
    const [showDemo, setShowDemo] = useState(false);


  const techStackItems = [
    { name: 'Flutter', icon: '/images2/features/img_logos_flutter_original.png' },
    { name: 'Next.js', icon: '/images2/features/img_vector.svg' },
    { name: 'React.js', icon: '/images2/features/img_logos_react_original.svg' },
    { name: 'Node.js', icon: '/images2/features/img_logos_nodejs_original.svg' },
    { name: 'SQL', icon: '/images2/features/img_sql_1.png' },
    { name: 'Kotlin', icon: '/images2/features/img_vector_deep_purple_400.svg' }
  ];

  const platformFeatures = [
    {
      icon: '/images2/features/img_layout_dashboard.svg',
      title: 'Localisation',
      description: 'Multi-language and multi-currency support with regional settings.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_sparkles.svg',
      title: 'Blazing Fast',
      description: 'Built with latest technology for lightning fast loading times.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_file_power.svg',
      title: 'Source Code',
      description: 'Full source code ownership with complete customization freedom.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_clock_play.svg',
      title: '99.9% Uptime',
      description: 'Enterprise-grade infrastructure ensures your app is always available.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_device_mobile_check.svg',
      title: 'Fully Customizable',
      description: 'Intuitive drag-and-drop configuration without coding knowledge.',
      bgColor: 'bg-background-light'
    },
    {
      icon: '/images2/features/img_clock_2.svg',
      title: 'Support',
      description: 'Includes setup and deployment. Optional maintenance and enhancements.',
      bgColor: 'bg-background-light'
    }
  ];

  const customerFeatures = [
    {
      icon: '/images2/features/img_album.svg',
      title: 'Browse and order',
      description: 'Explore menus from dozens of restaurants in seconds.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_map_2.svg',
      title: 'Live order tracking',
      description: 'Watch your meal move from kitchen to doorstep in real time.',
      isActive: false
    },
    {
      icon: '/images2/features/img_moneybag.svg',
      title: 'Secure payments',
      description: 'Cards, wallets, and cash handled safely every transaction.',
      isActive: false
    },
    {
      icon: '/images2/features/img_star_half_filled.svg',
      title: 'Rate and review',
      description: 'Rate and review',
      isActive: false
    }
  ];

  const driverFeatures = [
    {
      icon: '/images2/features/img_brand_laravel.svg',
      title: 'Smart Routing',
      description: 'Optimized routes that reduce travel time and fuel costs for faster deliveries.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_zoom_money.svg',
      title: 'Earnings Transparency',
      description: 'Clear visibility into trip earnings, incentives, and daily income in real time.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_clock.svg',
      title: 'Flexible Availability',
      description: 'Drivers can go online or offline anytime and work on their own schedule.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_map_2.svg',
      title: 'Easy Navigation & Tracking',
      description: 'Built-in maps and live tracking for smooth pickups, drop-offs, and deliveries.',
      bgColor: 'bg-background-gray'
    }
  ];

  const vendorFeatures = [
    {
      icon: '/images2/features/img_menu_2.svg',
      title: 'Menus',
      description: 'Update items, prices, and availability instantly across the platform.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_align_box_right_bottom.svg',
      title: 'Orders',
      description: 'Manage incoming orders smoothly, even during peak hours.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_scale.svg',
      title: 'Sales',
      description: 'Understand performance and identify best-selling items.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: '/images2/features/img_app_window.svg',
      title: 'Promotions & Visibility',
      description: 'Boost reach with offers and featured listings.',
      bgColor: 'bg-background-gray'
    }
  ];

  const platformBenefits = [
    {
      icon: '/images2/features/img_thumb_up.svg',
      title: 'Customers get what they want',
      description: 'Search by cuisine, distance, or rating.\nOrder in seconds flat.',
      bgColor: 'bg-accent-light-green'
    },
    {
      icon: '/images2/features/img_building_store.svg',
      title: 'Restaurants keep their independence',
      description: 'They control menus, pricing, and how they operate day to day.',
      bgColor: 'bg-accent-pale-green'
    },
    {
      icon: '/images2/features/img_plug_connected.svg',
      title: 'You build the business that connects them',
      description: 'One dashboard runs the whole operation and generates your revenue',
      bgColor: 'bg-accent-pale-green'
    },
    {
      icon: '/images2/features/img_frame_1597883414.svg',
      title: 'Drivers work when they choose',
      description: 'Flexible hours, clear pay, and routes that make sense economically.',
      bgColor: 'bg-accent-light-green'
    }
  ];

  const stakeholders = [
    {
      title: 'Food arrives fast and fresh',
      description: 'They order from multiple restaurants in one app and track everything live.',
      category: 'Customers',
      bgImage: '/images2/features/img_group_600.png'
    },
    {
      title: 'Reach hungry customers without building apps',
      description: 'They manage menus, track orders, and watch sales grow through your platform.',
      category: 'Restaurants',
      bgImage: '/images/img_group_600.png'
    },
    {
      title: 'Earn more with smart routing',
      description: 'They see clear earnings, control their schedule, and deliver efficiently every day.',
      category: 'Drivers',
      bgImage: '/images2/features/img_group_600.png'
    },
    {
      title: 'Build revenue from commissions',
      description: 'You manage everything from one dashboard and grow your business systematically.',
      category: 'Admins',
      bgImage: '/images2/features/img_group_600.png'
    }
  ];

  const tabs = [
    'Commission management',
    'Restaurant onboarding',
    'System analytics',
    'Settings control',
    'Revenue tracking',
    'Dispute resolution'
  ];

  const faqItems = [
    {
      question: 'How long does onboarding take',
      answer: 'Most restaurents are live within 48 hours. We handle verification and setup so you can focus on growth. Your admin panel gives you full control over the process.',
      isOpen: true
    },
    {
      question: 'Can restaurants set their own prices',
      answer: '',
      isOpen: false
    },
    {
      question: 'What payment methods are supported',
      answer: '',
      isOpen: false
    },
    {
      question: 'How do drivers get  paid',
      answer: '',
      isOpen: false
    },
    {
      question: 'Can you customize the commmision rates',
      answer: '',
      isOpen: false
    },
    {
      question: 'Still have questions',
      answer: '',
      isOpen: false
    }
  ];

  const services = [
    {
      icon: "/images/img_frame_19.svg",
      title: "One-time purchase, lifetime ownership",
      description: "pay once, own it forever."
    },
    {
      icon: "/images/img_frame_19_light_green_700.svg",
      title: "White-label & customizable",
      description: "tailor every detail to match your brand."
    },
    {
      icon: "/images/img_box.svg",
      title: "Self-hosted",
      description: "you control your data, hosting, and user experience."
    },
    {
      icon: "/images/img_frame_19_light_green_700_62x62.svg",
      title: "Built for service marketplaces ",
      description: "booking, scheduling, messaging, and payments."
    },
    {
      icon: "/images/img_frame_19_62x62.svg",
      title: "Scalable & flexible architecture",
      description: "modern stack designed to grow with your business."
    },
    {
      icon: "/images/img_report_medical.svg",
      title: "No vendor lock-in",
      description: "you decide how to deploy and evolve your platform."
    }
  ];

  const features = [
    {
      icon: <LayoutIcon />,
      title: "Service Listings",
      description: "Create detailed listings with images, pricing, and availability."
    },
    {
      icon: <PayPalIcon />,
      title: "Payments",
      description: " Instant or scheduled bookings made simple."
    },
    {
      icon: <ProfileCardIcon />,
      title: "Booking & Scheduling",
      description: "In-platform communication between customers and providers."
    },
    {
      icon: <StarIcon />,
      title: "Reviews & Ratings",
      description: "Supports multiple payment options and commissions."
    },
    {
      icon: <ChatSearchIcon />,
      title: "Marketing Messaging",
      description: "Build trust with verified feedback."
    },
    {
      icon: <PricingIcon />,
      title: " Flexible Pricing",
      description: " Offer fixed, hourly, or request-based pricing models."
    }
  ];

  const New = [

      {
        icon : <worldIcon className ="w-10 h-10 bg-[#E4FFD4] text-[#5C9B35] p-2 rounded-sm"/>,
        description: "Global Ready Multi-language and multi-currency support with flexible regional configuration"
      } ,
    
  ];

  /* SVG INFO CARD COMPONENT */
function GreenCard({ text, className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>

      <svg
        viewBox="0 0 561 316"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-[115px] sm:h-[125px] md:h-[135px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 56.1486V17.8844C0 8.00711 8.00711 0 17.8844 0H201.233C216.738 0 229.308 12.5693 229.308 28.0743C229.308 43.5793 241.877 56.1486 257.382 56.1486H297.335H529.7C546.586 56.1486 560.275 69.8372 560.275 86.723V264.726C560.275 281.612 546.586 295.3 529.7 295.3H307.525C301.898 295.3 297.335 299.862 297.335 305.49C297.335 311.118 292.773 315.68 287.145 315.68H30.5744C13.6887 315.68 0 301.991 0 285.106V56.1486Z"
          fill="#EFEFEF"
        />
      </svg>

      <div className="absolute inset-0 flex items-center px-6 sm:px-8">
        <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#4a4a4a] leading-relaxed">
          {text}
        </p>
      </div>

    </div>
  );
}


  return (
    <>
      <Helmet>
        <title>Multi-Vendor Food Delivery Platform | Flutter React Node.js Solution</title>
        <meta name="description" content="Complete food delivery platform solution with Flutter mobile apps, React.js web interface & Node.js backend. Connect restaurants, customers & drivers with real-time tracking, secure payments & analytics." />
        <meta property="og:title" content="Multi-Vendor Food Delivery Platform | Flutter React Node.js Solution" />
        <meta property="og:description" content="Complete food delivery platform solution with Flutter mobile apps, React.js web interface & Node.js backend. Connect restaurants, customers & drivers with real-time tracking, secure payments & analytics." />
      </Helmet>
      <main className="w-full bg-secondary-background">
        {/* Header */}
        <header className="w-full bg-secondary-background">
           <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col items-center w-full gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Navigation */}
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-start items-center w-full px-4 sm:px-6 lg:px-8">                  
        {/* Hero Section  */}
                <section className="w-full bg-white overflow-hidden ">
                    <div className="max-w-[1440px] mx-auto px-3 sm:px-0 lg:px-0 xl:px-0">

                      <div className="py-10 sm:py-14 lg:py-12">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                          {/* LEFT */}
                          <div className="w-full lg:w-[48%] text-left">

                            <h3 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] font-semibold leading-[1.15]">

                              <span className="">Launch</span>

                              <span className="block w-fit bg-[#E4FFD4] rounded-md  mt-2">
                                Your Own Service
                              </span>

                              <span className="block w-fit bg-[#E4FFD4] rounded-md mt-1">
                                Marketplace
                              </span>

                              <span className="block mt-1">
                                Platform
                              </span>

                            </h3>

                            <p className="mt-6 text-sm sm:text-base max-w-md">
                              Built for full ownership. One-time payment. No subscriptions.
                            </p>

                            <p className="mt-2 text-sm sm:text-base max-w-md">
                              Xmoveon is the all-in-one service marketplace software that lets
                              you build and own your own platform — similar to Sharetribe,
                              but with complete control, source code access, and zero
                              recurring fees.
                            </p>

                            <div className="mt-6">
                              <Button
                                text="Try Our Demo"
                                text_font_size="16px"
                                text_font_weight="600"
                                text_color="#0f0f0f"
                                fill_background_color="#9cee69"
                                border_border_radius="32px"
                                padding="14px 28px"
                                onClick={() => setShowDemo(true)}
                              />
                            </div>

                          </div>


                          {/* RIGHT */}
                          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                            <div className="relative w-full max-w-[560px]">

                              {/* PHONE IMAGE */}
                              <img
                                src="/assets/Serviceimage.webp"
                                alt="App Preview"
                                className="
                                  w-full
                                  max-w-[500px]
                                  md:max-w-[540px]
                                  lg:max-w-[500px]
                                  xl:max-w-[560px]
                                  h-auto
                                  object-cover
                                "
                              />

                              {/* FLOATING INFO CARD */}
                           {/*    <div className="absolute -bottom-12 left-8 w-[75%]">

                                <GreenCard
                                  text="Whether you’re a startup, agency, or developer, Xmoveon gives you the flexibility to create, customize, and scale your own marketplace — entirely under your brand."
                                />

                              </div>
 */}
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>
                  </section>         
                </div>
              </div>
              {/* Why Choose X-Moveon Section */}

              <WhyChoose />

              {/* Why Xmoveon For Section */}


              <Who />


              {/* What You Can Section */}

              <WhatCan />

              {/* MarketPlace Features Section */}

              <section className="w-full bg-white relative ">
                      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-4 xl:px-4">

                        <div className="relative">

                          {/* HEADER */}
                          <div className="mb-10 lg:mb-14">

                            <h2
                              className="
                              text-[26px]
                              sm:text-[32px]
                              md:text-[40px]
                              lg:text-[48px]
                              xl:text-[52px]
                              font-semibold
                              leading-[1.15]
                              "
                            >
                              <span className="bg-[#E4FFD4] px-1 rounded-md">
                                Core Marketplace
                              </span>

                              <br />

                              Features
                            </h2>

                          </div>

                          {/* FEATURES GRID */}
                          <div
                            className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-6
                            lg:gap-10
                            "
                          >

                            {features?.map((feature, index) => (
                              <div key={index} className="space-y-3">

                                <div className="flex items-center gap-2">

                                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                    <div className="bg-[#E4FFD4] rounded-[10px] ">
                                      {feature.icon}
                                    </div>
                                  </div>

                                  <h3 className="text-base sm:text-[22px] font-semibold">
                                    {feature?.title}
                                  </h3>

                                </div>

                                <p className="text-sm sm:text-[16px] leading-relaxed text-[#5f5f5f] pl-14">
                                  {feature?.description}
                                </p>

                              </div>
                            ))}

                          </div>

                        </div>

                      </div>
                    </section>


              {/*Panels & Dashboards Section */}

              <Panels />


              {/*Monetization options Section */}
              <Options />

              {/*Why Business  Section */}
              <WhyBusinesses />
            </div>
          </div>
        </header>

        {/* Contact Form Section */}

        <Why />

        {/* FAQ Section */}

        <FAQ />


        {/* Testimonial Section */}

        <Testo />

        {/* 
      <Hero/>
      <WhyChoose/>
      <WhatCan/>
      <Panels/>
      <Options/>
      <WhyBusinesses/>
      <FAQ/>
      <Footer/>

      <VendorsSection/>
 */}


                     <DemoPopup showDemo={showDemo} setShowDemo={setShowDemo} />

      </main>
    </>
  );
};

export default Service;





















