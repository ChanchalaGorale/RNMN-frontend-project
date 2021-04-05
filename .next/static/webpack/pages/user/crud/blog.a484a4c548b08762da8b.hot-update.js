webpackHotUpdate_N_E("pages/user/crud/blog",{

/***/ "./actions/tag.js":
/*!************************!*\
  !*** ./actions/tag.js ***!
  \************************/
/*! exports provided: create, getTags, singleTag, removeTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTags\", function() { return getTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singleTag\", function() { return singleTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTag\", function() { return removeTag; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./actions/auth.js\");\n //import { API } from \"../config\";\n\n\nvar API = \"https://arcane-shelf-33075.herokuapp.com\";\nvar create = function create(tag, token) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/tag\"), {\n    method: \"POST\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \".concat(token)\n    },\n    body: JSON.stringify(tag)\n  }).then(function (response) {\n    Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"handleResponse\"])(response);\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar getTags = function getTags() {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/tags\"), {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar singleTag = function singleTag(slug) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/tag/\").concat(slug), {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar removeTag = function removeTag(slug, token) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/tag/\").concat(slug), {\n    method: \"DELETE\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \".concat(token)\n    }\n  }).then(function (response) {\n    Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"handleResponse\"])(response);\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWcuanM/NDhjYSJdLCJuYW1lcyI6WyJBUEkiLCJjcmVhdGUiLCJ0YWciLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZVJlc3BvbnNlIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUYWdzIiwic2luZ2xlVGFnIiwic2x1ZyIsInJlbW92ZVRhZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUNBO0FBRUEsSUFBSUEsR0FBRyxHQUFHLDBDQUFWO0FBR08sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3BDLFNBQU9DLHVEQUFLLFdBQUlKLEdBQUosZUFBbUI7QUFDN0JLLFVBQU0sRUFBRSxNQURxQjtBQUU3QkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQixrQkFGVDtBQUdQQyxtQkFBYSxtQkFBWUwsS0FBWjtBQUhOLEtBRm9CO0FBTzdCTSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxHQUFmO0FBUHVCLEdBQW5CLENBQUwsQ0FTSlUsSUFUSSxDQVNDLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsZ0VBQWMsQ0FBQ0QsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRSxJQUFULEVBQVA7QUFDRCxHQVpJLFdBYUUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQWJGLENBQVA7QUFjRCxDQWZNO0FBaUJBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDM0IsU0FBT2YsdURBQUssV0FBSUosR0FBSixnQkFBb0I7QUFDOUJLLFVBQU0sRUFBRTtBQURzQixHQUFwQixDQUFMLENBR0pPLElBSEksQ0FHQyxVQUFDQyxRQUFELEVBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDRSxJQUFULEVBQVA7QUFDRCxHQUxJLFdBTUUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQU5GLENBQVA7QUFPRCxDQVJNO0FBVUEsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLFNBQU9qQix1REFBSyxXQUFJSixHQUFKLHNCQUFtQnFCLElBQW5CLEdBQTJCO0FBQ3JDaEIsVUFBTSxFQUFFO0FBRDZCLEdBQTNCLENBQUwsQ0FHSk8sSUFISSxDQUdDLFVBQUNDLFFBQUQsRUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNFLElBQVQsRUFBUDtBQUNELEdBTEksV0FNRSxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBTkYsQ0FBUDtBQU9ELENBUk07QUFVQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRCxJQUFELEVBQU9sQixLQUFQLEVBQWlCO0FBQ3hDLFNBQU9DLHVEQUFLLFdBQUlKLEdBQUosc0JBQW1CcUIsSUFBbkIsR0FBMkI7QUFDckNoQixVQUFNLEVBQUUsUUFENkI7QUFFckNDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0Isa0JBRlQ7QUFHUEMsbUJBQWEsbUJBQVlMLEtBQVo7QUFITjtBQUY0QixHQUEzQixDQUFMLENBUUpTLElBUkksQ0FRQyxVQUFDQyxRQUFELEVBQWM7QUFDbEJDLGdFQUFjLENBQUNELFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ0QsR0FYSSxXQVlFLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FaRixDQUFQO0FBYUQsQ0FkTSIsImZpbGUiOiIuL2FjdGlvbnMvdGFnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG4vL2ltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5sZXQgQVBJID0gXCJodHRwczovL2FyY2FuZS1zaGVsZi0zMzA3NS5oZXJva3VhcHAuY29tXCI7XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHRva2VuKSA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUEl9L2FwaS90YWdgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhZyksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUEl9L2FwaS90YWdzYCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2luZ2xlVGFnID0gKHNsdWcpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vYXBpL3RhZy8ke3NsdWd9YCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFnID0gKHNsdWcsIHRva2VuKSA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUEl9L2FwaS90YWcvJHtzbHVnfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/tag.js\n");

/***/ })

})