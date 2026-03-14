# Copilot Instructions for this Workspace

## 🚀 Project Overview
This is a **React Native / Expo** project using **Expo Router** for file-based navigation.

- **Platform**: React Native (iOS, Android, Web)
- **Navigation**: `expo-router` (file-system based routing)
- **UI library**: `react-native-paper`
- **Language**: JavaScript (ESM)


## ▶️ How to Run
```bash
npm install
npm start
```

Common shortcuts:
- `npm run android` — run on Android emulator/device
- `npm run ios` — run on iOS simulator/device
- `npm run web` — run in a browser


## 📁 Key Project Structure
- `app/` — primary source folder for Expo Router (routes are derived from files)
  - `app/_layout.js` — root layout (wraps the app in providers)
  - `app/(tabs)/_layout.js` — defines the bottom tab layout and tab screens
  - `app/(tabs)/index.js` — default tab screen
  - `app/(tabs)/alumnos.js` — “Alumnos” tab screen
  - `app/(tabs)/perfil.js` — “Perfil” tab screen

- `App.js` / `index.js` — entry points (handled by Expo and expo-router)


## 🧭 Navigation Conventions
- Adding a new route is done by creating a new file under `app/`.
- Use folders for nested layouts (e.g., `(tabs)` for tab-based navigation).
- Screens are typically components that return JSX, exported as default.


## ✅ Common Scenarios / Tasks
### Add a new tab screen
1. Create `app/(tabs)/<name>.js`
2. Add a `<Tabs.Screen name="<name>" />` entry in `app/(tabs)/_layout.js`

### Add a new modal or stack screen
- Create new file under `app/` (not inside `(tabs)`), and use `Stack` screen options in appropriate layout.


## 🧰 Dependencies / Tooling
- Expo SDK 54
- expo-router 6.x
- react-native-paper for UI components
- vector icons packages (e.g., `@expo/vector-icons`, `@react-native-vector-icons`)


## 🧩 Notes for Copilot
- Prefer idiomatic Expo Router patterns (file-based routing, `Tabs`, `Stack`).
- Keep UI consistent with existing use of `react-native-paper` and Material icons.
- Avoid adding heavy native dependencies unless required.


---

If you need help with a specific task (e.g., set up a new screen, fix navigation, style a component), describe the intent and the files you want to modify.
