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
 * @fileoverview Encapsulates a goog.xaml application.
 */

goog.provide('goog.xaml.Application');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.UIElement');
goog.require('goog.xaml.ResourceDictionary');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.Application = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.Application, goog.xaml.DependencyObject);

/**
 * Gets a collection of application-scoped resources, such as styles, templates, and brushes.
 * @type {goog.xaml.ResourceDictionary?}
 */
goog.xaml.Application.prototype.Resources;

/**
 * @type {goog.xaml.ResourceDictionary?}
 * @private
 */
goog.xaml.Application.prototype.resources_ = null;

Object.defineProperty(goog.xaml.Application.prototype, "Resources", {
    /**
     * @this {goog.xaml.Application}
     * @param {goog.xaml.ResourceDictionary?} resources
     */
    set:function (resources) {
        this.resources_ = resources;
    },
    /**
     * @this {goog.xaml.Application}
     * @return {goog.xaml.ResourceDictionary?}
     */
    get:function () {
        return this.resources_;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the main application UI.
 * @type {goog.xaml.UIElement}
 */
goog.xaml.Application.prototype.RootVisual;

/**
 * @type {goog.xaml.UIElement}
 * @private
 */
goog.xaml.Application.prototype.rootVisual_ = null;

Object.defineProperty(goog.xaml.Application.prototype, "RootVisual", {
    /**
     * @this {goog.xaml.Application}
     * @param {goog.xaml.UIElement} rootVisual
     */
    set:function (rootVisual) {
        this.rootVisual_ = rootVisual;
    },
    /**
     * @this {goog.xaml.Application}
     * @return {goog.xaml.UIElement}
     */
    get:function () {
        return this.rootVisual_;
    },
    enumerable:true,
    configurable:true
});
