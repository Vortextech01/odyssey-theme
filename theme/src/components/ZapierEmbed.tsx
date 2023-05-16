import React, { useEffect } from 'react';

const ZapierEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <zapier-interfaces-page-embed page-id='clgrpxnef0009l20f4dr27nrd' no-background='true' style={{maxWidth: '900px', height: '500px'}}></zapier-interfaces-page-embed>
  );
};

export default ZapierEmbed;
