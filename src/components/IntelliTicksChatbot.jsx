import  { useEffect } from 'react';

const IntelliTicksChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = `
      (function(I, L, T, i, c, k, s) {
        if(I.iticks) return;
        I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};
        var h = T.head || T.documentElement;
        var e = T.createElement(i);
        var l = I.location;
        e.async = true;
        e.src = (L||c)+'/client/inject-v2.min.js';
        h.insertBefore(e, h.firstChild);
        I.iticks.call = function(a, b) {
          I.iticks.queue.push([a, b]);
        };
      })(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'iDQxzToGD39GDKpPg_c', {});
    `;

    document.head.appendChild(script);
  }, []);

  return null;
};

export default IntelliTicksChatbot;
