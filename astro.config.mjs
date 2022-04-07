export default {
  projectRoot: '.',
  dist: './dist',
  public: './public',
  renderers: ['@astrojs/renderer-svelte'],
  buildOptions: {
    site: 'https://soranchu.ninja',
    sitemap: true,
  },
  devOptions: {
    port: 3000,
    tailwindConfig: './tailwind.config.js',
  },
}
