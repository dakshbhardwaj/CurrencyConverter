# Demo

https://github.com/dakshbhardwaj/CurrencyConverter/assets/22423684/bbbbc325-ccda-4c0d-b5a3-e5f72b51a495

# Folder Structure

src/
|-- api/
|-- assets/
|-- components/
|-- constants/
|-- hooks/
| |-- useOrientation/
| |-- useStyleProcessor/
|-- screens/
| |-- homescreen/
|-- services/
| |-- Cache/
|-- utils/
| |-- responsiveUI/
| |-- colors
| |-- countries
| |-- localEvent

- **src:** Contains the source code of the application.

  - **api:** Manages network-related calls and interactions with external APIs.

  - **assets:** Stores images and other static assets used in the project.

  - **components:** Holds all reusable components used across different screens.

  - **constants:** Centralized storage for constants used throughout the project.

  - **hooks:**

    - **useOrientation:** Custom hook to check changes in device orientation.
    - **useStyleProcessor:** Manages styles in a centralized way, including caching for improved performance.

  - **screens:** H different screens of the application. The example includes a `homescreen` folder.

  - **services:**

    - **Cache:** Provides a service to store and manage caching within the application.

  - **utils:** Contains utility functions and configuration files.
    - **responsiveUI:** Includes functions for responsive UI design.
    - **color:** Stores color-related utilities.
    - **json:** Manages JSON-related operations.
    - **localEvent** Manges local event

## Installation Instruction

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

```bash
git clone https://github.com/dakshbhardwaj/CurrencyConverter.git
cd CurrencyConverter
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios



# OR using Yarn
yarn ios
```
