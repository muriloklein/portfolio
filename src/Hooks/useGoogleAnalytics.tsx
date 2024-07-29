import { useEffect } from "react";

const useGoogleAnalytics = (trackingId: string) => {
  useEffect(() => {
    // Adiciona a tag de script do Google Analytics ao head
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Adiciona o código de configuração do Google Analytics
    const scriptContent = document.createElement("script");
    scriptContent.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(scriptContent);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(scriptContent);
    };
  }, [trackingId]);
};

export default useGoogleAnalytics;
