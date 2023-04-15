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
  name: '',
  src: '',
  header: '',
  description: '',
  meta: '',
};

/**
 * Aquarius (January 20 – February 18)
 * Pisces (February 19 – March 20)
 * Aries (March 21 – April 19)
 * Taurus (April 20 – May 20)
 * Gemini (May 21 – June 20)
 * Cancer (June 21 – July 22)
 * Leo (July 23 – August 22)
 * Virgo (August 23 – September 22)
 * Libra (September 23 – October 22)
 * Scorpio (October 23 – November 21)
 * Sagittarius (November 22 – December 21)
 * Capricorn (December 22 – January 19)
 */

const aquariusHCard: HCardInfo = {
  id: 0,
  name: 'aquarius',
  src: aquarius,
  header: 'Aquarius',
  description: 'Jan 20 Feb 18',
  meta: '',
};

const piscesHCard: HCardInfo = {
  id: 7,
  name: 'pisces',
  src: pisces,
  header: 'Pisces',
  description: 'Feb 19 Mar 20',
  meta: '',
};

const ariesHCard: HCardInfo = {
  id: 1,
  name: 'aries',
  src: aries,
  header: 'Aries',
  description: 'Mar 21 Apr 19',
  meta: '',
};

const taurusHCard: HCardInfo = {
  id: 10,
  name: 'taurus',
  src: taurus,
  header: 'Taurus',
  description: 'Apr 20 May 20',
  meta: '',
};

const geminiHCard: HCardInfo = {
  id: 4,
  name: 'gemini',
  src: gemini,
  header: 'Gemini',
  description: 'May 21 June 20',
  meta: '',
};

const cancerHCard: HCardInfo = {
  id: 2,
  name: 'cancer',
  src: cancer,
  header: 'Cancer',
  description: 'Jun 21 Jul 22',
  meta: '',
};

const leoHCard: HCardInfo = {
  id: 5,
  name: 'leo',
  src: leo,
  header: 'Leo',
  description: 'Jul 23 Aug 22',
  meta: '',
};

const virgoHCard: HCardInfo = {
  id: 11,
  name: 'virgo',
  src: virgo,
  header: 'Virgo',
  description: 'Aug 23 Sep 22',
  meta: '',
};

const libraHCard: HCardInfo = {
  id: 6,
  name: 'libra',
  src: libra,
  header: 'Libra',
  description: 'Sep 23 Oct 22',
  meta: '',
};

const scorpioHCard: HCardInfo = {
  id: 9,
  name: 'scorpio',
  src: scorpio,
  header: 'Scorpio',
  description: 'Oct 23 Nov 21',
  meta: '',
};
const sagittariusHCard: HCardInfo = {
  id: 8,
  name: 'sagittarius',
  src: sagittarius,
  header: 'Sagittarius',
  description: 'Nov 22 Dec 21',
  meta: '',
};

const capricornHCard: HCardInfo = {
  id: 3,
  name: 'capricorn',
  src: capricorn,
  header: 'Capricorn',
  description: 'Dec 22 Jan 19',
  meta: '',
};

export const hCardMapById: Map<number, HCardInfo> = new Map([
  [aquariusHCard.id, aquariusHCard],
  [piscesHCard.id, piscesHCard],
  [ariesHCard.id, ariesHCard],
  [taurusHCard.id, taurusHCard],
  [geminiHCard.id, geminiHCard],
  [cancerHCard.id, cancerHCard],
  [leoHCard.id, leoHCard],
  [virgoHCard.id, virgoHCard],
  [libraHCard.id, libraHCard],
  [scorpioHCard.id, scorpioHCard],
  [sagittariusHCard.id, sagittariusHCard],
  [capricornHCard.id, capricornHCard],
]);

export const hCardMapByName: Map<string, HCardInfo> = new Map([
  [aquariusHCard.name, aquariusHCard],
  [piscesHCard.name, piscesHCard],
  [ariesHCard.name, ariesHCard],
  [taurusHCard.name, taurusHCard],
  [geminiHCard.name, geminiHCard],
  [cancerHCard.name, cancerHCard],
  [leoHCard.name, leoHCard],
  [virgoHCard.name, virgoHCard],
  [libraHCard.name, libraHCard],
  [scorpioHCard.name, scorpioHCard],
  [sagittariusHCard.name, sagittariusHCard],
  [capricornHCard.name, capricornHCard],
]);
