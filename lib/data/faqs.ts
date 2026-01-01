export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'opening-hours',
    question: 'What are your opening hours?',
    answer:
      "We're open Tuesday through Sunday. Our hours are Tuesday-Thursday 7am-6pm, Friday-Saturday 7am-7pm, and Sunday 7am-5pm. We're closed on Mondays. Early morning is the best time to get items fresh out of the oven!",
  },
  {
    id: 'custom-cakes',
    question: 'How far in advance do I need to order a custom cake?',
    answer:
      'We recommend ordering custom cakes at least 3 days in advance to ensure we can accommodate your design and flavor preferences. For large wedding cakes or elaborate designs, 2-3 weeks notice is preferred. However, we can sometimes accommodate rush orders - just give us a call to check availability.',
  },
  {
    id: 'dietary-options',
    question: 'Do you have gluten-free or vegan options?',
    answer:
      "Yes! We offer gluten-free bread and select pastries daily. We can also create custom vegan and gluten-free cakes with advance notice. Please note that while we take precautions, our kitchen is not a dedicated gluten-free facility. Let us know about any dietary restrictions when ordering.",
  },
  {
    id: 'pre-orders',
    question: 'Can I pre-order specific items?',
    answer:
      "Absolutely! We encourage pre-orders for our popular items like sourdough loaves, specific pastries, or dozens of cookies. Call us at (415) 555-BAKE or stop by the bakery to place your order. Pre-orders guarantee you won't miss out on your favorites.",
  },
  {
    id: 'wholesale',
    question: 'Do you supply to restaurants or cafes?',
    answer:
      'Yes, we offer wholesale pricing for restaurants, cafes, and businesses. We can provide daily bread deliveries, breakfast pastries, or custom baked goods. Contact us at hello@goldengatebakery.com to discuss your needs and receive a wholesale price list.',
  },
  {
    id: 'gift-cards',
    question: 'Do you sell gift cards?',
    answer:
      'Yes! Gift cards are available in any amount and make perfect gifts for the bread and pastry lovers in your life. Purchase them in-store or contact us to arrange a gift card via email.',
  },
  {
    id: 'parking',
    question: 'Is there parking available?',
    answer:
      "We're located on Valencia Street with street parking available nearby. There's also a public parking garage two blocks away on Mission Street. The bakery is easily accessible via BART (16th Street Mission station) and several Muni bus lines.",
  },
  {
    id: 'shelf-life',
    question: 'How long do your baked goods stay fresh?',
    answer:
      'Our sourdough bread stays fresh for 3-5 days when stored in a paper bag at room temperature. Pastries are best enjoyed the day of purchase. Cookies keep well in an airtight container for up to a week. We recommend freezing bread if you want to keep it longer - it defrosts beautifully!',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
