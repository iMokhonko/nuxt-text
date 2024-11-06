// import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

// const client = new DynamoDBClient({ region: 'eu-central-1' });

import { secret } from '@aws-amplify/backend';

export default defineEventHandler(async (event) => {
  // const command = new ScanCommand({ TableName: "test-table"});
  // const { Items = [] } = await client.send(command);

  return {
    secret: secret('secret'),
    // items: Items?.[0],
    message: 'dev hello world'
  }
})