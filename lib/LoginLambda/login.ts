const AWS = require('aws-sdk');
import { Handler } from "aws-cdk-lib/aws-lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const AmazonCognitoIdentity = AWS.AmazonCognitoIdentity;

export const handler: Handler = async (event: any): Promise<APIGatewayProxyResult> => {
  if (event.body.username === undefined) {
    return {
      body: JSON.stringify({ error: `Username required: ${JSON.stringify(event.body)}` }),
      statusCode: 500,
      isBase64Encoded: false,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }
  else if (event.body.password === undefined) {
    return {
      body: JSON.stringify({ error: 'Username required' }),
      statusCode: 500,
      isBase64Encoded: false,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }
  // var authenticationData = {
  //   Username: event.body.username,
  //   Password: event.body.password,
  // };
  // var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  // var poolData = {
  //   UserPoolId: 'us-east-1_EY9v4noSY',
  //   ClientId: '7ebofnhd12iheom0s9kgg24vpn'
  // };
  // var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  // var userData = {
  //   Username: event.body.username,
  //   Pool: userPool
  // };
  // var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  // await new Promise((resolve, reject) => {
  //   cognitoUser.authenticateUser(authenticationDetails, {
  //     onSuccess: function (result: any) {
  //       var accessToken = result.getAccessToken().getJwtToken();

  //       /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
  //       var idToken = result.idToken.jwtToken;

  //       return {
  //         body: JSON.stringify({ token: accessToken }),
  //         statusCode: 200,
  //         isBase64Encoded: false,
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       }
  //     },

  //     onFailure: function (err: any) {
  //       alert(err);

  //       return {
  //         body: JSON.stringify({ error: err }),
  //         statusCode: 500,
  //         isBase64Encoded: false,
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       }
  //     },

  //   });
  // });
  return {
    body: JSON.stringify({ error: `Unknown error: ${event.body.username}` }),
    statusCode: 500,
    isBase64Encoded: false,
    headers: {
      'Content-Type': 'application/json',
    }
  }
};