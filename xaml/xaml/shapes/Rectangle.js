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
 * @fileoverview Draws a rectangle shape, which can have a stroke and a fill.
 */

goog.provide('goog.xaml.shapes.Rectangle');

goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.shapes.Shape');

/**
 * @constructor
 * @extends goog.xaml.shapes.Shape
 */
goog.xaml.shapes.Rectangle = function () {
    goog.xaml.shapes.Shape.call(this);
};

goog.inherits(goog.xaml.shapes.Rectangle, goog.xaml.shapes.Shape);

/**
 * @override
 */
goog.xaml.shapes.Rectangle.prototype.arrange = function (finalRect) {
    // 1. Arrange the canvas.
    this.ActualHeight = finalRect.Height;
    this.ActualLeft = finalRect.X;
    this.ActualTop = finalRect.Y;
    this.ActualWidth = finalRect.Width;
};

/**
 * @override
 */
goog.xaml.shapes.Rectangle.prototype.measure = function (availableSize) {
    if (!this.DesiredSize) {
        this.DesiredSize = new goog.xaml.Size();
    }
    // 1. Ask for the HeightProperty if set.
    var height = this.Height;
    if (height === null) {
        // 2. If there is no HeightProperty set (auto), ask to stretch to the full height, otherwise 0.
        height = this.VerticalAlignment === goog.xaml.VerticalAlignment.Stretch ? availableSize.Height : 0;
    }
    // 1. Ask for the WidthProperty if set.
    var width = this.Width;
    // 2. If there is no WidthProperty set (auto), ask to stretch to the full width, otherwise 0.
    if (width === null) {
        width = this.HorizontalAlignment === goog.xaml.HorizontalAlignment.Stretch ? availableSize.Width : 0;
    }
    // 3. Limit to min and max boundaries if set.
    var minHeight = this.MinHeight;
    if (minHeight !== null) {
        height = Math.max(height, minHeight);
    }
    var maxHeight = this.MaxHeight;
    if (maxHeight !== null) {
        height = Math.min(height, maxHeight);
    }
    var minWidth = this.MinWidth;
    if (minWidth !== null) {
        width = Math.max(width, minWidth);
    }
    var maxWidth = this.MaxWidth;
    if (maxWidth !== null) {
        width = Math.min(width, maxWidth);
    }
    this.DesiredSize.Height = /** @type {number} */(height);
    this.DesiredSize.Width = /** @type {number} */(width);
};

/**
 * @override
 */
goog.xaml.shapes.Rectangle.prototype.render = function () {
    var element = this.uiComponent_.getElement();
    var context2D = this.uiComponent_.getContext2D();
    goog.style.setPosition(element, Math.floor(this.ActualLeft), Math.floor(this.ActualTop));
    element.setAttribute('width', Math.floor(this.ActualWidth).toString());
    element.setAttribute('height', Math.floor(this.ActualHeight).toString());
    var fill = this.Fill;
    var stroke = this.Stroke;
    if (fill !== null || stroke !== null) {
        if (fill !== null) {
            fill.applyFillStyle(context2D);
        }
        if (stroke !== null) {
            stroke.applyStrokeStyle(context2D);
            context2D.lineWidth = this.StrokeThickness;
        }
        var radiusX = this.RadiusX;
        var radiusY = this.RadiusY;
        if (radiusX == 0 && radiusY == 0) {
            context2D.fillRect(0, 0, this.ActualWidth, this.ActualHeight);
        }
        else {
            var height = this.ActualHeight - this.StrokeThickness;
            var width = this.ActualWidth - this.StrokeThickness;
            var x = this.StrokeThickness / 2;
            var y = this.StrokeThickness / 2;
            context2D.beginPath();
            context2D.moveTo(x + radiusX, y);
            context2D.lineTo(x + width - radiusX, y);
            context2D.quadraticCurveTo(x + width, y, x + width, y + radiusY);
            context2D.lineTo(x + width, y + height - radiusY);
            context2D.quadraticCurveTo(x + width, y + height, x + width - radiusX, y + height);
            context2D.lineTo(x + radiusX, y + height);
            context2D.quadraticCurveTo(x, y + height, x, y + height - radiusY);
            context2D.lineTo(x, y + radiusY);
            context2D.quadraticCurveTo(x, y, x + radiusX, y);
            context2D.closePath();
            if (fill !== null) {
                context2D.fill();
            }
            if (stroke !== null) {
                context2D.stroke();
            }
        }
    }
};

/**
 * @type {number}
 */
goog.xaml.shapes.Rectangle.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.shapes.Rectangle");

/**
 * @type {number}
 */
goog.xaml.shapes.Rectangle.prototype.DependencyType = goog.xaml.shapes.Rectangle.DependencyType;

/**
 * Gets or sets the x-axis radius of the ellipse that is used to round the corners of the rectangle.
 * @type {number}
 */
goog.xaml.shapes.Rectangle.prototype.RadiusX;

/**
 * @type {number}
 */
goog.xaml.shapes.Rectangle.RadiusXProperty = goog.xaml.DependencyProperty.Register(
    "RadiusX", goog.xaml.Number.DependencyType, goog.xaml.shapes.Rectangle.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.shapes.Rectangle.prototype, "RadiusX", {
    /**
     * @this {goog.xaml.shapes.Rectangle}
     * @param {number} radiusX
     */
    set:function (radiusX) {
        this.SetValue(goog.xaml.shapes.Rectangle.RadiusXProperty, radiusX);
    },
    /**
     * @this {goog.xaml.shapes.Rectangle}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.shapes.Rectangle.RadiusXProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the y-axis radius of the ellipse that is used to round the corners of the rectangle.
 * @type {number}
 */
goog.xaml.shapes.Rectangle.prototype.RadiusY;

/**
 * @type {number}
 */
goog.xaml.shapes.Rectangle.RadiusYProperty = goog.xaml.DependencyProperty.Register(
    "RadiusY", goog.xaml.Number.DependencyType, goog.xaml.shapes.Rectangle.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.shapes.Rectangle.prototype, "RadiusY", {
    /**
     * @this {goog.xaml.shapes.Rectangle}
     * @param {number} radiusY
     */
    set:function (radiusY) {
        this.SetValue(goog.xaml.shapes.Rectangle.RadiusYProperty, radiusY);
    },
    /**
     * @this {goog.xaml.shapes.Rectangle}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.shapes.Rectangle.RadiusYProperty));
    },
    enumerable:true,
    configurable:true
});
