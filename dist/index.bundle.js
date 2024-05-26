/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope[wght].ttf */ "./src/fonts/Manrope[wght].ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Manrope\", \"Iowan Old Style\", \"Palatino Linotype\",\n    \"URW Palladio L\", P052, serif;\n  font-weight: normal;\n  font-size: 18px;\n  background-color: gray;\n  color: black;\n  --new-color: #818cdd;\n  --inProgress-color: #4556d8;\n  --finished-color: #091dcf;\n  --header-color: #c8c8f3;\n  --main-color: #f4f2f2;\n  --sidebar-color: #a5a5ca;\n  --footer-color: #d58d7e;\n  --accent-color: #ee3f6e;\n}\n\nli:hover {\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\ninput#name:valid,\ninput#project:valid,\ninput#project:valid {\n  border: 2px solid green;\n  outline: none;\n}\n\ninput#name:invalid,\ninput#project:invalid {\n  border: 2px solid red;\n  outline: none;\n}\n\ninput#name:focus,\ninput#description:focus,\ntextarea:focus,\ninput#project:focus,\ninput[type=\"text\"]:focus {\n  outline: none;\n}\nli::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--accent-color);\n  width: 0%;\n  height: 3px;\n  bottom: -6px;\n  left: 0;\n  transition: 0.4s;\n}\n\nli:hover::after {\n  width: 100%;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template: 1fr 8fr 1fr / 1fr 3fr;\n}\n\n.header {\n  background-color: var(--header-color);\n  font-size: 3.2rem;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  grid-area: 1 / 1 / 2 / 4;\n  text-transform: uppercase;\n  font-family: \"Poppins\";\n  letter-spacing: 0.1rem;\n  user-select: none;\n}\n\n.toDoLogo {\n  width: auto;\n  height: 3.5rem;\n}\n\n/* sidebar */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--sidebar-color);\n  grid-area: 2 / 1 / 4 / 2;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.dropzone.dragover {\n  background-color: rgb(238, 63, 110, 0.3);\n}\n.tasks {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.activeFilter {\n  color: var(--accent-color);\n}\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  row-gap: 1rem;\n}\n\n.task {\n  user-select: none;\n  position: relative;\n  height: 10%;\n  border: none;\n  font-size: 1.3rem;\n  padding: 0.5rem 0.7rem;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 600ms;\n  border-radius: 0.7rem;\n  align-items: center;\n  justify-items: center;\n}\n.task:hover {\n  grid-template: repeat (6, 1fr) / repeat (2, 1fr);\n  height: 50%;\n}\n\n.task:hover > * {\n  visibility: visible;\n}\n\n#addProject {\n  display: flex;\n  font-size: 1.7rem;\n  justify-content: center;\n  font-weight: 700;\n  border-radius: 1rem;\n}\n\n.task > * {\n  visibility: hidden;\n  grid-column: 1/3;\n}\n\n.taskTitle {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  visibility: visible;\n  justify-self: center;\n  align-self: center;\n\n  font-weight: 500;\n}\n\n.taskDescription {\n  grid-row: 2/3;\n  justify-self: start;\n  font-size: 1.2rem;\n}\n.taskPriority {\n  grid-row: 3/4;\n  grid-column: 2/3;\n  font-size: 1.3rem;\n  justify-self: center;\n}\n.taskDate {\n  grid-row: 3/4;\n  grid-column: 1/2;\n  justify-self: start;\n  font-size: 1.3rem;\n}\n\n.projectID {\n  grid-row: 5/6;\n  grid-column: 1/2;\n}\n\n.taskNotes {\n  grid-row: 4/5;\n  font-size: 1rem;\n  font-style: italic;\n  justify-self: start;\n  overflow: auto;\n  word-wrap: break-word;\n  word-break: break-all;\n  max-width: 100%;\n}\n\n.projects {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 100%;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nli {\n  margin-top: 0.6rem;\n  position: relative;\n  padding: 0.2rem 0.5rem;\n  letter-spacing: 0.1rem;\n}\n\n.favoriteIcon {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0.5;\n  background-color: none;\n  top: 0px;\n  right: -10px;\n  height: 26px;\n  width: auto;\n  z-index: 5;\n  cursor: pointer;\n}\n\n.urgentIcon {\n  width: 2rem;\n  height: auto;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  z-index: 5;\n  visibility: visible;\n}\n.favoriteIcon.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.editTask,\n.deleteTask {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0.5;\n  background-color: none;\n  bottom: 1rem;\n  height: 30px;\n  width: auto;\n  z-index: 5;\n  cursor: pointer;\n}\n.editTask {\n  right: 1.8rem;\n}\n\n.deleteTask {\n  right: -0.2rem;\n}\n\n.projectsContainer {\n  width: 100%;\n  height: 55%;\n  padding: 1rem 0.2rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 1rem;\n}\n\n.project {\n  align-self: start;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 5fr 1rem 1fr 1fr;\n  border: 4px solid;\n  padding: 0.3rem 0.3rem 0.3rem 0.7rem;\n  width: 100%;\n  border-radius: 0.7rem;\n  font-size: 1.3rem;\n  user-select: none;\n  cursor: pointer;\n}\n\n.project::after {\n  height: 0%;\n  content: \"\";\n  position: absolute;\n}\n\n.project::before {\n  height: 0%;\n  content: \"\";\n  position: absolute;\n}\n\n.projectSelected {\n  font-weight: bold;\n  transform: scale(1.02);\n}\n.projectSelected:hover::after {\n  height: 100%;\n  width: 3px;\n  right: -8%;\n}\n\n.projectSelected:hover::before {\n  width: 3px;\n  left: -8%;\n}\n\n.projectSelected::before,\n.projectSelected::after {\n  transition: 0.3s ease-in-out;\n  background-color: var(--accent-color);\n  content: \"\";\n  position: absolute;\n  height: 100%;\n}\n.edit,\n.delete {\n  width: 30px;\n  height: auto;\n  cursor: pointer;\n}\n\n.edit {\n  grid-column: 3/4;\n}\n\n.delete {\n  grid-column: 4/5;\n}\n/* main */\n.main {\n  background-color: var(--main-color);\n  grid-area: 2 / 2 / 3 / 3;\n  z-index: 1;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 10% auto;\n  column-gap: 1rem;\n  overflow: auto;\n}\n\n.statusDiv {\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.statusTitle {\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n\n#newTitle {\n  color: var(--new-color);\n}\n#inProgressTitle {\n  color: var(--inProgress-color);\n}\n#finishedTitle {\n  color: var(--finished-color);\n}\n.new {\n  border: 2px solid var(--new-color);\n  border-radius: 1rem;\n}\n.inProgress {\n  border: 2px solid var(--inProgress-color);\n  border-radius: 1rem;\n}\n\n.finished {\n  border: 2px solid var(--finished-color);\n  border-radius: 1rem;\n}\n\n#newIcon,\n#inProgressIcon,\n#finishedIcon {\n  height: 2.5rem;\n  width: auto;\n  user-select: none;\n}\n\n/* footer */\n.footer {\n  background-color: var(--footer-color);\n  grid-area: 3 / 1 / 4 / 3;\n  z-index: 2;\n  font-size: 1.6rem;\n  display: flex;\n  gap: 0.6rem;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.1rem;\n}\n.gitHubLogo {\n  height: 50px;\n  width: auto;\n}\n\n.gitHubLogo:hover {\n  transform: scale(1.1);\n}\n\n/* tasks modal */\na {\n  display: inline-block;\n}\n\n.tasksModal,\n.editTasksModal {\n  height: auto;\n  position: absolute;\n  width: 30vw;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  min-width: 300px;\n  padding: 1rem 1rem 2.5rem 1rem;\n  border: 2px black solid;\n  text-align: center;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  background-color: white;\n  border-radius: 1rem;\n}\n\n.tasksModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  transition: 200ms ease-in-out;\n}\n\n.editTasksModal {\n  position: absolute;\n}\n\n.editTasksModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  transition: 200ms ease-in-out;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  letter-spacing: 0.1rem;\n}\n.newTask,\n.editTaskForm {\n  display: grid;\n  grid-template: repeat(12, 0.4fr) / 1fr 1fr;\n  justify-items: center;\n  row-gap: 0.6rem;\n}\n\nlabel {\n  display: block;\n  grid-column: 1/3;\n  height: auto;\n  user-select: none;\n  font-size: 1.4rem;\n}\n\nlegend {\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nlabel[for=\"priority1\"],\nlabel[for=\"priority2\"],\nlabel[for=\"priority3\"] {\n  font-size: 1.3rem;\n  cursor: pointer;\n  user-select: auto;\n}\n\ninput {\n  width: 80%;\n  padding: 0.8rem;\n  font-size: 1rem;\n  grid-column: 1/3;\n}\n\ninput[type=\"date\"] {\n  padding: 1rem;\n}\n\ninput[type=\"radio\"] {\n  cursor: pointer;\n}\nselect {\n  grid-column: 1/3;\n  width: 80%;\n  padding: 0.6rem;\n  font-size: 1rem;\n}\nbutton#tasksAdd {\n  grid-column: 1/3;\n}\n\n.priority {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  grid-column: 1/3;\n  border: none;\n}\n\n.dragging {\n  opacity: 0.5;\n}\ntextarea {\n  grid-column: 1/3;\n  width: 80%;\n  overflow: auto;\n  padding: 0.5rem 1rem;\n  min-height: 50px;\n  min-width: 250px;\n  max-height: 70px;\n  max-width: 80%;\n  resize: vertical;\n}\nlabel[for=\"isFavorite\"] {\n  grid-area: 10 /1/ 11/ 2;\n}\ninput[id=\"isFavorite\"] {\n  grid-area: 10 / 2 / 11 / 3;\n  cursor: pointer;\n}\nbutton.exit {\n  position: relative;\n  border: none;\n  background: none;\n  font-size: 2rem;\n  height: 50px;\n  width: 50px;\n  height: auto;\n  cursor: pointer;\n  padding: 1rem;\n  font-size: 3rem;\n}\n\n#tasksOverlay {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  min-width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n\n#tasksOverlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Projects modal */\n\n.projectsModal,\n.editProjectModal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 5;\n  width: 30vw;\n  min-width: 300px;\n  height: auto;\n  background-color: white;\n  padding: 1rem 0.5rem;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  transition: 200ms ease-in-out;\n}\n\n.projectsTitle {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n#exitProjects,\n#exitEditProjects {\n  margin-left: auto;\n  position: absolute;\n  top: 35;\n  right: 0;\n}\n\n.color {\n  display: flex;\n  width: 100%;\n  height: 5rem;\n  padding: 0.2rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n#color-picker,\n#editedColor {\n  margin-left: 2rem;\n  width: 3rem;\n  height: 3rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  padding: 0;\n  background: none;\n}\n\nform.newProject,\nform.editProject {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 1rem;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.projectsModal.active,\n.editProjectModal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.projectModalBtn {\n  margin-bottom: 0;\n}\n\n.tasksBtn,\n.projectModalBtn {\n  border-radius: 1rem;\n  padding: 0.5rem 2.1rem;\n  font-size: 1.7rem;\n  color: white;\n  font-weight: 500;\n  background-color: var(--accent-color);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n/* Modal-form styling */\n.tasksModal,\n.editTasksModal,\n.projectsModal,\n.editProjectModal {\n  background-color: var(--sidebar-color);\n  color: white;\n}\n\n.exit.exitTaskEdit,\n.exit.exitTasksModal {\n  position: absolute;\n  left: 85%;\n  top: 0%;\n  padding: 0;\n  margin: 0;\n  height: 10px;\n  z-index: 5;\n}\n\ninput,\nselect,\ntextarea {\n  border-radius: 0.7rem;\n  font-size: 1.2rem;\n  border: none;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  font-size: 1rem;\n}\nlabel[for=\"priority1\"],\nlabel[for=\"priority2\"],\nlabel[for=\"priority3\"],\ninput[type=\"radio\"] {\n  margin-top: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Poppins\";\n  src: url(\"./fonts/Poppins-Regular.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(\"./fonts/Manrope[wght].ttf\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  font-family: \"Manrope\", \"Iowan Old Style\", \"Palatino Linotype\",\n    \"URW Palladio L\", P052, serif;\n  font-weight: normal;\n  font-size: 18px;\n  background-color: gray;\n  color: black;\n  --new-color: #818cdd;\n  --inProgress-color: #4556d8;\n  --finished-color: #091dcf;\n  --header-color: #c8c8f3;\n  --main-color: #f4f2f2;\n  --sidebar-color: #a5a5ca;\n  --footer-color: #d58d7e;\n  --accent-color: #ee3f6e;\n}\n\nli:hover {\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\ninput#name:valid,\ninput#project:valid,\ninput#project:valid {\n  border: 2px solid green;\n  outline: none;\n}\n\ninput#name:invalid,\ninput#project:invalid {\n  border: 2px solid red;\n  outline: none;\n}\n\ninput#name:focus,\ninput#description:focus,\ntextarea:focus,\ninput#project:focus,\ninput[type=\"text\"]:focus {\n  outline: none;\n}\nli::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--accent-color);\n  width: 0%;\n  height: 3px;\n  bottom: -6px;\n  left: 0;\n  transition: 0.4s;\n}\n\nli:hover::after {\n  width: 100%;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template: 1fr 8fr 1fr / 1fr 3fr;\n}\n\n.header {\n  background-color: var(--header-color);\n  font-size: 3.2rem;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  grid-area: 1 / 1 / 2 / 4;\n  text-transform: uppercase;\n  font-family: \"Poppins\";\n  letter-spacing: 0.1rem;\n  user-select: none;\n}\n\n.toDoLogo {\n  width: auto;\n  height: 3.5rem;\n}\n\n/* sidebar */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--sidebar-color);\n  grid-area: 2 / 1 / 4 / 2;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n}\n\n.dropzone.dragover {\n  background-color: rgb(238, 63, 110, 0.3);\n}\n.tasks {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.activeFilter {\n  color: var(--accent-color);\n}\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  row-gap: 1rem;\n}\n\n.task {\n  user-select: none;\n  position: relative;\n  height: 10%;\n  border: none;\n  font-size: 1.3rem;\n  padding: 0.5rem 0.7rem;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 600ms;\n  border-radius: 0.7rem;\n  align-items: center;\n  justify-items: center;\n}\n.task:hover {\n  grid-template: repeat (6, 1fr) / repeat (2, 1fr);\n  height: 50%;\n}\n\n.task:hover > * {\n  visibility: visible;\n}\n\n#addProject {\n  display: flex;\n  font-size: 1.7rem;\n  justify-content: center;\n  font-weight: 700;\n  border-radius: 1rem;\n}\n\n.task > * {\n  visibility: hidden;\n  grid-column: 1/3;\n}\n\n.taskTitle {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  visibility: visible;\n  justify-self: center;\n  align-self: center;\n\n  font-weight: 500;\n}\n\n.taskDescription {\n  grid-row: 2/3;\n  justify-self: start;\n  font-size: 1.2rem;\n}\n.taskPriority {\n  grid-row: 3/4;\n  grid-column: 2/3;\n  font-size: 1.3rem;\n  justify-self: center;\n}\n.taskDate {\n  grid-row: 3/4;\n  grid-column: 1/2;\n  justify-self: start;\n  font-size: 1.3rem;\n}\n\n.projectID {\n  grid-row: 5/6;\n  grid-column: 1/2;\n}\n\n.taskNotes {\n  grid-row: 4/5;\n  font-size: 1rem;\n  font-style: italic;\n  justify-self: start;\n  overflow: auto;\n  word-wrap: break-word;\n  word-break: break-all;\n  max-width: 100%;\n}\n\n.projects {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 100%;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nli {\n  margin-top: 0.6rem;\n  position: relative;\n  padding: 0.2rem 0.5rem;\n  letter-spacing: 0.1rem;\n}\n\n.favoriteIcon {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0.5;\n  background-color: none;\n  top: 0px;\n  right: -10px;\n  height: 26px;\n  width: auto;\n  z-index: 5;\n  cursor: pointer;\n}\n\n.urgentIcon {\n  width: 2rem;\n  height: auto;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  z-index: 5;\n  visibility: visible;\n}\n.favoriteIcon.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.editTask,\n.deleteTask {\n  position: absolute;\n  visibility: hidden;\n  opacity: 0.5;\n  background-color: none;\n  bottom: 1rem;\n  height: 30px;\n  width: auto;\n  z-index: 5;\n  cursor: pointer;\n}\n.editTask {\n  right: 1.8rem;\n}\n\n.deleteTask {\n  right: -0.2rem;\n}\n\n.projectsContainer {\n  width: 100%;\n  height: 55%;\n  padding: 1rem 0.2rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 1rem;\n}\n\n.project {\n  align-self: start;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 5fr 1rem 1fr 1fr;\n  border: 4px solid;\n  padding: 0.3rem 0.3rem 0.3rem 0.7rem;\n  width: 100%;\n  border-radius: 0.7rem;\n  font-size: 1.3rem;\n  user-select: none;\n  cursor: pointer;\n}\n\n.project::after {\n  height: 0%;\n  content: \"\";\n  position: absolute;\n}\n\n.project::before {\n  height: 0%;\n  content: \"\";\n  position: absolute;\n}\n\n.projectSelected {\n  font-weight: bold;\n  transform: scale(1.02);\n}\n.projectSelected:hover::after {\n  height: 100%;\n  width: 3px;\n  right: -8%;\n}\n\n.projectSelected:hover::before {\n  width: 3px;\n  left: -8%;\n}\n\n.projectSelected::before,\n.projectSelected::after {\n  transition: 0.3s ease-in-out;\n  background-color: var(--accent-color);\n  content: \"\";\n  position: absolute;\n  height: 100%;\n}\n.edit,\n.delete {\n  width: 30px;\n  height: auto;\n  cursor: pointer;\n}\n\n.edit {\n  grid-column: 3/4;\n}\n\n.delete {\n  grid-column: 4/5;\n}\n/* main */\n.main {\n  background-color: var(--main-color);\n  grid-area: 2 / 2 / 3 / 3;\n  z-index: 1;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 10% auto;\n  column-gap: 1rem;\n  overflow: auto;\n}\n\n.statusDiv {\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.statusTitle {\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n\n#newTitle {\n  color: var(--new-color);\n}\n#inProgressTitle {\n  color: var(--inProgress-color);\n}\n#finishedTitle {\n  color: var(--finished-color);\n}\n.new {\n  border: 2px solid var(--new-color);\n  border-radius: 1rem;\n}\n.inProgress {\n  border: 2px solid var(--inProgress-color);\n  border-radius: 1rem;\n}\n\n.finished {\n  border: 2px solid var(--finished-color);\n  border-radius: 1rem;\n}\n\n#newIcon,\n#inProgressIcon,\n#finishedIcon {\n  height: 2.5rem;\n  width: auto;\n  user-select: none;\n}\n\n/* footer */\n.footer {\n  background-color: var(--footer-color);\n  grid-area: 3 / 1 / 4 / 3;\n  z-index: 2;\n  font-size: 1.6rem;\n  display: flex;\n  gap: 0.6rem;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.1rem;\n}\n.gitHubLogo {\n  height: 50px;\n  width: auto;\n}\n\n.gitHubLogo:hover {\n  transform: scale(1.1);\n}\n\n/* tasks modal */\na {\n  display: inline-block;\n}\n\n.tasksModal,\n.editTasksModal {\n  height: auto;\n  position: absolute;\n  width: 30vw;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  min-width: 300px;\n  padding: 1rem 1rem 2.5rem 1rem;\n  border: 2px black solid;\n  text-align: center;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  background-color: white;\n  border-radius: 1rem;\n}\n\n.tasksModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  transition: 200ms ease-in-out;\n}\n\n.editTasksModal {\n  position: absolute;\n}\n\n.editTasksModal.active {\n  transform: translate(-50%, -50%) scale(1);\n  transition: 200ms ease-in-out;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  letter-spacing: 0.1rem;\n}\n.newTask,\n.editTaskForm {\n  display: grid;\n  grid-template: repeat(12, 0.4fr) / 1fr 1fr;\n  justify-items: center;\n  row-gap: 0.6rem;\n}\n\nlabel {\n  display: block;\n  grid-column: 1/3;\n  height: auto;\n  user-select: none;\n  font-size: 1.4rem;\n}\n\nlegend {\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nlabel[for=\"priority1\"],\nlabel[for=\"priority2\"],\nlabel[for=\"priority3\"] {\n  font-size: 1.3rem;\n  cursor: pointer;\n  user-select: auto;\n}\n\ninput {\n  width: 80%;\n  padding: 0.8rem;\n  font-size: 1rem;\n  grid-column: 1/3;\n}\n\ninput[type=\"date\"] {\n  padding: 1rem;\n}\n\ninput[type=\"radio\"] {\n  cursor: pointer;\n}\nselect {\n  grid-column: 1/3;\n  width: 80%;\n  padding: 0.6rem;\n  font-size: 1rem;\n}\nbutton#tasksAdd {\n  grid-column: 1/3;\n}\n\n.priority {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  grid-column: 1/3;\n  border: none;\n}\n\n.dragging {\n  opacity: 0.5;\n}\ntextarea {\n  grid-column: 1/3;\n  width: 80%;\n  overflow: auto;\n  padding: 0.5rem 1rem;\n  min-height: 50px;\n  min-width: 250px;\n  max-height: 70px;\n  max-width: 80%;\n  resize: vertical;\n}\nlabel[for=\"isFavorite\"] {\n  grid-area: 10 /1/ 11/ 2;\n}\ninput[id=\"isFavorite\"] {\n  grid-area: 10 / 2 / 11 / 3;\n  cursor: pointer;\n}\nbutton.exit {\n  position: relative;\n  border: none;\n  background: none;\n  font-size: 2rem;\n  height: 50px;\n  width: 50px;\n  height: auto;\n  cursor: pointer;\n  padding: 1rem;\n  font-size: 3rem;\n}\n\n#tasksOverlay {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  min-width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n\n#tasksOverlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Projects modal */\n\n.projectsModal,\n.editProjectModal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 5;\n  width: 30vw;\n  min-width: 300px;\n  height: auto;\n  background-color: white;\n  padding: 1rem 0.5rem;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  transition: 200ms ease-in-out;\n}\n\n.projectsTitle {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n#exitProjects,\n#exitEditProjects {\n  margin-left: auto;\n  position: absolute;\n  top: 35;\n  right: 0;\n}\n\n.color {\n  display: flex;\n  width: 100%;\n  height: 5rem;\n  padding: 0.2rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n#color-picker,\n#editedColor {\n  margin-left: 2rem;\n  width: 3rem;\n  height: 3rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  padding: 0;\n  background: none;\n}\n\nform.newProject,\nform.editProject {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 1rem;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.projectsModal.active,\n.editProjectModal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.projectModalBtn {\n  margin-bottom: 0;\n}\n\n.tasksBtn,\n.projectModalBtn {\n  border-radius: 1rem;\n  padding: 0.5rem 2.1rem;\n  font-size: 1.7rem;\n  color: white;\n  font-weight: 500;\n  background-color: var(--accent-color);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n/* Modal-form styling */\n.tasksModal,\n.editTasksModal,\n.projectsModal,\n.editProjectModal {\n  background-color: var(--sidebar-color);\n  color: white;\n}\n\n.exit.exitTaskEdit,\n.exit.exitTasksModal {\n  position: absolute;\n  left: 85%;\n  top: 0%;\n  padding: 0;\n  margin: 0;\n  height: 10px;\n  z-index: 5;\n}\n\ninput,\nselect,\ntextarea {\n  border-radius: 0.7rem;\n  font-size: 1.2rem;\n  border: none;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  font-size: 1rem;\n}\nlabel[for=\"priority1\"],\nlabel[for=\"priority2\"],\nlabel[for=\"priority3\"],\ninput[type=\"radio\"] {\n  margin-top: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");
/* harmony import */ var _img_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/star.svg */ "./src/img/star.svg");
/* harmony import */ var _img_alert_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/alert.svg */ "./src/img/alert.svg");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "./src/index.js");








