'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var TreeView = (function (_React$PureComponent) {
  _inherits(TreeView, _React$PureComponent);

  function TreeView(props) {
    _classCallCheck(this, TreeView);

    _get(Object.getPrototypeOf(TreeView.prototype), 'constructor', this).call(this, props);

    this.state = {
      collapsed: props.defaultCollapsed
    };
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(TreeView, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ collapsed: !this.state.collapsed });
      if (this.props.onClick) {
        var _props;

        (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var _props2$collapsed = _props2.collapsed;
      var collapsed = _props2$collapsed === undefined ? this.state.collapsed : _props2$collapsed;
      var _props2$className = _props2.className;
      var className = _props2$className === undefined ? '' : _props2$className;
      var _props2$itemClassName = _props2.itemClassName;
      var itemClassName = _props2$itemClassName === undefined ? '' : _props2$itemClassName;
      var _props2$treeViewClassName = _props2.treeViewClassName;
      var treeViewClassName = _props2$treeViewClassName === undefined ? '' : _props2$treeViewClassName;
      var _props2$childrenClassName = _props2.childrenClassName;
      var childrenClassName = _props2$childrenClassName === undefined ? '' : _props2$childrenClassName;
      var nodeLabel = _props2.nodeLabel;
      var children = _props2.children;
      var defaultCollapsed = _props2.defaultCollapsed;

      var rest = _objectWithoutProperties(_props2, ['collapsed', 'className', 'itemClassName', 'treeViewClassName', 'childrenClassName', 'nodeLabel', 'children', 'defaultCollapsed']);

      var arrowClassName = 'tree-view_arrow';
      var containerClassName = 'tree-view_children';
      if (collapsed) {
        arrowClassName += ' tree-view_arrow-collapsed';
        containerClassName += ' tree-view_children-collapsed';
      }

      var arrow = _react2['default'].createElement('div', _extends({}, rest, {
        className: className + ' ' + arrowClassName,
        onClick: this.handleClick
      }));

      return _react2['default'].createElement(
        'div',
        { className: 'tree-view ' + treeViewClassName },
        _react2['default'].createElement(
          'div',
          { className: 'tree-view_item ' + itemClassName },
          arrow,
          nodeLabel
        ),
        _react2['default'].createElement(
          'div',
          { className: containerClassName + ' ' + childrenClassName },
          collapsed ? null : children
        )
      );
    }
  }]);

  return TreeView;
})(_react2['default'].PureComponent);

exports['default'] = TreeView;
module.exports = exports['default'];