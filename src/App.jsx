import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Star, 
  Globe, 
  Package, 
  Truck, 
  DollarSign,
  ChevronRight,
  Award,
  Users,
  Clock,
  Shield
} from 'lucide-react'
import marksmithy_logo from './assets/marksmithy-logo-tight-crop.png'
import office_stationery from './assets/office-stationery-final.png'
import tech_electronics from './assets/tech-electronics-final.png'
import creative_products from './assets/creative-products-final.png'
import drinkware from './assets/drinkware-final.png'
import apparel from './assets/apparel-final.png'
import eco_friendly from './assets/eco-friendly-final.png'
import dining_products from './assets/dining-products-final.png'
import creative_items from './assets/creative-items-final.png'
import holiday_products from './assets/holiday-products-final.png'
import health_wellness from './assets/health-wellness-final.png'
import conference_exhibition from './assets/conference-exhibition-final.png'
import travel_products from './assets/travel-products-final.png'
import premium_custom from './assets/premium-custom-final.png'
import safety_products from './assets/safety-products-final.png'
import gift_products from './assets/gift-products-final.png'

// Unified brand logos
import deli_logo from './assets/brands/deli-logo-unified.png'
import mg_logo from './assets/brands/mg-logo-unified.png'
import comix_logo from './assets/brands/comix-logo-unified.png'
import guangbo_logo from './assets/brands/guangbo-logo-unified.png'
import sunwood_logo from './assets/brands/sunwood-logo-unified.png'
import kokuyo_logo from './assets/brands/kokuyo-logo-unified.png'
import xiaomi_logo from './assets/brands/xiaomi-logo-unified.png'
import romoss_logo from './assets/brands/romoss-logo-unified.png'
import anker_logo from './assets/brands/anker-logo-unified.png'
import apple_logo from './assets/brands/apple-logo-unified.png'
import huawei_logo from './assets/brands/huawei-logo-unified.png'
import sony_logo from './assets/brands/sony-logo-unified.png'
import bose_logo from './assets/brands/bose-logo-unified.png'
import nike_logo from './assets/brands/nike-logo-unified.png'
import adidas_logo from './assets/brands/adidas-logo-unified.png'
import uniqlo_logo from './assets/brands/uniqlo-logo-unified.png'
import muji_logo from './assets/brands/muji-logo-unified.png'
import disney_logo from './assets/brands/disney-logo-unified.png'
import hello_kitty_logo from './assets/brands/hello-kitty-logo-unified.png'
import zojirushi_logo from './assets/brands/zojirushi-logo-unified.png'
import tiger_logo from './assets/brands/tiger-logo-unified.png'
import thermos_logo from './assets/brands/thermos-logo-unified.png'
import lock_lock_logo from './assets/brands/lock-lock-logo-unified.png'
import supor_logo from './assets/brands/supor-logo-unified.png'
import fuguang_logo from './assets/brands/fuguang-logo-unified.png'
import the_north_face_logo from './assets/brands/the-north-face-logo-unified.png'
import anta_logo from './assets/brands/anta-logo-unified.png'
import li_ning_logo from './assets/brands/li-ning-logo-unified.png'
import logo_361_logo from './assets/brands/361-logo-unified.png'
import tupperware_logo from './assets/brands/tupperware-logo-unified.png'
import glasslock_logo from './assets/brands/glasslock-logo-unified.png'
import corelle_logo from './assets/brands/corelle-logo-unified.png'
import pyrex_logo from './assets/brands/pyrex-logo-unified.png'
import baggu_logo from './assets/brands/baggu-logo-unified.png'
import stasher_logo from './assets/brands/stasher-logo-unified.png'
import bamboo_logo from './assets/brands/bamboo-logo-unified.png'
import organic_cotton_logo from './assets/brands/organic-cotton-logo-unified.png'
import hemp_logo from './assets/brands/hemp-logo-unified.png'
import lego_logo from './assets/brands/lego-logo-unified.png'
import razer_logo from './assets/brands/razer-logo-unified.png'
import logitech_logo from './assets/brands/logitech-logo-unified.png'
import steelseries_logo from './assets/brands/steelseries-logo-unified.png'
import corsair_logo from './assets/brands/corsair-logo-unified.png'
import hallmark_logo from './assets/brands/hallmark-logo-unified.png'
import sanrio_logo from './assets/brands/sanrio-logo-unified.png'
import precious_moments_logo from './assets/brands/precious-moments-logo-unified.png'
import under_armour_logo from './assets/brands/under-armour-logo-unified.png'
import fitbit_logo from './assets/brands/fitbit-logo-unified.png'
import samsonite_logo from './assets/brands/samsonite-logo-unified.png'
import american_tourister_logo from './assets/brands/american-tourister-logo-unified.png'
import targus_logo from './assets/brands/targus-logo-unified.png'
import case_logic_logo from './assets/brands/case-logic-logo-unified.png'
import travelpro_logo from './assets/brands/travelpro-logo-unified.png'
import eagle_creek_logo from './assets/brands/eagle-creek-logo-unified.png'
import waterford_logo from './assets/brands/waterford-logo-unified.png'
import swarovski_logo from './assets/brands/swarovski-logo-unified.png'
import tiffany_co_logo from './assets/brands/tiffany-co-logo-unified.png'
import hermes_logo from './assets/brands/hermes-logo-unified.png'
import louis_vuitton_logo from './assets/brands/louis-vuitton-logo-unified.png'
import logo_3m_logo from './assets/brands/3m-logo-unified.png'
import honeywell_logo from './assets/brands/honeywell-logo-unified.png'
import msa_logo from './assets/brands/msa-logo-unified.png'
import dupont_logo from './assets/brands/dupont-logo-unified.png'
import ansell_logo from './assets/brands/ansell-logo-unified.png'
import papyrus_logo from './assets/brands/papyrus-logo-unified.png'
import kate_spade_logo from './assets/brands/kate-spade-logo-unified.png'
import coach_logo from './assets/brands/coach-logo-unified.png'
import michael_kors_logo from './assets/brands/michael-kors-logo-unified.png'

