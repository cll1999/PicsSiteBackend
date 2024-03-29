import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import path = require('path');


export class PicsSiteBackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const apiGateway = new RestApi(this, 'PicturesApi');

    const login = apiGateway.root.addResource('login');

    // const lambdaRole = new iam.Role(this, 'lambdaRole', {
    //   roleName: 'loginLambdaRole',
    //   assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    //   managedPolicies: [
    //     iam.ManagedPolicy.fromAwsManagedPolicyName('serviceRole/')
    //   ]
    // })
    
    const loginLambda = new nodejs.NodejsFunction(this, 'LoginHandler', {
      entry: path.join(__dirname, `./LoginLambda/login.ts`),
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'handler'
    });
    
    login.addMethod('POST', new LambdaIntegration(loginLambda));
  }
}
