export const buildReciepeReqWithIngrad = (input: FormDataEntryValue):string  => {

  const prompt = `Give me a reciepe using only the following ingredients: ${input}`;
  return prompt;
};

export function buildResponseElement(result: any): string{
  if (result === null) {
    return "";
  }

  console.log(result);
  return result.content;
};