import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Global Top Brands",
      description: "Exclusively featuring Nike, Apple, Bose, The North Face and other premium brands. Retail quality guaranteed."
    },
    {
      icon: <Package className="h-8 w-8 text-white" />,
      title: "Complete Event Solutions",
      description: "Smart AI recommendations for complete gift packages based on your event type and budget. One-stop solution."
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Express Delivery",
      description: "10-piece minimum orders with guaranteed 7-day worldwide delivery. Distributed fulfillment centers globally."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Transparent Pricing",
      description: "Simple and clear: Retail price + 10%. No hidden fees, no complex pricing tiers. What you see is what you pay."
    }
  ]

  const productCategories = [
    {
      title: "Office Stationery",
      image: office_stationery,
      items: ["Custom Pens", "Custom Notebooks", "File Folders", "Sticky Notes", "Desk Accessories", "USB Drives", "Business Cards"],
      brands: [
        { name: "Deli", logo: deli_logo },
        { name: "M&G", logo: mg_logo },
        { name: "Comix", logo: comix_logo },
        { name: "GuangBo", logo: guangbo_logo },
        { name: "Sunwood", logo: sunwood_logo },
        { name: "Kokuyo", logo: kokuyo_logo }
      ]
    },
    {
      title: "Tech & Electronics",
      image: tech_electronics,
      items: ["Power Banks", "Wireless Mice", "Bluetooth Headphones", "External Hard Drives", "Phone Stands", "Charging Adapters", "Phone Cases"],
      brands: [
        { name: "Xiaomi", logo: xiaomi_logo },
        { name: "Romoss", logo: romoss_logo },
        { name: "Anker", logo: anker_logo },
        { name: "Apple", logo: apple_logo },
        { name: "Huawei", logo: huawei_logo },
        { name: "Sony", logo: sony_logo },
        { name: "Bose", logo: bose_logo }
      ]
    },
    {
      title: "Creative Products",
      image: creative_products,
      items: ["Custom Mugs", "Water Bottles", "Canvas Bags", "T-shirts & Hoodies", "Scarves", "Desktop Decorations", "Bookmarks"],
      brands: [
        { name: "Nike", logo: nike_logo },
        { name: "Adidas", logo: adidas_logo },
        { name: "Uniqlo", logo: uniqlo_logo },
        { name: "Muji", logo: muji_logo },
        { name: "Disney", logo: disney_logo },
        { name: "Hello Kitty", logo: hello_kitty_logo }
      ]
    },
    {
      title: "Drinkware",
      image: drinkware,
      items: ["Insulated Cups", "Water Bottles", "Straws", "Tea Sets"],
      brands: [
        { name: "Zojirushi", logo: zojirushi_logo },
        { name: "Tiger", logo: tiger_logo },
        { name: "Thermos", logo: thermos_logo },
        { name: "Lock&Lock", logo: lock_lock_logo },
        { name: "Supor", logo: supor_logo },
        { name: "Fuguang", logo: fuguang_logo }
      ]
    },
    {
      title: "Apparel",
      image: apparel,
      items: ["Hats", "T-shirts & Shirts", "Jackets", "Socks", "Scarves"],
      brands: [
        { name: "Nike", logo: nike_logo },
        { name: "Adidas", logo: adidas_logo },
        { name: "The North Face", logo: the_north_face_logo },
        { name: "Anta", logo: anta_logo },
        { name: "Li-Ning", logo: li_ning_logo },
        { name: "361°", logo: logo_361_logo }
      ]
    },
    {
      title: "Dining Products",
      image: dining_products,
      items: ["Custom Tableware", "Insulated Lunch Boxes", "Coffee Cups", "Napkins"],
      brands: [
        { name: "Tupperware", logo: tupperware_logo },
        { name: "Lock&Lock", logo: lock_lock_logo },
        { name: "Glasslock", logo: glasslock_logo },
        { name: "Corelle", logo: corelle_logo },
        { name: "Pyrex", logo: pyrex_logo }
      ]
    },
    {
      title: "Eco-Friendly",
      image: eco_friendly,
      items: ["Shopping Bags", "Face Masks", "Eco Pens", "Vacuum Cleaners"],
      brands: [
        { name: "Baggu", logo: baggu_logo },
        { name: "Stasher", logo: stasher_logo },
        { name: "Bamboo", logo: bamboo_logo },
        { name: "Organic Cotton", logo: organic_cotton_logo },
        { name: "Hemp", logo: hemp_logo }
      ]
    },
    {
      title: "Creative Items",
      image: creative_items,
      items: ["Stationery Toys", "Gaming Peripherals", "Plant Kits", "Holiday Decorations"],
      brands: [
        { name: "Lego", logo: lego_logo },
        { name: "Razer", logo: razer_logo },
        { name: "Logitech", logo: logitech_logo },
        { name: "SteelSeries", logo: steelseries_logo },
        { name: "Corsair", logo: corsair_logo }
      ]
    },
    {
      title: "Holiday Products",
      image: holiday_products,
      items: ["Christmas Decorations", "Birthday Gifts", "Holiday Souvenirs"],
      brands: [
        { name: "Hallmark", logo: hallmark_logo },
        { name: "Disney", logo: disney_logo },
        { name: "Sanrio", logo: sanrio_logo },
        { name: "Precious Moments", logo: precious_moments_logo }
      ]
    },
    {
      title: "Health & Wellness",
      image: health_wellness,
      items: ["Fitness Equipment", "Massage Devices", "Care Packages"],
      brands: [
        { name: "Nike", logo: nike_logo },
        { name: "Adidas", logo: adidas_logo },
        { name: "Under Armour", logo: under_armour_logo },
        { name: "Fitbit", logo: fitbit_logo },
        { name: "Xiaomi", logo: xiaomi_logo }
      ]
    },
    {
      title: "Conference & Exhibition",
      image: conference_exhibition,
      items: ["Conference Bags", "Name Tags", "Exhibition Gifts"],
      brands: [
        { name: "Samsonite", logo: samsonite_logo },
        { name: "American Tourister", logo: american_tourister_logo },
        { name: "Targus", logo: targus_logo },
        { name: "Case Logic", logo: case_logic_logo }
      ]
    },
    {
      title: "Travel Products",
      image: travel_products,
      items: ["Travel Cases", "Travel Accessories"],
      brands: [
        { name: "Samsonite", logo: samsonite_logo },
        { name: "American Tourister", logo: american_tourister_logo },
        { name: "Travelpro", logo: travelpro_logo },
        { name: "Eagle Creek", logo: eagle_creek_logo }
      ]
    },
    {
      title: "Premium Custom",
      image: premium_custom,
      items: ["Trophies", "Gift Boxes", "Art Pieces", "Luxury Items"],
      brands: [
        { name: "Waterford", logo: waterford_logo },
        { name: "Swarovski", logo: swarovski_logo },
        { name: "Tiffany & Co.", logo: tiffany_co_logo },
        { name: "Hermès", logo: hermes_logo },
        { name: "Louis Vuitton", logo: louis_vuitton_logo }
      ]
    },
    {
      title: "Safety Products",
      image: safety_products,
      items: ["Safety Vests", "Emergency Kits"],
      brands: [
        { name: "3M", logo: logo_3m_logo },
        { name: "Honeywell", logo: honeywell_logo },
        { name: "MSA", logo: msa_logo },
        { name: "DuPont", logo: dupont_logo },
        { name: "Ansell", logo: ansell_logo }
      ]
    },
    {
      title: "Gift Products",
      image: gift_products,
      items: ["Gift Boxes", "Business Card Holders"],
      brands: [
        { name: "Hallmark", logo: hallmark_logo },
        { name: "Papyrus", logo: papyrus_logo },
        { name: "Kate Spade", logo: kate_spade_logo },
        { name: "Coach", logo: coach_logo },
        { name: "Michael Kors", logo: michael_kors_logo }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={marksmithy_logo} 
                alt="MarkSmithy Logo" 
                className="h-24 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-800 font-medium transition-colors">Home</a>
              <a href="#advantages" className="text-gray-700 hover:text-red-800 font-medium transition-colors">Advantages</a>
              <a href="#products" className="text-gray-700 hover:text-red-800 font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-red-800 font-medium transition-colors">About</a>
              <Button className="bg-red-800 hover:bg-red-900 text-white">
                Become a Member
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-red-800 font-medium">Home</a>
                <a href="#advantages" className="text-gray-700 hover:text-red-800 font-medium">Advantages</a>
                <a href="#products" className="text-gray-700 hover:text-red-800 font-medium">Products</a>
                <a href="#about" className="text-gray-700 hover:text-red-800 font-medium">About</a>
                <Button className="bg-red-800 hover:bg-red-900 text-white w-full">
                  Become a Member
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-200 mb-4">
              Premium Corporate Gifts
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your Brand with
              <span className="text-red-800 block">Premium Custom Gifts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MarkSmithy specializes in high-end custom promotional products featuring global top brands. 
              Transform your corporate gifting with Nike, Apple, Bose, and The North Face products customized with your logo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-800 hover:bg-red-900 text-white px-8 py-3">
                Become a Member
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-800 text-red-800 hover:bg-red-50 px-8 py-3">
                View Products
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">500+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">10+</div>
              <div className="text-gray-600">Global Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">7 Days</div>
              <div className="text-gray-600">Worldwide Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">10 Pieces</div>
              <div className="text-gray-600">Minimum Order</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MarkSmithy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We revolutionize corporate gifting with premium quality, intelligent solutions, and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium custom products across 15 categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-red-800 mb-2">
                    {category.title}
                  </CardTitle>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Brands:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {category.brands.slice(0, 6).map((brand, brandIndex) => (
                        <div key={brandIndex} className="flex items-center justify-center">
                          {brand.logo ? (
                            <img 
                              src={brand.logo} 
                              alt={brand.name}
                              className="h-8 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
                              title={brand.name}
                            />
                          ) : (
                            <Badge 
                              variant="outline" 
                              className="text-xs border-red-200 text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                            >
                              {brand.name}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-800 transition-colors cursor-pointer"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About MarkSmithy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MarkSmithy is positioned as a premium custom logo merchandise brand serving developed country markets. 
                We focus on online ordering models, providing high-quality, fast-delivery branded merchandise customization services for corporate clients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that quality branded merchandise is not just simple gifts, but important media for spreading corporate image and enhancing customer and employee loyalty. 
                Our vision is to redefine the value of custom merchandise through carefully selected global top brand authentic products with customer logos.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-red-800" />
                  <span className="text-gray-700 font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-red-800" />
                  <span className="text-gray-700 font-medium">Global Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-800" />
                  <span className="text-gray-700 font-medium">Member-Only Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-800" />
                  <span className="text-gray-700 font-medium">Fast Turnaround</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-800 to-red-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-red-100 mb-6">
                Join our exclusive membership program and access premium custom products from global top brands.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Exclusive access to premium brands</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>AI-powered gift recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Transparent pricing (Retail + 10%)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>7-day worldwide delivery guarantee</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-red-800 hover:bg-gray-100 font-semibold">
                Apply for Membership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src={marksmithy_logo} 
                alt="MarkSmithy Logo" 
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 mb-4 max-w-md">
                Premium custom corporate gifts featuring global top brands. 
                Elevate your brand with quality merchandise that makes a lasting impression.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  Member-Only Service
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  Global Delivery
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Logo Products</li>
                <li>AI Gift Recommendations</li>
                <li>Express Delivery</li>
                <li>Member Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Membership</li>
                <li>Quality Guarantee</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarkSmithy. All rights reserved. Premium custom corporate gifts worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

