import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Chemins relatifs : le site est servi dans un sous-dossier sur GitHub Pages
  base: './',
  build: {
    rollupOptions: {
      // Toutes les pages du site, sinon seul index.html est construit
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        project: resolve(import.meta.dirname, 'project.html'),
        experience: resolve(import.meta.dirname, 'experience.html'),
        stacks: resolve(import.meta.dirname, 'stacks.html'),
      },
    },
  },
})
