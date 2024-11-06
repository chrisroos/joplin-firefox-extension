# Joplin Notes Finder

Joplin Notes Finder is a Firefox extension that displays Joplin notes matching the URL of the current page in a sidebar. The notes are fetched from the Joplin API and rendered with basic Markdown formatting.

## Features

- Automatically fetches Joplin notes related to the current webpage URL.
- Displays note titles and content in a sidebar.
- Provides a link to open the note in Joplin.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/joplin-notes-finder.git
cd joplin-notes-finder
```

Load the extension in Firefox:

- Open Firefox and go to about:debugging.
- Click on "This Firefox".
- Click on "Load Temporary Add-on".
- Select the manifest.json file from your extension directory.

Set the Joplin API token:

- Right-click the extension icon and select "Manage Extension".
- Click on "Preferences" to open the options page.
- Enter your Joplin API token and click "Save".

## Usage

- Navigate to any webpage.
- Open the sidebar by clicking on the menu button (three horizontal lines) in the top-right corner of Firefox.
- Go to "Library" > "Bookmarks" > "View Sidebar" > "Joplin Notes".
- The sidebar will display Joplin notes related to the current webpage URL.