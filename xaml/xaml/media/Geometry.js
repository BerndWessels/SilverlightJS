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
 * @fileoverview Provides a base class for objects that define geometric shapes.
 * Geometry objects can be used for clipping regions and as geometry definitions
 * for rendering two-dimensional graphic data as a Path.
 */

goog.provide('goog.xaml.media.Geometry');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyProperty');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.Rect');

/**
 * For XAML syntaxes that take a Geometry, you need to specify
 * a nonabstract derived type of Geometry as an object element.
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.Geometry = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.Geometry, goog.xaml.DependencyObject);

/**
 * Gets a Rect that specifies the axis-aligned bounding box of the Geometry.
 * @type {goog.xaml.Rect?}
 */
goog.xaml.media.Geometry.prototype.Bounds;

/**
 * @type {number}
 */
goog.xaml.media.Geometry.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Geometry");

/**
 * @type {number}
 */
goog.xaml.media.Geometry.prototype.DependencyType = goog.xaml.media.Geometry.DependencyType;

/**
 * Gets an empty geometry object.
 * @return {goog.xaml.media.Geometry}
 */
goog.xaml.media.Geometry.prototype.Empty = function () {
};

/**
 * Gets the standard tolerance used for polygonal approximation.
 * @type {number}
 */
goog.xaml.media.Geometry.prototype.StandardFlatteningTolerance;

/**
 * Gets or sets the Transform object applied to a Geometry.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.media.Geometry.prototype.Transform;

/**
 * @type {number}
 */
goog.xaml.media.Geometry.TransformProperty = goog.xaml.DependencyProperty.Register(
    "Transform", goog.xaml.media.Transform.DependencyType, goog.xaml.media.Geometry.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.media.Geometry.prototype, "Transform", {
    /**
     * @this {goog.xaml.media.Geometry}
     * @param {goog.xaml.media.Transform?} transform
     */
    set:function (transform) {
        this.SetValue(goog.xaml.media.Geometry.TransformProperty, transform);
    },
    /**
     * @this {goog.xaml.media.Geometry}
     * @return {goog.xaml.media.Transform?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Transform?} */(this.GetValue(goog.xaml.media.Geometry.TransformProperty));
    },
    enumerable:true,
    configurable:true
});
