// export default function handler(req, res) {
//   const MessagingResponse = require('twilio').twiml.MessagingResponse;

//   var messageResponse = new MessagingResponse();

//   messageResponse.message('Reply goes here');

//   // send response
//   res.writeHead(200, {
//   'Content-Type': 'text/xml'
//   });
//   res.end(messageResponse.toString());
//   }

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const MessagingResponse = await require('twilio').twiml.MessagingResponse;
  var messageResponse = new MessagingResponse();

  const sentMessage = req.body.Body || '';
  let replyToBeSent = "";

  if (sentMessage.trim().length === 0) {
    replyToBeSent = "We could not get your message. Please try again";
  } else {

    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured",
        }
      });
      return;
    }

    try {
      const completion = await openAI.createCompletion({
        model: "text-davinci-003", // required
        prompt: 'HOW ARE YOU? ', //req.body.Body, // completion based on this
        temperature: 0.6, //
        n: 1,
        max_tokens: 500,
        // stop: "."
      });

      replyToBeSent = removeIncompleteText(completion.data.choices[0].text)
      console.log(replyToBeSent)

    } catch (error) {
      if (error.response) {
        console.log(error.response)
        replyToBeSent = "There was an issue with the server"
      } else { // error getting response
        replyToBeSent = "An error occurred during your request.";
      }
    }
  }

  messageResponse.message(replyToBeSent);

  // send response
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });

  res.end(messageResponse.toString());
}

function removeIncompleteText(inputString) {
  const match = inputString.match(/\b\.\s\d+/g);
  const removeAfter = match ? inputString.slice(0, inputString.lastIndexOf(match[match.length - 1])) : inputString;
  return removeAfter
}