# Padlock-VersionControl
This version of the Padlock's backend is built to work in AWS Lambda format by serverless technology.

## Index.
---
---
## 1. AWS & Serverless Configuration

- 1.1 Nodejs and Serverless installation.
    Being created our serverless template we need to access into our folder and start creating our package.json.

    In this case we're going to use nvm to install our required version of node.js and npm:
    ```
    nvm list-remote 
    nvm install [version]
    nvm use [version]
    ```
    Or
    ```
    nvm install --lts
    nvm use --lts
    ```

    And install serverless
    ```
    npm install -g serverless
    ```

- 2.1 Serverless Integration

    To make a serverless template for aws lambda we need to ingress the following code:
    ```
    serverless create --template aws-nodejs --path [folder's name]

    cd [folder's name]
    ```

    Next, we can create our package.json file:

    ```
    npm init -y
    ```
    And create a script to invoke our code from node with **npm run invoke**:
    ```
    "scripts":{
        "invoke":"sls invoke local -f function_name"
    }
    ```

    To check the code created in our template we must invoke it locally:
    ```
    sls invoke local -f [function's name]
    ```
    or
    ```
    serverless invoke local -f [function's name]
    ```

- 3.1 Deploying our app in AWS Lambda.
    For deploy our code we need to access into our AWS account and create a new user with permissions to that.

    We can locate this page in the following route:
    ```
    Access Management >> users >> Add user >> Programmatic access + Next >> Permissions: 'AdministratorAccess'
    ```
    And copy our Access key ID and Secret access key. We will need provide them in the following command to configure our code to deploy it to lambda.
    ```
    sls config credentials --provider aws --key [access_key _id] --secret [secret_access_key] --profile [user_name]
    ```
- 4.1 Create serverles.yml
    The next step is create our serverless.yml file to provide it our profile and instructions to  work properly(This file must be created inside our aws folder created) in the first step:
    ```
    service: "folder_name"
    framework: "framework_version_number"

    provider:
        name: aws
        
        runtime nodejs12.x
        stage: dev
        profile: [user_name]
        lambdaHashingVersion: 20201221
        region: eu-wes-3 #If we choose Paris in our AWS account

    functions:
        function_name:
            handler: path_to_script
            events:
                - http: 
                    path: /path/to/function
                    
                    #If we require parameters
                    request:
                        parameters:
                            paths:
                                user_id: true

                    method: get #GET, POST, PUT, DELETE

    ```
- 5.1 Deploy Configuration

    To deploy our app we only need to add another script to our package.json to run the order: 
    ```
    "scripts":{
        "invoke":"sls invoke local -f function_name",
        "deploy":"sls deploy --stage dev --verbose"
    }
    ```
    And to finally run locally our aws lambda project we need to paste the following code into our terminal:

    ```
    npm run deploy
    ```
    Or
    ```
    yarn deploy
    ```
## 2. Node.js as BackEnd