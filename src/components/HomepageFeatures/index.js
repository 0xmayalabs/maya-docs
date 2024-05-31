import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Privacy Focused',
    Svg: require('@site/static/img/privacy.svg').default,
    description: (
      <>
          Maya ensures the authenticity of media with a zero-knowledge approach,
          preserving privacy while providing robust verification.
      </>
    ),
  },
  {
    title: 'Credibly Neutral',
    Svg: require('@site/static/img/decentralized.svg').default,
    description: (
      <>
        Maya is a decentralized, credibly neutral protocol that removes the need for
          trust in centralized institutions.
      </>
    ),
  },
  {
    title: 'Secure Technology',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
          Maya leverages advanced cryptographic techniques to provide secure
          verification eliminating human errors.
      </>
    ),
  },
    {
        title: 'Trustless verification',
        Svg: require('@site/static/img/verified.svg').default,
        description: (
            <>
                Maya allows permissionless content verification by
                eliminating the reliance on third-party attestations.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
