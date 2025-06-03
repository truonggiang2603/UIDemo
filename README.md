# Map Di sản - Vietnamese Heritage Discovery App

A beautiful, mobile-first web application for discovering and exploring Vietnamese cultural heritage sites, built with modern web technologies.

## 🌟 Features

### 📱 Mobile-First Design
- Responsive design optimized for mobile devices
- Touch-friendly interactions
- Native-like mobile experience
- Traditional Vietnamese design patterns and colors

### 🏛️ Heritage Discovery
- Explore Vietnamese cultural sites (temples, craft villages, food districts)
- Interactive map with heritage markers
- Detailed information about each site including:
  - Opening hours and practical information
  - Audio content duration
  - User ratings and reviews
  - Cultural significance

### 🗺️ Interactive Map
- SVG-based map visualization
- Clickable markers for different heritage types
- Filter system for different categories
- Overlay information cards

### 🎯 Trip Planning
- AI-powered trip suggestions
- Customizable options:
  - Duration (1 day to 2+ weeks)
  - Budget levels (budget-friendly to luxury)
  - Themes (food, history, crafts, spiritual)
- Pre-designed heritage routes

### 💬 Intelligent Chatbot
- Vietnamese heritage knowledge base
- Keyword-based responses
- Information about sites, food, culture
- Expandable chat interface

### ⭐ Personal Features
- Favorite spots with persistent storage
- User preferences saved locally
- Offline indicator and graceful degradation
- Real-time notifications

## 🛠️ Technology Stack

- **Frontend Framework**: Alpine.js (lightweight reactive framework)
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Bootstrap Icons (SVG)
- **Storage**: localStorage for user preferences
- **Architecture**: Modular JavaScript (ES6+)

## 📁 Project Structure

```
├── index.html          # Main HTML file with app structure
├── styles.css          # Complete CSS styling
├── app.js              # Core application logic and data
├── utils.js            # Extended page functionality
├── pages.js            # Additional page templates
├── dashboard.html      # Original single-file version
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone or download the project files**
   ```bash
   git clone [your-repo-url]
   cd heritage-map
   ```

2. **Start a local web server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve .
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

### Development Setup

No build process required! The app uses:
- CDN-hosted Tailwind CSS
- CDN-hosted Alpine.js
- Vanilla JavaScript modules

## 🎨 Design Features

### Color Palette
- **Primary**: `#D2691E` (Traditional Vietnamese orange)
- **Secondary**: `#006064` (Heritage teal)
- **Background**: `#F8F9FA` (Soft white)

### Components
- **Traditional patterns**: CSS-generated Vietnamese decorative borders
- **Spot cards**: Enhanced with ratings, favorites, and metadata
- **Navigation**: 5-tab bottom navigation with active states
- **Chatbot**: Floating button with expandable chat window
- **Notifications**: Toast-style notifications with auto-dismiss

## 📱 Pages & Navigation

### 1. **Home (Trang chủ)**
- Search functionality
- Heritage category filters
- Suggested spots carousel
- Quick trip planning access

### 2. **Map (Bản đồ)**
- Interactive SVG map
- Heritage site markers
- Filter menu overlay
- Spot information cards

### 3. **Trip Planner (Hành trình)**
- Duration selection
- Budget options
- Theme preferences
- Suggested routes

### 4. **Explore (Khám phá)**
- Detailed heritage site information
- Audio content previews
- Cultural significance
- Visiting information

### 5. **Profile (Cá nhân)**
- User statistics
- Saved places and trips
- Achievement system
- App settings

## 🔧 Customization

### Adding New Heritage Sites
Edit the `mockData.heritageSpots` array in `app.js`:

```javascript
{
    id: 5,
    name: "Your Heritage Site",
    description: "Description in Vietnamese",
    category: "temple|craft|food|art",
    tags: ["Tag1", "Tag2"],
    image: "SVG data URL or image path",
    location: { lat: 0.000, lng: 0.000 },
    audio: "Duration",
    rating: 4.5,
    reviews: 123,
    openHours: "HH:MM - HH:MM"
}
```

### Extending Chatbot Responses
Add new responses to `mockData.chatResponses`:

```javascript
{
    keywords: ["keyword1", "keyword2"],
    response: "Vietnamese response text"
}
```

### Styling Modifications
- Edit `styles.css` for custom styling
- Modify CSS custom properties in `:root` for theme colors
- Add new animations in the CSS animations section

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Features

- **Lightweight**: < 100KB total bundle size
- **Fast loading**: CDN-hosted dependencies
- **Offline-ready**: Graceful degradation when offline
- **Touch optimized**: 44px minimum touch targets
- **Accessible**: ARIA labels and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

### Development Guidelines
- Maintain Vietnamese language consistency
- Follow mobile-first design principles
- Keep cultural authenticity in content
- Test on multiple devices and browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Vietnamese cultural heritage information sources
- Traditional pattern inspirations
- Modern mobile app design best practices
- Open source community tools and libraries

## 📞 Contact

For questions or suggestions about the Map Di sản app, please create an issue or reach out to the development team.

---

**Map Di sản** - Preserving and sharing Vietnamese cultural heritage through modern technology 🇻🇳 