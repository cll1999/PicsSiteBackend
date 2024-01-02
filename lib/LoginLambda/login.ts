import { Handler } from "aws-cdk-lib/aws-lambda";

export const handler: Handler = async () => {
  return {
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      'Content-Type': 'application/json',
    }
  }
};