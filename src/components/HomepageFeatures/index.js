import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const SUPPORTED_IMAGE_EXTENSIONS = ['png', 'jpg', 'webp', 'svg','gif'];

function hasSupportedImageFormat(imagePath) {
  const extension = imagePath.split('.').pop()?.toLowerCase();
  return SUPPORTED_IMAGE_EXTENSIONS.includes(extension);
}
const FeatureList = [
  {
    title: 'Fundamentos',
    image: '/img/ia-gob6.webp',
    description: (
      <>
        Conozca los conceptos básicos de la Inteligencia Artificial y cómo aplicarlos en el ámbito gubernamental.
      </>
    ),
  },
  {
    title: 'Automatizaciones',
    image: '/img/ia-gob2.webp',
    description: (
      <>
        Aplique las herramientas de IA para la gestión de tareas y funciones administrativas.
      </>
    ),
  },
  {
    title: 'Gobernanza',
    image: '/img/ia-gob.webp',
    description: (
      <>
        Aprenda las mejores prácticas para la gobernanza de la Inteligencia Artificial en el sector público.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  if (!hasSupportedImageFormat(image)) {
    return null;
  }

  const imageUrl = useBaseUrl(image);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
