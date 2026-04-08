import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: "Meine Bachelor-arbeit",
    category: 'web',
    icon: 'icons/website-icon.png',
    images: [
      'images/project-1/Startseite.png',
      'images/project-1/Über-mich.png',
      'images/project-1/Leistungen.png',
      'images/project-1/Buchung.png',
      'images/project-1/FAQ-smart.png',
      'images/project-1/kontakt-smart.png',
    ],
    description: 'Im Rahmen meiner Bachelorarbeit untersuchte ich, welchen Einfluss visuelle Gestaltungselemente – insbesondere Farben, Formen und Animationen – auf Vertrauen, Nutzererfahrung und Buchungsbereitschaft auf Tiersitter-Plattformen haben. Auf Basis einer Fokusgruppe und ausführlicher Theorierecherche entwickelte ich ein vollständiges Konzept für Desktop und Smartphone: von ersten Skizzen über Wireframes bis hin zu einem High-Fidelity Prototyp, der abschließend in Usability-Tests evaluiert wurde. Die anschließende Umsetzung der Webseite erfolgte mit Angular nach dem Bachelorabschluss.',
    technologies: ['Adobe XD', 'HTML', 'CSS', 'JavaScript', 'Angular'],
    link: 'https://github.com/xlauriley/fabis-katzensitterservice',
    linkLabel: 'Code auschecken'
  },
  {
    id: '02',
    title: "Website Relaunch - Kögel",
    category: 'web',
    icon: 'icons/website-icon.png',
    images: [
      'images/project-2/Startseite.png',
      'images/project-2/Über-mich.png',
      'images/project-2/Leistungen.png'
    ],
    description: 'Relaunch der bestehenden Website von Michael Kögel: Die Seite wurde vollständig neu aufgesetzt, der Code modernisiert und das Design behutsam überarbeitet. Anlass war ein Wechsel des Hosting-Anbieters, der eine neue, saubere Codeversion erforderte.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://human-centered-digital-transformation.com/',
    linkLabel: 'Website besuchen'
  },
  {
    id: '03',
    title: "Website-Relaunch - Tuttelberg",
    category: 'web',
    icon: 'icons/website-icon.png',
    images: [
      'images/project-3/Startseite.png',
      'images/project-3/Kontakt.png',
      'images/project-3/Karriere.png'
    ],
    description: 'Neugestaltung und Relaunch der Unternehmenswebsite mit Jimdo. Ziel war eine übersichtlichere Struktur und ein moderneres Erscheinungsbild – mit klarem Fokus auf eine ansprechende Nutzerführung.',
    technologies: ['Jimdo'],
    link: 'https://www.dienstleistungen-tuttelberg.de/',
    linkLabel: 'Website besuchen'
  },
  {
    id: '04',
    title: "Studium Modul",
    category: 'web',
    icon: 'icons/website-icon.png',
    images: [
      'images/project-4/homepage.png',
      'images/project-4/leistungen.png',
      'images/project-4/reparatur-page.png',
      'images/project-4/leistungen-smart.png',
      'images/project-4/reparatur-page-smart.png'
    ],
    description: 'Relaunch der Website für Elektro Bleh, einem lokalen Elektrobetrieb. Die Seite wurde von Grund auf neu entwickelt – mit modernerem Code und überarbeitetem Design. Die Firma existiert inzwischen nicht mehr, der Code ist jedoch auf GitHub einsehbar.',
    technologies: ['Adobe XD', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/xlauriley/elektro-bleh',
    linkLabel: 'Code auschecken'
  },
  {
    id: '05',
    title: "Fabi's kleiner Katzensitter-Service",
    category: 'logo',
    icon: 'icons/logo-icon.png',
    images: [
      'images/project-5/logo-final.png',
      'images/project-5/heckscheibe.jpeg'
    ],
    description: 'Logoentwicklung für Fabis kleinen Katzensitter-Service. Das Logo wurde für verschiedene Einsatzbereiche erstellt: Website, Instagram-Auftritt sowie als Werbegrafik für die Auto-Heckscheibe.',
    technologies: ['Adobe Illustrator'],
    link: 'https://www.instagram.com/fabiskatzensitten',
    linkLabel: 'Auf Instagram ansehen'
  },
  {
    id: '06',
    title: "Cupcake Fee",
    category: 'logo',
    icon: 'icons/logo-icon.png',
    images: [
      'images/project-6/logo-final.png',
      'images/project-6/visitenkarte-front.jpeg',
      'images/project-6/visitenkarte-back.jpeg'
    ],
    description: 'Logodesign für das Café Cupcake Fee. Das verspielte Erscheinungsbild spiegelt den Charakter des Projekts wider – süß, kreativ und einprägsam.',
    technologies: ['Adobe Illustrator'],
    link: 'https://www.instagram.com/cupcakefee.speyer/',
    linkLabel: 'Auf Instagram ansehen'
  },
  {
    id: '07',
    title: "Spray n' Skate 2023",
    category: 'print',
    icon: 'icons/print-icon.png',
    images: [
      'images/project-7/SNS-Plakat-23.png',
      'images/project-7/SNS-23-Flyer-front.png',
      'images/project-7/SNS-23-Flyer-back.png'
    ],
    description: 'Plakat- und Flyerdesign für das Event "Spray n Skate" in Schifferstadt – in zwei aufeinanderfolgenden Jahren. Die Gestaltung sollte die Energie und Ästhetik der Szene einfangen und gleichzeitig alle wichtigen Infos klar kommunizieren.',
    technologies: ['Adobe Illustrator'],
    link: 'https://www.instagram.com/arts.of.bass/',
    linkLabel: 'Auf Instagram ansehen'
  },
  {
    id: '08',
    title: "Spray n' Skate 2024",
    category: 'print',
    icon: 'icons/print-icon.png',
    images: [
      'images/project-7/SNS-Plakat-24.png',
      'images/project-7/SNS24-Flyer-front.jpg',
      'images/project-7/SNS24-Flyer-back.jpg'
    ],
    description: 'Plakat- und Flyerdesign für das Event "Spray n Skate" in Schifferstadt – in zwei aufeinanderfolgenden Jahren. Die Gestaltung sollte die Energie und Ästhetik der Szene einfangen und gleichzeitig alle wichtigen Infos klar kommunizieren.',
    technologies: ['Adobe Illustrator'],
    link: 'https://www.instagram.com/arts.of.bass/',
    linkLabel: 'Auf Instagram ansehen'
  },
  {
    id: '09',
    title: "Note the Road",
    category: 'game',
    icon: 'icons/games-icon.png',
    images: [
      'images/project-8/Menu-screen.png',
      'images/project-8/track-1.png',
      'images/project-8/track-2.png',
      'images/project-8/result-screen.png',
      'images/project-8/credit-scene.png'
    ],
    description: 'Im Januar 2026 nahm ich gemeinsam mit fünf Freunden an der Game Jam in Karlsruhe teil. In kurzer Zeit entstand ein vollständiges kleines Spiel – mein Beitrag lag im visuellen Design: Ich gestaltete Spielgegenstände, Charaktere und Fahrzeuge sowie alle Bildschirmmasken wie Startscreen, Ergebnisanzeige und Creditscene.',
    technologies: ['Adobe Illustrator'],
    link: 'https://globalgamejam.org/games/2026/note-road-1',
    linkLabel: 'Spiel ansehen'
  },
  {
    id: '10',
    title: "Squire Quest",
    category: 'game',
    icon: 'icons/games-icon.png',
    images: [
      'images/project-9/Spielumgebung.png',
      'images/project-9/Startscreen.png',
      'images/project-9/ingame-screenshot.png'
    ],
    description: 'Squire Quest ist ein 3D-Unity-Spiel, das im Rahmen meines X-Reality Moduls an der IU entstand. Das Spiel wurde konzipiert als spielerische Lösung für das Onboarding von Auszubildenden.',
    technologies: ['Unity', 'Canva', 'Adobe Illustrator', 'Mixamo'],
    link: 'https://xbutterbirne.itch.io/squire-quest',
    linkLabel: 'Spiel spielen'
  }
];
