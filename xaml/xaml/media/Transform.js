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
 * @fileoverview Provides generalized transformation support for objects, such as points and rectangles.
 */

goog.provide('goog.xaml.media.Transform');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.Rect');

/**
 * A transform defines how to map points from one coordinate space into another coordinate space.
 * They can be used to produce effects such as rotation, scaling, and skewing.
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.Transform = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.Transform, goog.xaml.DependencyObject);

/**
 * @type {number}
 */
goog.xaml.media.Transform.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Transform");

/**
 * @type {number}
 */
goog.xaml.media.Transform.prototype.DependencyType = goog.xaml.media.Transform.DependencyType;

/**
 * Gets the inverse transformation of this Transform, if possible.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.media.Transform.prototype.Inverse;

/**
 * Transforms the specified point and returns the result.
 * @param {goog.xaml.Point} point
 * @return {goog.xaml.Point}
 */
goog.xaml.media.Transform.prototype.Transform = function (point) {
};

/**
 * When overridden in a derived class, transforms the specified bounding box
 * and returns an axis-aligned bounding box that is exactly large enough to contain it.
 * @param {goog.xaml.Rect} rect
 * @return {goog.xaml.Rect}
 */
goog.xaml.media.Transform.prototype.TransformBounds = function (rect) {
};

/**
 * When overridden in a derived class, attempts to transform the specified point
 * and returns a value that indicates whether the transformation was successful.
 * @param {goog.xaml.Point} inPoint
 * @param {goog.xaml.Point} outPoint
 * @return {boolean}
 */
goog.xaml.media.Transform.prototype.TryTransform = function (inPoint, outPoint) {
};