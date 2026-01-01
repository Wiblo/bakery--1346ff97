export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Order Your Fresh Baked Goods Today',
  description:
    'Pre-order your favorite breads, pastries, and custom cakes. We bake fresh every morning, so order ahead to guarantee your favorites are waiting for you.',
  ctaText: 'Place an Order',
  ctaUrl: 'https://goldengatebakery.com/order',
  backgroundImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80',
  backgroundImageAlt: 'Fresh artisan bread in bakery display',
}
