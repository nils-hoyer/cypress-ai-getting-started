# Cypress AI - Getting Started

This repository is the foundation for the courses at https://www.codesurfer.io/schulungen.
Follow this guide to set up your Cypress AI test environment:

### Prerequisites

1. **Install Visual Studio Code**
   - Download Visual Studio Code [here](https://code.visualstudio.com/download) and install it on your system

2. **Install Google Chrome**
   - Required: current version of Google Chrome
   - Download Chrome [here](https://www.google.com/chrome/)

3. **Install Node.js**
   - Required: Node.js version 22 or newer
   - Download Node.js [here](https://nodejs.org/en/download) or use NVM: `nvm install 22`

### Project Setup

4. **Download the files**
   - Download the project [here](https://github.com/nils-hoyer/cypress-ai-getting-started/archive/refs/heads/main.zip) or use Git: `git clone https://github.com/nils-hoyer/cypress-ai-getting-started.git`

5. **Open the project in Visual Studio Code**
   - Open Visual Studio Code
   - File > Open Folder... and select the downloaded folder

### Set Up Cypress

The following commands can be found in the left Explorer panel under **NPM SCRIPTS**. You can run them with a single click.
The output of the following commands will appear in the Terminal tab at the bottom of Visual Studio Code.

![NPM Scripts](docs/npm-scripts.png)

6. **Install packages**
   - Run script **install:npm**
   - Or use Bash: `npm install`
   - Installs Cypress and all required packages

7. **Verify the setup**

   a. Test Cypress test execution in the terminal:
   - Run script **cy:run**
   - Or use Bash: `npm run cy:run`
   - Runs all tests in the terminal

   ![Cypress Run](docs/cypress-run.png)

   b. Test the Cypress UI mode:
   - Run script **cy:open**
   - Or use Bash: `npm run cy:open`
   - Opens the Cypress app window. Make sure it opens successfully

   ![Cypress Open](docs/cypress-open.png)

If both work successfully, you are ready to go for the training!

Happy Testing! 🚀🤖