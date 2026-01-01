export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the bakery
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Traditional Artisan Techniques',
    description:
      'Our master bakers use time-honored European techniques passed down through generations. From hand-kneading sourdough to careful lamination of croissants, we believe the traditional methods create the best flavors and textures that modern shortcuts simply cannot replicate.',
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80',
    imageAlt: 'Baker kneading artisan bread dough by hand',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Fresh Daily, Made from Scratch',
    description:
      'Everything you see in our bakery is made fresh each day from scratch using premium ingredients. We start baking at 4am every morning so you can enjoy warm croissants, crusty sourdough, and sweet pastries at their absolute best. Nothing is ever frozen or mass-produced.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    imageAlt: 'Fresh baked bread cooling on racks',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Custom Cakes & Special Orders',
    description:
      'Celebrating something special? Our talented pastry chefs create custom cakes and desserts tailored to your vision. From elegant wedding cakes to whimsical birthday creations, we work closely with you to design something unforgettable that tastes as amazing as it looks.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&q=80',
    imageAlt: 'Elegant custom decorated celebration cake',
    imagePosition: 'right',
  },
]
