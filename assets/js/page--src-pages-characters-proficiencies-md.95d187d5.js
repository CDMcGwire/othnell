(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src-pages-characters-proficiencies-md"],{

/***/ "53qf":
/*!***********************************************!*\
  !*** ./src/pages/characters/proficiencies.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proficiencies.md?vue&type=template&id=0280f518& */ \"y4Iz\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _proficiencies_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proficiencies.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"cjKe\");\n/* harmony import */ var _proficiencies_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proficiencies.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"WtOS\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _proficiencies_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_proficiencies_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _proficiencies_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_proficiencies_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?");

/***/ }),

/***/ "DX7W":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./src/pages/characters/proficiencies.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layouts_Default_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/layouts/Default.vue */ \"6ipC\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"BeV2\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _layouts_Default_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UWTB":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./src/pages/characters/proficiencies.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"BeV2\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Proficiencies\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "WtOS":
/*!********************************************************************************************************!*\
  !*** ./src/pages/characters/proficiencies.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--16-0!../../../node_modules/vue-loader/lib??ref--17-0!../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./proficiencies.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"UWTB\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?");

/***/ }),

/***/ "cjKe":
/*!***************************************************************************************************!*\
  !*** ./src/pages/characters/proficiencies.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--15-0!../../../node_modules/vue-loader/lib??ref--17-0!../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./proficiencies.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"DX7W\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?");

/***/ }),

/***/ "tFif":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"b49a0ad2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./src/pages/characters/proficiencies.md?vue&type=template&id=0280f518& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('h1',{attrs:{\"id\":\"-frontmattertitle-\"}},[_c('a',{attrs:{\"href\":\"#-frontmattertitle-\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"},[_vm._v(\"🠶\")])]),_vm._v(_vm._s(_vm.$frontmatter.title))]),_c('p',[_vm._v(\"Proficiencies define your character's areas of expertise. They determine if your\\ncharacter has the training and knowledge needed to perform specialized tasks.\\nSuch as forging a sword, picking a complex lock, or reciting long passages of a\\nholy text.\")]),_c('p',[_vm._v(\"From a gameplay perspective, having proficiency lets you make Clash Rolls, Skill\\nChecks, Memory Draws, and spend Cognition on related tasks without extreme\\npenalties. The DM may even decide that some task is entirely impossible without\\nproficiency.\")]),_c('h2',{attrs:{\"id\":\"magic\"}},[_c('a',{attrs:{\"href\":\"#magic\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"},[_vm._v(\"🠶\")])]),_vm._v(\"Magic\")]),_c('p',[_vm._v(\"Magic comes is a wide variety of origins and forms and as such proficiency in\\none \\\"arte\\\" of magic does not imply proficiency in any other. Having proficiency\\nin an arte is the first requirement to allow your character to use its spell,\\nrituals, and techniques.\")]),_c('h3',{attrs:{\"id\":\"thaumaturgy-ref-adder-mutationaddproficiency-targetthaumaturgy-\"}},[_c('a',{attrs:{\"href\":\"#thaumaturgy-ref-adder-mutationaddproficiency-targetthaumaturgy-\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"},[_vm._v(\"🠶\")])]),_c('a',{attrs:{\"href\":\"/magic/thaumaturgy\"}},[_vm._v(\"Thaumaturgy\")]),_c('ref-adder',{attrs:{\"mutation\":\"addProficiency\",\"target\":\"thaumaturgy\"}})],1),_c('p',[_vm._v(\"Thaumaturgy is the art of performing miracles by petitioning some patron of\\nSupernatural origin. You will be able to bend the world with your prayers, but\\nyou must serve your patron dilligently and their plans will always take\\npriority.\")])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22b49a0ad2-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "y4Iz":
/*!******************************************************************************!*\
  !*** ./src/pages/characters/proficiencies.md?vue&type=template&id=0280f518& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_b49a0ad2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"b49a0ad2-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--17-0!../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./proficiencies.md?vue&type=template&id=0280f518& */ \"tFif\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_b49a0ad2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_b49a0ad2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_proficiencies_md_vue_type_template_id_0280f518___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/characters/proficiencies.md?");

/***/ })

}]);