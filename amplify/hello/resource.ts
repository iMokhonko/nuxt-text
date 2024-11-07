import { defineFunction } from "@aws-amplify/backend";
    
export const helloFunction = defineFunction({
  name: "hello",
  entry: "./handler.ts"
});