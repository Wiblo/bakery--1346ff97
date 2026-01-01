export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'Our Story',
  description:
    "Golden Gate Bakery has been serving San Francisco's Mission District since 2010. What started as a small family bakery with a passion for traditional sourdough has grown into a beloved neighborhood staple, known for our artisan breads, French pastries, and custom celebration cakes.",
  image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  imageAlt: 'Inside Golden Gate Bakery with fresh bread displays',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Golden Gate Bakery',
  paragraphs: [
    "Golden Gate Bakery was founded in 2010 by the Martinez family, who brought their generations-old baking traditions from their hometown in France to the vibrant Mission District of San Francisco. What began with a single oven and a passion for authentic sourdough has blossomed into one of the city's most beloved artisan bakeries.",
    "We believe that great bread starts with time, patience, and quality ingredients. Our signature sourdough is made using a wild yeast starter we've been maintaining since day one, and every loaf undergoes a 24-hour fermentation process. We wake up at 4am every morning to ensure you get the freshest croissants, pastries, and bread possible.",
    "Beyond our daily baking, we've become known for our custom celebration cakes that have graced hundreds of San Francisco weddings, birthdays, and special occasions. Our talented pastry chefs work closely with each client to create something uniquely beautiful and delicious.",
    'Today, Golden Gate Bakery is more than just a bakery - it's a gathering place for our community. Whether you're grabbing your morning croissant and coffee, picking up a fresh sourdough for dinner, or ordering a custom cake for a milestone celebration, we're honored to be part of your daily life and special moments.',
  ],
  image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  imageAlt: 'Inside Golden Gate Bakery with fresh bread displays',
}
