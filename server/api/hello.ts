import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-central-1' });

export default defineEventHandler(async (event) => {
  const input = {
    TableName: "test-table"
  };

  const command = new ScanCommand({ TableName: "test-table"});
  const { Items = [] } = await client.send(command);

  return {
    items: Items?.[0],
    message: 'dev hello world'
  }
})