import { Row } from 'shared/ui';
import { Column } from 'shared/ui';

import styles from './Song.module.css';

export const Song = () => {
  return (
    <section>
      <Row className={styles.song}>
        <i className={styles.icon + ' fas fa-play'} />
        <Column>
          <p> 1967</p>
          <h2>Nowhere to run</h2>
          <h3>Martha Reeves</h3>
        </Column>
        <i className="far fa-heart" />
      </Row>
    </section>
  );
};
