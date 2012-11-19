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
 * @fileoverview Represents an x- and y-coordinate pair in two-dimensional space.
 * Can also represent a logical point for certain property usages.
 */

goog.provide('goog.xaml.Point');

/**
 * @constructor
 */
goog.xaml.Point = function () {
};

/**
 * @type {number}
 */
goog.xaml.Point.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Point");

/**
 * Gets or sets the X-coordinate value of this Point.
 * @type {number}
 */
goog.xaml.Point.prototype.X = 0;

/**
 * Gets or sets the Y-coordinate value of this Point.
 * @type {number}
 */
goog.xaml.Point.prototype.Y = 0;

/**
 * Compares two Point structures for equality.
 * @param {goog.xaml.Point} point
 * @return {boolean}
 */
goog.xaml.Point.prototype.Equals = function (point) {
    return false;
};
