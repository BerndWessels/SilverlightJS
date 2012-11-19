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
 * @fileoverview Defines an area within which you can explicitly position child objects
 * by using coordinates that are relative to the area.
 */

goog.provide('goog.xaml.controls.Canvas');

goog.require('goog.xaml.controls.Panel');
goog.require('goog.xaml.DependencyType');

/**
 * @constructor
 * @extends goog.xaml.controls.Panel
 */
goog.xaml.controls.Canvas = function () {
    goog.xaml.controls.Panel.call(this);
};

goog.inherits(goog.xaml.controls.Canvas, goog.xaml.controls.Panel);

/**
 * @override
 */
goog.xaml.controls.Canvas.prototype.arrange = function (finalRect) {
    // 1. Arrange the canvas.
    this.ActualHeight = finalRect.Height;
    this.ActualLeft = finalRect.X;
    this.ActualTop = finalRect.Y;
    this.ActualWidth = finalRect.Width;
    // 2. Arrange all children recursively.
    goog.array.forEach(this.Children, function (child, index, array) {
        var rect = new goog.xaml.Rect();
        rect.Height = child.DesiredSize.Height;
        rect.Width = child.DesiredSize.Width;
        rect.X = child.GetValue(goog.xaml.controls.Canvas.LeftProperty) + child.Margin.Left;
        rect.Y = child.GetValue(goog.xaml.controls.Canvas.TopProperty) + child.Margin.Top;
        child.arrange(rect);
    });
};

/**
 * @override
 */
goog.xaml.controls.Canvas.prototype.measure = function (availableSize) {
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
    // 4. Measure all children recursively.
    goog.array.forEach(this.Children, function (child, index, array) {
        child.measure(this.DesiredSize);
    }, this);
};

/**
 * @override
 */
goog.xaml.controls.Canvas.prototype.render = function () {
    var element = this.uiComponent_.getElement();
    var context2D = this.uiComponent_.getContext2D();
    goog.style.setPosition(element, Math.floor(this.ActualLeft), Math.floor(this.ActualTop));
    element.setAttribute('width', Math.floor(this.ActualWidth).toString());
    element.setAttribute('height', Math.floor(this.ActualHeight).toString());
    var background = this.Background;
    if (background) {
        background.applyFillStyle(context2D);
        context2D.fillRect(0, 0, this.ActualWidth, this.ActualHeight);
    }
    // 3. Render all children recursively.
    goog.array.forEach(this.Children, function (child, index, array) {
        child.render();
    }, this);
};

/**
 * @type {number}
 */
goog.xaml.controls.Canvas.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.controls.Canvas");

/**
 * @type {number}
 */
goog.xaml.controls.Canvas.prototype.DependencyType = goog.xaml.controls.Canvas.DependencyType;

/**
 * Gets or sets the distance between the left side of an object and the left side of its parent Canvas.
 * This is an Attached Property and will only affact children of a Canvas.
 * @type {number}
 */
goog.xaml.controls.Canvas.prototype.Left;

/**
 * @type {number}
 */
goog.xaml.controls.Canvas.LeftProperty = goog.xaml.DependencyProperty.Register(
    "Left", goog.xaml.Number.DependencyType, goog.xaml.controls.Canvas.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.controls.Canvas.prototype, "Left", {
    /**
     * @this {goog.xaml.controls.Canvas}
     * @param {number} left
     */
    set:function (left) {
        this.SetValue(goog.xaml.controls.Canvas.LeftProperty, left);
    },
    /**
     * @this {goog.xaml.controls.Canvas}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Canvas.LeftProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance between the top of an element and the top of its parent Canvas.
 * This is an Attached Property and will only affact children of a Canvas.
 * @type {number}
 */
goog.xaml.controls.Canvas.prototype.Top;

/**
 * @type {number}
 */
goog.xaml.controls.Canvas.TopProperty = goog.xaml.DependencyProperty.Register(
    "Top", goog.xaml.Number.DependencyType, goog.xaml.controls.Canvas.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.controls.Canvas.prototype, "Top", {
    /**
     * @this {goog.xaml.controls.Canvas}
     * @param {number} left
     */
    set:function (left) {
        this.SetValue(goog.xaml.controls.Canvas.TopProperty, left);
    },
    /**
     * @this {goog.xaml.controls.Canvas}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Canvas.TopProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the z-order rendering behavior of objects in a Canvas.
 * @type {number}
 */
goog.xaml.controls.Canvas.prototype.ZIndex;

/**
 * @type {number}
 */
goog.xaml.controls.Canvas.ZIndexProperty = goog.xaml.DependencyProperty.Register(
    "ZIndex", goog.xaml.Number.DependencyType, goog.xaml.controls.Canvas.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.controls.Canvas.prototype, "ZIndex", {
    /**
     * @this {goog.xaml.controls.Canvas}
     * @param {number} left
     */
    set:function (left) {
        this.SetValue(goog.xaml.controls.Canvas.ZIndexProperty, left);
    },
    /**
     * @this {goog.xaml.controls.Canvas}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Canvas.ZIndexProperty));
    },
    enumerable:true,
    configurable:true
});
