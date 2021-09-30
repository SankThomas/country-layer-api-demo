# Country Layer API Demo using create-react-app

## Update to [this](https://github.com/SankThomas/rest-countries-api) repository

Restcountries.eu is now called countrylayer API. They've updated their terms of use and introduced a subscription based service - with a free tier of course, limited to 100 requests per day. You need an access key in order to query data from the API.

This repository is an update to my YouTube tutorial where I used the Rest Countries API to build a project. Of course the video is now obsolete because the API GET request in that video will no longer work. (Update video coming soon)

## How to run the app

Download the zip file using the green button, or clone the repository by running the command `git clone https://github.com/SankThomas/country-layer-api-demo.git` in your terminal.
In the same terminal once the command is complete, run `npm install` which will install all the dependencies in the `package.json` file and then run `npm start` which will start your development server on `localhost:3000`.

### You will get an error

The error you will get is because of NodeJs which will try to access `process.env.REACT_APP_API_KEY` which doesn't exist in your file structure (because I didn't include my `.env` file when I committed this to GitHub, because you shouldn't commit API keys to GitHub).

#### How to fix the error

1. Head over into the countrylayer website and create an account with them, and they will grant you an access key which is alphanumeric in nature and about 50 characters long.
2. Copy it, and back in your workspace, create a `.env` file in the root of your application and paste in `REACT_APP_API_KEY=YOUR_API_KEY`.
   NOTE: Replace `YOUR_API_KEY` with the API key you copied.
3. Stop the server using `Ctrl + C` and then rerun it with `npm start` so that NodeJs gets access to your .env file

Everything should work fine!

### Why did you say to run the server before adding the .env file?

In order to get the error on screen...because when you know what causes the problem, you can fix it later if you should encounter it again.

## Point to note

You will notice that I'm making `http` requests - and not `https`. That's because the free tier doesn't allow you to send `https` requests. Upgrade your tier in order to be able to do that.
