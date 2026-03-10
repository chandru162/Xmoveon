import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import FooterSection from '../LandingPage/FooterSection';
import ControlSection from './ControlSection';
import TestimonialsSection from '../LandingPage/TestimonialsSection';
import WhyChooseSection from '../LandingPage/WhyChooseSection';
import FAQ from '../LandingPage/FAQ';
import EveryoneWins from '../LandingPage/EveryOne';
import ScaleSuccessSection from '../LandingPage/ScaleSuccessSection';
import Technology from './Technology';
import DemoPopup from '../LandingPage/DemoPopup';
  import {
  FlutterIcon,
  NextjsIcon,
  ReactIcon,
  NodejsIcon,
  SqlIcon,
  PrismaIcon,
  
} from '../../svg/toolsSvgIcons';


import {
  LocalisationIcon,
  OrbitIcon,
  DocumentArrowIcon,
  HistoryIcon,
  MobileCheckIcon,
  ClockBoxIcon,
  StaredIcon ,
  UserIcon ,
  MapHeartIcon ,
  BookmarkIcon, 
  BoxIcon,
  ClockingIcon,
  CubeNetworkIcon ,
  SearchSettingsIcon ,
  DeliveryBoxIcon,
  LinkIcon ,
  StoredIcon ,
  ApprovalIcon,
  MenuIcon,
  AddDocumentIcon,
  StoreIcon,
  BalanceIcon,
  StorefulIcon,
  BookmarkedIcon,
  ClockedIcon,
  MarkStoredIcon ,
  MarkStorefulIcon ,
  MarkLinkIcon
} from "../../svg/svgIcons"
import Proven from './Proven';
import Icon from './Icon';
import WhySection from '../ExtraPage/WhySection';
import Testi from '../ExtraPage/Testi';



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

  /* const techStackItems = [
    { name: 'Flutter', icon: '/images2/features/img_logos_flutter_original.png' },
    { name: 'Next.js', icon: '/images2/features/img_vector.svg' },
    { name: 'React.js', icon: '/images2/features/img_logos_react_original.svg' },
    { name: 'Node.js', icon: '/images2/features/img_logos_nodejs_original.svg' },
    { name: 'SQL', icon: '/images2/features/img_sql_1.png' },
    { name: 'Kotlin', icon: '/images2/features/img_vector_deep_purple_400.svg' }
  ]; */

  
    const benefits = [
      { icon: "/images/img_hearts.svg", title: "One-time purchase, lifetime ownership" },
      { icon: "/images/img_brand_airtable.svg", title: "White-label & customizable" },
      { icon: "/images/img_camera_selfie.svg", title: "Self-hosted" },
      { icon: "/images/img_frame_19_light_green_700_54x54.svg", title: "Built for service marketplaces" },
      { icon: "/images/img_frame_19_62x62.svg", title: "Scalable & flexible architecture" },
      { icon: "/images/img_frame_19_54x54.svg", title: "No vendor lock-in" },
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
      icon: <BookmarkIcon/>,
      title: 'Browse and order',
      description: 'Explore menus from dozens of restaurants in seconds.',
      bgColor: 'bg-[#E4FFD4]'
    },
    {
      icon: <MapHeartIcon/>,
      title: 'Live order tracking',
      description: 'Watch your meal move from kitchen to doorstep in real time.',
      isActive: false
    },
    {
      icon: <UserIcon/>,
      title: 'Secure payments',
      description: 'Cards, wallets, and cash handled safely every transaction.',
      isActive: false
    },
    {
      icon: <StaredIcon/>,
      title: 'Rate and review',
      description: 'Rate and review',
      isActive: false
    }
  ];

  const driverFeatures = [
    {
      icon: <CubeNetworkIcon/>,
      title: 'Smart Routing',
      description: 'Optimized routes that reduce travel time and fuel costs for faster deliveries.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: <SearchSettingsIcon/>,
      title: 'Earnings Transparency',
      description: 'Clear visibility into trip earnings, incentives, and daily income in real time.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: <ClockedIcon />,
      title: 'Flexible Availability',
      description: 'Drivers can go online or offline anytime and work on their own schedule.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: <BookmarkedIcon/>,
      title: 'Easy Navigation & Tracking',
      description: 'Built-in maps and live tracking for smooth pickups, drop-offs, and deliveries.',
      bgColor: 'bg-background-gray'
    }
  ];

  const vendorFeatures = [
    {
      icon: <MenuIcon/>,
      title: 'Menus',
      description: 'Update items, prices, and availability instantly across the platform.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: <BalanceIcon/>,
      title: 'Orders',
      description: 'Manage incoming orders smoothly, even during peak hours.',
      bgColor: 'bg-background-gray'
    },
    {
      icon: <StoredIcon/>,
      title: 'Sales',
      description: 'Understand performance and identify best-selling items.',
      bgColor: 'bg-background-gray'
    },
    {
      icon:<LinkIcon/>,
      title: 'Promotions & Visibility',
      description: 'Boost reach with offers and featured listings.',
      bgColor: 'bg-background-gray'
    }
  ];

  const platformBenefits = [
    {
      icon: <ApprovalIcon/>,
      title: 'Customers get what they want',
      description: 'Search by cuisine, distance, or rating.\nOrder in seconds flat.',
      bgColor: 'bg-accent-light-green'
    },
    {
      icon: <MarkStoredIcon/>,
      title: 'Restaurants keep their independence',
      description: 'They control menus, pricing, and how they operate day to day.',
      bgColor: 'bg-accent-pale-green'
    },
    {
      icon: <MarkLinkIcon/>,
      title: 'You build the business that connects them',
      description: 'One dashboard runs the whole operation and generates your revenue',
      bgColor: 'bg-accent-pale-green'
    },
    {
      icon: <MarkStorefulIcon/>,
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
            icon: <LocalisationIcon />,
            title: "Localisation",
            description:
              "Multi-language and multi-currency support with regional settings.",
          },
          {
            icon: <OrbitIcon />,
            title: "Blazing Fast",
            description:
              "Built with latest technology for lightning fast loading times.",
          },
          {
            icon: <DocumentArrowIcon />,
            title: "Source Code",
            description:
              "Full source code ownership with complete customization freedom.",
          },
          {
            icon: <HistoryIcon />,
            title: "99.9% Uptime",
            description:
              "Enterprise-grade infrastructure ensures your app is always available.",
          },
          {
            icon: <MobileCheckIcon />,
            title: "Fully Customizable",
            description:
              "Intuitive drag-and-drop configuration without coding knowledge.",
          },
          {
            icon: <ClockBoxIcon />,
            title: "Support ",
            description:
              "Includes setup and deployment. Optional maintenance and enhancements.",
          },
 
    
   ];

     const [showDemo, setShowDemo] = useState(false);
  

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
                  <div className="flex flex-col justify-start items-center w-full px-4 sm:px-6 lg:px-8">

                    {/* Hero Section */}
                   <section className="w-full bg-white overflow-hidden  font-poppins">
                      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-4">

                        <div className="py-0 sm:py-4 lg:py-8">

                          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                            {/* LEFT CONTENT */}
                            <div className="w-full lg:w-[48%] text-center lg:text-left mt-6">

                              <h3
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
                                The Complete{" "}

                                <span className="inline-block bg-[#E4FFD4] rounded-md">
                                  White-Label customers
                                </span>

                                {" "}

                                <span className="inline-block bg-[#E4FFD4] rounded-md">
                                  instantly Solution
                                </span>

                              </h3>

                              <p className="mt-8 xl:mt-10 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                                Build your multi-vendor food delivery platform with our proven
                                solution. Restaurants gain exposure, drivers earn commissions,
                                and you control the entire ecosystem from one powerful admin
                                panel.
                              </p>

                              <div className="mt-6 lg:mt-10 xl:mt-12 flex justify-center lg:justify-start">

                                <Button
                                  text="Try Our Demo"
                                  text_font_size="16px"
                                  text_font_weight="600"
                                  text_color="#0f0f0f"
                                  fill_background_color="#9cee69"
                                  border_border_radius="32px"
                                  padding="14px 28px"
                                  onClick={() => {
                                    console.log("Try Demo clicked");
                                    setShowDemo(true);
                                  }}
                                />

                              </div>

                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">

                              <div
                                className="
                                  w-full
                                  max-w-[560px]
                                  sm:max-w-[520px]
                                  md:max-w-[680px]
                                  lg:max-w-[920px]
                                  xl:max-w-[1000px]
                                "
                              >

                                <img
                                  src="/assets/Restaurentimage.webp"
                                  alt="App Preview"
                                  className="
                                    w-[380px]
                                    h-[290px]
                                    md:w-[660px]
                                    md:h-[440px]
                                    lg:w-[480px]
                                    lg:h-[380px]
                                    xl:w-[700px]
                                    xl:h-[500px]
                                    object-cover
                                  "
                                />

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                    </section>
                  </div>
                </div>
              {/* Technology Stack Section */}
           <Technology
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
            /> <br />

            <Icon/>

              {/* Built for Scale Section */}
             <section className="w-full bg-white py-16  font-poppins">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">

                  {/* MAIN GRID */}
                  <div className="grid lg:grid-cols-2 gap-16 items-center md:text-center lg:text-left">

                    {/* LEFT SIDE */}
                    <div>

                      {/* Heading */}
                      <h3
                        className="
                          sm:text-[32px]
                          md:text-[40px]
                          lg:text-[48px]
                          xl:text-[52px]
                          font-semibold
                          leading-[1.15]
                        "
                      >
                        Built for Scale, <br />

                        <span className="bg-[#E4FFD4] rounded-md">
                          Designed for
                        </span>{" "}
                        <br />

                        <span className="bg-[#E4FFD4] rounded-md">
                          Success
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="mt-4 max-w-md text-[16px] md:mx-24 lg:mx-0">
                        Everything you need to launch, manage, and grow your on-demand
                        service business.
                      </p>

                      {/* Image */}
                      <img
                        src="/assets/Scaleimage.webp"
                        alt="Platform Dashboard"
                        className="
                          mt-10
                          w-full
                          max-w-[320px]
                          sm:max-w-[320px]
                          md:max-w-[660px]
                          lg:max-w-[420px]
                          xl:max-w-[520px]
                          rounded-[20px]
                          md:mx-4
                          lg:mx-0
                        "
                      />

                    </div>

                    {/* RIGHT SIDE FEATURES */}
                    <div className="grid sm:grid-cols-2 gap-6">

                      {services.map((service, index) => (
                        <div
                          key={index}
                          className="bg-[#F5F5F5] rounded-[20px] p-6 hover:shadow-md transition"
                        >

                          <div className="flex items-center gap-2">

                            <div className="flex items-center gap-2  w-10 h-10">

                              <div className="text-[#56E000] rounded-[10px] bg-[#E4FFD4]">
                                {service.icon}
                              </div>

                            </div>

                            <h4 className="text-base sm:text-[22px] font-semibold text-black">
                              {service.title}
                            </h4>

                          </div>

                          <p className="text-[14px] text-gray-500 leading-relaxed">
                            {service.description}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>
                </div>
              </section>
              {/* Customer Experience Section */}
           <section className="w-full bg-white  font-poppins">
              <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">

                <div
                  className="
                    bg-secondary-background
                    rounded-[24px]
                    sm:rounded-[32px]
                    lg:rounded-[44px]
                    px-4 py-5
                    sm:px-6 sm:py-6
                    lg:px-2 lg:py-0
                    mt-8
                  "
                  style={{ backgroundImage: `url(/images2/features/img_background.svg)` }}
                >

                  <div className="flex flex-col gap-8 lg:gap-12">

                    {/* MAIN ROW */}
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

                      {/* LEFT CONTENT */}
                      <div className="w-full lg:w-[40%] flex flex-col gap-5">

                        <span className="text-[22px] sm:text-[28px] lg:text-[40px] font-semibold text-primary-background text-center lg:text-left mx-2">
                          Customers
                        </span>

                        {/* HIGHLIGHT FEATURE */}
                        <div className="bg-[#F4F4F480] rounded-[18px] p-4">

                          <div className="flex items-center gap-2">

                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                              <div className="bg-[#E4FFD4] rounded-[10px]">
                                <BookmarkIcon />
                              </div>
                            </div>

                            <h4 className="text-base sm:text-[22px] font-semibold">
                              Browse and order
                            </h4>

                          </div>

                          <p className="text-sm sm:text-[16px] text-[#5f5f5f] mt-2">
                            Explore menus from dozens of restaurants in seconds.
                          </p>

                        </div>

                        {/* OTHER FEATURES */}
                        <div className="flex flex-col gap-4">

                          {customerFeatures.slice(1).map((feature, index) => (
                            <div
                              key={index}
                              className="bg-[#F4F4F480] rounded-[18px] p-4"
                            >

                              <div className="flex items-center gap-2">

                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                  <div className="bg-[#E4FFD4] rounded-[10px]">
                                    {feature.icon}
                                  </div>
                                </div>

                                <h4 className="text-base sm:text-[22px] font-semibold">
                                  {feature.title}
                                </h4>

                              </div>

                              <p className="text-sm sm:text-[16px] text-[#5f5f5f] mt-2">
                                {feature.description}
                              </p>

                            </div>
                          ))}

                        </div>

                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">

                        <div
                          className="
                            w-full
                            max-w-[360px]
                            sm:max-w-[360px]
                            md:max-w-[420px]
                            lg:max-w-[750px]
                            xl:max-w-[600px]
                            mt-4
                            lg:mt-12
                          "
                        >

                          <img
                            src="/assets/Browserimage.webp"
                            alt="Customer Experience"
                            className="
                              w-full
                              h-full
                              md:w-[700px]
                              md:h-[340px]
                              lg:h-[440px]
                              xl:h-[440px]
                              lg:max-w-[500px]
                              xl:max-w-[560px]
                              rounded-[22px]
                              object-cover
                              xl:mt-16
                              lg:mt-12
                            "
                          />

                        </div>

                      </div>

                    </div>

                    {/* BOTTOM BAR */}
                    <div className="flex items-center justify-between border-t border-border-secondary pt-4 w-full lg:w-[45%]">

                      <button className="px-4 py-2 text-xs border rounded-lg">
                        1 / 4
                      </button>

                      <div className="mt-0 flex items-center justify-center lg:justify-start gap-4 mx-0 lg:mx-4">

                        <Button
                          text="Discover"
                          text_font_size="16px"
                          text_font_weight="600"
                          text_color="#fff"
                          fill_background_color="#0f0f0f"
                          border_border_radius="32px"
                          padding="14px 28px"
                          onClick={() => {
                            console.log("Try Demo clicked");
                            setShowDemo(true);
                          }}
                        />

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </section>

              {/* Driver Tools Section */}
             <section className="w-full bg-white  font-poppins">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">

                  <div
                    className="
                      bg-secondary-background
                      rounded-[24px]
                      sm:rounded-[32px]
                      lg:rounded-[44px]
                      px-4 py-5
                      sm:px-6 sm:py-6
                      lg:px-10 lg:py-10
                      mt-10
                    "
                  >

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

                      {/* LEFT SIDE */}
                      <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <h3
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
                          Tools that help <br />

                          <span
                            className="
                              inline-block
                              bg-[#E4FFD4]
                              rounded-md
                              whitespace-nowrap
                              px-1
                            "
                          >
                            them earn more
                          </span>

                        </h3>

                        <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0 px-1">
                          Drivers get smart routing that saves time and fuel. They see
                          earnings clearly and manage their schedule on their own terms.
                        </p>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 mx-0 lg:mx-4">

                          <Button
                            text="Learn"
                            text_font_size="16px"
                            text_font_weight="600"
                            text_color="#fff"
                            fill_background_color="#0f0f0f"
                            border_border_radius="32px"
                            padding="14px 28px"
                            onClick={() => {
                              console.log("Try Demo clicked");
                              setShowDemo(true);
                            }}
                          />

                          <img
                            src="/images2/features/img_group_1000001743.svg"
                            alt="arrow"
                            className="w-[52px] sm:w-[68px]"
                          />

                        </div>

                        <img
                          src="/assets/Scaleimage.webp"
                          alt="Platform Dashboard"
                          className="
                            mt-4
                            w-full
                            max-w-[320px]
                            sm:max-w-[320px]
                            md:max-w-[660px]
                            lg:max-w-[420px]
                            xl:max-w-[520px]
                            rounded-[20px]
                            mx-auto
                            lg:mx-0
                          "
                        />

                      </div>

                      {/* RIGHT SIDE */}
                      <div className="w-full lg:w-1/2 flex flex-col gap-6">

                        <span className="text-[22px] sm:text-[28px] lg:text-[40px] font-semibold text-primary-background text-center lg:text-left">
                          Drivers
                        </span>

                        <div className="flex flex-col gap-4">

                          {driverFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="
                                bg-[#F4F4F480]
                                rounded-[20px]
                                p-4
                                sm:p-5
                                hover:shadow-md
                                transition
                              "
                            >

                              <div className="flex items-center gap-2">

                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">

                                  <div className="bg-[#E4FFD4] rounded-[10px]">
                                    {feature.icon}
                                  </div>

                                </div>

                                <h4 className="text-base sm:text-[22px] font-semibold">
                                  {feature.title}
                                </h4>

                              </div>

                              <p className="text-sm sm:text-[16px] text-[#5f5f5f] mt-2">
                                {feature.description}
                              </p>

                            </div>
                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              </section>

              {/* Vendor Section */}
            <section className="w-full bg-white  font-poppins">
              <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-0">

                <div
                  className="
                    bg-secondary-background
                    rounded-[24px]
                    sm:rounded-[32px]
                    lg:rounded-[44px]
                    px-4 py-5
                    sm:px-6 sm:py-6
                    lg:px-10 lg:py-10
                    mt-10
                  "
                >

                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">

                      <span className="text-[22px] sm:text-[28px] lg:text-[40px] font-semibold text-primary-background text-center lg:text-left mt-0 lg:mt-24">
                        Vendors
                      </span>

                      <p className="mt-4 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                        Drivers get smart routing that saves time and fuel. They see
                        earnings clearly and manage their schedule on their own terms.
                      </p>

                      <div className="mt-8 flex flex-col gap-4 w-full max-w-lg mx-auto lg:mx-0">

                        {vendorFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="
                              bg-[#F4F4F480]
                              rounded-[16px]
                              p-4 sm:p-5
                            "
                          >

                            <div className="flex items-center gap-2">

                              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">

                                <div className="bg-[#E4FFD4] rounded-[10px]">
                                  {feature.icon}
                                </div>

                              </div>

                              <h4 className="text-base sm:text-[22px] font-semibold ">
                                {feature.title}
                              </h4>

                            </div>

                            <p className="text-sm sm:text-[16px] text-[#5f5f5f] mt-2">
                              {feature.description}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left mt-12">

                      <h3
                        className="
                          text-[26px]
                          sm:text-[32px]
                          md:text-[40px]
                          lg:text-[48px]
                          xl:text-[52px]
                          font-semibold
                          leading-[1.15]
                          text-text-primary
                        "
                      >
                        Your restaurant grows<br />

                        <span
                          className="
                            inline-block
                            bg-[#E4FFD4]
                            rounded-md
                            whitespace-nowrap
                          "
                        >
                          on this platform
                        </span>

                      </h3>

                      {/* IMAGE */}
                      <div className="flex justify-center lg:justify-start mt-2 lg:mt-12">

                        <div
                          className="
                            w-full
                            max-w-[320px]
                            sm:max-w-[500px]
                            md:max-w-[600px]
                            lg:max-w-[520px]
                            xl:max-w-[620px]
                            mt-12
                          "
                        >

                          <img
                            src="/assets/Platformimage.webp"
                            alt="Driver Experience"
                            className="
                              w-[400px]
                              h-[350px]
                              md:w-[650px]
                              md:h-[500px]
                              lg:w-[380px]
                              lg:h-[400px]
                              xl:w-[500px]
                              xl:h-[600px]
                              mt-5
                              xl:mt-12
                              mx-0
                              md:mx-8
                              lg:mx-0
                              rounded-[17px]
                              object-cover
                            "
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </section>

              {/* Admin Control Section */}
              <ControlSection />
              {/* Platform Benefits Section */}
              <section className="w-full  font-poppins">
                  <div
                    className="
                      bg-secondary-background
                      rounded-[28px]
                      sm:rounded-[32px]
                      lg:rounded-[40px]
                      w-full
                      max-w-[1440px]
                      mx-auto
                      px-3 sm:px-6 lg:px-8 xl:px-8
                      py-6 sm:py-8 lg:py-8
                      mt-12 sm:mt-16 lg:mt-20
                    "
                  >

                    {/* HEADING */}
                    <h3
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
                      The Platform That Powers <br />

                      <span
                        className="
                          inline-block
                          bg-[#E4FFD4]
                          rounded-md
                          whitespace-nowrap
                        "
                      >
                        Your Marketplace
                      </span>{" "}
                      <br />

                    </h3>

                    {/* GRID */}
                    <div
                      className="
                        mt-8 sm:mt-10 lg:mt-14
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-5
                        sm:gap-6
                        lg:gap-8
                        max-w-[1060px]
                        mx-auto
                      "
                    >

                      {platformBenefits?.map((benefit, index) => (
                        <div
                          key={index}
                          className={`
                            ${index === 1 || index === 2 ? "bg-[#EBFCE1]" : "bg-[#E9FFD9]"}
                            rounded-[20px]
                            p-5 sm:p-6 lg:p-8
                            flex flex-col
                            gap-4
                            hover:shadow-md
                            transition
                            cursor-pointer
                          `}
                        >

                          {/* ICON */}
                          <div className="flex items-center gap-2">

                            <div className="w-10 h-10 flex items-center justify-center bg-[#E4FFD4] rounded-[10px]">
                              {benefit.icon}
                            </div>

                          </div>

                          {/* TITLE */}
                          <h4 className="text-base sm:text-[22px] font-semibold text-black">
                            {benefit.title}
                          </h4>

                          {/* DESCRIPTION */}
                          <p className="text-sm sm:text-[16px] text-[#5f5f5f] leading-relaxed">
                            {benefit.description}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>
                </section>

              {/* Why Everyone Wins Section */}
              <EveryoneWins />

            </div>
          </div>
        </header>

        {/* Why Chooose Section */}

       <WhySection/>

        {/* FAQ Section */}

        <FAQ />


        {/* Testimonial Section */}

        <Testi />

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

export default Home;





















