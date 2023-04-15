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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// export default function handler(req, res) {\n//   const MessagingResponse = require('twilio').twiml.MessagingResponse;\n//   var messageResponse = new MessagingResponse();\n//   messageResponse.message('Reply goes here');\n//   // send response\n//   res.writeHead(200, {\n//   'Content-Type': 'text/xml'\n//   });\n//   res.end(messageResponse.toString());\n//   }\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        if (!configuration.apiKey) {\n            res.status(500).json({\n                error: {\n                    message: \"OpenAI API key not configured\"\n                }\n            });\n            return;\n        }\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 500\n            });\n            replyToBeSent = removeIncompleteText(completion.data.choices[0].text);\n        } catch (error) {\n            if (error.response) {\n                console.log(error);\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\nfunction removeIncompleteText(inputString) {\n    const match = inputString.match(/\\b\\.\\s\\d+/g);\n    const removeAfter = match ? inputString.slice(0, inputString.lastIndexOf(match[match.length - 1])) : inputString;\n    return removeAfter;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBRXpFLG1EQUFtRDtBQUVuRCxnREFBZ0Q7QUFFaEQscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLHlDQUF5QztBQUN6QyxNQUFNO0FBRTRDO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFZCxlQUFlTSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxvQkFBb0JDLHFFQUF5QztJQUNuRSxJQUFJRSxrQkFBa0IsSUFBSUg7SUFFMUIsTUFBTUksY0FBY04sSUFBSU8sSUFBSSxDQUFDQyxJQUFJLElBQUk7SUFDckMsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQUlILFlBQVlJLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDbkNGLGdCQUFnQjtJQUNsQixPQUFPO1FBRUwsSUFBSSxDQUFDaEIsY0FBY0MsTUFBTSxFQUFFO1lBQ3pCTyxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1lBQ0E7UUFDRixDQUFDO1FBRUQsSUFBSTtZQUNGLE1BQU1DLGFBQWEsTUFBTWxCLE9BQU9tQixnQkFBZ0IsQ0FBQztnQkFDL0NDLE9BQU87Z0JBQ1BDLFFBQVFuQixJQUFJTyxJQUFJLENBQUNDLElBQUk7Z0JBQ3JCWSxhQUFhO2dCQUNiQyxHQUFHO2dCQUNIQyxZQUFZO1lBRWQ7WUFFQWIsZ0JBQWdCYyxxQkFBcUJQLFdBQVdRLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUV0RSxFQUFFLE9BQU9aLE9BQU87WUFDZCxJQUFJQSxNQUFNYSxRQUFRLEVBQUU7Z0JBQ2xCQyxRQUFRQyxHQUFHLENBQUNmO2dCQUNaTCxnQkFBZ0I7WUFDbEIsT0FBTztnQkFDTEEsZ0JBQWdCO1lBQ2xCLENBQUM7UUFDSDtJQUNGLENBQUM7SUFFREosZ0JBQWdCVSxPQUFPLENBQUNOO0lBRXhCLGdCQUFnQjtJQUNoQlIsSUFBSTZCLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLGdCQUFnQjtJQUNsQjtJQUVBN0IsSUFBSThCLEdBQUcsQ0FBQzFCLGdCQUFnQjJCLFFBQVE7QUFDbEMsQ0FBQztBQUVELFNBQVNULHFCQUFxQlUsV0FBVyxFQUFFO0lBQ3pDLE1BQU1DLFFBQVFELFlBQVlDLEtBQUssQ0FBQztJQUNoQyxNQUFNQyxjQUFjRCxRQUFRRCxZQUFZRyxLQUFLLENBQUMsR0FBR0gsWUFBWUksV0FBVyxDQUFDSCxLQUFLLENBQUNBLE1BQU12QixNQUFNLEdBQUcsRUFBRSxLQUFLc0IsV0FBVztJQUNoSCxPQUFPRTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdHNib3QvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcz9mZGY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuLy8gICBjb25zdCBNZXNzYWdpbmdSZXNwb25zZSA9IHJlcXVpcmUoJ3R3aWxpbycpLnR3aW1sLk1lc3NhZ2luZ1Jlc3BvbnNlO1xyXG5cclxuLy8gICB2YXIgbWVzc2FnZVJlc3BvbnNlID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XHJcblxyXG4vLyAgIG1lc3NhZ2VSZXNwb25zZS5tZXNzYWdlKCdSZXBseSBnb2VzIGhlcmUnKTtcclxuXHJcbi8vICAgLy8gc2VuZCByZXNwb25zZVxyXG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XHJcbi8vICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCdcclxuLy8gICB9KTtcclxuLy8gICByZXMuZW5kKG1lc3NhZ2VSZXNwb25zZS50b1N0cmluZygpKTtcclxuLy8gICB9XHJcblxyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlbkFJID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBNZXNzYWdpbmdSZXNwb25zZSA9IHJlcXVpcmUoJ3R3aWxpbycpLnR3aW1sLk1lc3NhZ2luZ1Jlc3BvbnNlO1xyXG4gIHZhciBtZXNzYWdlUmVzcG9uc2UgPSBuZXcgTWVzc2FnaW5nUmVzcG9uc2UoKTtcclxuXHJcbiAgY29uc3Qgc2VudE1lc3NhZ2UgPSByZXEuYm9keS5Cb2R5IHx8ICcnO1xyXG4gIGxldCByZXBseVRvQmVTZW50ID0gXCJcIjtcclxuXHJcbiAgaWYgKHNlbnRNZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgIHJlcGx5VG9CZVNlbnQgPSBcIldlIGNvdWxkIG5vdCBnZXQgeW91ciBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluXCI7XHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZFwiLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbkFJLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgLy8gcmVxdWlyZWRcclxuICAgICAgICBwcm9tcHQ6IHJlcS5ib2R5LkJvZHksIC8vIGNvbXBsZXRpb24gYmFzZWQgb24gdGhpc1xyXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsIC8vXHJcbiAgICAgICAgbjogMSxcclxuICAgICAgICBtYXhfdG9rZW5zOiA1MDAsXHJcbiAgICAgICAgLy8gc3RvcDogXCIuXCJcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXBseVRvQmVTZW50ID0gcmVtb3ZlSW5jb21wbGV0ZVRleHQoY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXBseVRvQmVTZW50ID0gXCJUaGVyZSB3YXMgYW4gaXNzdWUgd2l0aCB0aGUgc2VydmVyXCJcclxuICAgICAgfSBlbHNlIHsgLy8gZXJyb3IgZ2V0dGluZyByZXNwb25zZVxyXG4gICAgICAgIHJlcGx5VG9CZVNlbnQgPSBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1lc3NhZ2VSZXNwb25zZS5tZXNzYWdlKHJlcGx5VG9CZVNlbnQpO1xyXG5cclxuICAvLyBzZW5kIHJlc3BvbnNlXHJcbiAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnXHJcbiAgfSk7XHJcblxyXG4gIHJlcy5lbmQobWVzc2FnZVJlc3BvbnNlLnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbmNvbXBsZXRlVGV4dChpbnB1dFN0cmluZykge1xyXG4gIGNvbnN0IG1hdGNoID0gaW5wdXRTdHJpbmcubWF0Y2goL1xcYlxcLlxcc1xcZCsvZyk7XHJcbiAgY29uc3QgcmVtb3ZlQWZ0ZXIgPSBtYXRjaCA/IGlucHV0U3RyaW5nLnNsaWNlKDAsIGlucHV0U3RyaW5nLmxhc3RJbmRleE9mKG1hdGNoW21hdGNoLmxlbmd0aCAtIDFdKSkgOiBpbnB1dFN0cmluZztcclxuICByZXR1cm4gcmVtb3ZlQWZ0ZXJcclxufSJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5BSSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJNZXNzYWdpbmdSZXNwb25zZSIsInJlcXVpcmUiLCJ0d2ltbCIsIm1lc3NhZ2VSZXNwb25zZSIsInNlbnRNZXNzYWdlIiwiYm9keSIsIkJvZHkiLCJyZXBseVRvQmVTZW50IiwidHJpbSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJuIiwibWF4X3Rva2VucyIsInJlbW92ZUluY29tcGxldGVUZXh0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwid3JpdGVIZWFkIiwiZW5kIiwidG9TdHJpbmciLCJpbnB1dFN0cmluZyIsIm1hdGNoIiwicmVtb3ZlQWZ0ZXIiLCJzbGljZSIsImxhc3RJbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

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