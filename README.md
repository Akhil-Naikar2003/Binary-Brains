# AI-Integrated Web Application

This project demonstrates a web application that includes a login page with password hashing stored in a MySQL database and integrates three AI-powered tools:
1. **RAG Chatbot** - A chatbot powered by Retrieval-Augmented Generation (RAG) model.
2. **URL Summarizer** - A tool to summarize URLs and web pages.
3. **Mini Search Engine** - A simple search engine built using AI to provide relevant search results.

## Features

### 1. Login Page with Password Hashing:
- The login page allows users to log in with their credentials.
- Passwords are securely stored in a MySQL database using hashing techniques (e.g., bcrypt) to ensure data security.
- Users can register by entering their email, username, and password, which is then hashed before being stored in the database.
  
### 2. AI-Powered Chatbot (RAG Model):
- A Retrieval-Augmented Generation (RAG) chatbot that answers user queries based on a pre-trained model.
- It retrieves relevant information from a knowledge base and generates responses accordingly.
  
### 3. URL Summarizer:
- Users can enter URLs, and the system will fetch the web page content and generate a concise summary of the page.
  
### 4. Mini Search Engine:
- A simple search engine that indexes a limited set of web pages or documents.
- Uses AI to rank and provide relevant search results to user queries.

## Technology Stack

- **Frontend:**
  - HTML, CSS, JavaScript (for building the web interface),streamlit
  - Tailwind (for UI components)

- **Backend:**
  - Python 
  - MySQL (for storing user data and hashed passwords)
  - React js , Node js

- **AI Tools/Integrations:**
  - **RAG Chatbot:** Built using a pre-trained RAG model and integrated with the backend.
  - **URL Summarizer:** Uses natural language processing (NLP) models for extracting key information from web pages.
  - **Mini Search Engine:** Uses Langchain tools  and search  techniques.

