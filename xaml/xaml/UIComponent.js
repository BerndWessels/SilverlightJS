// Copyright 2012 The Closure Xaml Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview UIComponent is the DOM representation of the UIElement.
 */

goog.provide('goog.xaml.UIComponent');

goog.require('goog.ui.Component');
goog.require('goog.xaml.DependencyType');

/**
 * @constructor
 * @extends goog.ui.Component
 */
goog.xaml.UIComponent = function () {
    goog.ui.Component.call(this);
};

goog.inherits(goog.xaml.UIComponent, goog.ui.Component);

/**
 * @type {CanvasRenderingContext2D}
 * @private
 */
goog.xaml.UIComponent.prototype.context2D_ = null;

/**
 * @override
 */
goog.xaml.UIComponent.prototype.canDecorate = function (element) {
    return false;
};

/**
 * @override
 */
goog.xaml.UIComponent.prototype.createDom = function () {
    this.setElementInternal(this.getDomHelper().createDom('canvas'));
    this.getElement().style.position = 'absolute';
};

/**
 * @override
 */
goog.xaml.UIComponent.prototype.enterDocument = function () {
    goog.xaml.UIComponent.superClass_.enterDocument.call(this);
    this.context2D_ = this.getElement().getContext('2d');
};

/**
 * @override
 */
goog.xaml.UIComponent.prototype.exitDocument = function () {
    goog.xaml.UIComponent.superClass_.exitDocument.call(this);
    this.context2D_ = null;
};

/**
 * @return {CanvasRenderingContext2D}
 */
goog.xaml.UIComponent.prototype.getContext2D = function () {
    return this.context2D_;
};