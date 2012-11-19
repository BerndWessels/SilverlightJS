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
 * @fileoverview Provides a base class for shape elements, such as Ellipse, Polygon, and Rectangle.
 */

goog.provide('goog.xaml.shapes.Shape');

goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.FrameworkElement');
goog.require('goog.xaml.media.Brush');
goog.require('goog.xaml.media.PenLineCap');
goog.require('goog.xaml.media.PenLineJoin');
goog.require('goog.xaml.media.Stretch');

/**
 * @constructor
 * @extends goog.xaml.FrameworkElement
 */
goog.xaml.shapes.Shape = function () {
    goog.xaml.FrameworkElement.call(this);
};

goog.inherits(goog.xaml.shapes.Shape, goog.xaml.FrameworkElement);

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.shapes.Shape");

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.prototype.DependencyType = goog.xaml.shapes.Shape.DependencyType;

/**
 * Gets or sets the Brush that specifies how to paint the interior of the shape.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.shapes.Shape.prototype.Fill;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.FillProperty = goog.xaml.DependencyProperty.Register(
    "Fill", goog.xaml.media.Brush.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "Fill", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.Brush?} fill
     */
    set:function (fill) {
        this.SetValue(goog.xaml.shapes.Shape.FillProperty, fill);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.shapes.Shape.FillProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets a value that represents a Transform that is applied to the geometry of a Shape prior to when it is drawn.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.shapes.Shape.prototype.GeometryTransform = null;

/**
 * Gets or sets a Stretch enumeration value that describes how the shape fills its allocated space.
 * @type {goog.xaml.media.Stretch}
 */
goog.xaml.shapes.Shape.prototype.Stretch;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StretchProperty = goog.xaml.DependencyProperty.Register(
    "Stretch", goog.xaml.media.Stretch.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.media.Stretch.None)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "Stretch", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.Stretch} stretch
     */
    set:function (stretch) {
        this.SetValue(goog.xaml.shapes.Shape.StretchProperty, stretch);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.Stretch}
     */
    get:function () {
        return /** @type {goog.xaml.media.Stretch} */(this.GetValue(goog.xaml.shapes.Shape.StretchProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the Brush that specifies how the Shape outline is painted.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.shapes.Shape.prototype.Stroke;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeProperty = goog.xaml.DependencyProperty.Register(
    "Stroke", goog.xaml.media.Brush.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "Stroke", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.Brush?} stroke
     */
    set:function (stroke) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeProperty, stroke);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.shapes.Shape.StrokeProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a collection of Double values that indicate the pattern of dashes and gaps
 * that is used to outline shapes.
 * @type {Array.<number>?}
 */
goog.xaml.shapes.Shape.prototype.StrokeDashArray;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeDashArrayProperty = goog.xaml.DependencyProperty.Register(
    "StrokeDashArray", goog.xaml.NumberArray.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeDashArray", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {Array.<number>?} strokeDashArray
     */
    set:function (strokeDashArray) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeDashArrayProperty, strokeDashArray);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {Array.<number>?}
     */
    get:function () {
        return /** @type {Array.<number>?} */(this.GetValue(goog.xaml.shapes.Shape.StrokeDashArrayProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a PenLineCap enumeration value that specifies how the ends of a dash are drawn.
 * @type {goog.xaml.media.PenLineCap}
 */
goog.xaml.shapes.Shape.prototype.StrokeDashCap;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeDashCapProperty = goog.xaml.DependencyProperty.Register(
    "StrokeDashCap", goog.xaml.media.PenLineCap.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.media.PenLineCap.Flat)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeDashCap", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.PenLineCap} strokeDashCap
     */
    set:function (strokeDashCap) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeDashCapProperty, strokeDashCap);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.PenLineCap}
     */
    get:function () {
        return /** @type {goog.xaml.media.PenLineCap} */(this.GetValue(goog.xaml.shapes.Shape.StrokeDashCapProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a Double that specifies the distance within the dash pattern where a dash begins.
 * @type {number}
 */
goog.xaml.shapes.Shape.prototype.StrokeDashOffset;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeDashOffsetProperty = goog.xaml.DependencyProperty.Register(
    "StrokeDashOffset", goog.xaml.Number.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeDashOffset", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {number} strokeDashOffset
     */
    set:function (strokeDashOffset) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeDashOffsetProperty, strokeDashOffset);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.shapes.Shape.StrokeDashOffsetProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a PenLineCap enumeration value that describes the Shape at the end of a line.
 * @type {goog.xaml.media.PenLineCap}
 */
goog.xaml.shapes.Shape.prototype.StrokeEndLineCap;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeEndLineCapProperty = goog.xaml.DependencyProperty.Register(
    "StrokeEndLineCap", goog.xaml.media.PenLineCap.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.media.PenLineCap.Flat)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeEndLineCap", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.PenLineCap} strokeEndLineCap
     */
    set:function (strokeEndLineCap) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeEndLineCapProperty, strokeEndLineCap);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.PenLineCap}
     */
    get:function () {
        return /** @type {goog.xaml.media.PenLineCap} */(this.GetValue(goog.xaml.shapes.Shape.StrokeEndLineCapProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a PenLineJoin enumeration value that specifies the type of join that is used at the vertices of a Shape.
 * @type {goog.xaml.media.PenLineJoin}
 */
goog.xaml.shapes.Shape.prototype.StrokeLineJoin;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeLineJoinProperty = goog.xaml.DependencyProperty.Register(
    "StrokeLineJoin", goog.xaml.media.PenLineJoin.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.media.PenLineJoin.Miter)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeLineJoin", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.PenLineJoin} strokeLineJoin
     */
    set:function (strokeLineJoin) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeLineJoinProperty, strokeLineJoin);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.PenLineJoin}
     */
    get:function () {
        return /** @type {goog.xaml.media.PenLineJoin} */(this.GetValue(goog.xaml.shapes.Shape.StrokeLineJoinProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a limit on the ratio of the miter length to half the StrokeThickness of a Shape element.
 * @type {number}
 */
goog.xaml.shapes.Shape.prototype.StrokeMiterLimit;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeMiterLimitProperty = goog.xaml.DependencyProperty.Register(
    "StrokeMiterLimit", goog.xaml.Number.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeMiterLimit", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {number} strokeMiterLimit
     */
    set:function (strokeMiterLimit) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeMiterLimitProperty, strokeMiterLimit);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.shapes.Shape.StrokeMiterLimitProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a PenLineCap enumeration value that describes the Shape at the start of a Stroke.
 * @type {goog.xaml.media.PenLineCap}
 */
goog.xaml.shapes.Shape.prototype.StrokeStartLineCap;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeStartLineCapProperty = goog.xaml.DependencyProperty.Register(
    "StrokeStartLineCap", goog.xaml.media.PenLineCap.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.media.PenLineCap.Flat)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeStartLineCap", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {goog.xaml.media.PenLineCap} strokeStartLineCap
     */
    set:function (strokeStartLineCap) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeStartLineCapProperty, strokeStartLineCap);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {goog.xaml.media.PenLineCap}
     */
    get:function () {
        return /** @type {goog.xaml.media.PenLineCap} */(this.GetValue(goog.xaml.shapes.Shape.StrokeStartLineCapProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the width of the Shape stroke outline.
 * @type {number}
 */
goog.xaml.shapes.Shape.prototype.StrokeThickness;

/**
 * @type {number}
 */
goog.xaml.shapes.Shape.StrokeThicknessProperty = goog.xaml.DependencyProperty.Register(
    "StrokeThickness", goog.xaml.Number.DependencyType, goog.xaml.shapes.Shape.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.shapes.Shape.prototype, "StrokeThickness", {
    /**
     * @this {goog.xaml.shapes.Shape}
     * @param {number} strokeThickness
     */
    set:function (strokeThickness) {
        this.SetValue(goog.xaml.shapes.Shape.StrokeThicknessProperty, strokeThickness);
    },
    /**
     * @this {goog.xaml.shapes.Shape}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.shapes.Shape.StrokeThicknessProperty));
    },
    enumerable:true,
    configurable:true
});
