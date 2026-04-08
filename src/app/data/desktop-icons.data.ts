import { DesktopIcon } from '../models/desktop-icon.model';
import { PROJECTS } from './projects.data';

export const DESKTOP_ICONS: DesktopIcon[] = [
  {
    id: 'home',
    label: 'Home',
    iconImg: '/icons/computer.png',
    type: 'home' as const,
    data: {}
  },
  {
    id: 'projects',
    label: 'Meine Projekte',
    iconImg: 'icons/directory_closed.png',
    type: 'folder',
    data: {
      children: [
        {
          id: 'web', label: 'Webseiten',
          iconImg: 'icons/website-icon.png',
          type: 'folder' as const,
          data: {
            children: PROJECTS
              .filter(p => p.category === 'web')
              .map(p => ({
                id: p.id, label: p.title,
                iconImg: 'icons/website-icon.png',
                type: 'project' as const, data: p
              }))
          }
        },
        {
          id: 'logo', label: 'Logos',
          iconImg: 'icons/logo-icon.png',
          type: 'folder' as const,
          data: {
            children: PROJECTS
              .filter(p => p.category === 'logo')
              .map(p => ({
                id: p.id, label: p.title,
                iconImg: 'icons/logo-icon.png',
                type: 'project' as const, data: p
              }))
          }
        },
        {
          id: 'print', label: 'Print',
          iconImg: 'icons/print-icon.png',
          type: 'folder' as const,
          data: {
            children: PROJECTS
              .filter(p => p.category === 'print')
              .map(p => ({
                id: p.id, label: p.title,
                iconImg: 'icons/print-icon.png',
                type: 'project' as const, data: p
              }))
          }
        },
        {
          id: 'games', label: 'Games',
          iconImg: 'icons/games-icon.png',
          type: 'folder' as const,
          data: {
            children: PROJECTS
              .filter(p => p.category === 'game')
              .map(p => ({
                id: p.id, label: p.title,
                iconImg: 'icons/games-icon.png',
                type: 'project' as const, data: p
              }))
          }
        }
      ]
    }
  },
  {
    id: 'about',
    label: 'Über mich',
    iconImg: 'icons/directory_closed.png',
    type: 'about',
    data: {}
  },
  {
    id: 'contact',
    label: 'Kontakt.txt',
    iconImg: 'icons/txt.png',
    type: 'text',
    data: {
      type: 'contact',
      header: `Kontakt\n═══════════════════`,
      links: [
        {
          iconImg: 'icons/email-icon.png',
          label: 'E-Mail',
          url: 'mailto:lautenschlaeger.laura@web.de'
        },
        {
          iconImg: 'icons/linkedIn.png',
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/lauriley/'
        },
        {
          iconImg: 'icons/gitHub.png',
          label: 'GitHub',
          url: 'https://github.com/xlauriley'
        }
      ]
    }
  },
  {
    id: 'credits',
    label: 'Credits.txt',
    iconImg: 'icons/txt.png',
    type: 'text',
    data: {
      content: `Credits\n═══════════════════\n\n🖥️  folgt........`
    }
  },
  {
    id: 'trash',
    label: 'Papierkorb',
    iconImg: 'icons/recycle_bin.png',
    type: 'folder' as const,
    data: {
      isTrash: true,
      children: [
        {
          id: 'old-home', label: 'Home-Wireframe.png',
          iconImg: 'icons/directoy_closed.png',
          type: 'project' as const,
          data: {
            id: 'old-entry',
            title: 'Alter Entwurf – Home',
            category: 'web',
            images: ['images/old-portfolio/Home.png'],
            description: 'Der ursprüngliche Home-Screen meines ersten Portfolio-Entwurfs.',
            technologies: ['Figma'],
          }
        }
      ]
    }
  }
];
