# 404 Page - Visual Design Guide

## 🎨 Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                     NAVBAR                          │
│           (Existing - Always visible)               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Background Blob - Top Right]          │
│                                                     │
│                      404                            │
│                   ─────────                         │
│               (Large, Red Gradient)                 │
│                                                     │
│               Page Not Found                        │
│         (Dark Gray, Bold Heading)                   │
│                                                     │
│     Oops! The page you're looking for doesn't       │
│     exist. It might have been moved, deleted,       │
│     or the URL might be incorrect.                  │
│          (Gray, Regular Text)                       │
│                                                     │
│   ┌───────────────────┐  ┌──────────────────┐     │
│   │ 🏠 Go Back Home  │  │  ← Go Back       │     │
│   │   (Red Button)   │  │  (Ghost Button)   │     │
│   └───────────────────┘  └──────────────────┘     │
│                                                     │
│   ┌─────────────────────────────────────────┐     │
│   │        Quick Links:                      │     │
│   │  ┌────────┐ ┌────────┐ ┌─────────┐     │     │
│   │  │  SEO   │ │ Social │ │   Web   │      │     │
│   │  │Services│ │ Media  │ │  Dev    │      │     │
│   │  └────────┘ └────────┘ └─────────┘     │     │
│   │  ┌────────────────────────────────┐     │     │
│   │  │      Contact Us                │     │     │
│   │  └────────────────────────────────┘     │     │
│   └─────────────────────────────────────────┘     │
│                                                     │
│          [Background Blob - Bottom Left]            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette

### Primary Colors
- **Cherry Red**: `#C1121F` (Buttons, 404 number)
- **Dark Cherry**: `#A00F19` (Gradient end, hover states)
- **Cherry Pale**: `#FFF1F2` (Subtle backgrounds)

### Text Colors
- **Dark**: `#111111` (Headings)
- **Body**: `#374151` (Regular text)
- **Muted**: `#6B7280` (Secondary text)

### Background Colors
- **White**: `#FFFFFF` (Main background)
- **Light Gray**: `#F9FAFB` (Gradient background)
- **Border**: `#E5E7EB` (Card borders)

---

## 📐 Typography

### 404 Number
- **Font Size**: 80px - 180px (responsive)
- **Font Weight**: 900 (Black)
- **Color**: Linear gradient (Cherry red to dark cherry)
- **Line Height**: 1
- **Letter Spacing**: -0.04em

### Page Title ("Page Not Found")
- **Font Size**: 28px - 42px (responsive)
- **Font Weight**: 900
- **Color**: #111111 (Dark)
- **Line Height**: 1.2
- **Letter Spacing**: -0.02em

### Description Text
- **Font Size**: 17px
- **Font Weight**: 400 (Regular)
- **Color**: #6B7280 (Muted)
- **Line Height**: 1.7
- **Max Width**: 560px

### Buttons
- **Font Size**: 15px
- **Font Weight**: 700 (Bold)
- **Border Radius**: 100px (Fully rounded)

### Quick Links Label
- **Font Size**: 13px
- **Font Weight**: 700
- **Text Transform**: Uppercase
- **Letter Spacing**: 0.08em

---

## 🎭 Component Hierarchy

```
NotFound (Container)
├── not-found__blob--1 (Decorative)
├── not-found__blob--2 (Decorative)
└── not-found__container
    └── not-found__content
        ├── not-found__number-wrap
        │   ├── not-found__number (404)
        │   └── not-found__number-shadow (Shadow effect)
        ├── not-found__title (Page Not Found)
        ├── not-found__message (Description)
        ├── not-found__actions
        │   ├── not-found__btn--primary (Go Back Home)
        │   └── not-found__btn--ghost (Go Back)
        └── not-found__links
            ├── not-found__links-label
            └── not-found__links-grid
                ├── not-found__link (SEO Services)
                ├── not-found__link (Social Media)
                ├── not-found__link (Web Development)
                └── not-found__link (Contact Us)
```

---

## 📱 Responsive Behavior

### Desktop (> 768px)
```
┌────────────────────────────────────┐
│                                    │
│              404                   │
│        Page Not Found              │
│     Description text here...       │
│                                    │
│  [Go Back Home]  [Go Back]        │
│                                    │
│  [SEO] [Social] [Web Dev] [Contact]│
│                                    │
└────────────────────────────────────┘
```

