import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

import image1 from '../../../../public/assets/Card3.png';
import image2 from '../../../../public/assets/Card2.png';
import image3 from '../../../../public/assets/Card3.png';

const TaxiPage = () => {
  return (
    <>
      <Section1
        data={{
          title: 'Xmoveon Taxi',
          highlightText1: 'Branded Ride-',
          highlightText2: 'Hailing Platform',
          subTitle: 'Connect drivers and passengers instantly.',
          description:
            'Build your own taxi booking app like Uber or Bolt — fully white-label, one-time purchase, and no recurring fees.',
          image: '/path-to-your-taxi-image.jpg',
          category: 'Taxi',
        }}
      />
      <Section2
        data={{
          titleHighlight: 'Trusted by Taxi',
          titleMain: 'Startups and Fleet Owners Worldwide',
          description: 'Join hundreds of growing mobility businesses already powered by Xmoveon.',
          featureTitle: 'Perfect for',
          features: [
            'Fleet owners modernizing their dispatch systems',
            'Entrepreneurs launching local ride-hailing startups',
            'Agencies building white-label transport apps',
          ],
          images: [image1, image2, image3],
        }}
      />
      <Section3
        data={{
          sideTitle: 'Why Choose \n Xmoveon Taxi',
          mainTitleHighlight: 'Built for Scale.',
          mainTitlePlain: 'Designed for Success.',
          topDescription:
            'Xmoveon combines power, performance, and flexibility — helping you go live faster while owning your technology outright.',
          showcaseImage: image1,
          features: [
            {
              icon: '☰',
              title: 'One-Time License',
              desc: 'No subscriptions. Pay once, own forever.',
            },
            {
              icon: '📲',
              title: 'Native iOS & Android Apps',
              desc: 'Smooth, responsive, and intuitive.',
            },
            {
              icon: '⚖️',
              title: 'Advanced Dispatch System',
              desc: 'Match riders and drivers in real time.',
            },
            {
              icon: '💻',
              title: 'Powerful Admin Dashboard',
              desc: 'Monitor trips, earnings, and performance metrics.',
            },
            {
              icon: '🏳️',
              title: 'Customizable & White-Label',
              desc: 'Your brand, your colors, your rules.',
            },
          ],
        }}
      />
    </>
  );
};

export default TaxiPage;
