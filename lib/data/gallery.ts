export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface GalleryContent {
  title: string
  subtitle?: string
  items: GalleryItem[]
}

/**
 * Gallery section content
 * Update this to modify the gallery shown on the site
 */
export const galleryContent: GalleryContent = {
  title: 'Freshly Baked Daily',
  subtitle:
    'From artisan sourdough to delicate French pastries, see what we\'re baking every day',
  items: [
    {
      id: 'gallery-1',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      alt: 'Fresh artisan sourdough bread loaves',
    },
    {
      id: 'gallery-2',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
      alt: 'Buttery French croissants and pastries',
    },
    {
      id: 'gallery-3',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      alt: 'Custom decorated celebration cakes',
    },
    {
      id: 'gallery-4',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
      alt: 'Fresh baked chocolate chip cookies',
    },
    {
      id: 'gallery-5',
      image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80',
      alt: 'Baker preparing fresh dough',
    },
    {
      id: 'gallery-6',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      alt: 'Beautiful bakery display case',
    },
  ],
}

/**
 * Get all gallery items
 */
export function getGalleryItems(): GalleryItem[] {
  return galleryContent.items
}