### Tablet (≤ 768px)
```
┌──────────────────────┐
│                      │
│        404           │
│   Page Not Found     │
│  Description...      │
│                      │
│  [Go Back Home]      │
│  [Go Back]           │
│                      │
│  [SEO] [Social]      │
│  [Web]  [Contact]    │
│                      │
└──────────────────────┘
```

### Mobile (≤ 480px)
```
┌────────────┐
│            │
│    404     │
│ Page Not   │
│   Found    │
│Description │
│            │
│[Go Back    │
│  Home]     │
│[Go Back]   │
│            │
│   [SEO]    │
│  [Social]  │
│   [Web]    │
│ [Contact]  │
│            │
└────────────┘
```

---

## ✨ Animation Details

### Page Load
- **Fade In Up**: 0.8s ease-out
- **Start**: opacity 0, translateY(30px)
- **End**: opacity 1, translateY(0)

### 404 Number
- **Pulse Animation**: 3s infinite
- **Scale**: 1 → 1.02 → 1

### Background Blobs
- **Blob 1**: 20s drift animation
- **Blob 2**: 26s drift animation (reverse)
- **Movement**: translate + scale

### Hover Effects
- **Buttons**: translateY(-2px) + shadow increase
- **Quick Links**: border color change + translateY(-2px)
- **Duration**: 0.3s cubic-bezier

---

## 🎯 Interactive States

### Primary Button ("Go Back Home")
```css
Default:  Red background, white text, shadow
Hover:    Lift up 2px, larger shadow
Active:   Press down effect
Focus:    Visible outline
```

### Ghost Button ("Go Back")
```css
Default:  White background, gray border, dark text
Hover:    Red border, lift up, subtle shadow
Active:   Press down effect
Focus:    Visible outline
```

### Quick Links
```css
Default:  White background, gray border, dark text
Hover:    Red border, red text, lift up
Active:   Press down effect
Focus:    Visible outline
```

---

## 📏 Spacing & Sizing

### Container
- **Max Width**: 800px
- **Padding**: 80px 24px 60px (top, horizontal, bottom)

### Content Spacing
- **404 Number → Title**: 32px margin-bottom
- **Title → Message**: 20px margin-bottom
- **Message → Actions**: 40px margin-bottom
- **Actions → Quick Links**: 60px margin-bottom

### Button Sizing
- **Padding**: 15px 32px
- **Gap between buttons**: 16px

### Quick Links
- **Card Padding**: 32px 28px
- **Grid Gap**: 12px
- **Link Padding**: 12px 20px

---

## 🎪 Decorative Elements

### Background Blobs
```
Blob 1:
- Size: 600px × 500px
- Color: Soft cherry pale gradient
- Position: Top right
- Blur: 100px
- Animation: Slow drift

Blob 2:
- Size: 420px × 360px
- Color: Light cherry gradient
- Position: Bottom left
- Blur: 100px
- Animation: Slow drift (reverse)
```

### Shadow Effects
```
404 Number Shadow:
- Color: rgba(193, 18, 31, 0.08)
- Offset: 8px down
- Position: Absolute behind number
```

---

## 🔤 Icon Usage

### Icons in Buttons
- **Home Icon**: House shape with roof
- **Back Arrow**: Left-pointing arrow
- **Size**: 20px × 20px
- **Stroke Width**: 2px
- **Color**: Inherits button color

---

## 📊 Visual Hierarchy

1. **404 Number** (Largest, most prominent)
2. **Page Title** (Secondary focus)
3. **Description** (Tertiary, readable)
4. **Action Buttons** (Primary CTA)
5. **Quick Links** (Helper navigation)

---

## 🎨 Design Principles Applied

- ✅ **Consistency**: Matches website's design system
- ✅ **Clarity**: Clear error message and actions
- ✅ **Hierarchy**: Visual weight guides user attention
- ✅ **Whitespace**: Ample spacing for readability
- ✅ **Color**: Limited palette for cohesion
- ✅ **Typography**: Consistent font usage
- ✅ **Accessibility**: High contrast, clear focus states
- ✅ **Responsiveness**: Adapts to all screen sizes

---

## 📸 Expected Visual Result

The 404 page should feel:
- **Professional** - Clean, polished design
- **Friendly** - Helpful messaging, not harsh
- **On-brand** - Matches Social Theka's identity
- **Clear** - Easy to understand and navigate
- **Modern** - Contemporary design patterns
- **Smooth** - Subtle animations enhance UX

---

This visual guide ensures the 404 page maintains consistency with the overall website design while providing an excellent user experience for visitors who encounter broken links or invalid URLs.
