"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle, Clock, Users, Sparkles, Star, ShoppingBag, Building, Trendi, HeartngUp, BarChart, FileText, MapPin, Palette, TrendingUp, Heart, Layout, Phone, Flag, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      {/* Hero Section with Enhanced Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image with optimized loading */}
        <div 
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 ease-out" 
          style={{ transform: isLoaded ? 'scale(100%)' : 'scale(105%)' }} 
        />
        
        {/* Overlay with better contrast for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/70 to-brand-blue/85" />
        
        {/* Content container */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div 
            className="max-w-5xl mx-auto text-center transform transition-all duration-800 ease-out opacity-0 translate-y-8"
            style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)' }}
          >
            {/* Decorative icons with reduced animation for better accessibility */}
            <div className="inline-flex items-center justify-center mb-6">
              <Image 
                src="/logo-white.png" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="opacity-90"
              />
            </div>
            
            {/* Heading with improved readability */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] tracking-tight leading-tight">
              مشاوره تخصصی سالن‌های زیبایی
            </h1>
            
            {/* Subheading with better contrast and spacing */}
            <p className="text-lg md:text-xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              راه‌اندازی، مدیریت و اخذ مجوز قانونی برای سالن زیبایی شما
            </p>
            
            {/* CTA button with improved accessibility and visual feedback */}
            <Link 
              href="https://ig.me/m/abcconsulting.co" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-beige transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="همین حالا مشاوره بگیرید - باز شدن در صفحه جدید"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-1">
                همین حالا مشاوره بگیرید
              </span>
              <ArrowLeft className="h-5 w-5 relative z-10 transition-transform group-hover:-translate-x-1" />
            </Link>
            
            {/* Secondary action hint */}
            <div className="mt-8 text-white/80 text-sm animate-bounce">
              <span>برای اطلاعات بیشتر </span>
              <ArrowDown className="h-4 w-4 mx-auto mt-2" />
            </div>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section with Enhanced Hover Effects */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-gray-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue mb-4">آمار و دستاوردهای ما</h2>
            <div className="w-24 h-1 bg-brand-beige mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">با اتکا به تجربه و تخصص، همواره در مسیر ارائه بهترین خدمات به مشتریان خود هستیم</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { icon: Users, number: "+۵۰۰", text: "مشتری راضی", description: "از سراسر کشور" },
              { icon: Award, number: "+۶", text: "سال تجربه", description: "در صنعت زیبایی" },
              { icon: CheckCircle, number: "٪۱۰۰", text: "رضایت مشتریان", description: "با خدمات تضمینی" },
              { icon: Clock, number: "۲۴/۷", text: "پشتیبانی", description: "همیشه در دسترس" }
            ].map((stat, index) => (
              <div key={index} 
                   className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-brand-beige/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-beige/20 rounded-full blur-xl transform scale-75 group-hover:scale-150 transition-transform duration-500" />
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md relative z-10">
                      <stat.icon className="h-10 w-10 text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-brand-blue to-brand-blue-dark bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-700 text-center text-lg font-medium mb-2">{stat.text}</p>
                <p className="text-gray-500 text-center text-sm">{stat.description}</p>
                
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-brand-beige to-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div 
              className="inline-flex items-center gap-2 text-brand-blue font-medium"
            >
              <span>مشاهده خدمات ما</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Image */}
      <section className="py-36 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-6 bg-brand-beige/15 rounded-3xl transform -rotate-6 transition-transform duration-500 hover:rotate-0" />
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/pedro/2.jpg"
                    alt="پدرام"
                    fill
                    className=" object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-2xl">
                  <Star className="h-14 w-14 text-brand-beige" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl font-bold mb-10 text-brand-gradient">
                درباره من
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                سلام، من پدرام هستم. بیش از 6 سال است که در حوزه زیبایی در کشورهای مختلف فعالیت دارم. در این مدت، به مراکز مختلف کمک کرده‌ام تا در زمینه بازاریابی، هدف‌گذاری، طراحی، مدیریت و راه‌اندازی سالن‌های زیبایی به موفقیت برسند.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                سه سال است که در آمریکا فعالیت می‌کنم و در این مدت توانسته‌ام دو برند موفق در زمینه زیبایی در آمریکا راه‌اندازی کنم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Enhanced Gradient */}
      <section className="py-36 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/20 via-transparent to-brand-blue-dark/30 opacity-30 animate-slow-pulse" />
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-brand-beige/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/10 via-transparent to-brand-beige/10" />
        
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-beige/5 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-brand-beige/5 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <div className="text-center max-w-4xl mx-auto backdrop-blur-sm bg-brand-blue-dark/10 p-10 rounded-3xl border border-brand-beige/10 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
            {/* Improved icon presentation */}
            <div className="inline-block p-4 rounded-full bg-brand-blue-light/20 mb-8 backdrop-blur-sm border border-brand-beige/20">
              <Flag className="h-14 w-14 text-brand-beige animate-pulse" />
            </div>
            
            <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-brand-beige via-white to-brand-beige bg-clip-text text-transparent animate-gradient-x">
              هدف ما
            </h2>
            
            {/* Content with improved readability */}
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed text-white">
                هدف ما این است که به هم‌زبانان عزیز و مشتریانمان کمک کنیم تا کسب و کار خود را به صورت قانونی و هدفمند پیش ببرند.
              </p>
              
              <p className="text-xl leading-relaxed text-white/90">
                با توجه به این که بسیاری از سالن‌ها بدون داشتن مجوز مشغول به فعالیت هستند و مدارک کامل ندارند، ما اینجا هستیم تا به آنها کمک کنیم تا به صورت قانونی و حرفه‌ای به کسب و کار خود ادامه دهند.
              </p>
            </div>
            
            {/* Call-to-action button */}
            <div className="mt-10">
              <button className="group relative inline-flex items-center gap-3 bg-brand-beige text-brand-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-beige-light transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(210,181,137,0.3)] hover:shadow-[0_0_25px_rgba(210,181,137,0.5)]">
                <span className="relative z-10 transition-transform group-hover:-translate-x-2">
                  <Link href="https://ig.me/m/abcconsulting.co" target="_blank" rel="noopener noreferrer">
                    بیشتر بدانید
                  </Link>
                </span>
                <ArrowLeft className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-36 bg-white relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-brand-blue animate-gradient-x">
              خدمات ما
            </h2>
            <div className="w-32 h-1.5 bg-brand-beige mx-auto rounded-full" />
          </div>
          
          {/* Salon Setup Service */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold mb-8 text-brand-blue text-center">راه‌اندازی سالن</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              ما به شما کمک می‌کنیم تا فرآیند راه‌اندازی سالن زیبایی‌تان را به صورت سریع و بدون دردسر و به طور کاملاً قانونی انجام دهید.
              خدمات ما شامل موارد زیر است:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "مکان‌یابی",
                  description: "راهنمای پیدا کردن مکان مناسب برای سالن",
                  icon: "MapPin"
                },
                {
                  title: "قراردادها",
                  description: "تنظیم قراردادها و همکاری با برندهای معتبر",
                  icon: "FileText"
                },
                {
                  title: "برندسازی",
                  description: "طراحی و برندسازی سالن زیبایی شما",
                  icon: "Palette"
                },
                {
                  title: "طراحی داخلی",
                  description: "طراحی داخلی و دکوراسیون سالن",
                  icon: "Home"
                },
                {
                  title: "استخدام",
                  description: "استخدام پرسنل ماهر و آموزش آن‌ها",
                  icon: "Users"
                },
                {
                  title: "مدیریت",
                  description: "مدیریت داخلی کسب‌وکار و کنترل کیفیت خدمات",
                  icon: "BarChart"
                },
                {
                  title: "بازاریابی",
                  description: "تهیه محتوای مناسب و بازاریابی مؤثر",
                  icon: "TrendingUp"
                },
                {
                  title: "مدیریت مشتریان",
                  description: "سیستم مدیریت مشتریان و خدمات پس از فروش",
                  icon: "Heart"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-brand-blue/5 hover:to-brand-beige/10 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-beige/20 hover:border-brand-beige/40 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-beige/10 group-hover:bg-brand-beige/20 flex items-center justify-center transition-all duration-300">
                      {service.icon === "MapPin" && <MapPin className="h-8 w-8 text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "FileText" && <FileText size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "Palette" && <Palette size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "Home" && <Layout size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "Users" && <Users size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "BarChart" && <BarChart size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "TrendingUp" && <TrendingUp size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                      {service.icon === "Heart" && <Heart size={32} className="text-brand-blue group-hover:text-brand-blue-dark transition-colors" />}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-brand-blue text-center">{service.title}</h4>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors text-center">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link 
                href="https://ig.me/m/abcconsulting.co" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium inline-flex items-center gap-2"
              >
                مشاوره رایگان راه‌اندازی سالن
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Training Services */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold mb-8 text-brand-blue text-center">آموزش‌های حرفه‌ای</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              دوره‌های تخصصی با مدرسین مجرب و گواهینامه معتبر
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Facial Training Card */}
              <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-beige/5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-[url('/facial-training.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-brand-blue/20 transition-all duration-300"></div>
               
                </div>
                
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-brand-blue">آموزش فیشال تخصصی</h4>
                  <div className="w-16 h-1 bg-brand-beige mb-4 rounded-full"></div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>آموزش با دستگاه‌های پیشرفته و مدرن</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>تمرین عملی روی مدل واقعی</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>اعطای گواهینامه معتبر پایان دوره</span>
                    </li>
                  </ul>
                  
                  <Link 
                    href="https://ig.me/m/abcconsulting.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 text-center bg-brand-blue text-white rounded-xl hover:bg-brand-blue-dark transition-colors duration-300 font-medium"
                  >
                    ثبت‌نام در دوره
                  </Link>
                </div>
              </div>
              
              {/* Manicure/Pedicure Training Card */}
              <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-beige/5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-[url('/manicure-training.jpg')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-brand-blue/20 transition-all duration-300"></div>
                
                </div>
                
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-brand-blue">آموزش منیکور و پدیکور</h4>
                  <div className="w-16 h-1 bg-brand-beige mb-4 rounded-full"></div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>آموزش به سبک روسی (پیشرفته)</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>تکنیک‌های جدید و پرطرفدار بازار</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-beige/20 flex items-center justify-center mr-2">
                        <span className="text-brand-blue text-xs">✓</span>
                      </div>
                      <span>آموزش کار با ابزار تخصصی</span>
                    </li>
                  </ul>
                  <Link 
                    href="https://ig.me/m/abcconsulting.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 text-center bg-brand-blue text-white rounded-xl hover:bg-brand-blue-dark transition-colors duration-300 font-medium"
                  >
                    ثبت‌نام در دوره
                  </Link>
                
                </div>
                
              </div>
            </div>
            
          
          </div>

          {/* Licensing Services */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold mb-8 text-brand-blue text-center">خدمات اخذ مجوز</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              ما در زمینه اخذ مجوزهای قانونی مورد نیاز برای کسب‌وکار زیبایی شما، خدمات تخصصی ارائه می‌دهیم:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "مجوز راه‌اندازی سالن زیبایی",
                  description: "ما در تمام مراحل اخذ مجوزهای قانونی برای راه‌اندازی سالن زیبایی شما را همراهی می‌کنیم.",
                  icon: "Building"
                },
                {
                  title: "مجوز فروش محصولات (Retail)",
                  description: "با راهنمایی ما، مجوزهای لازم برای فروش محصولات زیبایی در سالن خود را به آسانی دریافت کنید.",
                  icon: "ShoppingBag"
                },
                {
                  title: "مجوزهای تخصصی حرفه‌ای",
                  items: [
                    "مجوز آرایشگری (Cosmetology)",
                    "مجوز متخصص پوست (Esthetician)",
                    "مجوز خدمات ناخن (Manicure & Pedicure)",
                    "مجوز آرایشگر مو (Hairstylist)"
                  ],
                  className: "md:col-span-2",
                  icon: "Award"
                }
              ].map((service, index) => (
                <div key={index} className={`group p-10 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-beige/20 hover:border-brand-blue/30 hover:-translate-y-2 ${service.className || ''}`}>
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-beige/10 flex items-center justify-center border border-brand-blue">
                      {service.icon === "Building" ? (
                        <Building className="h-8 w-8 text-brand-blue" />
                      ) : service.icon === "ShoppingBag" ? (
                        <ShoppingBag className="h-8 w-8 text-brand-blue" />
                      ) : (
                        <Award className="h-8 w-8 text-brand-blue" />
                      )}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-brand-blue text-center">{service.title}</h4>
                  {service.description ? (
                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                      {service.description}
                    </p>
                  ) : (
                    <div className="bg-brand-beige/5 p-4 rounded-xl border border-brand-beige/20">
                      <ul className="text-gray-700 space-y-2">
                        {service.items?.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-lg group-hover:text-gray-900 transition-colors">
                            <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                
                </div>
              ))}
            </div>
        
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-36 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue relative overflow-hidden">
        {/* Background patterns and effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-brand-beige/30"
                  style={{
                    width: `${Math.random() * 10 + 5}rem`,
                    height: `${Math.random() * 10 + 5}rem`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 100,
                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                    animation: `pulse ${Math.random() * 8 + 4}s infinite alternate`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/10 via-transparent to-brand-beige/10" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-blue-light/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-brand-blue-dark/30 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-beige/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-brand-beige/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block p-4 rounded-full bg-brand-blue-light/20 mb-8 backdrop-blur-sm border border-brand-beige/20">
            <Star className="h-14 w-14 text-brand-beige animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-brand-beige-light via-white to-brand-beige-light bg-clip-text text-transparent animate-fadeIn">
            آماده‌اید تا کسب و کار خود را متحول کنید؟
          </h2>
          
          <p className="text-2xl text-brand-beige-light mb-14 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{animationDelay: "0.2s"}}>
            همین حالا با ما تماس بگیرید و اولین قدم را برای موفقیت بردارید
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn" style={{animationDelay: "0.4s"}}>
            <Link 
              href="https://ig.me/m/abcconsulting.co" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-brand-beige text-brand-blue px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-beige-light transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(210,181,137,0.3)] hover:shadow-[0_0_30px_rgba(210,181,137,0.5)]"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-2">
                شروع مشاوره رایگان
              </span>
              <ArrowLeft className="h-6 w-6 relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
            
          
          </div>
        </div>
      </section>
    </div>
  );
}