let dragged;

const DOM = (function () {
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");
  const projectsContainer = document.querySelector(".projectsContainer");
  const taskList = document.querySelector(".tasks");
  const tasksItems = document.querySelectorAll(".tasksList");
  const projectList = document.getElementById("projectName");
  const taskContainers = [newContainer, inProgressContainer, finishedContainer];
  const editTaskModal = document.querySelector(".editTasksModal");
  const overlay = document.getElementById("tasksOverlay");

  taskContainers.forEach((container) => {
    container.addEventListener("dragover", function (event) {
      event.preventDefault(), false;
    });
    container.addEventListener("dragenter", function (event) {
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.add("dragover");
      }
    });
    container.addEventListener("dragleave", (event) => {
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
      }
    });
    container.addEventListener("drop", (event) => {
      event.preventDefault();
      if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
        const statusContainer = event.target.classList[0];
        const [taskName, projName] = getNameAttributes(dragged);
        changeStatus(statusContainer, projName, taskName);
        event.target.appendChild(dragged);
      }
    });
  });

  function deletionConfirmed() {
    let result;
    result = window.confirm("Are you sure to delete this project?");
    if (result) {
      return true;
    }
  }

  function createProjectElement(className, projectName) {
    const div = document.createElement("div");
    div.textContent = projectName;
    div.setAttribute("data-project-name", projectName);
    div.classList.add(className);
    return div;
  }

  function createDivElement(className, text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add(className);
    return div;
  }

  function taskMenuEventListeners(callback) {
    taskList.addEventListener("click", function (event) {
      if (event.target.id === "addTask") return;
      if (event.target.classList.contains("tasksList")) {
        Array.from(tasksItems).forEach((task) =>
          task.classList.remove("activeFilter")
        );
        event.target.classList.add("activeFilter");
        callback(event.target.dataset.custom);
      }
    });
  }

  function setNameAttributes(elem, taskName, projectName) {
    elem.setAttribute("data-task-name", taskName);
    elem.setAttribute("data-project-name", projectName);
    return elem;
  }
  function getNameAttributes(elem) {
    const taskName = elem.getAttribute("data-task-name");
    const projectName = elem.getAttribute("data-project-name");
    return [taskName, projectName];
  }

  function createTaskContainer(task, color) {
    const container = createDivElement("task");
    const taskTitle = createDivElement("taskTitle", task.title);
    const taskDescription = createDivElement(
      "taskDescription",
      task.description
    );
    const projectID = createDivElement("projectID", task.project);
    const taskDate = createDivElement("taskDate", task.dueDate);
    const taskPriority = createDivElement("taskPriority", task.priority);
    const taskNotes = createDivElement("taskNotes", task.notes);
    const urgentIcon = createIconElement("urgentIcon", _img_alert_svg__WEBPACK_IMPORTED_MODULE_3__);

    const taskElements = [
      taskTitle,
      taskDescription,
      taskDate,
      taskPriority,
      projectID,
      taskNotes,
    ];

    taskElements.forEach((element) => container.appendChild(element));

    container.style.backgroundColor = color;
    setNameAttributes(container, task.title, task.project);

    const favoriteIcon = createIconElement("favoriteIcon", _img_star_svg__WEBPACK_IMPORTED_MODULE_2__);
    const editTaskIcon = createIconElement("editTask", _img_edit_svg__WEBPACK_IMPORTED_MODULE_0__);
    const deleteTaskIcon = createIconElement("deleteTask", _img_delete_svg__WEBPACK_IMPORTED_MODULE_1__);
    const icons = [favoriteIcon, editTaskIcon, deleteTaskIcon];

    if (taskPriority.textContent === "High") {
      container.append(urgentIcon);
    }
    if (task.favorite === true) {
      favoriteIcon.classList.add("active");
    }

    icons.forEach((icon) => {
      setNameAttributes(icon, task.title, task.project);
      container.append(icon);
      return icon;
    });

    editTaskIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      editTask(task);
      (0,_tasks_js__WEBPACK_IMPORTED_MODULE_4__.populateTaskForm)(task, _index_js__WEBPACK_IMPORTED_MODULE_6__.projects);
      editTaskModal.classList.add("active");
      overlay.classList.add("active");
    });

    deleteTaskIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteTask(deleteTaskIcon);
    });
    favoriteIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleFavorite(favoriteIcon);
      if (favoriteIcon.classList.contains("active")) {
        favoriteIcon.classList.remove("active");
        return;
      }
      favoriteIcon.classList.add("active");
    });

    return container;
  }

  function removeTasks(projectElement) {
    const projectName = projectElement.textContent;
    taskContainers.forEach((container) => {
      Array.from(container.children).forEach((child) => {
        if (child.getAttribute("data-project-name") === projectName) {
          container.removeChild(child);
        }
      });
    });
  }

  function editTask(task) {
    const editTask = new CustomEvent("taskEdited", {
      detail: { taskName: task.title, projectName: task.project },
    });
    document.dispatchEvent(editTask);
  }

  function removeProject(project) {
    const projectTitle = project.textContent;
    const removeProjectEvent = new CustomEvent("projectRemoved", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(removeProjectEvent);
  }

  function deleteTask(deleteIcon) {
    const [taskName, projectName] = getNameAttributes(deleteIcon);
    const deleteTaskEvent = new CustomEvent("taskDeleted", {
      detail: { taskName: taskName, projectName: projectName },
    });
    document.dispatchEvent(deleteTaskEvent);
  }

  function toggleFavorite(icon) {
    const [taskName, projectName] = getNameAttributes(icon);
    const toggle = new CustomEvent("favoriteToggled", {
      detail: { taskName: taskName, projectName: projectName },
    });
    document.dispatchEvent(toggle);
  }

  function changeStatus(status, projName, taskName) {
    const newStatus = new CustomEvent("statusChanged", {
      detail: { newStatus: status, projectName: projName, taskName: taskName },
    });
    document.dispatchEvent(newStatus);
  }

  function editProject(project) {
    const projectTitle = project.textContent;
    const editProject = new CustomEvent("projectEdited", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(editProject);
  }

  function SelectProject(project) {
    const projectTitle = project.textContent;
    const selectProjectElement = new CustomEvent("projectSelected", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(selectProjectElement);
  }

  function DeselectProject(project) {
    const projectTitle = project.textContent;
    const DeselectProjectElement = new CustomEvent("projectDeselected", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(DeselectProjectElement);
  }

  function createIconElement(className, source) {
    const cover = document.createElement("img");
    cover.classList.add(className);

    cover.src = source;
    return cover;
  }

  function appendIcons(elem) {
    const editSVG = createIconElement("edit", _img_edit_svg__WEBPACK_IMPORTED_MODULE_0__);
    const deleteSVG = createIconElement("delete", _img_delete_svg__WEBPACK_IMPORTED_MODULE_1__);
    elem.appendChild(editSVG);
    elem.appendChild(deleteSVG);
    return elem;
  }

  function removeProjectFromList(btn, container) {
    const projectDiv = btn.parentNode;
    container.removeChild(projectDiv);
  }
  function resetSelecedProjects() {
    const projectContainers = document.querySelectorAll(".project");
    const projectNames = [];
    _index_js__WEBPACK_IMPORTED_MODULE_6__.projects.forEach((project) => projectNames.push(project.name));
    Array.from(projectContainers).forEach((projectContainer) => {
      if (
        projectNames.includes(
          projectContainer.getAttribute("data-project-name")
        )
      )
        projectContainer.classList.remove("projectSelected");
    });
  }

  function addDeleteEditListeners(
    deleteBtn,
    editBtn,
    projectElement,
    oldProject
  ) {
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (!deletionConfirmed()) return;
      removeTasks(projectElement);
      removeProject(projectElement);
      removeProjectFromList(deleteBtn, projectsContainer);
    });
    editBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_5__.populateProjectForm)(oldProject);
      editProject(projectElement);
    });
  }

  function appendProject(className, project) {
    const newProjectElement = createProjectElement(className, project.name);
    newProjectElement.style.borderColor = project.color;
    appendIcons(newProjectElement);
    const deleteBtn = newProjectElement.querySelector(".delete");
    const editBtn = newProjectElement.querySelector(".edit");
    projectsContainer.appendChild(newProjectElement);

    addDeleteEditListeners(deleteBtn, editBtn, newProjectElement, project);

    newProjectElement.addEventListener("click", function () {
      const selectedProject = newProjectElement;
      resetSelecedProjects();
      if (selectedProject.classList.contains("projectSelected")) {
        selectedProject.classList.remove("projectSelected");
        DeselectProject(newProjectElement);
      } else {
        selectedProject.classList.add("projectSelected");
        SelectProject(newProjectElement);
      }
    });
  }

  function clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function updateProjectsInForm(projects) {
    clearContainer(projectList);
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.textContent = project.name;
      projectList.appendChild(option);
    });
  }

  function clearDashboard() {
    clearContainer(newContainer);
    clearContainer(inProgressContainer);
    clearContainer(finishedContainer);
  }

  function appendTaskToStatusContainer(task, taskContainer) {
    if (task.status === "New") newContainer.appendChild(taskContainer);
    else if (task.status === "In progress") {
      inProgressContainer.appendChild(taskContainer);
    } else finishedContainer.appendChild(taskContainer);
  }

  function addDragListeners(container, task) {
    container.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", task.title);
      dragged = container;
      event.target.classList.add("dragging");
    });

    container.addEventListener("dragend", function (event) {
      event.target.classList.remove("dragging");
    });
  }

  function appendNewTask(project, task) {
    const container = createTaskContainer(task, project.color);
    container.setAttribute("data-project-name", project.name);
    container.setAttribute("draggable", "true");
    appendTaskToStatusContainer(task, container);
    addDragListeners(container, task);
  }

  function updateTasks(project, tasksArr) {
    tasksArr.forEach((task) => {
      const container = createTaskContainer(task, project.color);
      container.setAttribute("data-task-name", task.title);
      container.setAttribute("draggable", "true");
      appendTaskToStatusContainer(task, container);
      addDragListeners(container, task);
    });
  }

  function updateDashboard(oldName, project, tasksArr) {
    tasksArr.forEach((task) => {
      taskContainers.forEach((container) => {
        for (const child of container.children) {
          if (child.getAttribute("data-project-name") === oldName) {
            child.style.backgroundColor = project.color;
            setNameAttributes(child, task.title, project.name);
            for (const elem of child.children) {
              if (
                elem.classList.contains("favoriteIcon") ||
                elem.classList.contains("editTask") ||
                elem.classList.contains("deleteTask")
              ) {
                setNameAttributes(elem, task.title, project.name);
              }
            }
            const name = child.querySelector(".projectID");
            name.textContent = project.name;
          }
        }
      });
    });
  }

  function editProjectList(project, oldName) {
    const children = projectsContainer.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.textContent === oldName) {
        child.remove();
        appendProject("project", project);
      }
    }
  }

  return {
    createProjectElement,
    appendProject,
    updateTasks,
    taskMenuEventListeners,
    clearDashboard,
    updateProjectsInForm,
    appendNewTask,
    updateDashboard,
    editProjectList,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.js */ "./src/main.js");





