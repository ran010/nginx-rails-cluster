# NGINX Load Balancer for Dockerized React App

This project demonstrates setting up NGINX as a load balancer for a Dockerized React application. The app is distributed across three backend servers, with NGINX handling the load balancing. This setup ensures high availability and better handling of traffic by distributing requests to multiple backend React instances.

## Project Overview

- **Frontend**: A React application running in Docker containers.
- **NGINX**: Acts as a reverse proxy and load balancer to distribute requests across multiple React instances.
- **Docker**: Containerizes both the React app and the NGINX service for easy deployment and scalability.

## Features

- **NGINX Load Balancing**: Distributes incoming requests to three backend React servers.
- **Dockerized Environment**: All components (React app and NGINX) are Dockerized for easy deployment and portability.
- **Scalability**: You can scale the number of backend React servers as needed.

## Prerequisites

To run this project locally, you will need the following:

- Docker and Docker Compose installed
- Git for version control
- Node.js and npm (if you want to modify the React app locally)

## Setup Instructions

### Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/ran010/react-nginx-load-balancer
cd react-nginx-load-balancer
