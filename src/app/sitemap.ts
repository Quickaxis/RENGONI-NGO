import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rengoni.in';

  // Include all public indexable routes here
  const routes = [
    '',
    '/about',
    '/programs',
    '/our-work',
    '/stories',
    '/impact',
    '/news-events',
    '/samim-akhtara-ali',
    '/get-involved',
    '/membership',
    '/volunteer',
    '/donate',
    '/partner',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
