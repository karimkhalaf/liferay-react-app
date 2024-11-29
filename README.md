# React Application with Docker Deployment

This repository contains a React application built using **Vite** and configured for deployment with **Docker**. Follow the instructions below to download, set up, and run the application.

---

## Prerequisites

Make sure you have the following installed on your system:
- [Docker](https://www.docker.com/)

---

## Getting Started

### Step 1: Clone the Repository
Download the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Step 2: Create a .env file
Create a .env file containing the google captcha api sitekey as follows :

```bash
VITE_REACT_APP_SITE_KEY = {sitekey}
```

### Step 3: Build the docker image : 

```bash
docker build -t react-form-app .
 ```

### Step 4: Run the docker container :

```bash
docker run -dp 3000:3000 react-form-app
 ```
