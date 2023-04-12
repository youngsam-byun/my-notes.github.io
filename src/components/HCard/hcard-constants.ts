import aquarius from '../../assets/img/aquarius.svg';
import aries from '../../assets/img/aries.svg';
import cancer from '../../assets/img/cancer.svg';
import capricorn from '../../assets/img/capricorn.svg';
import gemini from '../../assets/img/gemini.svg';
import leo from '../../assets/img/leo.svg';
import libra from '../../assets/img/libra.svg';
import pisces from '../../assets/img/pisces.svg';
import sagittarius from '../../assets/img/sagittarius.svg';
import scorpio from '../../assets/img/scorpio.svg';
import taurus from '../../assets/img/taurus.svg';
import virgo from '../../assets/img/virgo.svg';

export interface HCardInfo {
  id: number;
  name: string;
  src: string;
  header: string;
  description: string;
  meta: string;
}

export const emptyHCard: HCardInfo = {
  id: -1,
  name: 'empty',
  src: '',
  header: '',
  description: '',
  meta: '',
};

const aquariusHCard: HCardInfo = {
  id: 0,
  name: 'aquarius',
  src: aquarius,
  header: 'Aquarius',
  description: 'Jan 20  Feb 18',
  meta: '',
};

const ariesHCard: HCardInfo = {
  id: 1,
  name: 'aries',
  src: aries,
  header: 'Aries',
  description: 'Mar 21 - Apr 19',
  meta: '',
};
const cancerHCard: HCardInfo = {
  id: 2,
  name: 'cancer',
  src: cancer,
  header: 'Cancer',
  description: 'Jun 22 - Jul 22',
  meta: '',
};
const capricornHCard: HCardInfo = {
  id: 3,
  name: 'capricorn',
  src: capricorn,
  header: 'Capricorn',
  description: 'Dec 22 - January 19',
  meta: '',
};

const geminiHCard: HCardInfo = {
  id: 4,
  name: 'gemini',
  src: gemini,
  header: 'Gemini',
  description: 'Apr 20 - May 20',
  meta: '',
};
const leoHCard: HCardInfo = {
  id: 5,
  name: 'leo',
  src: leo,
  header: 'Leo',
  description: 'Jul 23 - Aug 22',
  meta: '',
};
const libraHCard: HCardInfo = {
  id: 6,
  name: 'libra',
  src: libra,
  header: 'Libra',
  description: 'Sep 22 - Oct 23',
  meta: '',
};
const piscesHCard: HCardInfo = {
  id: 7,
  name: 'pisces',
  src: pisces,
  header: 'Pisces',
  description: 'Feb 19 - Mar 20',
  meta: '',
};
const sagittariusHCard: HCardInfo = {
  id: 8,
  name: 'sagittarius',
  src: sagittarius,
  header: 'Sagittarius',
  description: 'Nov 22 - Dec 21',
  meta: '',
};
const scorpioHCard: HCardInfo = {
  id: 9,
  name: 'scorpio',
  src: scorpio,
  header: 'Scorpio',
  description: 'Oct 23 - Nov 21',
  meta: '',
};

const taurusHCard: HCardInfo = {
  id: 10,
  name: 'taurus',
  src: taurus,
  header: 'Taurus',
  description: 'Apr 20 - May 20',
  meta: '',
};
const virgoHCard: HCardInfo = {
  id: 11,
  name: 'virgo',
  src: virgo,
  header: 'Virgo',
  description: 'Aug 23 - Sep 22',
  meta: '',
};

export const hMap: Map<string, HCardInfo> = new Map([
  [aquariusHCard.name, aquariusHCard],
  [ariesHCard.name, ariesHCard],
  [cancerHCard.name, cancerHCard],
  [capricornHCard.name, capricornHCard],
  [geminiHCard.name, geminiHCard],
  [leoHCard.name, leoHCard],
  [libraHCard.name, libraHCard],
  [libraHCard.name, libraHCard],
  [piscesHCard.name, piscesHCard],
  [sagittariusHCard.name, sagittariusHCard],
  [scorpioHCard.name, scorpioHCard],
  [taurusHCard.name, taurusHCard],
  [virgoHCard.name, virgoHCard],
]);