const projects = [];
let tasks1 = [];
let tasks2 = [];
let editedProjectName;
let projectToEdit;
let taskToEdit;

const mainElements = (0,_main_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

const modalWindows = [
  { button: mainElements.closeTasksBtn, window: mainElements.tasksModal },
  {
    button: mainElements.closeProjectsBtn,
    window: mainElements.projectsModal,
  },
  {
    button: mainElements.closeEditProjectBtn,
    window: mainElements.editProjectModal,
  },
  {
    button: mainElements.closeEditTaskBtn,
    window: mainElements.editTaskModal,
  },
];

const [proj1, proj2] = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultProjects)();
tasks1 = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getProj1Tasks)();
tasks2 = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getProj2Tasks)();
tasks1.forEach((task) => proj1.addTask(task));
tasks2.forEach((task) => proj2.addTask(task));

const storedProjectsJSON = localStorage.getItem("projects");
const storedProjects = storedProjectsJSON ? JSON.parse(storedProjectsJSON) : [];

if (storedProjects.length === 0) {
  projects.push(proj1, proj2);
} else {
  storedProjects.forEach((storedProject) => {
    const project = new _projects_js__WEBPACK_IMPORTED_MODULE_2__["default"](
      storedProject.name,
      storedProject.color,
      storedProject.tasks,
      storedProject.filteredTasks
    );
    project.copyTasks(storedProject.tasks);
    projects.push(project);
  });
}

projects.forEach((project) => {
  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendProject("project", project);
  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.tasks);
});

const tasksForm = document.querySelector(".newTask");
const projectsForm = document.querySelector(".newProject");
const editProjectForm = document.querySelector(".editProject");
const editTaskForm = document.querySelector(".editTaskForm");

_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateProjectsInForm(projects);
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].taskMenuEventListeners(handleOptionClick);

function saveProjectsToLocalStorage() {
  try {
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem("projects", projectsJSON);
  } catch (error) {
    console.error("Error saving projects to local storage:", error);
  }
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getDates() {
  let today = new Date();
  const startOfWeek = new Date();
  const endOfWeek = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  startOfWeek.setDate(today.getDate() - today.getDay());
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  today = year + "-" + month + "-" + day;

  const thisWeek = [formatDate(startOfWeek), formatDate(endOfWeek)];

  return [today, thisWeek];
}
function isDateInRange(date, dateArr) {
  return date >= dateArr[0] && date <= dateArr[1];
}

function tasksCount() {
  let totalCount = 0;
  projects.forEach((project) => {
    totalCount += project.tasks.length;
  });
  return totalCount;
}

function findProjectIndex(projectName) {
  const index = projects.findIndex((project) => project.name === projectName);
  if (index === -1) {
    console.error(`Project "${projectName}" not found.`);
    return null;
  }
  return index;
}
function isToday(date, today) {
  return date === today;
}

function handleOptionClick(id) {
  filterTasksArray(id);
}

function getTaskAndProjectInfo(event) {
  return [event.detail.taskName, event.detail.projectName];
}

function taskFound(project, taskToEdit) {
  let taskIndex;
  let found = false;
  for (let i = 0; i < project.tasks.length; i++) {
    if (project.tasks[i].title === taskToEdit) {
      taskIndex = i;
      found = true;
    }
  }
  if (!found) {
    console.error(
      `Task "${taskToEdit}" not found in project "${project.name}".`
    );
  }
  return [taskIndex, found];
}

function filterTasksArray(param) {
  const [today, thisWeek] = getDates();
  console.log(projects);
  if (param === "thisWeek") {
    projects.forEach((project) => {
      project.filterTasksByDate((task) =>
        isDateInRange(task.dueDate, thisWeek)
      );
    });
  } else if (param === "today") {
    projects.forEach((project) => {
      project.filterTasksByDate((task) => isToday(task.dueDate, today));
    });
  } else if (param === "important") {
    projects.forEach((project) => {
      project.filterTasksByImportance();
    });
  } else if (param === "finished") {
    projects.forEach((project) => {
      project.filterTasksByFinished();
    });
  } else if (param === "favorite") {
    projects.forEach((project) => {
      project.filterTasksByFavorite();
    });
  } else if (param === "all") {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
    projects.forEach((project) => _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.tasks));
    return;
  }
  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
  projects.forEach((project) =>
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.filteredTasks)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  tasksForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getInputvalues)();
    const index = findProjectIndex(newTask.project);
    const project = projects[index];
    project.tasks.push(newTask);
    mainElements.closeModal(mainElements.tasksModal);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendNewTask(project, newTask);
    tasksForm.reset();
    saveProjectsToLocalStorage();
  });

  projectsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.getNewProject)();
    mainElements.closeModal(mainElements.projectsModal);
    projects.push(newProject);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendProject("project", newProject);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateProjectsInForm(projects);
    projectsForm.reset();
    saveProjectsToLocalStorage();
  });

  editTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const editedTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.getEditedTask)();
    const oldProjectIndex = findProjectIndex(projectToEdit);
    const project = projects[oldProjectIndex];

    const [taskIndex, found] = taskFound(project, taskToEdit);

    if (projectToEdit !== editedTask.project) {
      if (found) {
        project.tasks.splice(taskIndex, 1);
        const newProjectIndex = findProjectIndex(editedTask.project);
        projects[newProjectIndex].tasks.push(editedTask);
      }
    } else if (found) {
      project.tasks.splice(taskIndex, 1, editedTask);
    }

    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
    projects.forEach((project) => {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.tasks);
    });
    editTaskForm.reset();
    mainElements.closeModal(mainElements.editTaskModal);
    saveProjectsToLocalStorage();
  });

  editProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const [newName, newColor] = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.getEditedProject)();
    const index = findProjectIndex(editedProjectName);
    const project = projects[index];
    project.name = newName;
    project.color = newColor;
    project.tasks.forEach((task) => (task.project = newName));

    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateDashboard(editedProjectName, project, project.tasks);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].editProjectList(project, editedProjectName);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateProjectsInForm(projects);
    editProjectForm.reset();
    mainElements.closeModal(mainElements.editProjectModal);
    saveProjectsToLocalStorage();
  });

  document.addEventListener("projectEdited", function (event) {
    editedProjectName = event.detail.projectName;
    mainElements.openModal(mainElements.editProjectModal);
  });

  document.addEventListener("favoriteToggled", function (event) {
    const [taskName, projName] = getTaskAndProjectInfo(event);
    const index = findProjectIndex(projName);
    const project = projects[index];

    for (let i = 0; i < projects[index].tasks.length; i++) {
      if (project.tasks[i].title === taskName) {
        project.toggleStatus(i);
      }
    }
  });
  document.addEventListener("projectDeselected", function () {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
    projects.forEach((project) => {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.tasks);
    });
  });

  document.addEventListener("projectSelected", function (event) {
    const projectName = event.detail.projectName;
    const index = findProjectIndex(projectName);

    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(projects[index], projects[index].tasks);
  });

  document.addEventListener("statusChanged", function (event) {
    let newStatus = event.detail.newStatus;
    newStatus = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    const [taskName, projName] = getTaskAndProjectInfo(event);
    if (newStatus === "InProgress") newStatus = "In progress";
    const index = findProjectIndex(projName);
    const project = projects[index];
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].title === taskName)
        project.tasks[i].status = newStatus;
    }
    saveProjectsToLocalStorage();
  });

  document.addEventListener("projectRemoved", function (event) {
    const projectName = event.detail.projectName;
    const index = findProjectIndex(projectName);
    if (index !== -1) {
      projects.splice(index, 1);
    }
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateProjectsInForm(projects);
    saveProjectsToLocalStorage();
  });

  document.addEventListener("taskDeleted", function (event) {
    const [taskName, projectName] = getTaskAndProjectInfo(event);
    const index = findProjectIndex(projectName);
    const project = projects[index];

    for (let i = 0; i < projects[index].tasks.length; i++) {
      if (project.tasks[i].title === taskName) {
        project.tasks.splice(i, 1);
      }
    }
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearDashboard();
    projects.forEach((project) => {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(project, project.tasks);
    });
    saveProjectsToLocalStorage();
  });

  document.addEventListener("taskEdited", function (event) {
    [taskToEdit, projectToEdit] = getTaskAndProjectInfo(event);
  });

  mainElements.addTask.addEventListener("click", () => {
    if (tasksCount() >= 12) {
      alert("Can't add more than twelve tasks!");
      return;
    }
    mainElements.openModal(mainElements.tasksModal);
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.setDefaultDate)();
    saveProjectsToLocalStorage();
  });

  mainElements.addProject.addEventListener("click", () => {
    if (projects.length >= 5) {
      alert("Can't add more than five projects!");
      return;
    }
    mainElements.openModal(mainElements.projectsModal);
  });

  modalWindows.forEach((modal) =>
    modal.button.addEventListener("click", () =>
      mainElements.closeModal(modal.window)
    )
  );
});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMain = function () {
  const main = document.querySelector(".main");

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
  const editProjectModal = document.querySelector(".editProjectModal");
  const closeEditProjectBtn = document.getElementById("exitEditProjects");
  const closeEditTaskBtn = document.querySelector(".exitTaskEdit");
  const editTaskModal = document.querySelector(".editTasksModal");

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
    editProjectModal,
    closeEditProjectBtn,
    closeEditTaskBtn,
    editTaskModal,
    closeModal,
    openModal,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "getDefaultProjects": () => (/* binding */ getDefaultProjects),
/* harmony export */   "getEditedProject": () => (/* binding */ getEditedProject),
/* harmony export */   "getNewProject": () => (/* binding */ getNewProject),
/* harmony export */   "populateProjectForm": () => (/* binding */ populateProjectForm)
/* harmony export */ });
class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    this.filteredTasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  filterTasksByDate(condition) {
    this.filteredTasks = this.tasks.filter((task) => condition(task));
  }
  filterTasksByImportance() {
    this.filteredTasks = this.tasks.filter((task) => task.priority === "High");
  }
  filterTasksByFavorite() {
    this.filteredTasks = this.tasks.filter((task) => task.favorite === true);
  }
  filterTasksByFinished() {
    this.filteredTasks = this.tasks.filter(
      (task) => task.status === "Finished"
    );
  }
  toggleStatus(index) {
    this.tasks[index].favorite = !this.tasks[index].favorite;
  }
  copyTasks(array) {
    this.tasks = array;
  }
}

