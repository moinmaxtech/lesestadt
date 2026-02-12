# Lese-Stadt v178 - Installation & Features

## 🎉 Neue Features

### ✅ 1. Offline-Funktionalität
Die App funktioniert jetzt vollständig offline!
- Service Worker cached alle Assets
- Sprites werden beim ersten Laden gespeichert
- Offline-Indikator zeigt Status an
- Daten bleiben in LocalStorage

### ✅ 2. Performance-Optimierung
- **Sprite Preloading**: Alle Grafiken werden beim Start geladen
- **Smart Rendering**: Stadt wird nur neu gerendert wenn nötig
- **Caching**: Sprites werden nur einmal geladen, nicht bei jedem Tab-Wechsel

### ✅ 3. Vollbild-Modus
- Neuer Vollbild-Button in der Stadtansicht
- Funktioniert auf Desktop und Mobile
- Icon ändert sich je nach Status

### ✅ 4. Konfetti-Effekt bei Zielerreichung
- 150 bunte Konfetti-Partikel
- Physik-basierte Animation
- Läuft 5 Sekunden
- Kombiniert mit Alarm-Sound & Vibration

## 📦 Installation

### Desktop/Laptop:
1. Alle 4 Dateien in einen Ordner legen:
   - `Lese-Stadt-v178.html`
   - `sw.js`
   - `manifest.json`
   - `README.md` (optional)

2. Einen lokalen Webserver starten (für Service Worker):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (npx)
   npx http-server -p 8000
   ```

3. Browser öffnen: `http://localhost:8000/Lese-Stadt-v178.html`

### Smartphone (als App installieren):

#### Android (Chrome):
1. Dateien auf Webserver hochladen (GitHub Pages, Netlify, etc.)
2. Seite im Chrome öffnen
3. Menu → "Zum Startbildschirm hinzufügen"
4. App-Icon erscheint auf dem Homescreen

#### iOS (Safari):
1. Dateien auf Webserver hochladen
2. Seite im Safari öffnen
3. Teilen-Button → "Zum Home-Bildschirm"
4. App-Icon erscheint auf dem Homescreen

### Einfachste Methode (ohne Server):
- Nur `Lese-Stadt-v178.html` im Browser öffnen
- ⚠️ Service Worker funktioniert nur mit HTTPS oder localhost
- Offline-Modus ist dann nicht verfügbar

## 🎮 Bedienung

### Timer:
- **Start**: Startet den Countdown
- **Pause**: Unterbricht den Timer
- **Weiter**: Setzt pausierten Timer fort
- **Wake Lock**: Screen bleibt während Timer aktiv

### Stadt-Ansicht:
- **Ziehen**: Stadt verschieben
- **Pinch**: Zoomen (Touch)
- **Mausrad**: Zoomen (Desktop)
- **🎯 Zentrieren**: Zurück zur Startposition
- **⛶ Vollbild**: Vollbild ein/aus

### Fortschritt:
- Jede Einheit = 1 Fortschritt
- Bei Ziel erreicht: Haus wird gebaut
- Vorschau-Gebäude wächst mit Fortschritt
- Konfetti-Effekt bei Fertigstellung!

## 🔧 Technische Details

### Browser-Support:
- ✅ Chrome/Edge (beste Erfahrung)
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ⚠️ Service Worker nur mit HTTPS

### Berechtigungen:
- Screen Wake Lock (optional)
- Vibration (optional)
- Web Audio (optional)
- LocalStorage (erforderlich)

### Daten:
- Alle Daten in LocalStorage
- Backup-Funktion in Einstellungen
- Export als JSON möglich

## 🐛 Troubleshooting

**Problem: Offline-Modus funktioniert nicht**
- Lösung: Seite über HTTPS oder localhost öffnen

**Problem: Sprites laden nicht**
- Lösung: Internet-Verbindung beim ersten Start nötig

**Problem: Wake Lock funktioniert nicht**
- Lösung: Browser unterstützt Feature möglicherweise nicht

**Problem: Kein Vollbild**
- Lösung: Browser-Berechtigungen prüfen

## 📝 Changelog v178

- ✅ Offline-Funktionalität mit Service Worker
- ✅ Performance: Sprite Preloading & Caching
- ✅ Vollbild-Modus
- ✅ Konfetti-Effekt bei Zielerreichung
- ✅ Optimiertes Rendering
- ✅ PWA-ready (installierbar)

## 💡 Tipps

1. **Als App installieren** für beste Erfahrung
2. **Backup erstellen** regelmäßig in Einstellungen
3. **Offline nutzen** nach erstem Laden möglich
4. **Vollbild** für immersive Erfahrung

Viel Spaß beim Lesen und Städte bauen! 🏙️📚
