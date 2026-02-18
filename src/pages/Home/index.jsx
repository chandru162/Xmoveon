import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import FooterSection from '../LandingPage/FooterSection';
import Link from '../../components/ui/Link';
import Ul from '../../components/ui/UI';
import ControlSection from './ControlSection';
import TestimonialsSection from '../LandingPage/TestimonialsSection';
import WhyChooseSection from '../LandingPage/WhyChooseSection';
import Hero from '../LandingPage/Hero';
import WhyChoose from '../LandingPage/WhyChoose';
import WhatCan from '../LandingPage/WhatCan';
import Panels from '../LandingPage/panels';
import Options from '../LandingPage/Options';
import WhyBusinesses from '../LandingPage/WhyBusiness';
import FAQ from '../LandingPage/FAQ';
import EveryoneWins from '../LandingPage/EveryOne';
import Footer from '../LandingPage/Last';
import VendorsSection from '../LandingPage/Vendor';
import HeroSection from '../LandingPage/HeroSection';


const Home = () => {
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
          <div className=" max-w-[1440px] md:max-w-[1100px] lg:max-w-[1200px] xl:max-w-[1300px]  px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full gap-[23px] sm:gap-[28px] md:gap-[35px] lg:gap-[40px] xl:gap-[46px]">
              {/* Navigation */}

                 <div className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col justify-start items-center w-full px-[10px] sm:px-[14px] md:px-[22px] lg:px-[26px] xl:px-[28px]">
                  <div className="rounded-full bg-secondary-background p-[13px] sm:p-[17px] md:p-[21px] lg:p-[25px] xl:px-[28px] xl:py-[28px] w-full">
                    <nav className="flex flex-row justify-between items-center w-full">
                      {/* Logo */}
                      <img 
                        src="/images2/features/img_xmoveon.svg" 
                        alt="XMoveOn Logo" 
                        className="w-[81px] sm:w-[100px] md:w-[130px] lg:w-[145px] xl:w-[162px] h-[10px] sm:h-[12px] md:h-[16px] lg:h-[18px] xl:h-[20px]"
                      />

                      {/* Desktop Navigation */}
                      <div className="hidden lg:flex flex-row gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] justify-center items-center p-[6px] sm:p-[8px] md:p-[10px] lg:p-[12px]">
                        <div className="flex flex-row justify-end items-center w-auto">
                          <span className="text-sm sm:text-base font-medium leading-sm text-text-muted font-[Inter] w-auto lg:ms-16">
                            Home
                          </span>
                        </div>
                        <div className="flex flex-row justify-center items-center w-auto">
                          <span className="text-sm sm:text-base font-medium leading-sm text-text-muted font-[Inter] w-auto">
                            Features
                          </span>
                        </div>
                        <div className="flex flex-row justify-center items-center w-auto">
                          <span className="text-sm sm:text-base font-medium leading-sm text-text-muted font-[Inter] w-auto">
                            Blog
                          </span>
                        </div>
                        <span className="text-sm sm:text-base font-medium leading-sm text-text-muted font-[Inter] w-auto">
                          Contact Us
                        </span>
                      </div>

                      {/* Mobile Menu Button */}
                      <button 
                        className="lg:hidden mx-4 md:mx-8" 
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* Get Started Button - Desktop */}
                      <div className="hidden lg:flex lg:ms-16">
                        <Button
                           text="Get Started"
                              text_font_size="16px"
                              text_font_weight="600"
                              text_color="#0f0f0f"
                              fill_background_color="#9cee69"
                              border_border_radius="32px"
                              padding="16px 24px"
                              text_align="center"
                        >
                          <span>Get Started</span>
                          <img src="/images2/features/img_iconoirarrowtr.svg" alt="Arrow" className="w-6 h-6" />
                        </Button>
                      </div>
                    </nav>

                    {/* Mobile Navigation Menu */}
                    <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 p-4 bg-secondary-background rounded-lg shadow-lg`}>
                      <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-text-muted">Home</span>
                        <span className="text-sm font-medium text-text-muted">Features</span>
                        <span className="text-sm font-medium text-text-muted">Blog</span>
                        <span className="text-sm font-medium text-text-muted">Contact Us</span>
                        <Button
                          text="Get Started"
                          fill_background_color="bg-primary-background"
                          className="w-full mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <section className="rounded-full bg-secondary-background sm:p-[18px] md:p-[22px] lg:p-[26px] xl:p-[28px]  w-full  overflow-hidden">
                    <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-12">
                      {/* Left Content */}
                      <div className="flex flex-col justify-start items-start w-full lg:w-[48%] relative ">
                        {/* Decorative highlight */}
                       {/*  <img 
                          src="/images/img_highlight_text.svg" 
                          alt="Highlight" 
                          className="absolute w-[253px] sm:w-[310px] md:w-[380px] lg:w-[440px] xl:w-[506px] h-[87px] sm:h-[107px] md:h-[131px] lg:h-[151px] xl:h-[174px] rounded-lg sm:rounded-xl top-[44px] sm:top-[54px] md:top-[66px] lg:top-[76px] xl:top-[88px] left-0 z-0"
                        /> */}
                        
                        <h1 className="relative text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] ms-4 md:ms-10 lg:ms-12 font-medium text-text-primary font-[Inter] w-[90%] z-10">
                          Connect <br />restaurants and <br /> customers <br />instantly
                        </h1>
                        <p className="text-sm sm:text-base font-normal leading-md text-text-secondary font-[Sans_Serif_Collection] w-[82%] ms-4 md:ms-10 lg:ms-12">
                          Build your multi-vendor food delivery platform with our proven solution. Restaurants gain exposure, drivers earn commissions, and you control the entire ecosystem from one powerful admin panel.
                        </p>
                       <div className='mt-4 md:mt-6 lg:mt-6 ms-4 lg:ms-12 md:ms-8'>
                          <Button
                              text="Try Our Demo"
                              text_font_size="16px"
                              text_font_weight="600"
                              text_color="#0f0f0f"
                              fill_background_color="#9cee69"
                              border_border_radius="32px"
                              padding="16px 24px"
                              text_align="center"
                              
                            /> 
                            </div>
                      </div>


                      

                      {/* Right Illustration */}
                      <div className="w-full lg:w-[50%]  flex ">
                        <img 
                          src="/public/assets/android.jpg" 
                          alt="Platform Illustration" 
                          className="w-full rounded-lg max-w-[200px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[520px] max-h-[205px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[380px] mx-4 md:mx-10 lg:mx-6 xl:mx-8  mt-4"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* Technology Stack Section */}
            <section className="flex justify-center items-center w-full">
                  <div className="bg-secondary-background rounded-full
                    p-[20px] sm:p-[24px] md:p-[42px] lg:p-[60px] xl:p-[76px]
                    w-full max-w-[1200px] xl:max-w-[1350px] 
                    mx-[10px] sm:mx-[20px] md:mx-[48px] lg:mx-[36px] xl:mx-[36px]
                    -mt-[6px] sm:-mt-[7px] md:-mt-[6px] lg:-mt-[10px] xl:-mt-[48px]">

                  {/*  MAIN FIX: flex-wrap */}
                  <div className="flex flex-wrap lg:flex-nowrap justify-start items-start gap-4 sm:gap-4 md:gap-12 lg:gap-12 xl:gap-16">

                    {/* Flutter */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_vector.svg"
                        alt="Flutter"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[32px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        Flutter
                      </span>
                    </div>

                    {/* Next.js */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_vector.svg"
                        alt="Next.js"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[30px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        Next.js
                      </span>
                    </div>

                    {/* React.js */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_logos_react_original.svg"
                        alt="React.js"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[36px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        React.js
                      </span>
                    </div>

                    {/* Node.js */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_logos_nodejs_original.svg"
                        alt="Node.js"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[36px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        Node.js
                      </span>
                    </div>

                    {/* SQL */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_vector.svg"
                        alt="SQL"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[36px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        SQL
                      </span>
                    </div>

                    {/* Kotlin */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images2/features/img_vector_deep_purple_400.svg"
                        alt="Kotlin"
                        className="w-[20px] sm:w-[24px] lg:w-[28px] xl:w-[36px]"
                      />
                      <span className="text-[14px] lg:text-[18px] xl:text-[22px] font-semibold">
                        Kotlin
                      </span>
                    </div>

                  </div>
                </div>
              </section>


              {/* Built for Scale Section */}
              <section className="w-full">
                <div className="bg-secondary-background rounded-full p-[25px] sm:p-[31px] md:p-[38px] lg:p-[52px] xl:p-[60px] mx-[14px] sm:mx-[18px] md:mx-[22px] lg:mx-[36px] xl:mx-[40px] w-full max-w-[1334px] mx-auto">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-[40%] xl:w-[45%] relative">
                      {/* Background highlight */}
                      

                      {/* Main heading */}
                      <h2 className="relative text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-medium leading-[30px] sm:leading-[34px] md:leading-[46px] lg:leading-[58px] xl:leading-[70px] text-text-primary font-[Inter] w-full z-10 mx-0 md:mx-3 lg:mx-0 xl:mx-0 ">
                        Built for Scale, Designed for <br /> Success
                      </h2>

                      {/* Content section */}
                      <div className="flex flex-col justify-start items-center w-full mt-2 lg:mt-4 mx-0 md:mx-4 lg:mx-0 xl:mx-0">
                        <p className="text-sm sm:text-base font-normal  text-text-secondary font-[Sans_Serif_Collection] w-full ">
                          Everything you need to launch, manage, and grow your on- <br />demand service business.
                        </p>
                        </div>
                        <div className='mx-0 mt-3 md:mx-4 lg:mx-0 xl:mx-0'>
                        <img 
                          src="/public/assets/car.jpg" 
                          alt="Platform Dashboard" 
                          className="w-full max-w-[200px] sm:max-w-[288px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[370px] h-auto rounded-[10px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[26px] mt-2"
                        />
                      </div>
                      </div>
                    

                    {/* Right Features Grid */}
                  
                    <div className="w-[80%] lg:w-[50%] md:w-[80%] xl:w-[47%]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px] sm:gap-[7px] md:gap-[15px] lg:gap-[24px] w-full mt-2 md:mt-4 lg:mt-10 xl:mt-16 mx-0 md:mx-4 lg:mx-0 xl:mx-0">
                        {platformFeatures?.map((feature, index) => (
                          <div 
                            key={index}
                            className={`flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[12px] justify-start items-center w-full h-auto rounded-lg sm:rounded-xl p-[10px] sm:p-[12px] md:p-[15px] lg:p-[20px] xl:p-[24px]  bg-[#F4F4F480] `}
                          >
                            <div className="flex flex-row justify-start items-center w-full ">
                              <img 
                                src={feature?.icon} 
                                alt={feature?.title} 
                                className="w-[13px] sm:w-[16px] md:w-[20px] lg:w-[23px] xl:w-[26px] h-[13px] sm:h-[16px] md:h-[20px] lg:h-[23px] xl:h-[26px]"
                              />
                              <span className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold leading-lg text-text-secondary font-[Inter] ml-[4px] sm:ml-[5px] md:ml-[6px] lg:ml-[7px] xl:ml-[8px]">
                                {feature?.title}
                              </span>
                            </div>
                            <p className="text-[8px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-normal leading-md text-text-secondary font-[Sans_Serif_Collection] w-[98%]">
                              {feature?.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customer Experience Section */}
             <section className="w-[95%] md:w-full lg:w-full xl:w-full">
                <div
                  className="bg-secondary-background rounded-full
                    p-[18px] sm:p-[22px] md:p-[28px] lg:p-[31px] xl:p-[36px]
                    mx-[14px] sm:mx-[4px] md:mx-[16px] lg:mx-[12px] xl:mx-[16px]
                    w-full max-w-[1200px] mx-auto
                    mt-[26px] sm:mt-[32px] md:mt-[39px] lg:mt-[45px] xl:mt-[52px]"
                  style={{ backgroundImage: `url(/images2/features/img_background.svg)` }}
                >
                  <div className="flex flex-col gap-[27px] sm:gap-[33px] md:gap-[40px] lg:gap-[46px] xl:gap-[54px] w-full">

                    {/*  MAIN CONTENT ROW */}
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-10">

                      {/* LEFT CONTENT */}
                      <div className="flex flex-col gap-[22px] sm:gap-[27px] md:gap-[33px] lg:gap-[38px] xl:gap-[44px]
                        w-full lg:w-[42%]">

                        {/* First Feature */}
                        <div className="flex flex-col gap-[7px] sm:gap-[9px] md:gap-[11px] lg:gap-[12px] xl:gap-[12px]
                         bg-[#F4F4F480]  rounded-[13px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[20px]
                          p-[2px] sm:p-[2px] md:p-[4px] lg:p-[6px] xl:p-[12px] mx-0 lg:mx-6 xl:mx-10 md:mx-4 ">

                          <div className="flex items-center mx-2">
                            <img
                              src="/images2/features/img_album.svg"
                              alt="Browse and order"
                              className="w-[16px] sm:w-[18px] md:w-[20px] lg:w-[23px] xl:w-[26px]"
                            />
                            <span className="ml-2 text-[14px] md:text-[17px] lg:text-[19px] xl:text-[22px] font-semibold ">
                              Browse and order
                            </span>
                          </div>

                          <p className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] mx-4 ">
                            Explore menus from dozens of <br />restaurants in seconds.
                          </p>
                        </div>

                        {/* Feature List */}
                        <div className="flex flex-col gap-[18px] sm:gap-[22px] md:gap-[26px] lg:gap-[30px] mx-0 lg:mx-6 xl:mx-10 md:mx-4 ">
                          {customerFeatures?.slice(1)?.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-4 bg-[#F4F4F480]  rounded-[13px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[20px] p-4" >
                              <div className="flex items-center ">
                                <img
                                  src={feature?.icon}
                                  alt={feature?.title}
                                  className="w-[16px] sm:w-[18px] md:w-[20px] lg:w-[23px] xl:w-[26px]"
                                />
                                <span className="ml-2 text-[14px] md:text-[17px] lg:text-[19px] xl:text-[22px] font-semibold">
                                  {feature?.title}
                                </span>
                              </div>
                              <p className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] text-text-light-muted">
                                {feature?.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/*  RIGHT IMAGE – responsive */}
                      <div className=' max-w-[260px] sm:max-w-[300px] md:max-w-[400px]
                          lg:max-w-[450px] xl:max-w-[550px] sm:h-[200px] md:h-[280px] lg:h-[360px] xl:h-[500px] mx-2 md:mx-0 lg:mx-4 xl:mx-16 '>
                      <img
                        src="/public/assets/people.jpg"
                        alt="Customer Experience"
                        className=" rounded-md  md:rounded-lg lg:rounded-xl xl:rounded-xl 
                        "
                      />
                      </div>
                    </div>

                    {/*  BOTTOM ACTIONS */}
                    <div className="flex justify-between items-center w-full lg:w-[42%] border-t border-border-secondary pt-4">
                      <Button
                        text="1 / 4"
                        text_font_size="text-xs"
                        text_font_weight="font-medium"
                        text_color="text-text-secondary"
                        border_border_radius="rounded-lg"
                        padding="px-4 py-2"
                        className="bg-transparent border border-text-secondary"
                      />

                      <Button
                        text="Discover"
                        text_font_size="text-xs"
                        text_font_weight="font-medium"
                        text_color="#fff"
                        fill_background_color="#0f0f0f"
                        border_border_radius="rounded-lg"
                        padding="px-6 py-2"
                        className="flex items-center gap-2"
                      >
                        <span>Discover</span>
                        <img
                          src="/images2/features/img_iconoirarrowtr_white_a700.svg"
                          alt="Arrow"
                          className="w-4 h-4"
                        />
                      </Button>
                    </div>

                  </div>
                </div>
             </section>


              {/* Driver Tools Section */}
              <section className="w-full">
                <div className="bg-secondary-background rounded-full p-[13px] sm:p-[16px] md:p-[20px] lg:p-[23px] xl:p-[26px] mx-[14px] sm:mx-[18px] md:mx-[28px] lg:mx-[36px] xl:mx-[48px] w-full max-w-[1334px] mx-auto mt-[23px] sm:mt-[28px] md:mt-[35px] lg:mt-[40px] xl:mt-[46px]">
                  <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12 w-full">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[25px] sm:gap-[31px] md:gap-[38px] lg:gap-[44px] xl:gap-[50px] justify-start items-start w-full lg:w-[58%]">
                      <div className="flex flex-col gap-[12px] sm:gap-[15px] md:gap-[18px] lg:gap-[21px] xl:gap-[24px] justify-start items-start w-full">
                        {/* Heading with highlight */}
                        <div className="relative w-full mx-2 sm:mx-0 md:mx-2 lg:mx-4 xl:mx-4">
                          <h2 className="relative text-[30px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-medium leading-[36px] sm:leading-[40px] md:leading-[52px] lg:leading-[64px] xl:leading-[76px] text-text-primary font-[Inter] w-full z-10">
                            Tools that help <br /> <span className='mx-1'>them earn more</span>
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base font-normal leading-md text-text-secondary font-[Sans_Serif_Collection] w-full lg:w-[65%] mx-2 sm:mx-0 md:mx-2 lg:mx-4 xl:mx-5">
                          Drivers get smart routing that saves time and fuel. They see earnings clearly and manage their schedule on their own terms.
                        </p>

                        <div className="flex flex-row justify-start items-center w-full gap-4 md:gap-6 lg:gap-10 xl:gap-12 mx-2 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-6 mt-2">
                          <Button
                            text="Learn"
                            text_font_size="text-xs"
                            text_font_weight="font-medium"
                            text_color="#fff"
                            fill_background_color="#0f0f0f"
                            border_border_radius="rounded-lg"
                            padding="pt-[5px] sm:pt-[6px] md:pt-[8px] lg:pt-[9px] xl:pt-[10px] pr-[11px] sm:pr-[14px] md:pr-[17px] lg:pr-[19px] xl:pr-[22px] pb-[5px] sm:pb-[6px] md:pb-[8px] lg:pb-[9px] xl:pb-[10px] pl-[11px] sm:pl-[14px] md:pl-[17px] lg:pl-[19px] xl:pl-[22px]"
                            className="border-0 border-solid border-text-secondary"
                          />
                          <img 
                            src="/images2/features/img_group_1000001743.svg" 
                            alt="Driver Earnings" 
                            className="w-[61px] sm:w-[75px] md:w-[92px] lg:w-[106px] xl:w-[122px] h-[24px] sm:h-[29px] md:h-[36px] lg:h-[42px] xl:h-[48px] "
                          />
                        </div>
                      </div>

                      {/* Dashboard image */}
                      <img 
                        src="/public/assets/car.jpg" 
                        alt="Driver Dashboard" 
                        className="w-full max-w-[305px] sm:max-w-[374px] md:max-w-[458px] lg:max-w-[530px] xl:max-w-[550px] h-full xl:max-h-[270px] rounded-[13px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[26px] mx-2 sm:mx-0 md:mx-2 lg:mx-4 xl:mx-4"
                      />
                    </div>
                    {/* Right Content - Driver Features */}
                    <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[32px] justify-start items-start w-full lg:w-[40%] sm:me-8 md:me-20 lg:me-32 xl:me-36 overflow-hidden">
                      <span className="text-[23px] sm:text-[28px] md:text-[35px] lg:text-[48px] xl:text-[48px] font-semibold leading-3xl text-primary-background font-[Inter] mx-6 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 ">
                        Drivers
                      </span>

                      <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[9px] lg:gap-[10px] xl:gap-[12px]">
                        {driverFeatures?.map((feature, index) => (
                          <div key={index} className={`flex flex-col gap-[7px] sm:gap-[9px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] justify-start items-center w-[80%] md:w-full lg:w-full xl:w-full h-auto mx-6 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 sm:rounded-xl p-[11px] sm:p-[14px] md:p-[17px] lg:p-[16px] xl:p-[18px] bg-[#F4F4F480]  rounded-[13px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[23px] xl:rounded-[20px] `}>
                            <div className="flex flex-row justify-start items-center w-full">
                              <img 
                                src={feature?.icon} 
                                alt={feature?.title} 
                                className="w-[13px] sm:w-[16px] md:w-[20px] lg:w-[23px] xl:w-[20px] h-[13px] sm:h-[16px] md:h-[20px] lg:h-[23px] xl:h-[26px]"
                              />
                              <span className="text-[11px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[18px] font-semibold leading-lg text-text-secondary font-[Inter] ml-[4px] sm:ml-[5px] md:ml-[6px] lg:ml-[7px] xl:ml-[8px]">
                                {feature?.title}
                              </span>
                            </div>
                            <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px]  text-text-secondary font-[Sans_Serif_Collection] w-full">
                              {feature?.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vendor Section */}
                           <section className="w-full">
                <div 
                  className="relative bg-secondary-background rounded-full p-[22px] sm:p-[27px] md:p-[33px] lg:p-[38px] xl:p-[44px] mx-[14px] sm:mx-[18px] md:mx-[22px] lg:mx-[26px] xl:mx-[28px] w-full max-w-[1334px] mx-auto mt-[23px] sm:mt-[28px] md:mt-[35px] lg:mt-[40px] xl:mt-[46px]"
                  style={{ backgroundImage: `url(/images/img_background_white_a700.svg)` }}
                >

                  <div className="flex flex-row justify-start items-center w-full h-auto">
                    <div className="flex flex-col gap-[76px] sm:gap-[93px] md:gap-[114px] lg:gap-[132px] xl:gap-[152px] justify-start items-center w-full">
                      {/* Header section */}
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
                        <span className="text-[23px] sm:text-[28px] md:text-[35px] lg:text-[40px] xl:text-[46px] font-semibold leading-3xl text-primary-background font-[Inter] mx-2 md:mx-8 lg:mx-10 xl:mx-12 mt-4">
                          Vendors
                        </span>
                        <div className="relative w-full lg:w-[68%]">
                          
                          <h2 className="relative text-[30px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-medium leading-[44px] sm:leading-[54px] md:leading-[66px] lg:leading-[76px] xl:leading-[88px] text-text-primary font-[Inter] w-full z-10 mx-2 md:mx-0 lg:mx-0 xl:mx-0">
                            Your restaurant grows on <br />this platform
                          </h2>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="flex flex-row justify-start items-center w-full">
                        {/* Left Content */}
                        <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[32px] justify-start items-start w-full lg:w-[42%]">
                          <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-normal leading-md text-text-light-muted font-[Sans_Serif_Collection] w-[86%] ml-[11px] sm:ml-[14px] md:ml-[17px] lg:ml-[19px] xl:ml-[22px]">
                            Restaurants can manage menus, handle orders, and reach more customers without building their own app. Built-in insights help improve sales and daily operations.
                          </p>

                          <div className="flex flex-col gap-[6px] sm:gap-[5px] md:gap-[7px] lg:gap-[8px] xl:gap-[10px] w-full">
                            {vendorFeatures?.map((feature, index) => (
                              <div key={index} className={`flex flex-col gap-[5px] sm:gap-[6px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] justify-start items-center w-full h-auto sm:rounded-xl p-[11px] sm:p-[14px] md:p-[17px] lg:p-[19px] xl:p-[22px] bg-[#F4F4F480]`}>
                                <div className="flex flex-row justify-start items-center w-full">
                                  <img 
                                    src={feature?.icon} 
                                    alt={feature?.title} 
                                    className="w-[13px] sm:w-[16px] md:w-[20px] lg:w-[23px] xl:w-[26px] h-[13px] sm:h-[16px] md:h-[20px] lg:h-[23px] xl:h-[26px]"
                                  />
                                  <span className="text-[11px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[22px] font-semibold leading-lg text-text-secondary font-[Inter] ml-[4px] sm:ml-[5px] md:ml-[6px] lg:ml-[7px] xl:ml-[8px]">
                                    {feature?.title}
                                  </span>
                                </div>
                                <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-normal leading-md text-text-primary font-[Sans_Serif_Collection] w-full">
                                  {feature?.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right illustration */}
                        <div className="flex justify-center lg:justify-end">
                          <div className="rounded-3xl overflow-hidden shadow-lg max-w-md w-[80%]  lg:w-[60%] xl:w-[90%] mx-4 lg:mx-12 xl:mx-12">
                            <img
                              src="/public/assets/restarunt.jpg"
                              alt="Restaurant interior"
                              className="w-full h-52 sm:h-80 lg:h-[350px] xl:h-[450px] object-cover "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Admin Control Section */}
                            <ControlSection/>
              {/* Platform Benefits Section */}
              <section className="w-full">
                <div className="relative bg-secondary-background rounded-full w-full max-w-[1334px] mx-auto mx-[14px] sm:mx-[18px] md:mx-[22px] lg:mx-[26px] xl:mx-[28px] mt-[57px] sm:mt-[70px] md:mt-[85px] lg:mt-[99px] xl:mt-[114px]">
                  {/* Background Image */}
                  <img 
                    src="/images2/features/img_rectangle_4.svg" 
                    alt="Background" 
                    className="w-full h-auto rounded-full"
                  />

                  <div className="absolute inset-0 flex flex-col gap-[31px] sm:gap-[38px] md:gap-[46px] lg:gap-[54px] xl:gap-[62px] justify-start items-start w-full h-auto p-[2px] sm:p-[4px] md:p-[8px] lg:p-[12px] xl:p-[16px] mx-0 sm:mx-0 md:mx-4 lg:mx-8 xl:mx-12">
                    <h2 className="text-[30px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[48px] font-medium leading-[30px] sm:leading-[34px] md:leading-[46px] lg:leading-[58px] xl:leading-[70px] text-text-primary font-[Inter] w-[74%] mx-7 md:mx-0 sm:mx-0 lg:mx-0 xl:mx-0 ">
                      The Platform That Powers <br />Your Marketplace
                    </h2>

                    <div className="flex flex-row justify-start items-center">
                      <div className="grid grid-cols-2 lg:grid-cols-2 gap-[18px] sm:gap-[22px] md:gap-[27px] lg:gap-[31px] xl:gap-[36px] w-[80%]   mx-6 lg:mx-12 xl:mx-12 md:mx-8">
                        {platformBenefits?.map((benefit, index) => (
                          <div 
                            key={index}
                            className={`flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px] lg:gap-[7px] xl:gap-[8px] justify-start items-center w-full h-auto rounded-md p-[13px] sm:p-[16px] md:p-[20px] lg:p-[23px] xl:p-[26px]  bg-[#c7dfb9]`}
                          >
                            <div className="flex flex-col gap-[12px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] justify-center items-start w-full">
                              <div className="w-[27px] sm:w-[28px] md:w-[32px] lg:w-[36px] xl:w-[40px] h-[27px] sm:h-[30px] md:h-[36px] lg:h-[40px] xl:h-[44px] bg-secondary-background rounded-sm p-[6px] sm:p-[7px] md:p-[9px] lg:p-[10px] xl:p-[12px]">
                                <img 
                                  src={benefit?.icon} 
                                  alt={benefit?.title} 
                                  className="w-full h-full"
                                />
                              </div>
                              
                              <span className="text-[12px] sm:text-[13px] md:text-[16px] lg:text-[20px] xl:text-[16px] font-semibold leading-md text-text-primary font-bold">
                                {benefit?.title}
                              </span>
                            </div>
                            
                            <p className="text-[9px] sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] ">
                              {benefit?.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Everyone Wins Section */}
              <EveryoneWins/>

              {/* Proven Results Section */}
             <section className="w-full">
                  <div className="bg-secondary-background rounded-[32px] sm:rounded-full
                    p-[16px] sm:p-[22px] md:p-[28px] lg:p-[32px] xl:p-[38px]
                    mx-4 sm:mx-6 md:mx-8 lg:mx-auto
                    max-w-[1334px] mt-6 sm:mt-8 lg:mt-10">

                    {/* TOP SECTION */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">

                      {/* LEFT TEXT */}
                      <div className="w-full lg:w-[65%] sm:mx-4 md:mx-6 lg:mx-10 xl:mx-14">
                        <span className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px]
                          font-semibold text-primary-background">
                          Proven
                        </span>

                        <div className="relative mt-3">
                          <span className="absolute inset-x-0 bottom-1 h-10 sm:h-12
                            bg-accent-lightest-green rounded-xl -z-10"></span>

                          <h2 className="text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px]
                            font-medium text-text-primary">
                            The numbers speak
                          </h2>
                        </div>

                        <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-4">
                          Real results from platforms built on this foundation.
                        </p>
                      </div>

                      {/* RIGHT CARD – RESTAURANTS */}
                      <div className="w-full lg:w-[35%]">
                        <div className="relative bg-accent-lightest-green rounded-3xl
                          h-[180px] sm:h-[210px] lg:h-[230px] p-5">

                         {/*  <img
                            src="/images2/features/img_seamless_tile_b.png"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                            alt=""
                          />
 */}
                          <div className="relative z-10 text-center bg-[#E4FFD4] rounded-md p-4">
                            <p className="text-[32px] sm:text-[24px] md:text-[28px] xl:text-[30px] font-bold">
                              5000+
                            </p>
                            <p className="text-sm sm:text-base">
                              Restaurants onboarded
                            </p>

                            <p className="text-xs sm:text-sm mt-3">
                              Vendors trust the platform to reach new customers daily.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

                      {/* ORDERS */}
                      <div
                        className="rounded-3xl bg-black text-white p-6 mx-0  lg:mx-12 md:mx-8 xl:mx-16"
                        style={{ backgroundImage: `url(/images/img_group_599.png)` }}
                      >
                        <p className="text-[22px] sm:text-[26px] font-semibold">
                          2M+ Orders processed
                        </p>
                        <p className="mt-2 text-sm sm:text-base">
                          Millions of meals delivered through systems like this one.
                        </p>
                      </div>

                      {/* DELIVERY */}
                      <div
                        className="rounded-3xl bg-primary-background p-6 mx-0  lg:mx-12 md:mx-8 xl:mx-12"
                        style={{ backgroundImage: `url(/images2/features/img_group_599_231x297.png)` }}
                      >
                        <p className="text-[22px] sm:text-[26px] font-semibold ">
                          28min Average delivery time
                        </p>
                        <p className="mt-2 text-sm sm:text-base">
                          Fast enough to keep food hot and customers happy.
                        </p>
                      </div>

                    </div>
                  </div>
</section>

            </div>
          </div>
        </header>

        {/* Testimonial Section */}

            <TestimonialsSection/>

        {/* Contact Form Section */}
      
           <WhyChooseSection/>

         {/* FAQ Section */}
 
            <FAQ/>

        
        {/* Footer Section */}
              
            <FooterSection /> 
     
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

export default Home;





















