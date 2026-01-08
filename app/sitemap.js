export default function sitemap() {
    const baseUrl = 'https://jupinext.com'

    // Define all static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/solutions',
        '/process',
        '/tech-stack',
        '/contact',
        '/careers',
        '/reviews',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'yearly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}
