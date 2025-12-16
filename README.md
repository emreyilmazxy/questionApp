# 🎯 Question App - Bilgi Yarışması

React ve TypeScript ile geliştirilmiş interaktif bir bilgi yarışması uygulaması.

🔗 **[Canlı Demo](https://glittering-lokum-2a1538.netlify.app/)**

<p>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite" alt="Vite" />
</p>

## 📋 Özellikler

- ⏱️ **30 Saniye Timer** - Her soru için geri sayım
- 🔒 **4 Saniye Bekleme** - Şıklar ilk 4 saniye gizli kalır
- 📊 **Skor Takibi** - Doğru, yanlış ve boş cevaplar sayılır
- 🚫 **Tek Yön** - Geçmiş sorulara dönüş yok
- 📱 **Responsive Tasarım** - Mobil uyumlu arayüz
- 🎨 **Modern UI** - Animasyonlu ve kullanıcı dostu

## 🚀 Kurulum

```bash
# Projeyi klonlayın
git clone <repo-url>
cd questionApp

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 📁 Proje Yapısı

```
src/
├── App.tsx                 # Ana uygulama bileşeni
├── App.css                 # Ana stiller
├── questions.ts            # Soru verileri ve tipler
├── assets/
│   └── images/
│       └── index.ts        # Görsel exportları
└── components/
    ├── buttons/            # Yeniden kullanılabilir buttons
    │   ├── buttons.tsx
    │   ├── buttons.css
    │   └── index.ts
    ├── question-card/      # Soru kartı bileşeni
    │   ├── question-card.tsx
    │   ├── question-card.css
    │   └── index.ts
    ├── result-screen/      # Sonuç ekranı
    │   ├── result-screen.tsx
    │   ├── result-screen.css
    │   └── index.ts
    └── start-test/         # Başlangıç ekranı
        ├── start-test.tsx
        ├── startTest.css
        └── index.ts
```

## 🎮 Nasıl Oynanır?

1. **Teste Başla** butonuna tıklayın
2. Her soru için 30 saniyeniz var
3. İlk 4 saniye şıklar gizlidir - soruyu okuyun!
4. Şıklardan birini seçin veya süre dolsun
5. Tüm sorular bittiğinde skorunuzu görün
6. **Tekrar Dene** ile yeniden başlayın

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React 19 | UI framework |
| TypeScript | Tip güvenliği |
| Vite | Build tool & dev server |
| ESLint | Kod kalitesi |

## 📜 Scriptler

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
npm run lint     # Kod analizi
```

## 🎨 Bileşen Kullanımı

### Button Component

```tsx
import { Button } from './components/buttons';

// Primary buton
<Button variant="primary" onClick={handleClick}>
  Tıkla
</Button>

// Şık butonu
<Button variant="option" onClick={handleAnswer}>
  Cevap A
</Button>
```

### QuestionCard Props

| Prop | Tip | Açıklama |
|------|-----|----------|
| image | string | Soru görseli |
| question | string | Soru metni |
| options | string[] | Şıklar |
| onAnswer | function | Cevap callback |
| timeLeft | number | Kalan süre |
| optionsVisible | boolean | Şık görünürlüğü |

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Patika.dev** Front-end Bootcamp - Week 11
