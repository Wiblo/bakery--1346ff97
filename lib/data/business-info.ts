export const businessInfo = {
  // Core business details
  name: "Golden Gate Bakery",
  tagline: "Artisan baked goods fresh daily in San Francisco",
  logo: "/logo.svg",

  // Contact information
  phone: "(415) 555-BAKE",
  phoneSecondary: "(415) 555-2253", // Optional second phone number
  email: "hello@goldengatebakery.com",

  // Location
  address: {
    street: "456 Valencia Street",
    area: "", // Optional (e.g., "Building Name" or "Suite 100")
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 37.7621,
    longitude: -122.4208,
  },

  // Business hours
  hours: {
    monday: "Closed",
    tuesday: "7:00am - 6:00pm",
    wednesday: "7:00am - 6:00pm",
    thursday: "7:00am - 6:00pm",
    friday: "7:00am - 7:00pm",
    saturday: "7:00am - 7:00pm",
    sunday: "7:00am - 5:00pm",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/goldengatebakery",
    instagram: "https://instagram.com/goldengatebakery",
    whatsapp: "https://wa.me/14155552253", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://goldengatebakery.com",
  description: "San Francisco's premier artisan bakery serving fresh sourdough bread, pastries, cakes, and custom desserts daily. Family-owned since 2010.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Bakery: ['LocalBusiness', 'Bakery', 'FoodEstablishment']
  schemaTypes: ['LocalBusiness', 'Bakery', 'FoodEstablishment'] as const,

  // Booking/appointment URL
  bookingUrl: "https://goldengatebakery.com/order",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Golden Gate Bakery",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
