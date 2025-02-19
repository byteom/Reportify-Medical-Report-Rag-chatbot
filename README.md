 
# Medical Report Chatbot (RAG)

## Overview

The Medical Report Chatbot is a platform that allows users to upload their medical reports, which are then summarized by our AI-powered system. After uploading the report, users can interact with the platform to chat about their reports, ask questions, and get further insights into their medical information. The system leverages a variety of modern technologies, including RAG (Retrieval-Augmented Generation) to enhance the overall user experience.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **Gemini**: Powerful AI model used for processing and summarizing medical reports.
- **Pinecone**: Vector database for fast, efficient retrieval of relevant information from large datasets.
- **Next.js**: React-based framework for building the application with server-side rendering and static site generation.
- **Hugging Face**: Utilized for language models and NLP tasks to generate summaries and answers based on the uploaded reports.
- **Other Tools**: Custom tools and libraries to enhance functionality, performance, and user experience.

## Features

- **Upload Medical Report**: Users can upload their medical reports (e.g., PDF, text files).
- **Summary Generation**: The platform generates a concise summary of the uploaded report.
- **Chatbot Interaction**: Users can chat with the platform to ask questions about their report and get personalized insights.
- **AI-Powered Responses**: Utilizes advanced AI models to provide accurate, context-aware answers.

## Setup & Installation

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/your-repository/medical-report-chatbot.git
cd medical-report-chatbot
```

### Install dependencies

```bash
npm install
# or if you prefer yarn
yarn install
```

### Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```
GEMINI_API_KEY=your-gemini-api-key
PINECONE_API_KEY=your-pinecone-api-key
HF_TOKEN=your-hugging-face-api-key  // hugging face token
```

### Run the application

To start the development server:

```bash
npm run dev
# or with yarn
yarn dev
```

This will start the app on `http://localhost:3000`.

## Usage

1. **Upload Report**: After logging in, click on the "Upload Report" button and select your medical file.
2. **Generate Summary**: Once uploaded, the platform will automatically generate a summary of your report.
3. **Chat with Chatbot**: Ask questions or discuss the contents of your report with the platform using the integrated chatbot.

## Future Improvements

- Integrate more medical data sources for enhanced insights.
- Add support for multiple file formats (e.g., DOCX, JPG).
- Improve chat functionality with multi-turn conversations.
- Implement user authentication for secure data management.

## Contributing

We welcome contributions! Feel free to fork the repository, create a branch, and submit a pull request.

## License

This project is licensed under the MIT License.

 
