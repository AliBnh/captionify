# CAPTIONIFY

## Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Technologies Used](#Technologies-used)
- [Installation](#Installation)


## Introduction
Welcome to the Video Transcription and Captioning App! This application allows users to upload videos, automatically transcribe the audio content, add captions, and download the finalized videos. It offers both free and paid subscription plans, enabling users to transcribe and caption a limited number of videos for free or enjoy unlimited usage with the paid plan.

## Features
- Video Upload: Users can upload videos to the platform.
- Automatic Transcription: The application utilizes AWS Transcribe to transcribe the audio content of uploaded videos into text.
- Caption Editing: Users have the option to edit the transcribed text to ensure accurate captions.
- Caption Generation: Captions are overlaid onto the original videos using FFmpeg to generate final videos with captions.
- Subscription Plans: Offers both free and paid subscription plans with different usage limits.
- Stripe Integration: Seamless payment processing and subscription management through Stripe.

## Screenshots

## Technologies Used
- Next.js
- React.js
- Tailwind CSS
- AWS S3
- AWS Transcribe
- FFmpeg
- Stripe

## Installation

### Clone the repository:
- git clone https://github.com/yourusername/your-repository.git
### Install dependencies:
- npm install
### Create a .env file in the root directory and add your keys.
- Set up AWS credentials and configure Stripe API keys.
### Start the development server:
- npm run dev
### Access the application at http://localhost:3000.

Contributions are welcome! 