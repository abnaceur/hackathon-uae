webpackHotUpdate(0,{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // React\n\n\nvar StartScreen = function (_Component) {\n    _inherits(StartScreen, _Component);\n\n    function StartScreen() {\n        _classCallCheck(this, StartScreen);\n\n        return _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).apply(this, arguments));\n    }\n\n    _createClass(StartScreen, [{\n        key: \"render\",\n        value: function render() {\n            var _props = this.props,\n                personalBest = _props.personalBest,\n                previousScore = _props.previousScore,\n                startGame = _props.startGame;\n\n            var hasPersonalBest = personalBest && personalBest > 0 ? true : false;\n            var hasPreviousScore = previousScore ? true : false;\n\n            return _react2.default.createElement(\n                \"screen\",\n                null,\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"window__outer fade-in\" },\n                    _react2.default.createElement(\n                        \"buton\",\n                        null,\n                        _react2.default.createElement(\n                            \"a\",\n                            { href: \"/\" },\n                            \"Dashboard\"\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"window__inner\" },\n                        _react2.default.createElement(\n                            \"h1\",\n                            { className: \"window__focus window__focus--sm\" },\n                            \"Arabic Warriors\"\n                        ),\n                        _react2.default.createElement(\n                            \"h2\",\n                            null,\n                            \"Aim of the game\"\n                        ),\n                        _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Translate as many words as possible into your local dialect before the timer runs out!\"\n                        ),\n                        _react2.default.createElement(\n                            \"p\",\n                            null,\n                            \"Top 05 winners will gain Khadamati tokens KTHER\"\n                        ),\n                        _react2.default.createElement(\n                            \"ul\",\n                            { className: \"list-inline\" },\n                            hasPersonalBest && _react2.default.createElement(\n                                \"li\",\n                                null,\n                                _react2.default.createElement(\n                                    \"h3\",\n                                    { className: \"zero-bottom\" },\n                                    _react2.default.createElement(\n                                        \"strong\",\n                                        null,\n                                        \"Personal best:\"\n                                    ),\n                                    \" \",\n                                    personalBest\n                                )\n                            ),\n                            hasPreviousScore && _react2.default.createElement(\n                                \"li\",\n                                null,\n                                _react2.default.createElement(\n                                    \"h3\",\n                                    { className: \"zero-bottom\" },\n                                    _react2.default.createElement(\n                                        \"strong\",\n                                        null,\n                                        \"Previous score:\"\n                                    ),\n                                    \" \",\n                                    previousScore\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            \"button\",\n                            { ref: \"startButton\", className: \"bubble bubble--input window__form-control window__form-control--push\", onClick: startGame },\n                            \"Start\"\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return StartScreen;\n}(_react.Component);\n\n;\n\nexports.default = StartScreen;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(247); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"StartScreen.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./assets/scripts/src/components/StartScreen.js\n// module id = 349\n// module chunks = 0\n//# sourceURL=webpack:///./assets/scripts/src/components/StartScreen.js?");

/***/ })

})