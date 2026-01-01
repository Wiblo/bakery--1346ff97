import { Croissant, Cake, Wheat, Cookie } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full product details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All products offered by the bakery
 * Update this array to add/modify products shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'artisan-sourdough',
    slug: 'artisan-sourdough',
    name: 'Artisan Sourdough Bread',
    description:
      'Traditional San Francisco sourdough bread made with our century-old starter. Naturally fermented for 24 hours, creating the perfect crusty exterior and tangy, chewy interior.',
    duration: 'Baked Daily',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    imageAlt: 'Fresh artisan sourdough bread loaf with golden crust',
    icon: Wheat,
    benefits: [
      'Made with century-old starter',
      '24-hour natural fermentation',
      'No preservatives or additives',
      'Perfect crust and texture',
    ],
    featured: true,
    shortDescription:
      'Authentic San Francisco sourdough with our time-honored recipe',
    fullDescription:
      'Our signature sourdough is what put Golden Gate Bakery on the map. We use a wild yeast starter that has been lovingly maintained since 2010, creating the authentic tangy flavor that San Francisco is famous for.\n\nEach loaf undergoes a 24-hour cold fermentation process, developing complex flavors and making the bread easier to digest. The result is a beautiful golden-brown crust that crackles when you cut into it, revealing a tender, airy crumb with just the right amount of tang.',
    idealFor: [
      'Toast lovers',
      'Sandwich enthusiasts',
      'Bread connoisseurs',
      'Gift giving',
      'Special occasions',
      'Daily eating',
    ],
  },
  {
    id: 'french-pastries',
    slug: 'french-pastries',
    name: 'French Pastries',
    description:
      'Authentic French viennoiserie including buttery croissants, pain au chocolat, and almond croissants. Made with European butter and traditional lamination techniques.',
    duration: 'Fresh Each Morning',
    price: '$4.50 - $6.00',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    imageAlt: 'Assorted fresh French croissants and pastries',
    icon: Croissant,
    benefits: [
      'European-style butter',
      'Hand-laminated daily',
      'Multiple varieties available',
      'Perfect flaky layers',
    ],
    featured: true,
    shortDescription:
      'Buttery, flaky French pastries crafted with traditional techniques',
    fullDescription:
      'Our French pastries are made using authentic techniques learned in Parisian bakeries. Each morning, our bakers hand-laminate dough with premium European butter to create those perfect, crispy layers that define a great croissant.\n\nChoose from classic butter croissants, decadent pain au chocolat filled with dark chocolate, or our popular almond croissants topped with sliced almonds and filled with sweet almond cream. Every pastry is baked to golden perfection and best enjoyed warm from the oven.',
    idealFor: [
      'Breakfast treats',
      'Coffee pairings',
      'Brunch gatherings',
      'Office meetings',
      'Weekend indulgence',
    ],
  },
  {
    id: 'custom-cakes',
    slug: 'custom-cakes',
    name: 'Custom Celebration Cakes',
    description:
      'Beautifully decorated custom cakes for birthdays, weddings, and special occasions. Choose from multiple flavors, fillings, and designs tailored to your celebration.',
    duration: '3-Day Notice',
    price: 'From $45',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    imageAlt: 'Elegant custom decorated celebration cake',
    icon: Cake,
    benefits: [
      'Custom designs and flavors',
      'Fresh, quality ingredients',
      'Professional decoration',
      'Dietary options available',
    ],
    featured: true,
    shortDescription:
      'Personalized cakes that make your celebrations unforgettable',
    fullDescription:
      'Make your special occasion truly memorable with a custom cake from Golden Gate Bakery. Our talented pastry chefs work with you to create a cake that not only looks stunning but tastes incredible.\n\nChoose from flavors like vanilla bean, rich chocolate, lemon, red velvet, and carrot cake. We offer various fillings including buttercream, ganache, fresh fruit, and cream cheese frosting. Whether you need a simple elegant design or an elaborate themed creation, we bring your vision to life with attention to every detail.',
    idealFor: [
      'Birthday parties',
      'Weddings',
      'Anniversaries',
      'Baby showers',
      'Corporate events',
      'Graduations',
    ],
  },
  {
    id: 'cookies-treats',
    slug: 'cookies-treats',
    name: 'Cookies & Sweet Treats',
    description:
      'Daily selection of fresh-baked cookies, brownies, and sweet treats. From classic chocolate chip to seasonal specialties, all made from scratch with premium ingredients.',
    duration: 'Made Fresh Daily',
    price: '$3.00 - $5.00',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    imageAlt: 'Assorted fresh-baked cookies and sweet treats',
    icon: Cookie,
    benefits: [
      'Made from scratch daily',
      'Premium ingredients',
      'Variety of options',
      'Perfect for gifting',
    ],
    featured: true,
    shortDescription:
      'Homestyle cookies and treats that bring back childhood memories',
    fullDescription:
      'Our cookie selection changes daily but always includes classics like chocolate chip, oatmeal raisin, and snickerdoodles, alongside seasonal favorites. Each cookie is made from scratch using real butter, premium chocolate, and natural ingredients.\n\nWe also offer fudgy brownies, blondies, lemon bars, and other sweet treats that pair perfectly with coffee or make excellent gifts. Mix and match to create your own assortment, or grab our pre-made cookie boxes for easy gifting.',
    idealFor: [
      'Afternoon snacks',
      'Gift boxes',
      'School treats',
      'Office parties',
      'Coffee companion',
      'Dessert platters',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
