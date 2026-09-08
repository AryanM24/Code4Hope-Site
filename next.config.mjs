/** @type {import('next').NextConfig} */

// Hosts we load images from. Every remote <Image> src must match one of these,
// otherwise Next refuses to optimize it and the page errors at render time.
const remoteImageHosts = [
  'a.storyblok.com',
  'avatars.githubusercontent.com',
  'cdn.mos.cms.futurecdn.net',
  'd112y698adiu2z.cloudfront.net',
  'd2dmyh35ffsxbl.cloudfront.net',
  'digitalpress.fra1.cdn.digitaloceanspaces.com',
  'docs.code4hope.net',
  'encrypted-tbn0.gstatic.com',
  'hack.code4hope.net',
  'images.unsplash.com',
  'lh3.googleusercontent.com',
  'media.licdn.com',
  'media.tekpon.com',
  'ml-eu.globenewswire.com',
  'myainak.org',
  'placehold.co',
  's3.amazonaws.com',
  'web-summit-avenger.imgix.net',
  'www.aidsnap.com',
  'www.monpetitforfait.com',
  'www.security.org',
]

const nextConfig = {
  agentRules: false,
  images: {
    // AVIF first, WebP as the fallback — both are far smaller than the
    // source JPEG/PNG for the same visual quality.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: remoteImageHosts.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
    // Sponsor logos and photos are static; cache the optimized variants for a
    // year instead of re-optimizing them on every deploy's first request.
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
