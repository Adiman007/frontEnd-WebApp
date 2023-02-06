## Step 1

This app is working with a backend (https://github.com/Adiman007/secure-web-dev-workshop3).\
first you want to download the backend.\
then you also need to create a `.env` file in the backend directory where you put the 3 lines below (with your own environment variable)
```
MONGO_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
JWT_SECRET=Your_Super_Secret
JWT_EXPIRATION_TIME=86400
```
Now you can run the index.js file within it.
```bash
#You should see something like that in your console
Connected
API listening on port 3000, visit http://localhost:3000/
```

## Step 2

Now that the backend is running, we can start the frontend app. \
first you should run `npm install` and install all dependencies needed for the project.

## Step 3
Then you can finally start the app by moving to the directory of the app and use the command below.
```bash
cd path_to_the_project/myapp
npm run dev
```

## Step 4 

You can now access the website on 'http://localhost:5173/'


## App run-through

The app has 3 main pages :\
    - `/login` : default page where you can log in yourself to gain access to the /locations page\
    - `/register` : page where you can create an account in order to use the login page\
    - `/locations` : page where locations are displayed (only accessible if logged in) you can click on the `ALL INFO` to display a page where all info of a specific location are displayed.

## Special Admin Options

If you're using the app with an user with the ``admin`` role, you can also create new location from the `/locations` page and delete/modify a location from the `/location/{id}` page
    

