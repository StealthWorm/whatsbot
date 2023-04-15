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

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// export default function handler(req, res) {\n//   const MessagingResponse = require('twilio').twiml.MessagingResponse;\n//   var messageResponse = new MessagingResponse();\n//   messageResponse.message('Reply goes here');\n//   // send response\n//   res.writeHead(200, {\n//   'Content-Type': 'text/xml'\n//   });\n//   res.end(messageResponse.toString());\n//   }\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 500\n            });\n            replyToBeSent = completion.data.choices[0].text;\n            console.log(replyToBeSent);\n        } catch (error) {\n            if (error.response) {\n                console.log(error.response);\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBRXpFLG1EQUFtRDtBQUVuRCxnREFBZ0Q7QUFFaEQscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLHlDQUF5QztBQUN6QyxNQUFNO0FBRTRDO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFZCxlQUFlTSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxvQkFBb0JDLHFFQUF5QztJQUNuRSxJQUFJRSxrQkFBa0IsSUFBSUg7SUFFMUIsTUFBTUksY0FBY04sSUFBSU8sSUFBSSxDQUFDQyxJQUFJLElBQUk7SUFDckMsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQUlILFlBQVlJLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDbkNGLGdCQUFnQjtJQUNsQixPQUFPO1FBQ0wsSUFBSTtZQUNGLE1BQU1HLGFBQWEsTUFBTWQsT0FBT2UsZ0JBQWdCLENBQUM7Z0JBQy9DQyxPQUFPO2dCQUNQQyxRQUFRZixJQUFJTyxJQUFJLENBQUNDLElBQUk7Z0JBQ3JCUSxhQUFhO2dCQUNiQyxHQUFHO2dCQUNIQyxZQUFZO1lBRWQ7WUFFQVQsZ0JBQWdCRyxXQUFXTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7WUFFL0NDLFFBQVFDLEdBQUcsQ0FBQ2Q7UUFFZCxFQUFFLE9BQU9lLE9BQU87WUFDZCxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7Z0JBQ2xCSCxRQUFRQyxHQUFHLENBQUNDLE1BQU1DLFFBQVE7Z0JBQzFCaEIsZ0JBQWdCO1lBQ2xCLE9BQU87Z0JBQ0xBLGdCQUFnQjtZQUNsQixDQUFDO1FBQ0g7SUFDRixDQUFDO0lBRURKLGdCQUFnQnFCLE9BQU8sQ0FBQ2pCO0lBQ3hCLGdCQUFnQjtJQUNoQlIsSUFBSTBCLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLGdCQUFnQjtJQUNsQjtJQUVBMUIsSUFBSTJCLEdBQUcsQ0FBQ3ZCLGdCQUFnQndCLFFBQVE7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYm90Ly4vcGFnZXMvYXBpL21lc3NhZ2UuanM/ZmRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgY29uc3QgTWVzc2FnaW5nUmVzcG9uc2UgPSByZXF1aXJlKCd0d2lsaW8nKS50d2ltbC5NZXNzYWdpbmdSZXNwb25zZTtcclxuXHJcbi8vICAgdmFyIG1lc3NhZ2VSZXNwb25zZSA9IG5ldyBNZXNzYWdpbmdSZXNwb25zZSgpO1xyXG5cclxuLy8gICBtZXNzYWdlUmVzcG9uc2UubWVzc2FnZSgnUmVwbHkgZ29lcyBoZXJlJyk7XHJcblxyXG4vLyAgIC8vIHNlbmQgcmVzcG9uc2VcclxuLy8gICByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4vLyAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnXHJcbi8vICAgfSk7XHJcbi8vICAgcmVzLmVuZChtZXNzYWdlUmVzcG9uc2UudG9TdHJpbmcoKSk7XHJcbi8vICAgfVxyXG5cclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG59KTtcclxuXHJcbmNvbnN0IG9wZW5BSSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgTWVzc2FnaW5nUmVzcG9uc2UgPSByZXF1aXJlKCd0d2lsaW8nKS50d2ltbC5NZXNzYWdpbmdSZXNwb25zZTtcclxuICB2YXIgbWVzc2FnZVJlc3BvbnNlID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XHJcblxyXG4gIGNvbnN0IHNlbnRNZXNzYWdlID0gcmVxLmJvZHkuQm9keSB8fCAnJztcclxuICBsZXQgcmVwbHlUb0JlU2VudCA9IFwiXCI7XHJcblxyXG4gIGlmIChzZW50TWVzc2FnZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXBseVRvQmVTZW50ID0gXCJXZSBjb3VsZCBub3QgZ2V0IHlvdXIgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpblwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbkFJLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgLy8gcmVxdWlyZWRcclxuICAgICAgICBwcm9tcHQ6IHJlcS5ib2R5LkJvZHksIC8vIGNvbXBsZXRpb24gYmFzZWQgb24gdGhpc1xyXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsIC8vXHJcbiAgICAgICAgbjogMSxcclxuICAgICAgICBtYXhfdG9rZW5zOiA1MDAsXHJcbiAgICAgICAgLy8gc3RvcDogXCIuXCJcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXBseVRvQmVTZW50ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dFxyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVwbHlUb0JlU2VudCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIHJlcGx5VG9CZVNlbnQgPSBcIlRoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHRoZSBzZXJ2ZXJcIlxyXG4gICAgICB9IGVsc2UgeyAvLyBlcnJvciBnZXR0aW5nIHJlc3BvbnNlXHJcbiAgICAgICAgcmVwbHlUb0JlU2VudCA9IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC5cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UocmVwbHlUb0JlU2VudCk7XHJcbiAgLy8gc2VuZCByZXNwb25zZVxyXG4gIHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ3RleHQveG1sJ1xyXG4gIH0pO1xyXG5cclxuICByZXMuZW5kKG1lc3NhZ2VSZXNwb25zZS50b1N0cmluZygpKTtcclxufSJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5BSSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJNZXNzYWdpbmdSZXNwb25zZSIsInJlcXVpcmUiLCJ0d2ltbCIsIm1lc3NhZ2VSZXNwb25zZSIsInNlbnRNZXNzYWdlIiwiYm9keSIsIkJvZHkiLCJyZXBseVRvQmVTZW50IiwidHJpbSIsImxlbmd0aCIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm4iLCJtYXhfdG9rZW5zIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwid3JpdGVIZWFkIiwiZW5kIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

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