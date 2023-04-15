"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message";
exports.ids = ["pages/api/message"];
exports.modules = {

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/message.js":
/*!******************************!*\
  !*** ./pages/api/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    messageResponse.message(\"Reply goes here\");\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n} // import { Configuration, OpenAIApi } from \"openai\";\n // const configuration = new Configuration({\n //   apiKey: process.env.OPENAI_API_KEY,\n // });\n // const openAI = new OpenAIApi(configuration);\n // export default async function handler(req, res) {\n //   const MessagingResponse = require('twilio').twiml.MessagingResponse;\n //   var messageResponse = new MessagingResponse();\n //   const sentMessage = req.body.Body || '';\n //   let replyToBeSent = \"\";\n //   if (sentMessage.trim().length === 0) {\n //     replyToBeSent = \"We could not get your message. Please try again\";\n //   } else {\n //     try {\n //       const completion = await openAI.createCompletion({\n //         model: \"text-davinci-003\", // required\n //         prompt: req.body.Body, // completion based on this\n //         temperature: 0.6, //\n //         n: 1,\n //         max_tokens: 500,\n //         // stop: \".\"\n //       });\n //       replyToBeSent = completion.data.choices[0].text\n //     } catch (error) {\n //       if (error.response) {\n //         replyToBeSent = \"There was an issue with the server\"\n //       } else { // error getting response\n //         replyToBeSent = \"An error occurred during your request.\";\n //       }\n //     }\n //   }\n //   messageResponse.message(replyToBeSent);\n //   // send response\n //   res.writeHead(200, {\n //     'Content-Type': 'text/xml'\n //   });\n //   res.end(messageResponse.toString());\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsb0JBQW9CQyxxRUFBeUM7SUFFbkUsSUFBSUUsa0JBQWtCLElBQUlIO0lBRTFCRyxnQkFBZ0JDLE9BQU8sQ0FBQztJQUN4QixnQkFBZ0I7SUFDaEJMLElBQUlNLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLGdCQUFnQjtJQUNsQjtJQUNBTixJQUFJTyxHQUFHLENBQUNILGdCQUFnQkksUUFBUTtBQUNsQyxDQUFDLENBRUQscURBQXFEO0NBRXJELDRDQUE0QztDQUM1Qyx3Q0FBd0M7Q0FDeEMsTUFBTTtDQUVOLCtDQUErQztDQUUvQyxvREFBb0Q7Q0FDcEQseUVBQXlFO0NBQ3pFLG1EQUFtRDtDQUVuRCw2Q0FBNkM7Q0FDN0MsNEJBQTRCO0NBRTVCLDJDQUEyQztDQUMzQyx5RUFBeUU7Q0FDekUsYUFBYTtDQUNiLFlBQVk7Q0FDWiwyREFBMkQ7Q0FDM0QsaURBQWlEO0NBQ2pELDZEQUE2RDtDQUM3RCwrQkFBK0I7Q0FDL0IsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsWUFBWTtDQUVaLHdEQUF3RDtDQUV4RCx3QkFBd0I7Q0FDeEIsOEJBQThCO0NBQzlCLCtEQUErRDtDQUMvRCwyQ0FBMkM7Q0FDM0Msb0VBQW9FO0NBQ3BFLFVBQVU7Q0FDVixRQUFRO0NBQ1IsTUFBTTtDQUVOLDRDQUE0QztDQUM1QyxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLGlDQUFpQztDQUNqQyxRQUFRO0NBRVIseUNBQXlDO0NBQ3pDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2JvdC8uL3BhZ2VzL2FwaS9tZXNzYWdlLmpzP2ZkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IE1lc3NhZ2luZ1Jlc3BvbnNlID0gcmVxdWlyZSgndHdpbGlvJykudHdpbWwuTWVzc2FnaW5nUmVzcG9uc2U7XHJcblxyXG4gIHZhciBtZXNzYWdlUmVzcG9uc2UgPSBuZXcgTWVzc2FnaW5nUmVzcG9uc2UoKTtcclxuXHJcbiAgbWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UoJ1JlcGx5IGdvZXMgaGVyZScpO1xyXG4gIC8vIHNlbmQgcmVzcG9uc2VcclxuICByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCdcclxuICB9KTtcclxuICByZXMuZW5kKG1lc3NhZ2VSZXNwb25zZS50b1N0cmluZygpKTtcclxufVxyXG5cclxuLy8gaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuLy8gY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuLy8gICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IG9wZW5BSSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgY29uc3QgTWVzc2FnaW5nUmVzcG9uc2UgPSByZXF1aXJlKCd0d2lsaW8nKS50d2ltbC5NZXNzYWdpbmdSZXNwb25zZTtcclxuLy8gICB2YXIgbWVzc2FnZVJlc3BvbnNlID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XHJcblxyXG4vLyAgIGNvbnN0IHNlbnRNZXNzYWdlID0gcmVxLmJvZHkuQm9keSB8fCAnJztcclxuLy8gICBsZXQgcmVwbHlUb0JlU2VudCA9IFwiXCI7XHJcblxyXG4vLyAgIGlmIChzZW50TWVzc2FnZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICByZXBseVRvQmVTZW50ID0gXCJXZSBjb3VsZCBub3QgZ2V0IHlvdXIgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpblwiO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbkFJLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4vLyAgICAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgLy8gcmVxdWlyZWRcclxuLy8gICAgICAgICBwcm9tcHQ6IHJlcS5ib2R5LkJvZHksIC8vIGNvbXBsZXRpb24gYmFzZWQgb24gdGhpc1xyXG4vLyAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsIC8vXHJcbi8vICAgICAgICAgbjogMSxcclxuLy8gICAgICAgICBtYXhfdG9rZW5zOiA1MDAsXHJcbi8vICAgICAgICAgLy8gc3RvcDogXCIuXCJcclxuLy8gICAgICAgfSk7XHJcblxyXG4vLyAgICAgICByZXBseVRvQmVTZW50ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dFxyXG5cclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4vLyAgICAgICAgIHJlcGx5VG9CZVNlbnQgPSBcIlRoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHRoZSBzZXJ2ZXJcIlxyXG4vLyAgICAgICB9IGVsc2UgeyAvLyBlcnJvciBnZXR0aW5nIHJlc3BvbnNlXHJcbi8vICAgICAgICAgcmVwbHlUb0JlU2VudCA9IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC5cIjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgbWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UocmVwbHlUb0JlU2VudCk7XHJcbi8vICAgLy8gc2VuZCByZXNwb25zZVxyXG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcbi8vICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQveG1sJ1xyXG4vLyAgIH0pO1xyXG4gIFxyXG4vLyAgIHJlcy5lbmQobWVzc2FnZVJlc3BvbnNlLnRvU3RyaW5nKCkpO1xyXG4vLyB9Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJNZXNzYWdpbmdSZXNwb25zZSIsInJlcXVpcmUiLCJ0d2ltbCIsIm1lc3NhZ2VSZXNwb25zZSIsIm1lc3NhZ2UiLCJ3cml0ZUhlYWQiLCJlbmQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message.js"));
module.exports = __webpack_exports__;

})();