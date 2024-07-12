# The Data Foundry Service Request App

## Live Site
- The live site link is [here](https://main.d16fbxf01y0g08.amplifyapp.com/)
- To access the website, please create a new account and verify it via your email. You can then use the same account to login to the site in the future.
- *Important* I have (for now) disabled storage from prod because there seems to be some kind of dependency issue with the S3 dependency I am using that is causing an internal server error.

## Setup Instructions
**Local Setup**
This app is configured to use Amplify and its associated services including Data(DynamoDB), Auth(Cognito) and Storage(S3). The configuration for all these backend services all exists within the `amplify` folder and the `amplify_outputs.json`. To configure your local environment, you have to follow [this guide](https://docs.amplify.aws/nextjs/start/account-setup/). When you are done, the result should be a sandbox configured to run separately from the production environment.

In a separate command line:
1. Run `npm install`
2. Run `npm run dev` and open `localhost:3000` on the browser

## Tradeoffs and Notes
- The login screen style-wise is really different from the rest of the application, but given the time constraint I have and the work/configuration needed in order to make custom auth pages, I decided against it and opted for the prebuilt UI.
- I would have preferred to have the form and the table be separate pages, but given the requirements, I worked accordingly.
- I used React Hook Form to have client-side validation of the form. This is acheived via using a form schema which goes hand-in-hand with the schema specified in the `resource/data.ts`. While some wrangling of the submission process and FormData needed to be done, the result is a type-safe form submit.

