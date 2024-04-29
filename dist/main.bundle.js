/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMain = function () {
  const main = document.querySelector(".main");
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");

  const addTask = document.getElementById("addTask");
  const today = document.getElementById("today");
  const thisWeek = document.getElementById("thisWeek");
  const important = document.getElementById("important");
  const completed = document.getElementById("completed");
  const addProject = document.getElementById("addProject");
  const finishedProjects = document.getElementById("finishedProjects");
  const tasksModal = document.querySelector(".tasksModal");
  const overlay = document.getElementById("tasksOverlay");
  const projectsModal = document.querySelector(".projectsModal");
  const closeTasksBtn = document.querySelector("button[data-close-button]");
  const closeProjectsBtn = document.getElementById("exitProjects");
  return {
    main,
    newContainer,
    inProgressContainer,
    finishedContainer,
    addTask,
    today,
    thisWeek,
    important,
    completed,
    addProject,
    finishedProjects,
    tasksModal,
    overlay,
    closeProjectsBtn,
    closeTasksBtn,
    projectsModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbG9hZE1haW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3XCIpO1xuICBjb25zdCBpblByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblByb2dyZXNzXCIpO1xuICBjb25zdCBmaW5pc2hlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmluaXNoZWRcIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpc1dlZWtcIik7XG4gIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50XCIpO1xuICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFwiKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgY29uc3QgZmluaXNoZWRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluaXNoZWRQcm9qZWN0c1wiKTtcbiAgY29uc3QgdGFza3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NNb2RhbFwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NPdmVybGF5XCIpO1xuICBjb25zdCBwcm9qZWN0c01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c01vZGFsXCIpO1xuICBjb25zdCBjbG9zZVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWNsb3NlLWJ1dHRvbl1cIik7XG4gIGNvbnN0IGNsb3NlUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4aXRQcm9qZWN0c1wiKTtcbiAgcmV0dXJuIHtcbiAgICBtYWluLFxuICAgIG5ld0NvbnRhaW5lcixcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLFxuICAgIGZpbmlzaGVkQ29udGFpbmVyLFxuICAgIGFkZFRhc2ssXG4gICAgdG9kYXksXG4gICAgdGhpc1dlZWssXG4gICAgaW1wb3J0YW50LFxuICAgIGNvbXBsZXRlZCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGZpbmlzaGVkUHJvamVjdHMsXG4gICAgdGFza3NNb2RhbCxcbiAgICBvdmVybGF5LFxuICAgIGNsb3NlUHJvamVjdHNCdG4sXG4gICAgY2xvc2VUYXNrc0J0bixcbiAgICBwcm9qZWN0c01vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=