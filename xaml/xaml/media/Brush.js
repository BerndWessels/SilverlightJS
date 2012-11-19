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
 * @fileoverview Defines objects used to paint graphical objects.
 * Classes that derive from Brush describe how the area is painted.
 */

goog.provide('goog.xaml.media.Brush');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyProperty');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.media.Transform');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.Brush = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.Brush, goog.xaml.DependencyObject);

/**
 * @param {CanvasRenderingContext2D} context2D
 */
goog.xaml.media.Brush.prototype.applyFillStyle = function (context2D) {
    context2D.fillStyle = null;
};

/**
 * @type {number}
 */
goog.xaml.media.Brush.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Brush");

/**
 * @type {number}
 */
goog.xaml.media.Brush.prototype.DependencyType = goog.xaml.media.Brush.DependencyType;

/**
 * Gets or sets the degree of opacity of a Brush.
 * @type {number}
 */
goog.xaml.media.Brush.prototype.Opacity;

/**
 * @type {number}
 */
goog.xaml.media.Brush.OpacityProperty = goog.xaml.DependencyProperty.Register(
    "Opacity", goog.xaml.Number.DependencyType, goog.xaml.media.Brush.DependencyType, new goog.xaml.PropertyMetadata(1)
);

Object.defineProperty(goog.xaml.media.Brush.prototype, "Opacity", {
    /**
     * @this {goog.xaml.media.Brush}
     * @param {number} opacity
     */
    set:function (opacity) {
        this.SetValue(goog.xaml.media.Brush.OpacityProperty, opacity);
    },
    /**
     * @this {goog.xaml.media.Brush}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.Brush.OpacityProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the transformation that is applied to the brush using relative coordinates.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.media.Brush.prototype.RelativeTransform;

/**
 * @type {number}
 */
goog.xaml.media.Brush.RelativeTransformProperty = goog.xaml.DependencyProperty.Register(
    "RelativeTransform", goog.xaml.media.Transform.DependencyType, goog.xaml.media.Brush.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.media.Brush.prototype, "RelativeTransform", {
    /**
     * @this {goog.xaml.media.Brush}
     * @param {goog.xaml.media.Transform?} relativeTransform
     */
    set:function (relativeTransform) {
        this.SetValue(goog.xaml.media.Brush.RelativeTransformProperty, relativeTransform);
    },
    /**
     * @this {goog.xaml.media.Brush}
     * @return {goog.xaml.media.Transform?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Transform?} */(this.GetValue(goog.xaml.media.Brush.RelativeTransformProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the transformation that is applied to the brush.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.media.Brush.prototype.Transform;

/**
 * @type {number}
 */
goog.xaml.media.Brush.TransformProperty = goog.xaml.DependencyProperty.Register(
    "Transform", goog.xaml.media.Transform.DependencyType, goog.xaml.media.Brush.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.media.Brush.prototype, "Transform", {
    /**
     * @this {goog.xaml.media.Brush}
     * @param {goog.xaml.media.Transform?} transform
     */
    set:function (transform) {
        this.SetValue(goog.xaml.media.Brush.TransformProperty, transform);
    },
    /**
     * @this {goog.xaml.media.Brush}
     * @return {goog.xaml.media.Transform?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Transform?} */(this.GetValue(goog.xaml.media.Brush.TransformProperty));
    },
    enumerable:true,
    configurable:true
});
