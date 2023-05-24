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
  const MessagingResponse =  require('twilio').twiml.MessagingResponse

  const sentMessage = req.body.Body || '';
  let replyToBeSent = "";

  if (sentMessage.trim().length === 0) {
    replyToBeSent = "We could not get your message. Please try again";
  } else {
    console.log("entrou no else");
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured",
        }
      });
      return;
    }
    console.log("validou chave API");

    // try {
      const completion = await openAI.createCompletion({
        model: "text-davinci-003", // required
        prompt: `${req.body.Body}`, // completion based on this
        temperature: 0.6, //
        // n: 1,
        max_tokens: 500,
        stop: '\n'
      });

      console.log(JSON.stringify(JSON.parse(completion.data.choices[0].text)));
      replyToBeSent = removeIncompleteText(completion.data.choices[0].text)
      console.log(replyToBeSent);

    // } catch (error) {
    //   if (error.response) {
    //     replyToBeSent = error.response.data.message || "There was an issue with the server"
    //   } else { 
    //     replyToBeSent = "An error occurred during your request.";
    //   }
    // }
  }

  const messageResponse = new MessagingResponse();
  messageResponse.message(replyToBeSent);
  // messageResponse.message('Reply goes here');

  // send response
  try {
    res.writeHead(200, {
      'Content-Type': 'text/xml'
    });

    res.end(messageResponse.toString());
    // console.log("passou aqui")
    // res.status(200).json({ text: `${messageResponse.toString()}` })
  } catch (error) {
    console.error('Error sending Twilio response:', error);
    res.status(500).json({
      error: {
        message: "Error sending Twilio response",
      }
    });
  }
}

function removeIncompleteText(inputString) {
  const match = inputString.match(/\b\.\s\d+/g);
  const removeAfter = match ? inputString.slice(0, inputString.lastIndexOf(match[match.length - 1])) : inputString;
  return removeAfter
}