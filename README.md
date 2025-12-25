# CodeClauseInternship_Countdown-Timer

# ✨ Aurora Borealis Countdown Timer

A visually stunning countdown timer featuring animated northern lights (aurora borealis) and twinkling stars. Perfect for tracking events, launches, celebrations, or any special occasion!

![Project Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Animated Aurora Borealis**: Real-time canvas animation with flowing northern lights
- **Particle Star Field**: 150+ twinkling stars drifting across the screen
- **Glassmorphism Design**: Modern frosted glass effect on countdown cards
- **Interactive Hover Effects**: Cards lift and glow on hover
- **Custom Event Selector**: Set countdown to any date and time
- **Celebration Mode**: Special animation when countdown reaches zero
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth 60fps Animations**: Optimized canvas rendering

## 🚀 Demo

Open `index.html` in any modern web browser to see the timer in action!

## 📁 Project Structure

```
countdown-timer/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Canvas animations and countdown logic
└── README.md           # Project documentation
```

## 🛠️ Installation

1. **Clone or Download** this repository
2. Ensure all files are in the same directory
3. Open `index.html` in your web browser

```bash
# Clone the repository (if using Git)
git clone <repository-url>
cd countdown-timer

# Or simply download and extract the files
```

No build process, dependencies, or server required! Just open and run.

## 💻 Usage

### Setting a Custom Event

1. Click on the date/time input field
2. Select your desired event date and time
3. Click the "Start Countdown" button
4. Watch the timer count down to your special moment!

### Default Event

The timer defaults to **New Year 2026** (January 1, 2026 at 00:00)

## 🎓 Learning Outcomes

This project demonstrates:

### JavaScript Concepts
- **Date Manipulation**: Using `Date()`, `getTime()`, calculating time differences
- **Canvas API**: Drawing shapes, gradients, and animations
- **RequestAnimationFrame**: Creating smooth 60fps animations
- **DOM Manipulation**: Dynamically updating HTML elements
- **Event Handling**: Processing user input
- **Array Methods**: Managing particles and wave objects
- **Intervals**: Using `setInterval()` for countdown updates

### CSS Techniques
- **Glassmorphism**: Backdrop filters and transparency
- **CSS Animations**: Keyframes, transforms, and transitions
- **Flexbox Layout**: Responsive card arrangement
- **Custom Properties**: HSL colors with alpha transparency
- **Media Queries**: Mobile-responsive design

### HTML5 Features
- **Canvas Elements**: Multiple layered canvases
- **Datetime Input**: Native date/time picker
- **Semantic HTML**: Proper document structure

## 🎨 Customization

### Change Colors

Edit the aurora colors in `script.js`:
```javascript
color: `hsla(${160 + Math.random() * 60}, 80%, 60%, 0.15)`
//        ^ Hue range (160-220 = cyan to blue)
```

### Adjust Animation Speed

Modify wave speed in `script.js`:
```javascript
speed: 0.001 + Math.random() * 0.002  // Increase for faster movement
```

### Change Default Event

Update the default date in `script.js`:
```javascript
let targetDate = new Date('2026-01-01T00:00:00').getTime();
```

### Modify Particle Count

Change the number of stars in `script.js`:
```javascript
for (let i = 0; i < 150; i++) {  // Change 150 to desired number
```

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Requirements**: Canvas API support (all modern browsers)

## 📱 Responsive Design

The countdown timer automatically adapts to different screen sizes:

- **Desktop**: Full-sized cards with detailed animations
- **Tablet**: Optimized layout and sizing
- **Mobile**: Stacked layout with adjusted font sizes

Breakpoint: `768px`

## 🎯 Use Cases

Perfect for:
- 🎉 Event countdowns (birthdays, weddings, parties)
- 🚀 Product launches
- 🎓 Graduation ceremonies
- 🎄 Holiday celebrations
- 🏆 Competition deadlines
- 📅 Conference dates
- 🎮 Game releases
- 💼 Project milestones

## 🔧 Technical Details

### Performance
- Canvas animations run at ~60fps
- Minimal CPU usage with requestAnimationFrame
- No external dependencies or libraries
- Lightweight (~15KB total)

### Accessibility
- Semantic HTML structure
- Proper contrast ratios
- Keyboard navigable
- Screen reader friendly labels

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and make your own modifications! Some ideas:
- Add sound effects when countdown reaches zero
- Include timezone support
- Add multiple countdown timers
- Create theme variations (sunset, ocean, space)
- Add social sharing functionality

## 👨‍💻 Author

Created as a unique, one-of-a-kind countdown timer project demonstrating modern web development techniques.

## 🙏 Acknowledgments

- Inspired by the beauty of natural aurora borealis phenomena
- Canvas animation techniques from HTML5 Canvas tutorials
- Glassmorphism design trend

---

**Enjoy your cosmic countdown!** ✨🌌

For questions or improvements, feel free to reach out or submit an issue.
