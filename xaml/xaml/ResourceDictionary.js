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
 * @fileoverview Provides a dictionary that contains resources used by components of a xaml-based application.
 */

goog.provide('goog.xaml.ResourceDictionary');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.ResourceDictionary = function () {
    goog.xaml.DependencyObject.call(this);
    this.ExplicitStyles = new Object();
    this.ImplicitStyles = new Object();
};

goog.inherits(goog.xaml.ResourceDictionary, goog.xaml.DependencyObject);

/**
 * @param {goog.xaml.Style} style
 * @param {number} dependencyType
 * @param {string=} opt_key
 */
goog.xaml.ResourceDictionary.prototype.addStyle = function (style, dependencyType, opt_key) {
    if (opt_key) {
        if (!this.ExplicitStyles[dependencyType]) {
            this.ExplicitStyles[dependencyType] = new Object();
        }
        this.ExplicitStyles[dependencyType][opt_key] = style;
    }
    else {
        this.ImplicitStyles[dependencyType] = style;
    }
};

/**
 * @type {number}
 */
goog.xaml.ResourceDictionary.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.ResourceDictionary");

/**
 * @type {number}
 */
goog.xaml.ResourceDictionary.prototype.DependencyType = goog.xaml.ResourceDictionary.DependencyType;

/**
 * @type {Object}
 */
goog.xaml.ResourceDictionary.prototype.ExplicitStyles;

/**
 * @type {Object}
 */
goog.xaml.ResourceDictionary.prototype.ImplicitStyles;
