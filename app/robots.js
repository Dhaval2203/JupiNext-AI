export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://jupinext.com/sitemap.xml',
    }
}
