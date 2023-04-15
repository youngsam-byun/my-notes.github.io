import React from 'react';

const globalFooter = () => {
  return (
    <div className="ui secondary segment">
      <p>
        Horoscopes are a popular tool used by astrologers to provide guidance
        and insight into our lives. They are based on the positioning of the
        planets, stars, and other celestial bodies at the time of our birth.
        Each of the twelve zodiac signs has its own unique horoscope that can
        give us a glimpse into the potential challenges and opportunities we may
        face in our lives.
      </p>
    </div>
  );
};

globalFooter.displayName = 'GlobalFooter';
const GlobalFooter = React.memo(globalFooter);
export { GlobalFooter };
