# Gym Check-in System Frontend 🏋️‍♂️ (React + TypeScript) ![CI](https://github.com/korruptengu/gym-checkin-frontend/actions/workflows/ci.yml/badge.svg)

Ein modernes **React-Frontend** für das Gym Check-in System.  
Dieses Projekt dient als Benutzeroberfläche für die Verwaltung von Mitgliedern, Trainern, Kursen und Trainingseinheiten und kommuniziert mit dem [Spring Boot Backend](https://github.com/korruptengu/gym-checkin-system).

---

## 📌 Motivation

- Praxisnahes Lernen von React + TypeScript
- Integration mit dem bestehenden Spring-Boot-Backend
- Aufbau einer wiederverwendbaren und skalierbaren UI
- Nutzung moderner Tools wie React Query, Axios und TailwindCSS

---

## ⚙️ Tech-Stack

- **React 18**
- **TypeScript**
- **Vite** (für schnelles Development-Building)
- **React Router** (Navigation)
- **Axios** (HTTP-Requests)
- **React Query** (Server-State-Management)
- **TailwindCSS** (Styling)
- **JWT-Auth** mit Axios-Interceptors
- **ESLint & Prettier** (Code-Qualität)

---

## 📁 Features

- Login mit JWT-Authentifizierung
- Automatische Token-Speicherung & Refresh
- Dashboard für Mitglieder, Trainer und Kurse
- Mitgliederverwaltung (CRUD)
- Trainerverwaltung (CRUD)
- Kursbuchung und Übersicht für CourseSessions
- API-Fehlerhandling mit zentralem Error-Boundary
- Loading- und State-Management mit React Query
- Responsive UI mit TailwindCSS
- Zentrale Konfiguration der API-Endpunkte
- GitHub Actions (CI/CD) ![CI](https://github.com/korruptengu/gym-checkin-frontend/actions/workflows/ci.yml/badge.svg)

---

## 🧱 Architektur

- **Pages:** Routenbasierte Hauptseiten
- **Components:** Wiederverwendbare UI-Komponenten
- **Services:** API-Kommunikation über Axios
- **Hooks:** Custom Hooks (z. B. `useAuth`, `useMembers`)
- **Context:** AuthContext für User- und Token-Handling
- **Routing:** Public- und Private-Routes mit React Router
- **State Management:** React Query für Server-Daten

---

## 🚀 Getting Started
> ⚠️ Hinweis: Stelle sicher, dass das [Backend](https://github.com/korruptengu/gym-checkin-system) lokal läuft, bevor du das Frontend startest.
### 1️⃣ Repository klonen
```bash
git clone https://github.com/dein-nutzername/gym-checkin-frontend.git
cd gym-checkin-frontend
```
### 2️⃣ Abhängigkeiten installieren
```bash
npm install
```
### ️3️⃣ Environment konfigurieren
Erstelle eine .env Datei im Root-Verzeichnis:
```bash
VITE_API_BASE_URL=http://localhost:8080/api
```
### ️ 4️⃣ Development-Server starten
```bash
npm run dev
```
> ⚠️ Hinweis: Stelle sicher, dass das [Backend](https://github.com/korruptengu/gym-checkin-system) lokal läuft, bevor du das Frontend startest.
Das Frontend ist jetzt unter http://localhost:5173 erreichbar.

## ✅ Projektstatus
- [x] Setup mit React + TypeScript + Vite
- [x] Login + JWT-Handling
- [x] Axios-Interceptor für Authentifizierung
- [x] Protected Routes mit React Router
- [ ] Mitglieder-Management (Liste, Details, Create, Edit, Delete)
- [ ] Trainer-Management (Liste, Details, Create, Edit, Delete)
- [ ] Kursbuchung (Übersicht, Buchung, Stornierung)
- [ ] UI-Optimierungen (Loading-States, Error Boundaries)
- [ ] Unit-Tests mit Vitest und React Testing Library
- [ ] Pagination und Filterung für Listen
- [ ] Deployment-Konfiguration (z. B. Vercel/Netlify)
## 👨‍💻 Autor
**Roy Wellner**  
2025 – Eigenständiges Lern- und Praxisprojekt im Bereich React + TypeScript Entwicklung

## 📄 Lizenz
MIT License