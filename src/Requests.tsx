export const buildReciepeReqWithIngrad = (input: FormDataEntryValue) => {

  const prompt = `Give me a reciepe using only the following ingredients: ${input}`;
  return prompt;
};

export async function buildResponseElement(serverResponse: any) {
  if (serverResponse === null) {
    return "";
  }
  serverResponse =  await serverResponse.json();
  console.log(serverResponse);
  return serverResponse.content;
};