import { DesktopIcon } from '../models/desktop-icon.model';
import { PROJECTS } from './projects.data';

export const DESKTOP_ICONS: DesktopIcon[] = [
  {
    id: 'home',
    label: 'Home',
    iconImg: 'icons/computer.png',
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
    iconImg: 'icons/about-me.png',
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
      type: 'credits',
      header: `Credits\n═══════════════════\n\n`,
      links: [
        {
          label: 'Asset: 98.css',
          url: 'https://jdan.github.io/98.css'
        },
        {
          label: 'Asset: Frutiger Aero Archive',
          url: 'https://frutigeraeroarchive.org/'
        },
        {
          label: 'Asset: minesweeper',
          url: 'https://github.com/minesweeper/minesweeper.github.io'
        },
        {
          label: 'Asset: jspaint',
          url: 'https://github.com/1j01/jspaint'
        },
        {
          label: 'Asset: Cursor Set',
          url: 'https://www.rw-designer.com/cursor-set/plittlestar-mimidestin0h'
        },
        {
          label: 'Inspo: lostlove.neocities.org',
          url: 'https://lostlove.neocities.org/'
        },
        {
          label: 'Inspo: nenrikido.neocities.org',
          url: 'https://nenrikido.neocities.org/'
        },
        {
          label: 'Unbedingt anschauen: blamensir.neocities.org',
          url: 'https://blamensir.neocities.org/'
        },
        {
          label: 'Unbedingt anschauen: espy.world',
          url: 'https://espy.world/'
        },
        {
          label: 'Unbedingt anschauen: irony-machine.neocities.org',
          url: 'https://irony-machine.neocities.org/'
        },
      ]
    }
  },
  {
    id: 'minesweeper',
    label: 'Minesweeper',
    iconImg: 'icons/minesweeper.png',
    type: 'minesweeper',
    data: {},
  },
  {
    id: 'paint',
    label: 'Paint',
    iconImg: 'icons/paint-icon.png',
    type: 'paint',
    data: {},
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
          id: 'old-home', label: 'Alter Entwurf',
          iconImg: 'icons/old-portfolio.png',
          type: 'project' as const,
          data: {
            id: 'old-entry',
            title: 'Alter Entwurf',
            category: 'web',
            images: ['images/old-portfolio/wireframe.png',
              'images/old-portfolio/screenshot-entry.png',
              'images/old-portfolio/screenshot-home.png',
              'images/old-portfolio/screenshot-details.png',
              'images/old-portfolio/screenshot-homeNEW.png'
            ],
          description: 'Dieser Entwurf zeigt die erste Designrichtung meines Portfolios. Ausgangspunkt war die Idee eines großen Sterns als Entry-Point, von dem aus man zur Startseite gelangt. Die Projekte sind dort als Grid angeordnet und führen per Klick zur jeweiligen Detailansicht. Nach einer ersten Feedbackrunde wurde jedoch deutlich, dass das Design insgesamt zu verspielt wirkte. Ich habe daraufhin noch Anpassungen vorgenommen, trotzdem fühlte sich das Konzept für mich nicht mehr richtig an. Weshalb ich mich entschieden habe, die Richtung komplett neu zu denken. Dieser Entwurf stellt damit einen wichtigen Zwischenschritt in meinem Entwicklungsprozess dar.',
            technologies: ['Figma', 'Angular', 'HTML', 'CSS', 'Typescript'],
          }
        }
      ]
    }
  }
];
