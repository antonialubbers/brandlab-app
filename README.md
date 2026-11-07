# BRANDLAB – Lern-App für Vorbeugenden Brandschutz

Eine mobiloptimierte Lern-Web-App für die Klausur am 26. November 2026, mit 323 Lernfragen aus 16 Foliensätzen.

## Start

Die App wird direkt über `index.html` geöffnet. Sie ist eine statische Website ohne Backend und benötigt keinen Build-Prozess. Der Fragensatz ist bereits in `index.html` eingebettet.

## Funktionen

- Blitzrunden in kurzen Lernmissionen
- Foliensatz-Auswahl und gezielte Wiederholung
- Multiple Choice, kurze Freitextfragen und Praxisfälle
- Klausur-Arena im Stil der hochgeladenen Musterklausur
- Lokale Fortschrittsspeicherung im Browser
- Web-App-Manifest und Offline-Service-Worker

## Auf iPhone über GitHub Pages öffnen

1. Repository → **Settings → Pages**.
2. Unter **Build and deployment**: **Deploy from a branch** wählen.
3. Branch **main**, Ordner **/(root)** wählen und **Save**.
4. Sobald GitHub Pages die Website veröffentlicht hat, die in den Pages-Einstellungen angezeigte Adresse in Safari öffnen.
5. In Safari: **Teilen → Zum Home-Bildschirm**.

**Hinweis:** Bei privaten Repositories hängt GitHub-Pages-Unterstützung vom GitHub-Tarif ab. Falls die Pages-Option nicht verfügbar ist, das Repository nur bei ausdrücklichem Wunsch auf *Public* umstellen oder alternativ Cloudflare Pages mit diesem GitHub-Repository verbinden.

## Datenschutz und Grenzen

Die Lerninhalte sind in der Website enthalten. Die Original-Vorlesungs-PDFs wurden nicht veröffentlicht. Lernfortschritt liegt lokal im jeweiligen Browser, nicht in GitHub. Die 323 Fragen sind eine erste Sammlung, keine garantierte vollständige Folienabdeckung. Freitext erfordert Selbsteinschätzung. Die Zielnote 0,7 kann nicht garantiert werden.

## Wartung

- `index.html`: vollständige App mit eingebetteten Lernfragen und Logik.
- `manifest.json`: Konfiguration der installierbaren Web-App.
- `sw.js`: Offline-Cache.
- `icon.svg`: App-Logo.

Wird die App geändert, sollte auch die Cache-Version in `sw.js` hochgezählt werden.

## Veröffentlichung prüfen
In GitHub: Settings → Pages → Deploy from a branch → main / (root). Wenn die App noch nicht erreichbar ist, unter Actions den letzten „pages build and deployment“-Durchlauf prüfen. Die Browser-Adresse ist https://antonialubbers.github.io/brandlab-app/.
