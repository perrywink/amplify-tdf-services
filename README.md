# The Data Foundry Service Request App

## Live Site
- The live site link is [here](https://main.d16fbxf01y0g08.amplifyapp.com/)
- To access the website, please create a new account and verify it via your email. You can then use the same account to login to the site in the future.

## Setup Instructions

**Setting up AWS and the .env file**
1. Deploy this project to AWS Amplify, and download the `amplify_outputs.json` file. Include this file in the root of the project, as specified [here](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#4-set-up-local-environment)
2. You can find an `.env.example` file in the root of this project. Copy this and rename it to `.env.local`. We will use this for the following steps.
3. Initialize a Dynamo DB table and populate the `DYNAMODB_TABLE_NAME` env variable.accordingly. Create a user group that has full access to Dynamo DB (policy).
4. Initialize an S3 Bucket and populate the `BUCKET_NAME_AWS` env variable accordingly. Create a user group that has full access to S3 (policy).
5. Create a new user, and add the user to both user groups created in the previous 2 steps.
6. Create an access key for the user, and add the id and secret under `ACCESS_KEY_ID_AWS` and `SECRET_ACCESS_KEY_AWS` respectively.
7. Populate the `REGION_AWS` according to what region you prefer, like `ap-southeast-2`.

**Installing dependencies and running it locally**
1. Run `npm install`
2. Run `npm run dev` and open `localhost:3000` on the browser

## Tradeoffs
- For the purposes of this code challenge, I have not setup a separate environment for production and local, which would be ideal in a real-app setting.
- The login screen style-wise is really different from the rest of the application, but given the time constraint I have and the work/configuration needed in order to make custom auth pages, I decided against it and opted for the prebuilt UI.
