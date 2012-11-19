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
 * @fileoverview Describes the thickness of a frame around a rectangle.
 * Four Double values describe the Left, Top, Right, and Bottom sides of the rectangle, respectively.
 */

goog.provide('goog.xaml.Thickness');

/**
 * @constructor
 */
goog.xaml.Thickness = function () {
};

/**
 * @type {number}
 */
goog.xaml.Thickness.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Thickness");

/**
 * Gets or sets the width, in pixels, of the lower side of the bounding rectangle.
 * @type {number}
 */
goog.xaml.Thickness.prototype.Bottom = 0;

/**
 * Gets or sets the width, in pixels, of the left side of the bounding rectangle.
 * @type {number}
 */
goog.xaml.Thickness.prototype.Left = 0;

/**
 * Gets or sets the width, in pixels, of the right side of the bounding rectangle.
 * @type {number}
 */
goog.xaml.Thickness.prototype.Right = 0;

/**
 * Gets or sets the width, in pixels, of the upper side of the bounding rectangle.
 * @type {number}
 */
goog.xaml.Thickness.prototype.Top = 0;

/**
 * Compares the value of two Thickness structures for equality.
 * @param {goog.xaml.Thickness} thickness
 * @return {boolean}
 */
goog.xaml.Thickness.prototype.Equals = function (thickness) {
    return false;
};
