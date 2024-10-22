# Eat-n-Split

Eat-n-Split is a React application that helps users manage and split bills among friends. Users can add friends, select a friend, and split bills with them.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Components](#components)
-   [Scripts](#scripts)
-   [License](#license)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/sorelul/eat-n-split.git
```

2. Navigate to the project directory:

```sh
cd eat-n-split
```

3. Install the dependencies:

```sh
npm install
```

## Usage

To start the development server, run:

```sh
npm start
```

This will start the application on http://localhost:3000.

## Project Structure

```
eat-n-split/
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.css
│   └── index.js
```

## Components

### App.js

The main component that manages the state of the application. It includes the following components:

-   FriendsList
-   FormAddFriend
-   FormSplitBill
-   Button

### FriendsList

Displays a list of friends. Each friend can be selected to split a bill with.

### FormAddFriend

A form to add a new friend. It includes fields for the friend's name and image URL.

### FormSplitBill

A form to split a bill with a selected friend. It includes fields for the bill value, user's expenses, and a dropdown to select who is paying the bill.

### Button

A reusable button component.

## Scripts

-   `start`: Starts the development server
-   `build`: Builds the application for production
-   `test`: Runs the test suite
-   `eject`: Ejects the Create React App configuration
