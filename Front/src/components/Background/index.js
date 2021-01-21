import BackgroundI from '../../../public/assets/mountains.jpg';

import './backgroundImage.scss';

export default () => (
  <div className="backgroundImage" style={{ backgroundImage: `url(${BackgroundI})` }} />
);
