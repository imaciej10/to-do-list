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

  const closeModal = function (window) {
    window.classList.remove("active");
    overlay.classList.remove("active");
  };

  const openModal = function (window) {
    window.classList.add("active");
    overlay.classList.add("active");
  };

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
    closeModal,
    openModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBsb2FkTWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdcIik7XG4gIGNvbnN0IGluUHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluUHJvZ3Jlc3NcIik7XG4gIGNvbnN0IGZpbmlzaGVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5pc2hlZFwiKTtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XG4gIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzV2Vla1wiKTtcbiAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRhbnRcIik7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuICBjb25zdCBmaW5pc2hlZFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5pc2hlZFByb2plY3RzXCIpO1xuICBjb25zdCB0YXNrc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc01vZGFsXCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc092ZXJsYXlcIik7XG4gIGNvbnN0IHByb2plY3RzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzTW9kYWxcIik7XG4gIGNvbnN0IGNsb3NlVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2RhdGEtY2xvc2UtYnV0dG9uXVwiKTtcbiAgY29uc3QgY2xvc2VQcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhpdFByb2plY3RzXCIpO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluLFxuICAgIG5ld0NvbnRhaW5lcixcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLFxuICAgIGZpbmlzaGVkQ29udGFpbmVyLFxuICAgIGFkZFRhc2ssXG4gICAgdG9kYXksXG4gICAgdGhpc1dlZWssXG4gICAgaW1wb3J0YW50LFxuICAgIGNvbXBsZXRlZCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGZpbmlzaGVkUHJvamVjdHMsXG4gICAgdGFza3NNb2RhbCxcbiAgICBvdmVybGF5LFxuICAgIGNsb3NlUHJvamVjdHNCdG4sXG4gICAgY2xvc2VUYXNrc0J0bixcbiAgICBwcm9qZWN0c01vZGFsLFxuICAgIGNsb3NlTW9kYWwsXG4gICAgb3Blbk1vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=