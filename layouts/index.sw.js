importScripts(
  'https://cdn.bootcdn.net/ajax/libs/workbox-sw/7.3.0/workbox-sw.js'
)

const CACHE_VERSION = 'v{{ now.Format "0601021504" }}'
const CACHE_NAME = `${CACHE_VERSION}-site`

if (typeof workbox !== 'undefined') {
  workbox.core.clientsClaim()
  self.skipWaiting()

  // Caching file statis (CSS dan JS)
  workbox.routing.registerRoute(
    ({ request }) =>
      (request.destination === 'style' || request.destination === 'script') &&
      (request.url.includes('{{ "assets/css/" | relURL }}') ||
        request.url.includes('{{ "assets/js/" | relURL }}')),
    new workbox.strategies.CacheFirst({
      cacheName: `${CACHE_NAME}-static`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 86400, // 30 hari
        }),
      ],
    })
  )

  // Caching CDN MathJax
  workbox.routing.registerRoute(
    /https:\/\/cdn.jsdelivr.net\/npm\/mathjax@3\/es5\/tex-chtml.js/,
    new workbox.strategies.CacheFirst({
      cacheName: `${CACHE_NAME}-static`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 86400,
        }),
      ],
    })
  )

  // Caching media eksternal (Cloudinary)
  workbox.routing.registerRoute(
    new RegExp(
      'https://res\\.cloudinary\\.com/.*\\.(jpg|jpeg|png|webp|gif|svg|mp4|mp3|woff2|ttf)(\\?.*)?$'
    ),
    new workbox.strategies.CacheFirst({
      cacheName: `${CACHE_NAME}-image-assets`,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 86400,
        }),
      ],
    })
  )

  // Caching halaman navigasi (HTML)
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
      cacheName: `${CACHE_NAME}-html`,
      networkTimeoutSeconds: 3,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 86400, // 1 hari
        }),
      ],
    })
  )

  // Fallback offline page
  workbox.routing.setCatchHandler(async ({ event }) => {
    if (event.request.destination === 'document') {
      return caches.match('/offline.html')
    }
    return Response.error()
  })

  // Install: cache news.json dan halaman terkait
  self.addEventListener('install', event => {
    event.waitUntil(
      (async () => {
        const JSON_INDEX_URL = `{{ "news.json" | relURL }}?v=${CACHE_VERSION}`
        const htmlCache = await caches.open(`${CACHE_NAME}-html`)
        const staticCache = await caches.open(`${CACHE_NAME}-static`)

        // Precache halaman fallback
        await staticCache.add('{{ "offline.html" | relURL }}')

        try {
          const response = await fetch(JSON_INDEX_URL)
          if (!response.ok) throw new Error('Failed to fetch news.json')

          const allUrls = await response.json()
          const urls = allUrls.slice(0, 1000)

          await Promise.allSettled(
            urls.map(async rawUrl => {
              try {
                const url = new URL(rawUrl, self.location.origin).toString()
                const fetchResponse = await fetch(url)
                if (fetchResponse.ok) {
                  await htmlCache.put(url, fetchResponse.clone())
                }
              } catch (err) {
                // Optional: console.warn(`Failed to cache ${rawUrl}`, err)
              }
            })
          )
        } catch (err) {
          // Optional: console.error('Prefetch failed:', err)
        }
      })()
    )
  })

  // Activate: cleanup cache lama
  self.addEventListener('activate', event => {
    const keep = [
      `${CACHE_NAME}-html`,
      `${CACHE_NAME}-static`,
      `${CACHE_NAME}-image-assets`
    ]

    event.waitUntil(
      caches.keys().then(keys =>
        Promise.all(
          keys.map(key => {
            if (!keep.includes(key)) {
              return caches.delete(key)
            }
          })
        )
      )
    )
  })
} else {
  console.warn('[SW] Workbox gagal dimuat.')
}
