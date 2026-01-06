"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Tarayıcının otomatik scroll hatırlama özelliğini kapat
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Sayfayı en tepeye kaydır
    window.scrollTo(0, 0);
  }, [pathname]); // Sayfa (rota) değiştiğinde de tetikle

  return null;
}