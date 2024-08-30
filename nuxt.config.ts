export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'}
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        }
      ],
      style: [
        
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },

  compatibilityDate: '2024-08-28'
})