const getNewProject = function () {
  const projectTitle = document.getElementById("project").value;
  const color = document.getElementById("color-picker").value;

  return new Project(projectTitle, color);
};

const getEditedProject = function () {
  const newTitle = document.getElementById("editedTitle").value;
  const newColor = document.getElementById("editedColor").value;

  return [newTitle, newColor];
};

const getDefaultProjects = function () {
  const project1 = new Project("Fix espresso machine", "#CCDBDC");
  const project2 = new Project("Learn how to code", "#D58D7E");

  return [project1, project2];
};

const populateProjectForm = function (project) {
  const editedTitle = document.querySelector("#editedTitle");
  const editedColor = document.querySelector("#editedColor");
  console.log(editedTitle);
  editedTitle.value = project.name;
  editedColor.value = project.color;
};


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "getEditedTask": () => (/* binding */ getEditedTask),
/* harmony export */   "getInputvalues": () => (/* binding */ getInputvalues),
/* harmony export */   "getProj1Tasks": () => (/* binding */ getProj1Tasks),
/* harmony export */   "getProj2Tasks": () => (/* binding */ getProj2Tasks),
/* harmony export */   "populateTaskForm": () => (/* binding */ populateTaskForm),
/* harmony export */   "setDefaultDate": () => (/* binding */ setDefaultDate)
/* harmony export */ });


class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    favorite,
    status,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.favorite = favorite;
    this.status = status;
    this.project = project;
  }
}

const getInputvalues = function () {
  const taskTitle = document.getElementById("name").value;
  const taskDescription = document.getElementById("description").value;
  const taskDate = document.getElementById("date").value;
  const taskPriority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const taskProject = document.getElementById("projectName").value;
  const taskNotes = document.getElementById("notes").value;
  const taskFavorite = document.getElementById("isFavorite").checked;
  const taskStatus = document.getElementById("status").value;

  return new Task(
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskNotes,
    taskFavorite,
    taskStatus,
    taskProject
  );
};

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function updateProjectsInForm(projects, container) {
  clearContainer(container);
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
    container.appendChild(option);
  });
}

const populateTaskForm = function (task, projects) {
  const editTaskForm = document.querySelector(".editTaskForm");
  const container = editTaskForm.querySelector("#projectName");
  editTaskForm.querySelector("#name").value = task.title;
  editTaskForm.querySelector("#description").value = task.description;

  editTaskForm.querySelector("#date").value = "2024-05-05";
  updateProjectsInForm(projects, container);
  const priorityRadioButton = editTaskForm.querySelector(
    `input[name="priority"][value="${task.priority}"]`
  );

  if (priorityRadioButton) {
    priorityRadioButton.checked = true;
  }
  editTaskForm.querySelector("#projectName").value = task.project;
  editTaskForm.querySelector("#notes").value = task.notes;
  editTaskForm.querySelector("#isFavorite").checked = task.favorite;
  editTaskForm.querySelector("#status").value = task.status;
};

const getEditedTask = function () {
  const editTaskForm = document.querySelector(".editTaskForm");

  const taskTitle = editTaskForm.querySelector("#name").value;
  const taskDescription = editTaskForm.querySelector("#description").value;
  const taskDate = editTaskForm.querySelector("#date").value;
  const taskPriority = editTaskForm.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const taskProject = editTaskForm.querySelector("#projectName").value;
  const taskNotes = editTaskForm.querySelector("#notes").value;
  const taskFavorite = editTaskForm.querySelector("#isFavorite").checked;
  const taskStatus = editTaskForm.querySelector("#status").value;

  return new Task(
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskNotes,
    taskFavorite,
    taskStatus,
    taskProject
  );
};
const setDefaultDate = function () {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const defaultDate = year + "-" + month + "-" + day;

  document.getElementById("date").value = defaultDate;
};

function setDate(period) {
  let today = new Date();
  let thisWeek = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const prevDay = String(today.getDate() - 1).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  thisWeek = year + "-" + month + "-" + prevDay;
  today = year + "-" + month + "-" + day;

  if (period === "today") return today;
  else if (period === "this week") return thisWeek;
}

const getProj1Tasks = function () {
  const task1 = new Task(
    "Replace boiler",
    "Use something to pry it",
    setDate("today"),
    "High",
    "How do I do that?",
    false,
    "New",
    "Fix espresso machine"
  );
  const task2 = new Task(
    "Do some descaling",
    "Easy peasy",
    setDate("this week"),
    "Medium",
    "be careful, please!",
    true,
    "In progress",
    "Fix espresso machine"
  );
  const task3 = new Task(
    "Check water container",
    "ya know.. they sometimes get messy",
    setDate("today"),
    "Low",
    "easyyyy",
    false,
    "Finished",
    "Fix espresso machine"
  );

  return [task1, task2, task3];
};

const getProj2Tasks = function () {
  const task4 = new Task(
    "Implement App",
    "Create a new food delivery app based on recent customer request. Try to use SOLID principles along the way",
    "2024-02-06",
    "High",
    "Don't mess up",
    true,
    "New",
    "Learn how to code"
  );

  const task5 = new Task(
    "Watch coding videos",
    "Gather more knowledge about ES6 modules and encapsulating",
    setDate("today"),
    "Low",
    "yikes",
    false,
    "New",
    "Learn how to code"
  );

  const task6 = new Task(
    "Create calculator",
    "Basic stuff, you should do it",
    setDate("this week"),
    "Medium",
    "don't forget about the functions!",
    false,
    "In progress",
    "Learn how to code"
  );
  return [task4, task5, task6];
};


/***/ }),

/***/ "./src/fonts/Manrope[wght].ttf":
/*!*************************************!*\
  !*** ./src/fonts/Manrope[wght].ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "432d367cb8138cde9b24.ttf";

/***/ }),

