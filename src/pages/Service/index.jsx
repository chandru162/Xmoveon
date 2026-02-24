import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import FooterSection from '../LandingPage/FooterSection';
import TestimonialsSection from '../LandingPage/TestimonialsSection';
import WhyChooseSection from '../LandingPage/WhyChooseSection';
import FAQ from '../LandingPage/FAQ';
import Who from '../ExtraPage.jsx/Who';
import WhatCan from '../ExtraPage.jsx/WhatCan';
import Panels from '../ExtraPage.jsx/panels';
import Options from '../ExtraPage.jsx/Options';
import WhyBusinesses from '../ExtraPage.jsx/WhyBusiness';
import WhyChoose from '../ExtraPage.jsx/WhyChoose';



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
      answer: 'Most restaurants are live within 48 hours. We handle verification and setup so you can focus on growth. Your admin panel gives you full control over the process.',
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
      question: 'How do drivers get paid',
      answer: '',
      isOpen: false
    },
    {
      question: 'Can you customize the commission rates',
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
      icon: "/images/img_device_mobile_message.svg",
      title: "Service Listings",
      description: "Create detailed listings with images, pricing, and availability."
    },
    {
      icon: "/images/img_layout_dashboard_gray_900_01.svg",
      title: "Payments",
      description: " Instant or scheduled bookings made simple."
    },
    {
      icon: "/images/img_heart_pin.svg",
      title: "Booking & Scheduling",
      description: "In-platform communication between customers and providers."
    },
    {
      icon: "/images/img_topology_full_hierarchy.svg",
      title: "Reviews & Ratings",
      description: "Supports multiple payment options and commissions."
    },
    {
      icon: "/images/img_clover.svg",
      title: "Marketing Messaging",
      description: "Build trust with verified feedback."
    },
    {
      icon: "/images/img_brand_walmart.svg",
      title: " Flexible Pricing",
      description: " Offer fixed, hourly, or request-based pricing models."
    }
  ];

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
          <div className=" max-w-[1440px] md:max-w-[1200px] lg:max-w-[1450px] xl:max-w-[1600px]  px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full gap-[23px] sm:gap-[28px] md:gap-[35px] lg:gap-[40px] xl:gap-[46px]">
              {/* Navigation */}

              <div className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col justify-start items-center w-full px-[10px] sm:px-[14px] md:px-[22px] lg:px-[26px] xl:px-[28px]">
                  {/* Hero Section */}
                  <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
                      <div className="flex flex-col lg:flex-row  gap-10 lg:gap-16">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                          <h3
                            className="
                                  text-[26px]
                                  sm:text-[32px]
                                  md:text-[40px]
                                  lg:text-[48px]
                                  xl:text-[48px]
                                  font-medium
                                  leading-[1.15]
                                  text-text-primary
                                "
                          >
                            <span
                              className="
                                    inline-block
                                    text-[#9CEE69]
                                    rounded-md
                                    whitespace-nowrap
                                  "
                            >
                              Xmoveon
                            </span>
                            <span
                              className="
                                    inline-block
                                    rounded-md
                                    whitespace-nowrap
                                    px-1
                                  "
                            >
                              Launch
                            </span>
                            <span
                              className="
                                    inline-block
                                    rounded-md
                                    whitespace-nowrap
                                    bg-[#E4FFD4]

                                  "
                            > Your Own Service</span> <br />

                            <span
                              className="
                                    inline-block
                                    bg-[#E4FFD4]
                                    rounded-md
                                    whitespace-nowrap
                                  "
                            >
                              Marketplace
                            </span>
                            <span
                              className="
                                    inline-block
                                    bg-[#E4FFD4]
                                    rounded-md
                                    whitespace-nowrap
                                    px-1
                                  "
                            >
                              Platform
                            </span>
                          </h3>
                          <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                            Build your multi-vendor food delivery platform with our proven
                            solution. Restaurants gain exposure, drivers earn commissions,
                            and you control the entire ecosystem from one powerful admin panel.
                          </p>

                          <div className="mt-6 flex justify-center lg:justify-start">
                            <Button
                              text="Try Our Demo"
                              text_font_size="16px"
                              text_font_weight="600"
                              text_color="#0f0f0f"
                              fill_background_color="#9CEE69"
                              border_border_radius="32px"
                              padding="14px 28px"
                              text_align="center"
                            />
                          </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                          <div
                            className="
                                    w-full
                                    max-w-[460px]
                                    sm:max-w-[420px]
                                    md:max-w-[680px]
                                    lg:max-w-[780px]
                                    lg:aspect-[4/5]
                                    xl:aspect-[5/5]
                                  "
                          >
                            <img
                              src="/assets/android.jpg"
                              alt="Platform Illustration"
                              className="
                                      w-full
                                      h-[200px]
                                      w-[360px]
                                      md:h-[400px]
                                      lg:h-[350px]
                                      xl:h-[450px]
                                      md:w-full
                                      lg:w-[400px]
                                      xl:w-[900px]
                                      rounded-[28px]
                                      object-cover
                                      shadow-md
                                    "
                            />
                          </div>

                          {/* INFO BUBBLE */}
                          <div
                            className="
                        mt-5
                        w-full
                        max-w-[360px]
                        sm:max-w-[320px]
                        md:max-w-[380px]
                        bg-[#EFEFEF]
                        rounded-[22px]
                        px-5
                        py-4
                        text-[13px]
                        sm:text-[14px]
                        text-center
                      "
                          >
                            Whether you’re a startup, agency, or developer, Xmoveon gives you the
                            flexibility to create, customize, and scale your own marketplace —
                            entirely under your brand.
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

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-4 ">
                  {/* Content */}
                  <div className="relative mx-2 md:mx-6 lg:mx-4 xl:mx-6">

                    {/* Header */}
                    <div className="flex  mb-12 lg:mb-12">

                      <div className=" me-8 lg:me-16 xl:me-20">
                        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-text-primary ms-4 lg:ms-10 xl:ms-16  ">
                          <span className='bg-[#E4FFD4]'>  Core Marketplace </span> <span> <br />Features</span>
                        </h2>
                      </div>

                      {/* <div className="lg:w-1/2">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed  mt-4 lg:mt-8 ms-16 lg:ms-12 ">
                Powerful tools to optimize operations,<br /> increase revenue, and delight your  <br />customers.
              </p>
            </div> */}
                    </div>

                    {/* Features Grid - 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mx-8 lg:mx-20 ">
                      {features?.map((feature, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-start gap-3">
                            <img src={feature?.icon} alt="" className="w-6 h-6 flex-shrink-0" />
                            <h3 className="text-lg sm:text-lg font-semibold text-text-secondary">
                              {feature?.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-text-secondary leading-relaxed pl-11 lg:text-sm">
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

        <WhyChooseSection />

        {/* FAQ Section */}

        <FAQ />


        {/* Testimonial Section */}

        <TestimonialsSection />

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



      </main>
    </>
  );
};

export default Service;





















