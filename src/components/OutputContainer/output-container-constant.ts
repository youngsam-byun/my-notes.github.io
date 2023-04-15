export type HoroscopeResultType = {
  horoscope: string;
  characteristic: string;
  today: string;
  age: string;
  gender: string;
  sex: string;
  numbers: string;
  colors: string;
  things: string;
  people: string;
};

export const getDefaultObjectOfHoroscopeResultType = () => {
  return {
    horoscope: '',
    characteristic: '',
    today: '',
    age: '',
    gender: '',
    sex: '',
    numbers: '',
    colors: '',
    things: '',
    people: '',
  };
};

export const sampleResponpse: HoroscopeResultType = {
  horoscope: 'libra',
  characteristic:
    'Libras are known for their balanced and fair nature. They are often social, charming, and enjoy being around others. They can also be indecisive and may struggle with making decisions, especially when it comes to important matters.',
  today:
    "You may find yourself struggling with a decision today. Take your time and weigh your options carefully before making a choice. Trust your intuition and don't be swayed by others' opinions.",
  age: "At your age, Libras often focus on finding balance in their personal and professional lives. It's important to prioritize self-care and make time for both work and play.",
  gender:
    'Libra women are often natural caregivers and nurturers. They may find themselves drawn to careers in the helping professions, such as nursing or counseling.',
  sex: 'Libras value harmony and connection in their relationships. They may struggle with conflict or confrontation and prefer to avoid it when possible.',
  numbers: '7, 11, 21',
  colors: 'pink, blue, green',
  things: 'rose quartz, a balance scale, a piece of art',
  people:
    'Libras may need to be careful around people who are overly aggressive or confrontational. They may also struggle with those who are overly critical or judgmental.',
};
