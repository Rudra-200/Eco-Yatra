# EcoYatra - Inspiring the journey to a greener future. 🌍

EcoYatra is a sustainable transportation app designed to promote eco-friendly travel, reduce carbon emissions, and enhance user engagement through gamification. It provides real-time insights, emission tracking, optimized route suggestions, and community-driven challenges to encourage sustainable transport choices.

## Key Features ✨

- **Eco-Points Tracking**: Users can earn eco-points based on their travel choices, incentivizing eco-friendly transportation.
- **Route Optimization**: EcoYatra suggests routes that minimize carbon emissions based on real-time traffic and environmental data.
- **Gamification**: Engage users with rewards, levels, and challenges for adopting sustainable practices.
- **Weather-Adaptive Recommendations**: Travel recommendations adapt to weather conditions, helping users plan safer and more efficient routes.
- **Emission Tracking**: Real-time carbon emission monitoring helps users understand their environmental impact.
- **Emergency Alerts**: Notifications for adverse weather or hazardous conditions to ensure user safety.
- **Community Challenges & Reforestation Efforts**: Connect with like-minded individuals, join challenges, and contribute to reforestation initiatives to offset carbon footprints.

## Technologies Used 🛠️

- **Frontend**: Angular, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Deployment**: Vultr Cloud Platform

## Deployment on Vultr 🚀

EcoYatra is deployed on Vultr, which provides a reliable and scalable environment for our application. Here’s how we utilized Vultr's services to bring EcoYatra to life:

1. **Vultr Instances**: We used Vultr's cloud instances to host our backend server and MongoDB database. This allows for scalable handling of user requests and data storage.
2. **Load Balancer**: To manage traffic efficiently, we leveraged Vultr's load balancing feature, ensuring the app can handle high traffic without downtime.
3. **Storage Solutions**: Vultr's block storage was used to manage our application's media and data assets, enabling faster load times and better data management.
4. **Security**: Vultr’s firewall and security options were configured to protect user data and ensure a secure deployment environment.

### Steps to Deploy EcoYatra on Vultr

1. **Create a Vultr Account**: Sign up at [Vultr](https://www.vultr.com/) and select the appropriate cloud compute instance.
2. **Set Up Environment**:
   - Spin up a **Ubuntu 20.04 instance** on Vultr.
   - Install **Node.js** and **MongoDB** on the instance.
   - Clone the Eco-YATRA repository to the server.
3. **Configure and Run the App**:
   - Run `npm install` to install dependencies.
   - Set up environment variables for database access, API keys, etc.
   - Use `npm start` to launch the backend.
4. **Set Up Load Balancer (Optional)**: If expecting high traffic, configure a load balancer in Vultr’s control panel to distribute requests across multiple instances.
5. **Configure Firewall Rules**:
   - Enable HTTP/HTTPS and any necessary ports in Vultr’s firewall settings.
   - Set additional security measures as needed.

## Project Structure 📁

Here is a high-level overview of the project structure:

```plaintext
EcoYatra/
├── src/
│   ├── app/
│   │   ├──dashboard/
│   │   ├── eco-points/
│   │   ├── gamification/
│   │   ├── item/
│   │   ├── login/
│   │   ├── profile/
│   │   ├── route-selection/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```
# Key Directories

- **dashboard/**: Contains dashboard components for displaying user data and insights.
- **eco-points/**: Handles eco-points logic and displays eco-points earned by users.
- **gamification/**: Components related to gamified elements like challenges, rewards, and levels.
- **route-selection/**: Manages optimized route selection based on emission minimization and user preferences.
- **login/**, **profile/**: User authentication and profile management.

## Installation and Setup 🚧

To run EcoYatra locally, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/Rudra-200/EcoYatra.git
cd EcoYatra
```
# Installation Guide

### Install Dependencies
```bash
npm install
```
## Setting Up Eco-YATRA

This guide will walk you through setting up and running the EcoYatra application.

### Environment Variables

1. **Create a `.env` file:** In the root directory of your Eco-YATRA project, create a file named `.env`. This file will store sensitive information like database credentials and API keys.

2. **Add environment variables:** Inside the `.env` file, define the necessary environment variables using the following format:

**Note:** It's important to keep the `.env` file excluded from version control systems like Git to avoid exposing sensitive information.

### Running the App

1. **Open a terminal:** Launch a terminal window in your project directory.

2. **Start the application:** Run the following command to start the EcoYatra application using npm:

```bash
npm start
```
# EcoYatra Application

## Accessing the Application
Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the EcoYatra application running on your local development server.

## Contributing
We encourage contributions to improve EcoYatra! To contribute:

1. **Fork the repository**: Create a fork of the EcoYatra repository on your preferred version control platform (e.g., GitHub).
2. **Make changes**: Make your desired modifications to the codebase.
3. **Submit a pull request**: Create a pull request to submit your changes for review and potential inclusion in the main repository.

## License
Eco-YATRA is licensed under the GNU License. For full details, refer to the `LICENSE` file within the project directory.

## Contact
For any questions or support regarding Eco-YATRA, feel free to contact us at [vkdasari.1779@gmail.com](mailto:vkdasari.1779@gmail.com) ,
[rudramishrassd.2635@gmail.com](mailto:rudramishrassd.2635@gmail.com) , [indigibilli91@gmail.com](mailto:indigibilli91@gmail.com).

