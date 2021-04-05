webpackHotUpdate_N_E("pages/user/update",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: userPublicProfile, getProfile, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userPublicProfile\", function() { return userPublicProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProfile\", function() { return getProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./actions/auth.js\");\n //import { API } from \"../config\";\n\n\nvar API = \"https://arcane-shelf-33075.herokuapp.com\";\nvar userPublicProfile = function userPublicProfile(username) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/user/\").concat(username), {\n    method: \"GET\",\n    headers: {\n      Accept: \"application/json\"\n    }\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar getProfile = function getProfile(token) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/user/profile\"), {\n    method: \"GET\",\n    headers: {\n      Accept: \"application/json\",\n      Authorization: \"Bearer \".concat(token)\n    }\n  }).then(function (response) {\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar update = function update(token, user) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(API, \"/api/user/update\"), {\n    method: \"PUT\",\n    headers: {\n      Accept: \"application/json\",\n      Authorization: \"Bearer \".concat(token)\n    },\n    body: user\n  }).then(function (response) {\n    Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"handleResponse\"])(response);\n    return response.json();\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy91c2VyLmpzP2QxY2UiXSwibmFtZXMiOlsiQVBJIiwidXNlclB1YmxpY1Byb2ZpbGUiLCJ1c2VybmFtZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZmlsZSIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsInVwZGF0ZSIsInVzZXIiLCJib2R5IiwiaGFuZGxlUmVzcG9uc2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBQ0E7QUFFQSxJQUFJQSxHQUFHLEdBQUcsMENBQVY7QUFFTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFFBQUQsRUFBYztBQUM3QyxTQUFPQyx1REFBSyxXQUFJSCxHQUFKLHVCQUFvQkUsUUFBcEIsR0FBZ0M7QUFDMUNFLFVBQU0sRUFBRSxLQURrQztBQUUxQ0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQUREO0FBRmlDLEdBQWhDLENBQUwsQ0FNSkMsSUFOSSxDQU1DLFVBQUNDLFFBQUQsRUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBUkksV0FTRSxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBVEYsQ0FBUDtBQVVELENBWE07QUFhQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDbkMsU0FBT1gsdURBQUssV0FBSUgsR0FBSix3QkFBNEI7QUFDdENJLFVBQU0sRUFBRSxLQUQ4QjtBQUV0Q0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQUyxtQkFBYSxtQkFBWUQsS0FBWjtBQUZOO0FBRjZCLEdBQTVCLENBQUwsQ0FPSlAsSUFQSSxDQU9DLFVBQUNDLFFBQUQsRUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBVEksV0FVRSxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBVkYsQ0FBUDtBQVdELENBWk07QUFjQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDRixLQUFELEVBQVFHLElBQVIsRUFBaUI7QUFDckMsU0FBT2QsdURBQUssV0FBSUgsR0FBSix1QkFBMkI7QUFDckNJLFVBQU0sRUFBRSxLQUQ2QjtBQUVyQ0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQUyxtQkFBYSxtQkFBWUQsS0FBWjtBQUZOLEtBRjRCO0FBTXJDSSxRQUFJLEVBQUVEO0FBTitCLEdBQTNCLENBQUwsQ0FRSlYsSUFSSSxDQVFDLFVBQUNDLFFBQUQsRUFBYztBQUNsQlcsZ0VBQWMsQ0FBQ1gsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVhJLFdBWUUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVpGLENBQVA7QUFhRCxDQWRNIiwiZmlsZSI6Ii4vYWN0aW9ucy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG4vL2ltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5sZXQgQVBJID0gXCJodHRwczovL2FyY2FuZS1zaGVsZi0zMzA3NS5oZXJva3VhcHAuY29tXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyUHVibGljUHJvZmlsZSA9ICh1c2VybmFtZSkgPT4ge1xuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9hcGkvdXNlci8ke3VzZXJuYW1lfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKHRva2VuKSA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUEl9L2FwaS91c2VyL3Byb2ZpbGVgLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAodG9rZW4sIHVzZXIpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vYXBpL3VzZXIvdXBkYXRlYCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfSxcbiAgICBib2R5OiB1c2VyLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/user.js\n");

/***/ })

})