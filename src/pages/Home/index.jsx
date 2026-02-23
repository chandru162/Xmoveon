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
          <div className=" max-w-[1440px] md:max-w-[1200px] lg:max-w-[1450px] xl:max-w-[1600px]  px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full gap-[23px] sm:gap-[28px] md:gap-[35px] lg:gap-[40px] xl:gap-[46px]">
              {/* Navigation */}

              <div className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col justify-start items-center w-full px-[10px] sm:px-[14px] md:px-[22px] lg:px-[26px] xl:px-[28px]">
                  {/* Hero Section */}
                <section className="w-full bg-secondary-background">
  <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 xl:px-20">

    <div className="
      rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
      bg-secondary-background
      px-4 py-6
      sm:px-6 sm:py-8
      lg:px-12 lg:py-12
    ">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[48%]">
          <h1 className="
            text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
            font-medium text-text-primary leading-[1.15]
          ">
            Connect <br />
            <span className="bg-[#E4FFD4] px-1">restaurants and</span> <br />
            customers <br />
            instantly
          </h1>

          <p className="
            mt-4
            text-sm sm:text-base
            text-text-secondary
            max-w-[520px]
          ">
            Build your multi-vendor food delivery platform with our proven solution.
            Restaurants gain exposure, drivers earn commissions, and you control the
            entire ecosystem from one powerful admin panel.
          </p>

          <div className="mt-6">
            <Button
              text="Try Our Demo"
              text_font_size="16px"
              text_font_weight="600"
              text_color="#0f0f0f"
              fill_background_color="#9cee69"
              border_border_radius="999px"
              padding="14px 28px"
              text_align="center"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
          <div className="
            relative
            w-full
            max-w-[360px]
            sm:max-w-[420px]
            md:max-w-[460px]
            lg:max-w-[520px]
          ">
            <img
              src="/public/assets/android.jpg"
              alt="Platform Illustration"
              className="
                w-full
                rounded-[24px] lg:rounded-[28px]
                object-cover
              "
            />

            {/* OPTIONAL PILL BUTTON LIKE IMAGE */}
            <button
              className="
                absolute bottom-4 right-4
                bg-[#9cee69]
                text-black
                text-sm font-medium
                px-4 py-2
                rounded-full
              "
            >
              Request demo
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
                </div>
              </div>
              {/* Technology Stack Section */}
           <section className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">

                  <div
                    className="
                      bg-secondary-background
                      rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
                      px-4 py-5
                      sm:px-6 sm:py-6
                      lg:px-12 lg:py-8
                    "
                  >
                    <div
                      className="
                        flex flex-wrap
                        justify-center
                        lg:justify-between
                        items-center
                        gap-x-6 gap-y-4
                        sm:gap-x-8
                        lg:gap-x-12
                        xl:gap-x-16
                      "
                    >

                      {/* Flutter */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_vector.svg"
                          alt="Flutter"
                          className="w-5 sm:w-6 lg:w-7 xl:w-8"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          Flutter
                        </span>
                      </div>

                      {/* Next.js */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_vector.svg"
                          alt="Next.js"
                          className="w-5 sm:w-6 lg:w-7 xl:w-8"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          Next.js
                        </span>
                      </div>

                      {/* React.js */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_logos_react_original.svg"
                          alt="React.js"
                          className="w-5 sm:w-6 lg:w-7 xl:w-9"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          React.js
                        </span>
                      </div>

                      {/* Node.js */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_logos_nodejs_original.svg"
                          alt="Node.js"
                          className="w-5 sm:w-6 lg:w-7 xl:w-9"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          Node.js
                        </span>
                      </div>

                      {/* SQL */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_vector.svg"
                          alt="SQL"
                          className="w-5 sm:w-6 lg:w-7 xl:w-9"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          SQL
                        </span>
                      </div>

                      {/* Kotlin */}
                      <div className="flex items-center gap-3">
                        <img
                          src="/images2/features/img_vector_deep_purple_400.svg"
                          alt="Kotlin"
                          className="w-5 sm:w-6 lg:w-7 xl:w-9"
                        />
                        <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                          Kotlin
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
           </section>


              {/* Built for Scale Section */}
                  <ScaleSuccessSection/>

              {/* Customer Experience Section */}
             <section className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">

                  <div
                    className="
                      bg-secondary-background
                      rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
                      px-4 py-5
                      sm:px-6 sm:py-6
                      lg:px-10 lg:py-10
                      mt-8
                    "
                    style={{ backgroundImage: `url(/images2/features/img_background.svg)` }}
                  >
                    <div className="flex flex-col gap-8 lg:gap-12">

                      {/* MAIN ROW */}
                      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-[45%] flex flex-col gap-5">

                          {/* FIRST FEATURE – highlighted */}
                          <div className="bg-[#F4F4F480] rounded-[18px] p-4">
                            <div className="flex items-center gap-3">
                              <img
                                src="/images2/features/img_album.svg"
                                alt="Browse and order"
                                className="w-5 h-5"
                              />
                              <h4 className="text-base sm:text-lg font-semibold">
                                Browse and order
                              </h4>
                            </div>
                            <p className="text-sm sm:text-base mt-2 text-text-secondary">
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
                                <div className="flex items-center gap-3">
                                  <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-5 h-5"
                                  />
                                  <h4 className="text-base sm:text-lg font-semibold">
                                    {feature.title}
                                  </h4>
                                </div>
                                <p className="text-sm sm:text-base mt-2 text-text-secondary">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                          <img
                            src="/public/assets/people.jpg"
                            alt="Customer Experience"
                            className="
                              w-full
                              max-w-[320px]
                              sm:max-w-[420px]
                              lg:max-w-[480px]
                              xl:max-w-[540px]
                              rounded-[22px]
                              object-cover
                            "
                          />
                        </div>
                      </div>

                      {/* BOTTOM BAR */}
                      <div className="flex justify-between items-center border-t border-border-secondary pt-4 w-full lg:w-[45%]">
                        <button className="px-4 py-2 text-xs border rounded-lg">
                          1 / 4
                        </button>

                        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg text-xs">
                          Discover
                          <img
                            src="/images2/features/img_iconoirarrowtr_white_a700.svg"
                            alt="Arrow"
                            className="w-4 h-4"
                          />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </section>


              {/* Driver Tools Section */}
             <section className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">

                  <div
                    className="
                      bg-secondary-background
                      rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
                      px-4 py-5
                      sm:px-6 sm:py-6
                      lg:px-10 lg:py-10
                      mt-10
                    "
                  >
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                      {/* LEFT SIDE */}
                      <div className="w-full lg:w-[50%] flex flex-col gap-6">

                        {/* HEADING */}
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[48px] font-medium leading-tight">
                          Tools that help <br />
                          <span className="bg-[#E4FFD4] px-1">them earn more</span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-sm sm:text-base text-text-secondary max-w-lg">
                          Drivers get smart routing that saves time and fuel. They see earnings clearly and manage their schedule on their own terms.
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-4">
                          <Button
                            text="Learn"
                            text_font_size="text-xs"
                            text_font_weight="font-medium"
                            text_color="#fff"
                            fill_background_color="#0f0f0f"
                            border_border_radius="rounded-lg"
                            padding="px-4 py-2"
                          />
                          <img
                            src="/images2/features/img_group_1000001743.svg"
                            alt="Driver Earnings"
                            className="h-8"
                          />
                        </div>

                        {/* IMAGE */}
                        <img
                          src="/public/assets/car.jpg"
                          alt="Driver Dashboard"
                          className="
                            w-full
                            max-w-[340px]
                            sm:max-w-[420px]
                            lg:max-w-[460px]
                            rounded-[22px]
                            object-cover
                            mt-4
                          "
                        />
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="w-full lg:w-[50%] flex flex-col gap-6">

                        <span className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold text-primary-background">
                          Drivers
                        </span>

                        <div className="flex flex-col gap-4">
                          {driverFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="
                                bg-[#F4F4F480]
                                rounded-[20px]
                                p-4 sm:p-5
                              "
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={feature.icon}
                                  alt={feature.title}
                                  className="w-5 h-5"
                                />
                                <h4 className="text-base sm:text-lg font-semibold">
                                  {feature.title}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-text-secondary mt-2">
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
             <section className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">

                  <div
                    className="
                      bg-secondary-background
                      rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]
                      px-4 py-5
                      sm:px-6 sm:py-6
                      lg:px-10 lg:py-10
                      mt-12
                    "
                  >
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                      {/* LEFT SIDE */}
                      <div className="w-full lg:w-[50%] flex flex-col gap-6">

                        {/* HEADING */}
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[48px] font-medium leading-tight">
                          Your restaurant grows <br />
                          <span className="bg-[#E4FFD4] px-1">on this platform</span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-sm sm:text-base text-text-secondary max-w-lg">
                          Restaurants can manage menus, handle orders, and reach more customers without building their own app. Built-in insights help them grow faster.
                        </p>

                        {/* IMAGE */}
                        <img
                          src="/public/assets/restarunt.jpg"
                          alt="Restaurant Dashboard"
                          className="
                            w-full
                            max-w-[360px]
                            sm:max-w-[440px]
                            lg:max-w-[520px]
                            rounded-[22px]
                            object-cover
                            mt-4
                          "
                        />
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="w-full lg:w-[50%] flex flex-col gap-6">

                        <span className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold text-primary-background">
                          Vendors
                        </span>

                        <div className="flex flex-col gap-4">
                          {vendorFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="
                                bg-[#F4F4F480]
                                rounded-[20px]
                                p-4 sm:p-5
                              "
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={feature.icon}
                                  alt={feature.title}
                                  className="w-5 h-5"
                                />
                                <h4 className="text-base sm:text-lg font-semibold">
                                  {feature.title}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-text-secondary mt-2">
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

              {/* Admin Control Section */}
                            <ControlSection/>
              {/* Platform Benefits Section */}
           <section className="w-full">
                <div
                  className="
                    bg-secondary-background
                    rounded-[36px]
                    w-full max-w-[1400px]
                    mx-auto
                    px-4 sm:px-6 lg:px-12
                    py-10 sm:py-14 lg:py-20
                    mt-14 sm:mt-20
                  "
                >
                  {/* Heading */}
                  <h2
                    className="
                      text-[26px] sm:text-[32px] lg:text-[48px]
                      font-medium leading-tight
                      text-text-primary
                      max-w-3xl
                      mb-10 sm:mb-14
                    "
                  >
                    The Platform That Powers <br />
                    Your Marketplace
                  </h2>

                  {/* Cards Grid */}
                  <div
                    className="
                      grid grid-cols-1 sm:grid-cols-2
                      gap-5 sm:gap-6 lg:gap-8
                    "
                  >
                    {platformBenefits?.map((benefit, index) => (
                      <div
                        key={index}
                        className="
                          bg-[#E9FFD9]
                          rounded-[22px]
                          p-5 sm:p-6 lg:p-8
                          flex flex-col
                          gap-4
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            w-10 h-10
                            bg-white
                            rounded-md
                            flex items-center justify-center
                          "
                        >
                          <img
                            src={benefit.icon}
                            alt={benefit.title}
                            className="w-5 h-5"
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            text-[15px] sm:text-[17px] lg:text-[20px]
                            font-semibold
                            text-text-primary
                          "
                        >
                          {benefit.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            text-[13px] sm:text-[14px] lg:text-[16px]
                            text-text-secondary
                            leading-relaxed
                          "
                        >
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Everyone Wins Section */}
              <EveryoneWins/>

              {/* Proven Results Section */}
            <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

                  <div className="bg-secondary-background rounded-[28px] sm:rounded-[40px]
                    p-5 sm:p-8 lg:p-12">

                    {/* TOP */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                      {/* LEFT TEXT */}
                      <div className="flex-1">
                        <span className="text-[22px] sm:text-[26px] lg:text-[36px] font-semibold text-primary-background">
                          Proven
                        </span>

                        <h2 className="mt-2 text-[26px] sm:text-[32px] lg:text-[48px] font-medium leading-tight">
                          The{" "}
                          <span className="bg-[#E4FFD4] px-2 py-1 rounded-md">
                            numbers speak
                          </span>
                        </h2>

                        <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-md">
                          Real results from platforms built on this foundation.
                        </p>
                      </div>

                      {/* RIGHT – 5000+ CARD */}
                      <div className="flex-1 flex lg:justify-end">
                        <div className="bg-[#E4FFD4] rounded-[28px]
                          w-full sm:w-[320px] h-[200px]
                          flex flex-col justify-center items-center text-center px-6">

                          <p className="text-[36px] font-bold">5000+</p>
                          <p className="text-sm sm:text-base font-medium mt-1">
                            Restaurants onboarded
                          </p>
                          <p className="text-xs sm:text-sm mt-3 text-text-secondary">
                            Vendors trust the platform to reach new customers daily.
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

                      {/* ORDERS */}
                      <div
                        className="rounded-[28px] bg-black text-white p-6 sm:p-8"
                        style={{ backgroundImage: `url(/images/img_group_599.png)` }}
                      >
                        <p className="text-[22px] sm:text-[26px] font-semibold">
                          2M+ Orders processed
                        </p>
                        <p className="mt-2 text-sm sm:text-base text-white/80">
                          Millions of meals delivered through systems like this one.
                        </p>
                      </div>

                      {/* DELIVERY */}
                      <div
                        className="rounded-[28px] bg-primary-background p-6 sm:p-8"
                        style={{ backgroundImage: `url(/images2/features/img_group_599_231x297.png)` }}
                      >
                        <p className="text-[22px] sm:text-[26px] font-semibold">
                          28min Average delivery time
                        </p>
                        <p className="mt-2 text-sm sm:text-base text-text-primary/80">
                          Fast enough to keep food hot and customers happy.
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </section>

            </div>
          </div>
        </header>

        {/* Contact Form Section */}
      
           <WhyChooseSection/>

         {/* FAQ Section */}
 
            <FAQ/>

            
        {/* Testimonial Section */}

            <TestimonialsSection/>
       
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





















