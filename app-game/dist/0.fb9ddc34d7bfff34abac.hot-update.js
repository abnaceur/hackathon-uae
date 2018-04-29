webpackHotUpdate(0,{

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(244);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _utils = __webpack_require__(246);\n\nvar _classnames = __webpack_require__(351);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _ScoreBoard = __webpack_require__(352);\n\nvar _ScoreBoard2 = _interopRequireDefault(_ScoreBoard);\n\nvar _ModeSwitcher = __webpack_require__(353);\n\nvar _ModeSwitcher2 = _interopRequireDefault(_ModeSwitcher);\n\nvar _GameControls = __webpack_require__(354);\n\nvar _GameControls2 = _interopRequireDefault(_GameControls);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // React\n\n\n// Utilities\n\n\n// Components\n\n\nvar NumberArea = function (_Component) {\n    _inherits(NumberArea, _Component);\n\n    function NumberArea() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, NumberArea);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberArea.__proto__ || Object.getPrototypeOf(NumberArea)).call.apply(_ref, [this].concat(args))), _this), _this.createClue = function (string) {\n            var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;\n\n            var strArr = string.split('');\n            var charCount = Math.floor(strArr.length * percent);\n\n            var clueString = strArr.filter(function (val, index) {\n                return index < charCount ? true : false;\n            }).join('');\n\n            return clueString + '...';\n        }, _this.handleKeyUp = function (event) {\n            var answer = _this.props.numberProps.answer;\n            if (event.which == 13) {\n                answer(event.currentTarget.value, _this.props.numberProps.currentNumber);\n            }\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(NumberArea, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            // Focus input on mount\n            _reactDom2.default.findDOMNode(this.refs.input).focus();\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            // If new number is given, clear input\n            if (this.props.numberProps.currentNumber != nextProps.numberProps.currentNumber) {\n                _reactDom2.default.findDOMNode(this.refs.input).value = '';\n\n                var number = _reactDom2.default.findDOMNode(this.refs.number);\n                (0, _utils.addAnimation)(number, 'fade-in');\n            }\n        }\n\n        /**\n         * Return a percentage of a string as a clue to the answer\n         * @param  {string} string  String to create clue from\n         * @param  {Number} percent Percent of string to show in clue\n         * @return {string}         Clue e.g. 'Dreiun...'\n         */\n\n\n        /**\n         * Handle what happens when a user submits a repsonse\n         * @param  {Object} event Reference to key event\n         * @return\n         */\n\n    }, {\n        key: 'render',\n        value: function render() {\n            var controls = this.props.controls;\n            var _props$modeProps = this.props.modeProps,\n                modes = _props$modeProps.modes,\n                changeMode = _props$modeProps.changeMode,\n                currentMode = _props$modeProps.currentMode;\n            var _props$numberProps = this.props.numberProps,\n                currentNumber = _props$numberProps.currentNumber,\n                answer = _props$numberProps.answer,\n                answerAttempts = _props$numberProps.answerAttempts;\n            var _props$scoreboardProp = this.props.scoreboardProps,\n                score = _props$scoreboardProp.score,\n                personalBest = _props$scoreboardProp.personalBest,\n                remainingTime = _props$scoreboardProp.remainingTime;\n\n\n            return _react2.default.createElement(\n                'screen',\n                null,\n                _react2.default.createElement(\n                    'header',\n                    { className: 'header fade-in' },\n                    _react2.default.createElement(_GameControls2.default, { controls: controls }),\n                    _react2.default.createElement(_ModeSwitcher2.default, { modes: modes, changeMode: changeMode, currentMode: currentMode })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'window__area fade-in' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'window__container' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'window__outer' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'window__inner' },\n                                _react2.default.createElement(_ScoreBoard2.default, { score: score, personalBest: personalBest, timer: remainingTime }),\n                                _react2.default.createElement(\n                                    'div',\n                                    { className: 'bubble bubble--lg bubble--focus' },\n                                    _react2.default.createElement(\n                                        'div',\n                                        { ref: 'number', className: 'bubble__inner bubble__inner--pad' },\n                                        answerAttempts >= 3 && currentMode !== 'Cheat' && _react2.default.createElement(\n                                            'p',\n                                            { className: 'bubble__desc bubble__desc--offset-top bubble__desc--constrained' },\n                                            _react2.default.createElement(\n                                                'strong',\n                                                null,\n                                                'Clue:'\n                                            ),\n                                            ' ',\n                                            this.createClue(currentNumber.answerLanguage)\n                                        ),\n                                        currentMode === 'Cheat' && _react2.default.createElement(\n                                            'p',\n                                            { className: 'bubble__desc bubble__desc--offset-top bubble__desc--constrained' },\n                                            _react2.default.createElement(\n                                                'strong',\n                                                null,\n                                                'Answer:'\n                                            ),\n                                            ' ',\n                                            currentNumber.answerLanguage\n                                        ),\n                                        _react2.default.createElement(\n                                            'h2',\n                                            { className: 'bubble__title zero-bottom' },\n                                            currentNumber.digits\n                                        ),\n                                        _react2.default.createElement(\n                                            'p',\n                                            { className: 'bubble__desc bubble__desc--offset-bottom bubble__desc--constrained' },\n                                            currentNumber.questionLanguage\n                                        )\n                                    )\n                                ),\n                                _react2.default.createElement('input', { ref: 'input', type: 'text', className: 'window__form-control window__form-control--push window__form-control--wide zero-bottom', onKeyUp: this.handleKeyUp, placeholder: 'Translate the number above in German', autofocus: true })\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return NumberArea;\n}(_react.Component);\n\n;\n\nexports.default = NumberArea;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(247); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"GameScreen.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./assets/scripts/src/components/GameScreen.js\n// module id = 350\n// module chunks = 0\n//# sourceURL=webpack:///./assets/scripts/src/components/GameScreen.js?");

/***/ })

})