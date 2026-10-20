# 🚀 Shopify Checkout UI Upsell Eklentisi

[🇬🇧 English](README.md) · [🇹🇷 Türkçe](README.tr.md)

> Shopify Checkout Extensibility mimarisi üzerine kurulu, ödeme adımı içinde doğrudan çalışan hafif ek satış (upsell / cross-sell) bileşeni.

Geliştirici ve Bakım Sorumlusu: **[Harun Sekmen](https://github.com/harunsekmen)** — E-Ticaret Sistem Mühendisi & WooCommerce Uzmanı.

[✉️ İletişime Geç](mailto:sekmenwp@gmail.com) · [💼 Upwork Profili](https://www.upwork.com/freelancers/~01a7a8b58043e6e6d9) · [🔗 GitHub Ana Profil](https://github.com/harunsekmen)

---

## 📸 Görsel Önizlemeler ve Yönetim Paneli

### 1. Ödeme Sayfası İçi Ek Satış Görünümü
Müşterinin sepet tutarına göre dinamik ürün öneren ve tek tıkla sepete ekleyen modern arayüz:

![Shopify Checkout Upsell Önizlemesi](docs/assets/checkout-upsell-preview.png)

---

## ⚡ Çözdüğü Kritik Sorun

Shopify mağazalarında ortalama sipariş değerini (AOV) artırmak için kullanılan üçüncü parti ek satış uygulamaları:
- **Aylık Yüksek Ücretler:** Temel bir ek satış için ayda $30-$100 arası abonelik ücreti veya ek komisyon kesilir.
- **Eski checkout.liquid Bağımlılığı:** Shopify'ın artık desteklemediği eski mimaride çalışarak uyumluluk sorunlarına yol açar.
- **Yavaş Yükleme:** Harici script'ler ödeme sayfasının açılışını geciktirerek dönüşümü düşürür.

Bu eklenti, Shopify'ın en güncel Checkout UI Extensions API'sini kullanarak doğrudan ödeme akışı içinde sıfır gecikmeyle çalışır.

---

## 🛠️ Öne Çıkan Özellikler

- **Yerel Checkout Entegrasyonu:** Shopify'ın resmi Checkout Extensibility altyapısıyla %100 uyumludur.
- **Tek Tıkla Sepete Ekleme:** Müşteri ödeme bilgilerini doldururken ek ürünü tek tıkla siparişine dahil edebilir.
- **Sıfır Aylık Maliyet:** Üçüncü parti SaaS aboneliklerine ihtiyaç duymadan mağazanın kendi altyapısında çalışır.
- **Akıllı Kural Motoru:** Sepetteki ürünlere veya minimum sepet tutarına göre dinamik öneriler sunar.

---

## 🏗️ Teknik Mimari ve Standartlar

`Shopify Checkout UI Extensions` • `React / Preact` • `GraphQL Storefront API` • `TypeScript`

---

## 🚀 Kurulum ve Test

1. Depoyu klonlayın ve paketleri kurun:
   ```bash
   git clone https://github.com/harunsekmen/shopify-checkout-upsell-extensibility.git
   cd shopify-checkout-upsell-extensibility && npm install
   ```
2. Testleri çalıştırın:
   ```bash
   node tests/test-extension.js
   ```

---

## 📄 Lisans

Bu proje **GPL-3.0 Lisansı** ile açık kaynak olarak sunulmaktadır.
