import { defineCollection, z } from 'astro:content';

const galleriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => {
      if (typeof val === 'string') {
        // Attempt to handle timezone explicitly if needed, or rely on JS Date's local timezone interpretation
        // For UTC dates from CMS (like YYYY-MM-DD), this should be fine.
        return new Date(val);
      }
      return val; // It's already a Date object
    }),
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
    page_heading: z.string().optional(),
    intro_text: z.string().optional(),
    disclaimer_text: z.string().optional(),
    
    // Fields for O Mně page (and potentially other pages)
    hero_heading: z.string().optional(),
    hero_background_image: z.string().optional(),
    hero_cta_text: z.string().optional(),
    hero_cta_label: z.string().optional(),
    hero_cta_link: z.string().optional(),
    after_text: z.string().optional(),
    gallery_cta_label: z.string().optional(),
    gallery_cta_link: z.string().optional(),
    contact_cta_label: z.string().optional(),
    contact_cta_link: z.string().optional(),
    seo_description: z.string().optional(),
    travel_fee_text: z.string().optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(), // Assuming description is markdown, rendered with <Content />
    inclusions: z.array(
      z.object({
        text: z.string(),
      })
    ).optional(),
    price: z.string().optional(),
    image: z.string().optional(), // Path to image, or handle as an Astro asset if needed
    order: z.number().optional(),
    pinned: z.boolean().optional().default(false),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author_name: z.string(),
    author_context: z.string().optional(),
    quote: z.string(),
    display_on_homepage: z.boolean().optional(),
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