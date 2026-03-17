import PageHero from '../components/PageHero';
import VisualTile from '../components/VisualTile';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function GalleryPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Work / gallery',
        titleLines: ['Projects', '& gallery'],
        copy:
          'A visual page ready to host real project imagery: vehicles, interventions, before / after, portrait and working environment.',
        actions: [{ label: 'Contact RG Auto Conseil', to: '/contact' }],
      }
    : {
        label: 'Réalisations / galerie',
        titleLines: ['Réalisations', '& galerie'],
        copy:
          'Une page visuelle prête à accueillir les photos réelles du projet : véhicules, interventions, avant / après, portrait et environnement de travail.',
        actions: [{ label: 'Contacter RG Auto Conseil', to: '/contact' }],
      };

  const note = isEnglish
    ? 'The visuals below serve as immediate art direction and can be replaced later by real RG Auto Conseil imagery without changing the structure.'
    : 'Les visuels ci-dessous servent de direction artistique immédiate et pourront être remplacés ensuite par les photos réelles de RG Auto Conseil sans changer la structure.';

  const items = isEnglish
    ? [
        {
          title: 'Vehicles',
          eyebrow: 'Vehicle photos',
          description: 'Main hero visuals to express the automotive passion and the quality of the selections.',
          image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1600',
        },
        {
          title: 'Interventions',
          eyebrow: 'Field work',
          description: 'Images centered on inspection, checking and intervention details around the vehicle.',
          image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1600',
        },
        {
          title: 'Before / after',
          eyebrow: 'Comparison',
          description: 'A block ready to showcase a visible gain, equipment fitting or optimisation work.',
          beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
          afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
          variant: 'beforeAfter',
          beforeLabel: 'Before',
          afterLabel: 'After',
        },
        {
          title: 'Portrait',
          eyebrow: 'Photo of Gaëtan',
          description: 'Reserved space for a portrait to make the expertise and contact pages more personal.',
          variant: 'placeholder',
        },
        {
          title: 'Workshop / environment',
          eyebrow: 'Working environment',
          description: 'To show the intervention context and reinforce a sense of method, control and care.',
          image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1600',
        },
      ]
    : [
        {
          title: 'Véhicules',
          eyebrow: 'Photos de véhicules',
          description: 'Visuels principaux pour exprimer la passion automobile et la qualité des sélections.',
          image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1600',
        },
        {
          title: 'Interventions',
          eyebrow: 'Photos d’interventions',
          description: 'Images centrées sur l’inspection, le contrôle et les détails d’intervention autour du véhicule.',
          image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1600',
        },
        {
          title: 'Avant / après',
          eyebrow: 'Comparatif',
          description: 'Un bloc prêt à montrer un gain visuel, un montage d’équipement ou une optimisation.',
          beforeImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
          afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
          variant: 'beforeAfter',
          beforeLabel: 'Avant',
          afterLabel: 'Après',
        },
        {
          title: 'Portrait',
          eyebrow: 'Photo de Gaëtan',
          description: 'Emplacement réservé à un portrait pour personnaliser les pages expertise et contact.',
          variant: 'placeholder',
        },
        {
          title: 'Atelier / environnement',
          eyebrow: 'Environnement de travail',
          description: 'Pour montrer le contexte d’intervention et installer une sensation de méthode et de maîtrise.',
          image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1600',
        },
      ];

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section">
        <div className="content-shell">
          <div className="services-intro gs-scroll-fade-up">
            <SectionLabel>{isEnglish ? 'Visual direction' : 'Direction visuelle'}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              {isEnglish ? 'A gallery ready for real project visuals.' : 'Une galerie prête à accueillir les vrais visuels.'}
            </h2>
            <p className="section-copy">{note}</p>
          </div>

          <div className="visual-grid">
            {items.map((item) => (
              <VisualTile key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
