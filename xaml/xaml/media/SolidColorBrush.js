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
 * @fileoverview Paints an area with a solid color.
 */

goog.provide('goog.xaml.media.SolidColorBrush');

goog.require('goog.xaml.DependencyProperty');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.media.Brush');
goog.require('goog.xaml.media.Color');

/**
 * @constructor
 * @extends goog.xaml.media.Brush
 */
goog.xaml.media.SolidColorBrush = function () {
    goog.xaml.media.Brush.call(this);
    this.Color = new goog.xaml.media.Color();
};

goog.inherits(goog.xaml.media.SolidColorBrush, goog.xaml.media.Brush);

/**
 * @param {CanvasRenderingContext2D} context2D
 */
goog.xaml.media.SolidColorBrush.prototype.applyFillStyle = function (context2D) {
    context2D.fillStyle = this.Color.Name;
};

/**
 * @param {CanvasRenderingContext2D} context2D
 */
goog.xaml.media.SolidColorBrush.prototype.applyStrokeStyle = function (context2D) {
    context2D.strokeStyle = this.Color.Name;
};

/**
 * Gets or sets the color of this SolidColorBrush.
 * @type {goog.xaml.media.Color}
 */
goog.xaml.media.SolidColorBrush.prototype.Color;

/**
 * @type {number}
 */
goog.xaml.media.SolidColorBrush.ColorProperty = goog.xaml.DependencyProperty.Register(
    "Color", goog.xaml.media.Color.DependencyType, goog.xaml.media.SolidColorBrush.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.media.SolidColorBrush.prototype, "Color", {
    /**
     * @this {goog.xaml.media.SolidColorBrush}
     * @param {goog.xaml.media.Color} color
     */
    set:function (color) {
        this.SetValue(goog.xaml.media.SolidColorBrush.ColorProperty, color);
    },
    /**
     * @this {goog.xaml.media.SolidColorBrush}
     * @return {goog.xaml.media.Color}
     */
    get:function () {
        return /** @type {goog.xaml.media.Color} */(this.GetValue(goog.xaml.media.SolidColorBrush.ColorProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * @type {number}
 */
goog.xaml.media.SolidColorBrush.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.SolidColorBrush");

/**
 * @type {number}
 */
goog.xaml.media.SolidColorBrush.prototype.DependencyType = goog.xaml.media.SolidColorBrush.DependencyType;
