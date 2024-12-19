# Frontend Dashboard - React.js & Tailwind CSS

## Project Overview

This project is a **frontend dashboard** built using **React.js** and styled with **Tailwind CSS**. It is designed to provide a clean, responsive, and functional user interface for managing multiple sections, including a **Claim File** section and a **Claim Document** section. The dashboard includes a navigation **sidebar**, a **bottom bar**, and a dynamic **main content area** that holds the key functionality.

The dashboard is structured to be scalable, and the components are modular, allowing for easy integration and extension in future iterations.

### Key Features:
- **Sidebar**: Provides easy navigation between sections such as Claim File, Claim Document, and others.
- **Bottom Bar**: A footer-style bar providing additional options or links.
- **Main Content Area**: The central section where the claim-related files and documents are uploaded and managed.
- **Claim File Section**: Allows users to upload and manage PDF files for claims.
- **Claim Document Section**: Displays the uploaded claim documents for easy access.
- **Responsive Design**: The entire interface is designed to be responsive across all devices using Tailwind CSS.
  
---

## Assumptions

- **Frontend Only**: This project focuses solely on the frontend development. No backend integration or database connections are involved.
- **PDF File Uploads**: The file upload functionality is limited to PDF files for the claim document sections.
- **User Authentication Not Implemented**: This version of the dashboard does not include user authentication, though it could be added in future versions.
- **Simulated Upload**: Since there is no backend, the file uploads are simulated, and only the file names are displayed when users select files.
  
---

## Technologies Used

- **React.js**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive and highly customizable styles.
- **JavaScript (ES6+)**: Modern JavaScript features like arrow functions, hooks (`useState`, `useEffect`), and more.

---

## Project Structure

The project is organized as follows:

/src /components /Sidebar.js # Sidebar navigation component /BottomBar.js # Bottom bar component /MainContent.js # Main content area component /ClaimFile.js # Claim file upload section /ClaimDocument.js # Claim document display section /styles /tailwind.css # Tailwind CSS setup /App.js # Main app component /index.js # Entry point for the app

### Major Components:
1. **Sidebar**: Contains links to various sections: **Claim File**, **Claim Document**, and any future components you add.
2. **Bottom Bar**: Displays footer content and may contain additional links or options.
3. **Main Content Area**: Displays the sections such as **Claim File** and **Claim Document** in a responsive layout.
4. **Claim File Section**: A component where users can select and upload files.
5. **Claim Document Section**: Displays the list of uploaded documents with their names and previews.

---

## Installation Instructions

To run the project locally, follow these steps:

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_directory>
2. **Install Dependencies**
   ```bash
   npm i
3. **Start the Development Server**
   ```bash
   npm start

## Challenges Faced

### 1. Component Communication
Managing state across different components (like the sidebar, main content area, and file upload sections) was a challenge. This was resolved using React hooks (`useState`, `useEffect`) for state management and passing props between components.

#### Example:
```javascript
const [selectedSection, setSelectedSection] = useState("claimFile");

const handleSectionChange = (section) => {
  setSelectedSection(section);
};

   
