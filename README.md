# Music-player
# 🎵 Music Player

A clean and modern music player built with **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies.

---

## 📸 Preview

> A beautifully designed music player with a pink-themed UI, smooth controls, and multi-song support.

---

## ✨ Features

- 🎶 **Multiple Songs** — easily add as many songs as you want via a simple array
- ⏯️ **Play / Pause** — toggle playback with a single click
- ⏮️ ⏭️ **Previous / Next** — navigate between tracks instantly
- ⏱️ **Time Display** — shows current time and total duration (e.g. `1:23 / 3:45`)
- 📊 **Progress Bar** — seek to any part of the song by dragging
- 🔁 **Auto Next** — automatically plays the next song when current one ends
- 🎨 **Beautiful UI** — pink gradient design with smooth hover animations

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sarvarbekbro/Music-player.git
cd Music-player
```

### 2. Add your songs
Open `script.js` and add your songs to the `songs` array:
```javascript
const songs = [
  {
    title: "Song Title",
    artist: "Artist Name",
    src: "media/your-song.mp3",
    img: "your-thumbnail.png"
  },
  // add more songs here...
];
```

### 3. Open in browser
Just open `index.html` in your browser — no server needed!

---

## 📁 Project Structure

```
Music-player/
│
├── index.html        # Main HTML file
├── style.css         # Styling and layout
├── script.js         # Player logic and song list
├── media/            # Your MP3 audio files
│   └── song.mp3
└── thumbnails/       # Album cover images
    └── cover.png
```

---

## 🛠️ Built With

- **HTML5** — structure and audio element
- **CSS3** — styling, animations, and responsive design
- **Vanilla JavaScript** — all player logic, no libraries needed
- **Font Awesome 6** — icons for controls

---

## 📖 About

This project was built as a personal music player web application. The goal was to create a fully functional, visually appealing player using only core web technologies — without any frameworks or external libraries. It supports multiple tracks, real-time progress tracking, and intuitive playback controls.

Whether you want to listen to your favorite songs or learn how a music player works under the hood, this project is a great starting point.

---

## 👤 Author

**Sarvarbek**
- GitHub: [@sarvarbekbro](https://github.com/sarvarbekbro)

---

## 📄 License

This project is open source and free to use.
