# Cypress AI - Getting Started

Dieses Repository ist die Basis für die Kurse auf https://www.codesurfer.io/schulungen.
Folge dieser Anleitung, um deine Cypress AI Testumgebung einzurichten:

### Voraussetzungen

1. **Visual Studio Code installieren**
   - Lade Visual Studio Code [hier herunter](https://code.visualstudio.com/download) und installiere es auf deinem System

3. **Node.js installieren**
   - Benötigt: Node.js Version 22 oder neuer
   - Lade Node.js [hier herunter](https://nodejs.org/en/download) oder nutze NVM: `nvm install 22`

### Projekt Setup

4. **Dateien herunterladen**
   - Lade das Projekt [hier herunter](https://github.com/nils-hoyer/cypress-ai-getting-started/archive/refs/heads/main.zip) oder nutze Git: `git clone https://github.com/nils-hoyer/cypress-ai-getting-started.git`

5. **Projekt in VS Code öffnen**
   - Öffne VS Code
   - Datei > Ordner öffnen... und wähle den heruntergeladenen Ordner

### Cypress einrichten

**Wichtig**: Die Ausgaben der folgenden Befehle siehst du im Terminal-Tab im unteren Bereich von VS Code.

**Tipp**: Die folgenden Befehle findest du auch links im Explorer unter "NPM SCRIPTS" - dann kannst du sie per Klick ausführen.

![NPM Scripts](docs/npm-scripts.png)

6. **Pakete installieren**
   - Starte Skript "install:npm"
   - Oder nutze Bash: `npm install`
   - Installiert Cypress und alle benötigten Pakete

7. **Setup testen**
   - Starte Skript "cy:run"
   - Oder nutze Bash: `npm run cy:run`
   - Führt alle Tests im Terminal aus

Wenn die Tests erfolgreich durchgelaufen sind, bist du bereit für das Seminar!

Happy Testing! 🚀🤖