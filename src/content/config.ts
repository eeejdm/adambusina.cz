import { defineCollection, z } from 'astro:content';

const galleriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    cover_image: z.string().optional(),
    images: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
      })
    ).optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Add other fields for static pages here
    // e.g., description: z.string().optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Add other fields for services here
    // e.g., price: z.number().optional(),
    // duration: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    text: z.string(),
    // Add other fields for testimonials here
    // e.g., date: z.date().optional(),
    // rating: z.number().min(1).max(5).optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'data', // 'data' for JSON/YAML files
  schema: z.object({
    site_title_part1: z.string(),
    site_title_part2: z.string(),
    logo_image: z.string(),
    homepage_hero_heading: z.string(),
    homepage_hero_subheading: z.string(),
    homepage_hero_cta_label: z.string(),
    homepage_hero_cta_link: z.string(),
    homepage_signature_image: z.string().optional(),
    header_cta_label: z.string(),
    header_cta_link: z.string(),
    header_navigation_links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })),
    footer_intro_text: z.string(),
    footer_navigation_links: z.array(z.object({ // Assuming similar structure to header
      label: z.string(),
      url: z.string(),
    })).optional(),
    copyright_text_base: z.string(),
    contact_email: z.string().email(),
    phone_number: z.string().optional(),
    instagram_username: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

export const collections = {
  'galleries': galleriesCollection,
  'pages': pagesCollection,
  'services': servicesCollection,
  'testimonials': testimonialsCollection,
  'settings': settingsCollection,
}; 