/***/ "./src/fonts/Poppins-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Poppins-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/img/alert.svg":
/*!***************************!*\
  !*** ./src/img/alert.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bbbfc621ccb9d9ed796.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b46110e5beab591b0e63.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ea4cf483224d228ffe4.svg";

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac4e3d91bff0c5cfa0ad.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksU0FBUyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVks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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0M7QUFDSTtBQUNKO0FBQ0M7QUFDTztBQUNNO0FBQ2Q7QUFDRDtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCwyQ0FBUTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRCwwQ0FBUTtBQUNuRSx1REFBdUQsMENBQVE7QUFDL0QsMkRBQTJELDRDQUFVO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdENkM7O0FBRTlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01hbnJvcGVbd2dodF0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFucm9wZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYW5yb3BlXFxcIiwgXFxcIklvd2FuIE9sZCBTdHlsZVxcXCIsIFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsXFxuICAgIFxcXCJVUlcgUGFsbGFkaW8gTFxcXCIsIFAwNTIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICAtLW5ldy1jb2xvcjogIzgxOGNkZDtcXG4gIC0taW5Qcm9ncmVzcy1jb2xvcjogIzQ1NTZkODtcXG4gIC0tZmluaXNoZWQtY29sb3I6ICMwOTFkY2Y7XFxuICAtLWhlYWRlci1jb2xvcjogI2M4YzhmMztcXG4gIC0tbWFpbi1jb2xvcjogI2Y0ZjJmMjtcXG4gIC0tc2lkZWJhci1jb2xvcjogI2E1YTVjYTtcXG4gIC0tZm9vdGVyLWNvbG9yOiAjZDU4ZDdlO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNlZTNmNmU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCNuYW1lOnZhbGlkLFxcbmlucHV0I3Byb2plY3Q6dmFsaWQsXFxuaW5wdXQjcHJvamVjdDp2YWxpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0I25hbWU6aW52YWxpZCxcXG5pbnB1dCNwcm9qZWN0OmludmFsaWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQjbmFtZTpmb2N1cyxcXG5pbnB1dCNkZXNjcmlwdGlvbjpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dCNwcm9qZWN0OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5saTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgd2lkdGg6IDAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3R0b206IC02cHg7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxubGk6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDhmciAxZnIgLyAxZnIgM2ZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBmb250LXNpemU6IDMuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9Eb0xvZ28ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLyogc2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gNCAvIDI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLmRyb3B6b25lLmRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDYzLCAxMTAsIDAuMyk7XFxufVxcbi50YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWN0aXZlRmlsdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcbiAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDYwMG1zO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2s6aG92ZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0ICg2LCAxZnIpIC8gcmVwZWF0ICgyLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi50YXNrOmhvdmVyID4gKiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4udGFzayA+ICoge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLnRhc2tQcmlvcml0eSB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrRGF0ZSB7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByb2plY3RJRCB7XFxuICBncmlkLXJvdzogNS82O1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLnRhc2tOb3RlcyB7XFxuICBncmlkLXJvdzogNC81O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubGkge1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5mYXZvcml0ZUljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICB6LWluZGV4OiA1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udXJnZW50SWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogLTE1cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmZhdm9yaXRlSWNvbi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5lZGl0VGFzayxcXG4uZGVsZXRlVGFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICB6LWluZGV4OiA1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdFRhc2sge1xcbiAgcmlnaHQ6IDEuOHJlbTtcXG59XFxuXFxuLmRlbGV0ZVRhc2sge1xcbiAgcmlnaHQ6IC0wLjJyZW07XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTUlO1xcbiAgcGFkZGluZzogMXJlbSAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMXJlbSAxZnIgMWZyO1xcbiAgYm9yZGVyOiA0cHggc29saWQ7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC4zcmVtIDAuM3JlbSAwLjdyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OjphZnRlciB7XFxuICBoZWlnaHQ6IDAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0OjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwJTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucHJvamVjdFNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLnByb2plY3RTZWxlY3RlZDpob3Zlcjo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDNweDtcXG4gIHJpZ2h0OiAtOCU7XFxufVxcblxcbi5wcm9qZWN0U2VsZWN0ZWQ6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogM3B4O1xcbiAgbGVmdDogLTglO1xcbn1cXG5cXG4ucHJvamVjdFNlbGVjdGVkOjpiZWZvcmUsXFxuLnByb2plY3RTZWxlY3RlZDo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmVkaXQsXFxuLmRlbGV0ZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogNC81O1xcbn1cXG4vKiBtYWluICovXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0bztcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnN0YXR1c0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3RhdHVzVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNuZXdUaXRsZSB7XFxuICBjb2xvcjogdmFyKC0tbmV3LWNvbG9yKTtcXG59XFxuI2luUHJvZ3Jlc3NUaXRsZSB7XFxuICBjb2xvcjogdmFyKC0taW5Qcm9ncmVzcy1jb2xvcik7XFxufVxcbiNmaW5pc2hlZFRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1maW5pc2hlZC1jb2xvcik7XFxufVxcbi5uZXcge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmV3LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi5pblByb2dyZXNzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluUHJvZ3Jlc3MtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmZpbmlzaGVkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZpbmlzaGVkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNuZXdJY29uLFxcbiNpblByb2dyZXNzSWNvbixcXG4jZmluaXNoZWRJY29uIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC42cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuLmdpdEh1YkxvZ28ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5naXRIdWJMb2dvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogdGFza3MgbW9kYWwgKi9cXG5hIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRhc2tzTW9kYWwsXFxuLmVkaXRUYXNrc01vZGFsIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAyLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRhc2tzTW9kYWwuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lZGl0VGFza3NNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5lZGl0VGFza3NNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcbi5uZXdUYXNrLFxcbi5lZGl0VGFza0Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMiwgMC40ZnIpIC8gMWZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDAuNnJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubGFiZWxbZm9yPVxcXCJwcmlvcml0eTFcXFwiXSxcXG5sYWJlbFtmb3I9XFxcInByaW9yaXR5MlxcXCJdLFxcbmxhYmVsW2Zvcj1cXFwicHJpb3JpdHkzXFxcIl0ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuc2VsZWN0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5idXR0b24jdGFza3NBZGQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbnRleHRhcmVhIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogODAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgbWF4LWhlaWdodDogNzBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxubGFiZWxbZm9yPVxcXCJpc0Zhdm9yaXRlXFxcIl0ge1xcbiAgZ3JpZC1hcmVhOiAxMCAvMS8gMTEvIDI7XFxufVxcbmlucHV0W2lkPVxcXCJpc0Zhdm9yaXRlXFxcIl0ge1xcbiAgZ3JpZC1hcmVhOiAxMCAvIDIgLyAxMSAvIDM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbi5leGl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0YXNrc092ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jdGFza3NPdmVybGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLyogUHJvamVjdHMgbW9kYWwgKi9cXG5cXG4ucHJvamVjdHNNb2RhbCxcXG4uZWRpdFByb2plY3RNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0c1RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNleGl0UHJvamVjdHMsXFxuI2V4aXRFZGl0UHJvamVjdHMge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM1O1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5jb2xvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29sb3ItcGlja2VyLFxcbiNlZGl0ZWRDb2xvciB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5mb3JtLm5ld1Byb2plY3QsXFxuZm9ybS5lZGl0UHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHNNb2RhbC5hY3RpdmUsXFxuLmVkaXRQcm9qZWN0TW9kYWwuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsQnRuIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi50YXNrc0J0bixcXG4ucHJvamVjdE1vZGFsQnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMi4xcmVtO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4vKiBNb2RhbC1mb3JtIHN0eWxpbmcgKi9cXG4udGFza3NNb2RhbCxcXG4uZWRpdFRhc2tzTW9kYWwsXFxuLnByb2plY3RzTW9kYWwsXFxuLmVkaXRQcm9qZWN0TW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leGl0LmV4aXRUYXNrRWRpdCxcXG4uZXhpdC5leGl0VGFza3NNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA4NSU7XFxuICB0b3A6IDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbmxhYmVsW2Zvcj1cXFwicHJpb3JpdHkxXFxcIl0sXFxubGFiZWxbZm9yPVxcXCJwcmlvcml0eTJcXFwiXSxcXG5sYWJlbFtmb3I9XFxcInByaW9yaXR5M1xcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0RBQTBEO0VBQzFELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNERBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtpQ0FDK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBOzs7OztFQUtFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztF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RUE7OztFQUdFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7OztFQUlFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hbnJvcGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTWFucm9wZVt3Z2h0XS50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIk1hbnJvcGVcXFwiLCBcXFwiSW93YW4gT2xkIFN0eWxlXFxcIiwgXFxcIlBhbGF0aW5vIExpbm90eXBlXFxcIixcXG4gICAgXFxcIlVSVyBQYWxsYWRpbyBMXFxcIiwgUDA1Miwgc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIC0tbmV3LWNvbG9yOiAjODE4Y2RkO1xcbiAgLS1pblByb2dyZXNzLWNvbG9yOiAjNDU1NmQ4O1xcbiAgLS1maW5pc2hlZC1jb2xvcjogIzA5MWRjZjtcXG4gIC0taGVhZGVyLWNvbG9yOiAjYzhjOGYzO1xcbiAgLS1tYWluLWNvbG9yOiAjZjRmMmYyO1xcbiAgLS1zaWRlYmFyLWNvbG9yOiAjYTVhNWNhO1xcbiAgLS1mb290ZXItY29sb3I6ICNkNThkN2U7XFxuICAtLWFjY2VudC1jb2xvcjogI2VlM2Y2ZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0I25hbWU6dmFsaWQsXFxuaW5wdXQjcHJvamVjdDp2YWxpZCxcXG5pbnB1dCNwcm9qZWN0OnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQjbmFtZTppbnZhbGlkLFxcbmlucHV0I3Byb2plY3Q6aW52YWxpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dCNuYW1lOmZvY3VzLFxcbmlucHV0I2Rlc2NyaXB0aW9uOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0I3Byb2plY3Q6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmxpOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB3aWR0aDogMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTZweDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5saTpob3Zlcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgOGZyIDFmciAvIDFmciAzZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b0RvTG9nbyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4vKiBzaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyA0IC8gMjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4uZHJvcHpvbmUuZHJhZ292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNjMsIDExMCwgMC4zKTtcXG59XFxuLnRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY3RpdmVGaWx0ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi50YXNrIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgNjAwbXM7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzazpob3ZlciB7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQgKDYsIDFmcikgLyByZXBlYXQgKDIsIDFmcik7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgPiAqIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi50YXNrID4gKiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4udGFza1ByaW9yaXR5IHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tEYXRlIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdElEIHtcXG4gIGdyaWQtcm93OiA1LzY7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4udGFza05vdGVzIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5saSB7XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuXFxuLmZhdm9yaXRlSWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwLjU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHotaW5kZXg6IDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51cmdlbnRJY29uIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAtMTVweDtcXG4gIHotaW5kZXg6IDU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uZmF2b3JpdGVJY29uLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmVkaXRUYXNrLFxcbi5kZWxldGVUYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBib3R0b206IDFyZW07XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHotaW5kZXg6IDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lZGl0VGFzayB7XFxuICByaWdodDogMS44cmVtO1xcbn1cXG5cXG4uZGVsZXRlVGFzayB7XFxuICByaWdodDogLTAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NSU7XFxuICBwYWRkaW5nOiAxcmVtIDAuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxcmVtIDFmciAxZnI7XFxuICBib3JkZXI6IDRweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjNyZW0gMC4zcmVtIDAuN3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6OmFmdGVyIHtcXG4gIGhlaWdodDogMCU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnByb2plY3Q6OmJlZm9yZSB7XFxuICBoZWlnaHQ6IDAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0U2VsZWN0ZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG4ucHJvamVjdFNlbGVjdGVkOmhvdmVyOjphZnRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogM3B4O1xcbiAgcmlnaHQ6IC04JTtcXG59XFxuXFxuLnByb2plY3RTZWxlY3RlZDpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAzcHg7XFxuICBsZWZ0OiAtOCU7XFxufVxcblxcbi5wcm9qZWN0U2VsZWN0ZWQ6OmJlZm9yZSxcXG4ucHJvamVjdFNlbGVjdGVkOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZWRpdCxcXG4uZGVsZXRlIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0LzU7XFxufVxcbi8qIG1haW4gKi9cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uc3RhdHVzRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0dXNUaXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI25ld1RpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXctY29sb3IpO1xcbn1cXG4jaW5Qcm9ncmVzc1RpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1pblByb2dyZXNzLWNvbG9yKTtcXG59XFxuI2ZpbmlzaGVkVGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWZpbmlzaGVkLWNvbG9yKTtcXG59XFxuLm5ldyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uZXctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmluUHJvZ3Jlc3Mge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5Qcm9ncmVzcy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZmluaXNoZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZmluaXNoZWQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI25ld0ljb24sXFxuI2luUHJvZ3Jlc3NJY29uLFxcbiNmaW5pc2hlZEljb24ge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4uZ2l0SHViTG9nbyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmdpdEh1YkxvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiB0YXNrcyBtb2RhbCAqL1xcbmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFza3NNb2RhbCxcXG4uZWRpdFRhc2tzTW9kYWwge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwdnc7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDIuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4udGFza3NNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVkaXRUYXNrc01vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmVkaXRUYXNrc01vZGFsLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuLm5ld1Rhc2ssXFxuLmVkaXRUYXNrRm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEyLCAwLjRmcikgLyAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMC42cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5sYWJlbFtmb3I9XFxcInByaW9yaXR5MVxcXCJdLFxcbmxhYmVsW2Zvcj1cXFwicHJpb3JpdHkyXFxcIl0sXFxubGFiZWxbZm9yPVxcXCJwcmlvcml0eTNcXFwiXSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5zZWxlY3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbmJ1dHRvbiN0YXNrc0FkZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxudGV4dGFyZWEge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiA4MCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5sYWJlbFtmb3I9XFxcImlzRmF2b3JpdGVcXFwiXSB7XFxuICBncmlkLWFyZWE6IDEwIC8xLyAxMS8gMjtcXG59XFxuaW5wdXRbaWQ9XFxcImlzRmF2b3JpdGVcXFwiXSB7XFxuICBncmlkLWFyZWE6IDEwIC8gMiAvIDExIC8gMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uLmV4aXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3Rhc2tzT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbiN0YXNrc092ZXJsYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBtb2RhbCAqL1xcblxcbi5wcm9qZWN0c01vZGFsLFxcbi5lZGl0UHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3RzVGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2V4aXRQcm9qZWN0cyxcXG4jZXhpdEVkaXRQcm9qZWN0cyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzU7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmNvbG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb2xvci1waWNrZXIsXFxuI2VkaXRlZENvbG9yIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmZvcm0ubmV3UHJvamVjdCxcXG5mb3JtLmVkaXRQcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c01vZGFsLmFjdGl2ZSxcXG4uZWRpdFByb2plY3RNb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5wcm9qZWN0TW9kYWxCdG4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLnRhc2tzQnRuLFxcbi5wcm9qZWN0TW9kYWxCdG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjFyZW07XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi8qIE1vZGFsLWZvcm0gc3R5bGluZyAqL1xcbi50YXNrc01vZGFsLFxcbi5lZGl0VGFza3NNb2RhbCxcXG4ucHJvamVjdHNNb2RhbCxcXG4uZWRpdFByb2plY3RNb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4aXQuZXhpdFRhc2tFZGl0LFxcbi5leGl0LmV4aXRUYXNrc01vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDg1JTtcXG4gIHRvcDogMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxubGFiZWxbZm9yPVxcXCJwcmlvcml0eTFcXFwiXSxcXG5sYWJlbFtmb3I9XFxcInByaW9yaXR5MlxcXCJdLFxcbmxhYmVsW2Zvcj1cXFwicHJpb3JpdHkzXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWcvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltZy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgc3Rhckljb24gZnJvbSBcIi4vaW1nL3N0YXIuc3ZnXCI7XG5pbXBvcnQgYmVsbEljb24gZnJvbSBcIi4vaW1nL2FsZXJ0LnN2Z1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVUYXNrRm9ybSB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3RGb3JtIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xubGV0IGRyYWdnZWQ7XG5cbmNvbnN0IERPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3XCIpO1xuICBjb25zdCBpblByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pblByb2dyZXNzXCIpO1xuICBjb25zdCBmaW5pc2hlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmluaXNoZWRcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0NvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICBjb25zdCB0YXNrc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrc0xpc3RcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lcnMgPSBbbmV3Q29udGFpbmVyLCBpblByb2dyZXNzQ29udGFpbmVyLCBmaW5pc2hlZENvbnRhaW5lcl07XG4gIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUYXNrc01vZGFsXCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc092ZXJsYXlcIik7XG5cbiAgdGFza0NvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCksIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wem9uZVwiKSkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyYWdvdmVyXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wem9uZVwiKSkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdvdmVyXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B6b25lXCIpKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ292ZXJcIik7XG4gICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IFt0YXNrTmFtZSwgcHJvak5hbWVdID0gZ2V0TmFtZUF0dHJpYnV0ZXMoZHJhZ2dlZCk7XG4gICAgICAgIGNoYW5nZVN0YXR1cyhzdGF0dXNDb250YWluZXIsIHByb2pOYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZGVsZXRpb25Db25maXJtZWQoKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXN1bHQgPSB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBwcm9qZWN0P1wiKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChjbGFzc05hbWUsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvamVjdE5hbWUpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURpdkVsZW1lbnQoY2xhc3NOYW1lLCB0ZXh0KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhc2tNZW51RXZlbnRMaXN0ZW5lcnMoY2FsbGJhY2spIHtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImFkZFRhc2tcIikgcmV0dXJuO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrc0xpc3RcIikpIHtcbiAgICAgICAgQXJyYXkuZnJvbSh0YXNrc0l0ZW1zKS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUZpbHRlclwiKVxuICAgICAgICApO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUZpbHRlclwiKTtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQudGFyZ2V0LmRhdGFzZXQuY3VzdG9tKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWVBdHRyaWJ1dGVzKGVsZW0sIHRhc2tOYW1lLCBwcm9qZWN0TmFtZSkge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLW5hbWVcIiwgdGFza05hbWUpO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG4gIGZ1bmN0aW9uIGdldE5hbWVBdHRyaWJ1dGVzKGVsZW0pIHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLW5hbWVcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpO1xuICAgIHJldHVybiBbdGFza05hbWUsIHByb2plY3ROYW1lXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIodGFzaywgY29sb3IpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXZFbGVtZW50KFwidGFza1wiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBjcmVhdGVEaXZFbGVtZW50KFwidGFza1RpdGxlXCIsIHRhc2sudGl0bGUpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGNyZWF0ZURpdkVsZW1lbnQoXG4gICAgICBcInRhc2tEZXNjcmlwdGlvblwiLFxuICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdElEID0gY3JlYXRlRGl2RWxlbWVudChcInByb2plY3RJRFwiLCB0YXNrLnByb2plY3QpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gY3JlYXRlRGl2RWxlbWVudChcInRhc2tEYXRlXCIsIHRhc2suZHVlRGF0ZSk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gY3JlYXRlRGl2RWxlbWVudChcInRhc2tQcmlvcml0eVwiLCB0YXNrLnByaW9yaXR5KTtcbiAgICBjb25zdCB0YXNrTm90ZXMgPSBjcmVhdGVEaXZFbGVtZW50KFwidGFza05vdGVzXCIsIHRhc2subm90ZXMpO1xuICAgIGNvbnN0IHVyZ2VudEljb24gPSBjcmVhdGVJY29uRWxlbWVudChcInVyZ2VudEljb25cIiwgYmVsbEljb24pO1xuXG4gICAgY29uc3QgdGFza0VsZW1lbnRzID0gW1xuICAgICAgdGFza1RpdGxlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgdGFza0RhdGUsXG4gICAgICB0YXNrUHJpb3JpdHksXG4gICAgICBwcm9qZWN0SUQsXG4gICAgICB0YXNrTm90ZXMsXG4gICAgXTtcblxuICAgIHRhc2tFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIHNldE5hbWVBdHRyaWJ1dGVzKGNvbnRhaW5lciwgdGFzay50aXRsZSwgdGFzay5wcm9qZWN0KTtcblxuICAgIGNvbnN0IGZhdm9yaXRlSWNvbiA9IGNyZWF0ZUljb25FbGVtZW50KFwiZmF2b3JpdGVJY29uXCIsIHN0YXJJY29uKTtcbiAgICBjb25zdCBlZGl0VGFza0ljb24gPSBjcmVhdGVJY29uRWxlbWVudChcImVkaXRUYXNrXCIsIGVkaXRJY29uKTtcbiAgICBjb25zdCBkZWxldGVUYXNrSWNvbiA9IGNyZWF0ZUljb25FbGVtZW50KFwiZGVsZXRlVGFza1wiLCBkZWxldGVJY29uKTtcbiAgICBjb25zdCBpY29ucyA9IFtmYXZvcml0ZUljb24sIGVkaXRUYXNrSWNvbiwgZGVsZXRlVGFza0ljb25dO1xuXG4gICAgaWYgKHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9PT0gXCJIaWdoXCIpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQodXJnZW50SWNvbik7XG4gICAgfVxuICAgIGlmICh0YXNrLmZhdm9yaXRlID09PSB0cnVlKSB7XG4gICAgICBmYXZvcml0ZUljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBzZXROYW1lQXR0cmlidXRlcyhpY29uLCB0YXNrLnRpdGxlLCB0YXNrLnByb2plY3QpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChpY29uKTtcbiAgICAgIHJldHVybiBpY29uO1xuICAgIH0pO1xuXG4gICAgZWRpdFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZWRpdFRhc2sodGFzayk7XG4gICAgICBwb3B1bGF0ZVRhc2tGb3JtKHRhc2ssIHByb2plY3RzKTtcbiAgICAgIGVkaXRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZVRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZGVsZXRlVGFzayhkZWxldGVUYXNrSWNvbik7XG4gICAgfSk7XG4gICAgZmF2b3JpdGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9nZ2xlRmF2b3JpdGUoZmF2b3JpdGVJY29uKTtcbiAgICAgIGlmIChmYXZvcml0ZUljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGZhdm9yaXRlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmYXZvcml0ZUljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrcyhwcm9qZWN0RWxlbWVudCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFza0NvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xuICAgIGNvbnN0IGVkaXRUYXNrID0gbmV3IEN1c3RvbUV2ZW50KFwidGFza0VkaXRlZFwiLCB7XG4gICAgICBkZXRhaWw6IHsgdGFza05hbWU6IHRhc2sudGl0bGUsIHByb2plY3ROYW1lOiB0YXNrLnByb2plY3QgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGVkaXRUYXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwicHJvamVjdFJlbW92ZWRcIiwge1xuICAgICAgZGV0YWlsOiB7IHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHJlbW92ZVByb2plY3RFdmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGRlbGV0ZUljb24pIHtcbiAgICBjb25zdCBbdGFza05hbWUsIHByb2plY3ROYW1lXSA9IGdldE5hbWVBdHRyaWJ1dGVzKGRlbGV0ZUljb24pO1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tFdmVudCA9IG5ldyBDdXN0b21FdmVudChcInRhc2tEZWxldGVkXCIsIHtcbiAgICAgIGRldGFpbDogeyB0YXNrTmFtZTogdGFza05hbWUsIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSB9LFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZGVsZXRlVGFza0V2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlKGljb24pIHtcbiAgICBjb25zdCBbdGFza05hbWUsIHByb2plY3ROYW1lXSA9IGdldE5hbWVBdHRyaWJ1dGVzKGljb24pO1xuICAgIGNvbnN0IHRvZ2dsZSA9IG5ldyBDdXN0b21FdmVudChcImZhdm9yaXRlVG9nZ2xlZFwiLCB7XG4gICAgICBkZXRhaWw6IHsgdGFza05hbWU6IHRhc2tOYW1lLCBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRvZ2dsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoc3RhdHVzLCBwcm9qTmFtZSwgdGFza05hbWUpIHtcbiAgICBjb25zdCBuZXdTdGF0dXMgPSBuZXcgQ3VzdG9tRXZlbnQoXCJzdGF0dXNDaGFuZ2VkXCIsIHtcbiAgICAgIGRldGFpbDogeyBuZXdTdGF0dXM6IHN0YXR1cywgcHJvamVjdE5hbWU6IHByb2pOYW1lLCB0YXNrTmFtZTogdGFza05hbWUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ld1N0YXR1cyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IG5ldyBDdXN0b21FdmVudChcInByb2plY3RFZGl0ZWRcIiwge1xuICAgICAgZGV0YWlsOiB7IHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGVkaXRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNlbGVjdFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdEVsZW1lbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJwcm9qZWN0U2VsZWN0ZWRcIiwge1xuICAgICAgZGV0YWlsOiB7IHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHNlbGVjdFByb2plY3RFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIERlc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBEZXNlbGVjdFByb2plY3RFbGVtZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwicHJvamVjdERlc2VsZWN0ZWRcIiwge1xuICAgICAgZGV0YWlsOiB7IHByb2plY3ROYW1lOiBwcm9qZWN0VGl0bGUgfSxcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KERlc2VsZWN0UHJvamVjdEVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSWNvbkVsZW1lbnQoY2xhc3NOYW1lLCBzb3VyY2UpIHtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgY292ZXIuc3JjID0gc291cmNlO1xuICAgIHJldHVybiBjb3ZlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZEljb25zKGVsZW0pIHtcbiAgICBjb25zdCBlZGl0U1ZHID0gY3JlYXRlSWNvbkVsZW1lbnQoXCJlZGl0XCIsIGVkaXRJY29uKTtcbiAgICBjb25zdCBkZWxldGVTVkcgPSBjcmVhdGVJY29uRWxlbWVudChcImRlbGV0ZVwiLCBkZWxldGVJY29uKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKGVkaXRTVkcpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQoZGVsZXRlU1ZHKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTGlzdChidG4sIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBidG4ucGFyZW50Tm9kZTtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdERpdik7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTZWxlY2VkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdE5hbWVzLnB1c2gocHJvamVjdC5uYW1lKSk7XG4gICAgQXJyYXkuZnJvbShwcm9qZWN0Q29udGFpbmVycykuZm9yRWFjaCgocHJvamVjdENvbnRhaW5lcikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9qZWN0TmFtZXMuaW5jbHVkZXMoXG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RTZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERlbGV0ZUVkaXRMaXN0ZW5lcnMoXG4gICAgZGVsZXRlQnRuLFxuICAgIGVkaXRCdG4sXG4gICAgcHJvamVjdEVsZW1lbnQsXG4gICAgb2xkUHJvamVjdFxuICApIHtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIWRlbGV0aW9uQ29uZmlybWVkKCkpIHJldHVybjtcbiAgICAgIHJlbW92ZVRhc2tzKHByb2plY3RFbGVtZW50KTtcbiAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdEVsZW1lbnQpO1xuICAgICAgcmVtb3ZlUHJvamVjdEZyb21MaXN0KGRlbGV0ZUJ0biwgcHJvamVjdHNDb250YWluZXIpO1xuICAgIH0pO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwb3B1bGF0ZVByb2plY3RGb3JtKG9sZFByb2plY3QpO1xuICAgICAgZWRpdFByb2plY3QocHJvamVjdEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kUHJvamVjdChjbGFzc05hbWUsIHByb2plY3QpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KGNsYXNzTmFtZSwgcHJvamVjdC5uYW1lKTtcbiAgICBuZXdQcm9qZWN0RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuY29sb3I7XG4gICAgYXBwZW5kSWNvbnMobmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IG5ld1Byb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBuZXdQcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsZW1lbnQpO1xuXG4gICAgYWRkRGVsZXRlRWRpdExpc3RlbmVycyhkZWxldGVCdG4sIGVkaXRCdG4sIG5ld1Byb2plY3RFbGVtZW50LCBwcm9qZWN0KTtcblxuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBuZXdQcm9qZWN0RWxlbWVudDtcbiAgICAgIHJlc2V0U2VsZWNlZFByb2plY3RzKCk7XG4gICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RTZWxlY3RlZFwiKSkge1xuICAgICAgICBzZWxlY3RlZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RTZWxlY3RlZFwiKTtcbiAgICAgICAgRGVzZWxlY3RQcm9qZWN0KG5ld1Byb2plY3RFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFNlbGVjdGVkXCIpO1xuICAgICAgICBTZWxlY3RQcm9qZWN0KG5ld1Byb2plY3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0luRm9ybShwcm9qZWN0cykge1xuICAgIGNsZWFyQ29udGFpbmVyKHByb2plY3RMaXN0KTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRGFzaGJvYXJkKCkge1xuICAgIGNsZWFyQ29udGFpbmVyKG5ld0NvbnRhaW5lcik7XG4gICAgY2xlYXJDb250YWluZXIoaW5Qcm9ncmVzc0NvbnRhaW5lcik7XG4gICAgY2xlYXJDb250YWluZXIoZmluaXNoZWRDb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kVGFza1RvU3RhdHVzQ29udGFpbmVyKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgICBpZiAodGFzay5zdGF0dXMgPT09IFwiTmV3XCIpIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBlbHNlIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJJbiBwcm9ncmVzc1wiKSB7XG4gICAgICBpblByb2dyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0gZWxzZSBmaW5pc2hlZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERyYWdMaXN0ZW5lcnMoY29udGFpbmVyLCB0YXNrKSB7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGFzay50aXRsZSk7XG4gICAgICBkcmFnZ2VkID0gY29udGFpbmVyO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmROZXdUYXNrKHByb2plY3QsIHRhc2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIHByb2plY3QuY29sb3IpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgIGFwcGVuZFRhc2tUb1N0YXR1c0NvbnRhaW5lcih0YXNrLCBjb250YWluZXIpO1xuICAgIGFkZERyYWdMaXN0ZW5lcnMoY29udGFpbmVyLCB0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhc2tzKHByb2plY3QsIHRhc2tzQXJyKSB7XG4gICAgdGFza3NBcnIuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlVGFza0NvbnRhaW5lcih0YXNrLCBwcm9qZWN0LmNvbG9yKTtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2stbmFtZVwiLCB0YXNrLnRpdGxlKTtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgYXBwZW5kVGFza1RvU3RhdHVzQ29udGFpbmVyKHRhc2ssIGNvbnRhaW5lcik7XG4gICAgICBhZGREcmFnTGlzdGVuZXJzKGNvbnRhaW5lciwgdGFzayk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXNoYm9hcmQob2xkTmFtZSwgcHJvamVjdCwgdGFza3NBcnIpIHtcbiAgICB0YXNrc0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIikgPT09IG9sZE5hbWUpIHtcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb2plY3QuY29sb3I7XG4gICAgICAgICAgICBzZXROYW1lQXR0cmlidXRlcyhjaGlsZCwgdGFzay50aXRsZSwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiBjaGlsZC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXZvcml0ZUljb25cIikgfHxcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRUYXNrXCIpIHx8XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVUYXNrXCIpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNldE5hbWVBdHRyaWJ1dGVzKGVsZW0sIHRhc2sudGl0bGUsIHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJRFwiKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TGlzdChwcm9qZWN0LCBvbGROYW1lKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwcm9qZWN0c0NvbnRhaW5lci5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSBvbGROYW1lKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0KFwicHJvamVjdFwiLCBwcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3RFbGVtZW50LFxuICAgIGFwcGVuZFByb2plY3QsXG4gICAgdXBkYXRlVGFza3MsXG4gICAgdGFza01lbnVFdmVudExpc3RlbmVycyxcbiAgICBjbGVhckRhc2hib2FyZCxcbiAgICB1cGRhdGVQcm9qZWN0c0luRm9ybSxcbiAgICBhcHBlbmROZXdUYXNrLFxuICAgIHVwZGF0ZURhc2hib2FyZCxcbiAgICBlZGl0UHJvamVjdExpc3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0SW5wdXR2YWx1ZXMsXG4gIHNldERlZmF1bHREYXRlLFxuICBnZXRQcm9qMVRhc2tzLFxuICBnZXRQcm9qMlRhc2tzLFxuICBnZXRFZGl0ZWRUYXNrLFxufSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IFByb2plY3QsIHtcbiAgZ2V0TmV3UHJvamVjdCxcbiAgZ2V0RGVmYXVsdFByb2plY3RzLFxuICBnZXRFZGl0ZWRQcm9qZWN0LFxufSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCBsb2FkTWFpbiBmcm9tIFwiLi9tYWluLmpzXCI7XG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcbmxldCB0YXNrczEgPSBbXTtcbmxldCB0YXNrczIgPSBbXTtcbmxldCBlZGl0ZWRQcm9qZWN0TmFtZTtcbmxldCBwcm9qZWN0VG9FZGl0O1xubGV0IHRhc2tUb0VkaXQ7XG5cbmNvbnN0IG1haW5FbGVtZW50cyA9IGxvYWRNYWluKCk7XG5cbmNvbnN0IG1vZGFsV2luZG93cyA9IFtcbiAgeyBidXR0b246IG1haW5FbGVtZW50cy5jbG9zZVRhc2tzQnRuLCB3aW5kb3c6IG1haW5FbGVtZW50cy50YXNrc01vZGFsIH0sXG4gIHtcbiAgICBidXR0b246IG1haW5FbGVtZW50cy5jbG9zZVByb2plY3RzQnRuLFxuICAgIHdpbmRvdzogbWFpbkVsZW1lbnRzLnByb2plY3RzTW9kYWwsXG4gIH0sXG4gIHtcbiAgICBidXR0b246IG1haW5FbGVtZW50cy5jbG9zZUVkaXRQcm9qZWN0QnRuLFxuICAgIHdpbmRvdzogbWFpbkVsZW1lbnRzLmVkaXRQcm9qZWN0TW9kYWwsXG4gIH0sXG4gIHtcbiAgICBidXR0b246IG1haW5FbGVtZW50cy5jbG9zZUVkaXRUYXNrQnRuLFxuICAgIHdpbmRvdzogbWFpbkVsZW1lbnRzLmVkaXRUYXNrTW9kYWwsXG4gIH0sXG5dO1xuXG5jb25zdCBbcHJvajEsIHByb2oyXSA9IGdldERlZmF1bHRQcm9qZWN0cygpO1xudGFza3MxID0gZ2V0UHJvajFUYXNrcygpO1xudGFza3MyID0gZ2V0UHJvajJUYXNrcygpO1xudGFza3MxLmZvckVhY2goKHRhc2spID0+IHByb2oxLmFkZFRhc2sodGFzaykpO1xudGFza3MyLmZvckVhY2goKHRhc2spID0+IHByb2oyLmFkZFRhc2sodGFzaykpO1xuXG5jb25zdCBzdG9yZWRQcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0c0pTT04gPyBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzSlNPTikgOiBbXTtcblxuaWYgKHN0b3JlZFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2oxLCBwcm9qMik7XG59IGVsc2Uge1xuICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChzdG9yZWRQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgc3RvcmVkUHJvamVjdC5uYW1lLFxuICAgICAgc3RvcmVkUHJvamVjdC5jb2xvcixcbiAgICAgIHN0b3JlZFByb2plY3QudGFza3MsXG4gICAgICBzdG9yZWRQcm9qZWN0LmZpbHRlcmVkVGFza3NcbiAgICApO1xuICAgIHByb2plY3QuY29weVRhc2tzKHN0b3JlZFByb2plY3QudGFza3MpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH0pO1xufVxuXG5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIERPTS5hcHBlbmRQcm9qZWN0KFwicHJvamVjdFwiLCBwcm9qZWN0KTtcbiAgRE9NLnVwZGF0ZVRhc2tzKHByb2plY3QsIHByb2plY3QudGFza3MpO1xufSk7XG5cbmNvbnN0IHRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza1wiKTtcbmNvbnN0IHByb2plY3RzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdFwiKTtcbmNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RcIik7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUYXNrRm9ybVwiKTtcblxuRE9NLnVwZGF0ZVByb2plY3RzSW5Gb3JtKHByb2plY3RzKTtcbkRPTS50YXNrTWVudUV2ZW50TGlzdGVuZXJzKGhhbmRsZU9wdGlvbkNsaWNrKTtcblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvamVjdHNKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgcHJvamVjdHNKU09OKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHByb2plY3RzIHRvIGxvY2FsIHN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG59XG5cbmZ1bmN0aW9uIGdldERhdGVzKCkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgc3RhcnRPZldlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSB0b2RheS5nZXREYXkoKSk7XG4gIGVuZE9mV2Vlay5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArICg2IC0gdG9kYXkuZ2V0RGF5KCkpKTtcbiAgdG9kYXkgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuXG4gIGNvbnN0IHRoaXNXZWVrID0gW2Zvcm1hdERhdGUoc3RhcnRPZldlZWspLCBmb3JtYXREYXRlKGVuZE9mV2VlayldO1xuXG4gIHJldHVybiBbdG9kYXksIHRoaXNXZWVrXTtcbn1cbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSwgZGF0ZUFycikge1xuICByZXR1cm4gZGF0ZSA+PSBkYXRlQXJyWzBdICYmIGRhdGUgPD0gZGF0ZUFyclsxXTtcbn1cblxuZnVuY3Rpb24gdGFza3NDb3VudCgpIHtcbiAgbGV0IHRvdGFsQ291bnQgPSAwO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgdG90YWxDb3VudCArPSBwcm9qZWN0LnRhc2tzLmxlbmd0aDtcbiAgfSk7XG4gIHJldHVybiB0b3RhbENvdW50O1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFByb2plY3QgXCIke3Byb2plY3ROYW1lfVwiIG5vdCBmb3VuZC5gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5mdW5jdGlvbiBpc1RvZGF5KGRhdGUsIHRvZGF5KSB7XG4gIHJldHVybiBkYXRlID09PSB0b2RheTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3B0aW9uQ2xpY2soaWQpIHtcbiAgZmlsdGVyVGFza3NBcnJheShpZCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tBbmRQcm9qZWN0SW5mbyhldmVudCkge1xuICByZXR1cm4gW2V2ZW50LmRldGFpbC50YXNrTmFtZSwgZXZlbnQuZGV0YWlsLnByb2plY3ROYW1lXTtcbn1cblxuZnVuY3Rpb24gdGFza0ZvdW5kKHByb2plY3QsIHRhc2tUb0VkaXQpIHtcbiAgbGV0IHRhc2tJbmRleDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0LnRhc2tzW2ldLnRpdGxlID09PSB0YXNrVG9FZGl0KSB7XG4gICAgICB0YXNrSW5kZXggPSBpO1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoIWZvdW5kKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBUYXNrIFwiJHt0YXNrVG9FZGl0fVwiIG5vdCBmb3VuZCBpbiBwcm9qZWN0IFwiJHtwcm9qZWN0Lm5hbWV9XCIuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFt0YXNrSW5kZXgsIGZvdW5kXTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyVGFza3NBcnJheShwYXJhbSkge1xuICBjb25zdCBbdG9kYXksIHRoaXNXZWVrXSA9IGdldERhdGVzKCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgaWYgKHBhcmFtID09PSBcInRoaXNXZWVrXCIpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmZpbHRlclRhc2tzQnlEYXRlKCh0YXNrKSA9PlxuICAgICAgICBpc0RhdGVJblJhbmdlKHRhc2suZHVlRGF0ZSwgdGhpc1dlZWspXG4gICAgICApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHBhcmFtID09PSBcInRvZGF5XCIpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmZpbHRlclRhc2tzQnlEYXRlKCh0YXNrKSA9PiBpc1RvZGF5KHRhc2suZHVlRGF0ZSwgdG9kYXkpKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwYXJhbSA9PT0gXCJpbXBvcnRhbnRcIikge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuZmlsdGVyVGFza3NCeUltcG9ydGFuY2UoKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwYXJhbSA9PT0gXCJmaW5pc2hlZFwiKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5maWx0ZXJUYXNrc0J5RmluaXNoZWQoKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwYXJhbSA9PT0gXCJmYXZvcml0ZVwiKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5maWx0ZXJUYXNrc0J5RmF2b3JpdGUoKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwYXJhbSA9PT0gXCJhbGxcIikge1xuICAgIERPTS5jbGVhckRhc2hib2FyZCgpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IERPTS51cGRhdGVUYXNrcyhwcm9qZWN0LCBwcm9qZWN0LnRhc2tzKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIERPTS5jbGVhckRhc2hib2FyZCgpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgIERPTS51cGRhdGVUYXNrcyhwcm9qZWN0LCBwcm9qZWN0LmZpbHRlcmVkVGFza3MpXG4gICk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgdGFza3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gZ2V0SW5wdXR2YWx1ZXMoKTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgobmV3VGFzay5wcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBtYWluRWxlbWVudHMuY2xvc2VNb2RhbChtYWluRWxlbWVudHMudGFza3NNb2RhbCk7XG4gICAgRE9NLmFwcGVuZE5ld1Rhc2socHJvamVjdCwgbmV3VGFzayk7XG4gICAgdGFza3NGb3JtLnJlc2V0KCk7XG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG5cbiAgcHJvamVjdHNGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZ2V0TmV3UHJvamVjdCgpO1xuICAgIG1haW5FbGVtZW50cy5jbG9zZU1vZGFsKG1haW5FbGVtZW50cy5wcm9qZWN0c01vZGFsKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIERPTS5hcHBlbmRQcm9qZWN0KFwicHJvamVjdFwiLCBuZXdQcm9qZWN0KTtcbiAgICBET00udXBkYXRlUHJvamVjdHNJbkZvcm0ocHJvamVjdHMpO1xuICAgIHByb2plY3RzRm9ybS5yZXNldCgpO1xuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG4gIGVkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWRpdGVkVGFzayA9IGdldEVkaXRlZFRhc2soKTtcbiAgICBjb25zdCBvbGRQcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3RUb0VkaXQpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tvbGRQcm9qZWN0SW5kZXhdO1xuXG4gICAgY29uc3QgW3Rhc2tJbmRleCwgZm91bmRdID0gdGFza0ZvdW5kKHByb2plY3QsIHRhc2tUb0VkaXQpO1xuXG4gICAgaWYgKHByb2plY3RUb0VkaXQgIT09IGVkaXRlZFRhc2sucHJvamVjdCkge1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgoZWRpdGVkVGFzay5wcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNbbmV3UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKGVkaXRlZFRhc2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm91bmQpIHtcbiAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG4gICAgfVxuXG4gICAgRE9NLmNsZWFyRGFzaGJvYXJkKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgRE9NLnVwZGF0ZVRhc2tzKHByb2plY3QsIHByb2plY3QudGFza3MpO1xuICAgIH0pO1xuICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xuICAgIG1haW5FbGVtZW50cy5jbG9zZU1vZGFsKG1haW5FbGVtZW50cy5lZGl0VGFza01vZGFsKTtcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuICBlZGl0UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IFtuZXdOYW1lLCBuZXdDb2xvcl0gPSBnZXRFZGl0ZWRQcm9qZWN0KCk7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kUHJvamVjdEluZGV4KGVkaXRlZFByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgcHJvamVjdC5jb2xvciA9IG5ld0NvbG9yO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4gKHRhc2sucHJvamVjdCA9IG5ld05hbWUpKTtcblxuICAgIERPTS51cGRhdGVEYXNoYm9hcmQoZWRpdGVkUHJvamVjdE5hbWUsIHByb2plY3QsIHByb2plY3QudGFza3MpO1xuICAgIERPTS5lZGl0UHJvamVjdExpc3QocHJvamVjdCwgZWRpdGVkUHJvamVjdE5hbWUpO1xuICAgIERPTS51cGRhdGVQcm9qZWN0c0luRm9ybShwcm9qZWN0cyk7XG4gICAgZWRpdFByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgbWFpbkVsZW1lbnRzLmNsb3NlTW9kYWwobWFpbkVsZW1lbnRzLmVkaXRQcm9qZWN0TW9kYWwpO1xuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9qZWN0RWRpdGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGVkaXRlZFByb2plY3ROYW1lID0gZXZlbnQuZGV0YWlsLnByb2plY3ROYW1lO1xuICAgIG1haW5FbGVtZW50cy5vcGVuTW9kYWwobWFpbkVsZW1lbnRzLmVkaXRQcm9qZWN0TW9kYWwpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZmF2b3JpdGVUb2dnbGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IFt0YXNrTmFtZSwgcHJvak5hbWVdID0gZ2V0VGFza0FuZFByb2plY3RJbmZvKGV2ZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgocHJvak5hbWUpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpbmRleF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3QudGFza3NbaV0udGl0bGUgPT09IHRhc2tOYW1lKSB7XG4gICAgICAgIHByb2plY3QudG9nZ2xlU3RhdHVzKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9qZWN0RGVzZWxlY3RlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgRE9NLmNsZWFyRGFzaGJvYXJkKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgRE9NLnVwZGF0ZVRhc2tzKHByb2plY3QsIHByb2plY3QudGFza3MpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicHJvamVjdFNlbGVjdGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQuZGV0YWlsLnByb2plY3ROYW1lO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG5cbiAgICBET00uY2xlYXJEYXNoYm9hcmQoKTtcbiAgICBET00udXBkYXRlVGFza3MocHJvamVjdHNbaW5kZXhdLCBwcm9qZWN0c1tpbmRleF0udGFza3MpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3RhdHVzQ2hhbmdlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgbmV3U3RhdHVzID0gZXZlbnQuZGV0YWlsLm5ld1N0YXR1cztcbiAgICBuZXdTdGF0dXMgPSBuZXdTdGF0dXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuZXdTdGF0dXMuc2xpY2UoMSk7XG4gICAgY29uc3QgW3Rhc2tOYW1lLCBwcm9qTmFtZV0gPSBnZXRUYXNrQW5kUHJvamVjdEluZm8oZXZlbnQpO1xuICAgIGlmIChuZXdTdGF0dXMgPT09IFwiSW5Qcm9ncmVzc1wiKSBuZXdTdGF0dXMgPSBcIkluIHByb2dyZXNzXCI7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2pOYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3QudGFza3NbaV0udGl0bGUgPT09IHRhc2tOYW1lKVxuICAgICAgICBwcm9qZWN0LnRhc2tzW2ldLnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICB9XG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2plY3RSZW1vdmVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQuZGV0YWlsLnByb2plY3ROYW1lO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgRE9NLnVwZGF0ZVByb2plY3RzSW5Gb3JtKHByb2plY3RzKTtcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidGFza0RlbGV0ZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgW3Rhc2tOYW1lLCBwcm9qZWN0TmFtZV0gPSBnZXRUYXNrQW5kUHJvamVjdEluZm8oZXZlbnQpO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2luZGV4XTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNbaW5kZXhdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdC50YXNrc1tpXS50aXRsZSA9PT0gdGFza05hbWUpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIERPTS5jbGVhckRhc2hib2FyZCgpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIERPTS51cGRhdGVUYXNrcyhwcm9qZWN0LCBwcm9qZWN0LnRhc2tzKTtcbiAgICB9KTtcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidGFza0VkaXRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBbdGFza1RvRWRpdCwgcHJvamVjdFRvRWRpdF0gPSBnZXRUYXNrQW5kUHJvamVjdEluZm8oZXZlbnQpO1xuICB9KTtcblxuICBtYWluRWxlbWVudHMuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0YXNrc0NvdW50KCkgPj0gMTIpIHtcbiAgICAgIGFsZXJ0KFwiQ2FuJ3QgYWRkIG1vcmUgdGhhbiB0d2VsdmUgdGFza3MhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtYWluRWxlbWVudHMub3Blbk1vZGFsKG1haW5FbGVtZW50cy50YXNrc01vZGFsKTtcbiAgICBzZXREZWZhdWx0RGF0ZSgpO1xuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xuXG4gIG1haW5FbGVtZW50cy5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+PSA1KSB7XG4gICAgICBhbGVydChcIkNhbid0IGFkZCBtb3JlIHRoYW4gZml2ZSBwcm9qZWN0cyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG1haW5FbGVtZW50cy5vcGVuTW9kYWwobWFpbkVsZW1lbnRzLnByb2plY3RzTW9kYWwpO1xuICB9KTtcblxuICBtb2RhbFdpbmRvd3MuZm9yRWFjaCgobW9kYWwpID0+XG4gICAgbW9kYWwuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgbWFpbkVsZW1lbnRzLmNsb3NlTW9kYWwobW9kYWwud2luZG93KVxuICAgIClcbiAgKTtcbn0pO1xuIiwiY29uc3QgbG9hZE1haW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhpc1dlZWtcIik7XG4gIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50XCIpO1xuICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFwiKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgY29uc3QgZmluaXNoZWRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluaXNoZWRQcm9qZWN0c1wiKTtcbiAgY29uc3QgdGFza3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NNb2RhbFwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NPdmVybGF5XCIpO1xuICBjb25zdCBwcm9qZWN0c01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c01vZGFsXCIpO1xuICBjb25zdCBjbG9zZVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWNsb3NlLWJ1dHRvbl1cIik7XG4gIGNvbnN0IGNsb3NlUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4aXRQcm9qZWN0c1wiKTtcbiAgY29uc3QgZWRpdFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RNb2RhbFwiKTtcbiAgY29uc3QgY2xvc2VFZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhpdEVkaXRQcm9qZWN0c1wiKTtcbiAgY29uc3QgY2xvc2VFZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdFRhc2tFZGl0XCIpO1xuICBjb25zdCBlZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VGFza3NNb2RhbFwiKTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKHdpbmRvdykge1xuICAgIHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbWFpbixcbiAgICBhZGRUYXNrLFxuICAgIHRvZGF5LFxuICAgIHRoaXNXZWVrLFxuICAgIGltcG9ydGFudCxcbiAgICBjb21wbGV0ZWQsXG4gICAgYWRkUHJvamVjdCxcbiAgICBmaW5pc2hlZFByb2plY3RzLFxuICAgIHRhc2tzTW9kYWwsXG4gICAgb3ZlcmxheSxcbiAgICBjbG9zZVByb2plY3RzQnRuLFxuICAgIGNsb3NlVGFza3NCdG4sXG4gICAgcHJvamVjdHNNb2RhbCxcbiAgICBlZGl0UHJvamVjdE1vZGFsLFxuICAgIGNsb3NlRWRpdFByb2plY3RCdG4sXG4gICAgY2xvc2VFZGl0VGFza0J0bixcbiAgICBlZGl0VGFza01vZGFsLFxuICAgIGNsb3NlTW9kYWwsXG4gICAgb3Blbk1vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1haW47XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5maWx0ZXJlZFRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBmaWx0ZXJUYXNrc0J5RGF0ZShjb25kaXRpb24pIHtcbiAgICB0aGlzLmZpbHRlcmVkVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gY29uZGl0aW9uKHRhc2spKTtcbiAgfVxuICBmaWx0ZXJUYXNrc0J5SW1wb3J0YW5jZSgpIHtcbiAgICB0aGlzLmZpbHRlcmVkVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eSA9PT0gXCJIaWdoXCIpO1xuICB9XG4gIGZpbHRlclRhc2tzQnlGYXZvcml0ZSgpIHtcbiAgICB0aGlzLmZpbHRlcmVkVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5mYXZvcml0ZSA9PT0gdHJ1ZSk7XG4gIH1cbiAgZmlsdGVyVGFza3NCeUZpbmlzaGVkKCkge1xuICAgIHRoaXMuZmlsdGVyZWRUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2suc3RhdHVzID09PSBcIkZpbmlzaGVkXCJcbiAgICApO1xuICB9XG4gIHRvZ2dsZVN0YXR1cyhpbmRleCkge1xuICAgIHRoaXMudGFza3NbaW5kZXhdLmZhdm9yaXRlID0gIXRoaXMudGFza3NbaW5kZXhdLmZhdm9yaXRlO1xuICB9XG4gIGNvcHlUYXNrcyhhcnJheSkge1xuICAgIHRoaXMudGFza3MgPSBhcnJheTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TmV3UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpLnZhbHVlO1xuICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3ItcGlja2VyXCIpLnZhbHVlO1xuXG4gIHJldHVybiBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUsIGNvbG9yKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFZGl0ZWRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGVkVGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IG5ld0NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0ZWRDb2xvclwiKS52YWx1ZTtcblxuICByZXR1cm4gW25ld1RpdGxlLCBuZXdDb2xvcl07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiRml4IGVzcHJlc3NvIG1hY2hpbmVcIiwgXCIjQ0NEQkRDXCIpO1xuICBjb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gaG93IHRvIGNvZGVcIiwgXCIjRDU4RDdFXCIpO1xuXG4gIHJldHVybiBbcHJvamVjdDEsIHByb2plY3QyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3B1bGF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgZWRpdGVkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRlZFRpdGxlXCIpO1xuICBjb25zdCBlZGl0ZWRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdGVkQ29sb3JcIik7XG4gIGNvbnNvbGUubG9nKGVkaXRlZFRpdGxlKTtcbiAgZWRpdGVkVGl0bGUudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIGVkaXRlZENvbG9yLnZhbHVlID0gcHJvamVjdC5jb2xvcjtcbn07XG4iLCJpbXBvcnQgeyBlYWNoRGF5T2ZJbnRlcnZhbCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBmYXZvcml0ZSxcbiAgICBzdGF0dXMsXG4gICAgcHJvamVjdFxuICApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmZhdm9yaXRlID0gZmF2b3JpdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SW5wdXR2YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICApLnZhbHVlO1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tGYXZvcml0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXNGYXZvcml0ZVwiKS5jaGVja2VkO1xuICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikudmFsdWU7XG5cbiAgcmV0dXJuIG5ldyBUYXNrKFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgdGFza0RhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tOb3RlcyxcbiAgICB0YXNrRmF2b3JpdGUsXG4gICAgdGFza1N0YXR1cyxcbiAgICB0YXNrUHJvamVjdFxuICApO1xufTtcblxuZnVuY3Rpb24gY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHNJbkZvcm0ocHJvamVjdHMsIGNvbnRhaW5lcikge1xuICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uICh0YXNrLCBwcm9qZWN0cykge1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUYXNrRm9ybVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZWRpdFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XG4gIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWUgPSB0YXNrLnRpdGxlO1xuICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgZWRpdFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZSA9IFwiMjAyNC0wNS0wNVwiO1xuICB1cGRhdGVQcm9qZWN0c0luRm9ybShwcm9qZWN0cywgY29udGFpbmVyKTtcbiAgY29uc3QgcHJpb3JpdHlSYWRpb0J1dHRvbiA9IGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgIGBpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl1bdmFsdWU9XCIke3Rhc2sucHJpb3JpdHl9XCJdYFxuICApO1xuXG4gIGlmIChwcmlvcml0eVJhZGlvQnV0dG9uKSB7XG4gICAgcHJpb3JpdHlSYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZSA9IHRhc2sucHJvamVjdDtcbiAgZWRpdFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIikudmFsdWUgPSB0YXNrLm5vdGVzO1xuICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNpc0Zhdm9yaXRlXCIpLmNoZWNrZWQgPSB0YXNrLmZhdm9yaXRlO1xuICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIikudmFsdWUgPSB0YXNrLnN0YXR1cztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFZGl0ZWRUYXNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUYXNrRm9ybVwiKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICkudmFsdWU7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gZWRpdFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tOb3RlcyA9IGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRmF2b3JpdGUgPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNpc0Zhdm9yaXRlXCIpLmNoZWNrZWQ7XG4gIGNvbnN0IHRhc2tTdGF0dXMgPSBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIikudmFsdWU7XG5cbiAgcmV0dXJuIG5ldyBUYXNrKFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgdGFza0RhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tOb3RlcyxcbiAgICB0YXNrRmF2b3JpdGUsXG4gICAgdGFza1N0YXR1cyxcbiAgICB0YXNrUHJvamVjdFxuICApO1xufTtcbmV4cG9ydCBjb25zdCBzZXREZWZhdWx0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IGRlZmF1bHREYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBkZWZhdWx0RGF0ZTtcbn07XG5cbmZ1bmN0aW9uIHNldERhdGUocGVyaW9kKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB0aGlzV2VlayA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBwcmV2RGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSAtIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgdGhpc1dlZWsgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgcHJldkRheTtcbiAgdG9kYXkgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuXG4gIGlmIChwZXJpb2QgPT09IFwidG9kYXlcIikgcmV0dXJuIHRvZGF5O1xuICBlbHNlIGlmIChwZXJpb2QgPT09IFwidGhpcyB3ZWVrXCIpIHJldHVybiB0aGlzV2Vlaztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2oxVGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soXG4gICAgXCJSZXBsYWNlIGJvaWxlclwiLFxuICAgIFwiVXNlIHNvbWV0aGluZyB0byBwcnkgaXRcIixcbiAgICBzZXREYXRlKFwidG9kYXlcIiksXG4gICAgXCJIaWdoXCIsXG4gICAgXCJIb3cgZG8gSSBkbyB0aGF0P1wiLFxuICAgIGZhbHNlLFxuICAgIFwiTmV3XCIsXG4gICAgXCJGaXggZXNwcmVzc28gbWFjaGluZVwiXG4gICk7XG4gIGNvbnN0IHRhc2syID0gbmV3IFRhc2soXG4gICAgXCJEbyBzb21lIGRlc2NhbGluZ1wiLFxuICAgIFwiRWFzeSBwZWFzeVwiLFxuICAgIHNldERhdGUoXCJ0aGlzIHdlZWtcIiksXG4gICAgXCJNZWRpdW1cIixcbiAgICBcImJlIGNhcmVmdWwsIHBsZWFzZSFcIixcbiAgICB0cnVlLFxuICAgIFwiSW4gcHJvZ3Jlc3NcIixcbiAgICBcIkZpeCBlc3ByZXNzbyBtYWNoaW5lXCJcbiAgKTtcbiAgY29uc3QgdGFzazMgPSBuZXcgVGFzayhcbiAgICBcIkNoZWNrIHdhdGVyIGNvbnRhaW5lclwiLFxuICAgIFwieWEga25vdy4uIHRoZXkgc29tZXRpbWVzIGdldCBtZXNzeVwiLFxuICAgIHNldERhdGUoXCJ0b2RheVwiKSxcbiAgICBcIkxvd1wiLFxuICAgIFwiZWFzeXl5eVwiLFxuICAgIGZhbHNlLFxuICAgIFwiRmluaXNoZWRcIixcbiAgICBcIkZpeCBlc3ByZXNzbyBtYWNoaW5lXCJcbiAgKTtcblxuICByZXR1cm4gW3Rhc2sxLCB0YXNrMiwgdGFzazNdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2oyVGFza3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhc2s0ID0gbmV3IFRhc2soXG4gICAgXCJJbXBsZW1lbnQgQXBwXCIsXG4gICAgXCJDcmVhdGUgYSBuZXcgZm9vZCBkZWxpdmVyeSBhcHAgYmFzZWQgb24gcmVjZW50IGN1c3RvbWVyIHJlcXVlc3QuIFRyeSB0byB1c2UgU09MSUQgcHJpbmNpcGxlcyBhbG9uZyB0aGUgd2F5XCIsXG4gICAgXCIyMDI0LTAyLTA2XCIsXG4gICAgXCJIaWdoXCIsXG4gICAgXCJEb24ndCBtZXNzIHVwXCIsXG4gICAgdHJ1ZSxcbiAgICBcIk5ld1wiLFxuICAgIFwiTGVhcm4gaG93IHRvIGNvZGVcIlxuICApO1xuXG4gIGNvbnN0IHRhc2s1ID0gbmV3IFRhc2soXG4gICAgXCJXYXRjaCBjb2RpbmcgdmlkZW9zXCIsXG4gICAgXCJHYXRoZXIgbW9yZSBrbm93bGVkZ2UgYWJvdXQgRVM2IG1vZHVsZXMgYW5kIGVuY2Fwc3VsYXRpbmdcIixcbiAgICBzZXREYXRlKFwidG9kYXlcIiksXG4gICAgXCJMb3dcIixcbiAgICBcInlpa2VzXCIsXG4gICAgZmFsc2UsXG4gICAgXCJOZXdcIixcbiAgICBcIkxlYXJuIGhvdyB0byBjb2RlXCJcbiAgKTtcblxuICBjb25zdCB0YXNrNiA9IG5ldyBUYXNrKFxuICAgIFwiQ3JlYXRlIGNhbGN1bGF0b3JcIixcbiAgICBcIkJhc2ljIHN0dWZmLCB5b3Ugc2hvdWxkIGRvIGl0XCIsXG4gICAgc2V0RGF0ZShcInRoaXMgd2Vla1wiKSxcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiZG9uJ3QgZm9yZ2V0IGFib3V0IHRoZSBmdW5jdGlvbnMhXCIsXG4gICAgZmFsc2UsXG4gICAgXCJJbiBwcm9ncmVzc1wiLFxuICAgIFwiTGVhcm4gaG93IHRvIGNvZGVcIlxuICApO1xuICByZXR1cm4gW3Rhc2s0LCB0YXNrNSwgdGFzazZdO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9