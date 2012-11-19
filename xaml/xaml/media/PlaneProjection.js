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
 * @fileoverview Represents the behavior of caching a visual element or tree of elements as bitmap surfaces.
 * This can yield significant performance improvements for some scenarios.
 */

goog.provide('goog.xaml.media.PlaneProjection');

goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.media.Projection');
goog.require('goog.xaml.media.media3D.Matrix3D');

/**
 * @constructor
 * @extends {goog.xaml.media.Projection}
 */
goog.xaml.media.PlaneProjection = function () {
    goog.xaml.media.Projection.call(this);
};

goog.inherits(goog.xaml.media.PlaneProjection, goog.xaml.media.Projection);

/**
 * Gets or sets the x-coordinate of the center of rotation of the object you rotate.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.CenterOfRotationX;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.CenterOfRotationXProperty = goog.xaml.DependencyProperty.Register(
    "CenterOfRotationX", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0.5)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "CenterOfRotationX", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} centerOfRotationX
     */
    set:function (centerOfRotationX) {
        this.SetValue(goog.xaml.media.PlaneProjection.CenterOfRotationXProperty, centerOfRotationX);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.CenterOfRotationXProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the y-coordinate of the center of rotation of the object you rotate.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.CenterOfRotationY;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.CenterOfRotationYProperty = goog.xaml.DependencyProperty.Register(
    "CenterOfRotationY", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0.5)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "CenterOfRotationY", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} centerOfRotationY
     */
    set:function (centerOfRotationY) {
        this.SetValue(goog.xaml.media.PlaneProjection.CenterOfRotationYProperty, centerOfRotationY);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.CenterOfRotationYProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the z-coordinate of the center of rotation of the object you rotate.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.CenterOfRotationZ;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.CenterOfRotationZProperty = goog.xaml.DependencyProperty.Register(
    "CenterOfRotationZ", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "CenterOfRotationZ", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} centerOfRotationZ
     */
    set:function (centerOfRotationZ) {
        this.SetValue(goog.xaml.media.PlaneProjection.CenterOfRotationZProperty, centerOfRotationZ);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.CenterOfRotationZProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.PlaneProjection");

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.DependencyType = goog.xaml.media.PlaneProjection.DependencyType;

/**
 * Gets or sets the distance the object is translated along the x-axis of the screen.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.GlobalOffsetX;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.GlobalOffsetXProperty = goog.xaml.DependencyProperty.Register(
    "GlobalOffsetX", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "GlobalOffsetX", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} globalOffsetX
     */
    set:function (globalOffsetX) {
        this.SetValue(goog.xaml.media.PlaneProjection.GlobalOffsetXProperty, globalOffsetX);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.GlobalOffsetXProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance the object is translated along the y-axis of the screen.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.GlobalOffsetY;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.GlobalOffsetYProperty = goog.xaml.DependencyProperty.Register(
    "GlobalOffsetY", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "GlobalOffsetY", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} globalOffsetY
     */
    set:function (globalOffsetY) {
        this.SetValue(goog.xaml.media.PlaneProjection.GlobalOffsetYProperty, globalOffsetY);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.GlobalOffsetYProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance the object is translated along the z-axis of the screen.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.GlobalOffsetZ;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.GlobalOffsetZProperty = goog.xaml.DependencyProperty.Register(
    "GlobalOffsetZ", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "GlobalOffsetZ", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} globalOffsetZ
     */
    set:function (globalOffsetZ) {
        this.SetValue(goog.xaml.media.PlaneProjection.GlobalOffsetZProperty, globalOffsetZ);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.GlobalOffsetZProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance the object is translated along the x-axis of the plane of the object.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.LocalOffsetX;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.LocalOffsetXProperty = goog.xaml.DependencyProperty.Register(
    "LocalOffsetX", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "LocalOffsetX", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} localOffsetX
     */
    set:function (localOffsetX) {
        this.SetValue(goog.xaml.media.PlaneProjection.LocalOffsetXProperty, localOffsetX);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.LocalOffsetXProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance the object is translated along the y-axis of the plane of the object.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.LocalOffsetY;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.LocalOffsetYProperty = goog.xaml.DependencyProperty.Register(
    "LocalOffsetY", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "LocalOffsetY", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} localOffsetY
     */
    set:function (localOffsetY) {
        this.SetValue(goog.xaml.media.PlaneProjection.LocalOffsetYProperty, localOffsetY);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.LocalOffsetYProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance the object is translated along the z-axis of the plane of the object.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.LocalOffsetZ;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.LocalOffsetZProperty = goog.xaml.DependencyProperty.Register(
    "LocalOffsetZ", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "LocalOffsetZ", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} localOffsetZ
     */
    set:function (localOffsetZ) {
        this.SetValue(goog.xaml.media.PlaneProjection.LocalOffsetZProperty, localOffsetZ);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.LocalOffsetZProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the projection matrix on the PlaneProjection.
 * @type {goog.xaml.media.media3D.Matrix3D?}
 */
goog.xaml.media.PlaneProjection.prototype.ProjectionMatrix;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.ProjectionMatrixProperty = goog.xaml.DependencyProperty.Register(
    "ProjectionMatrix", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "ProjectionMatrix", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} projectionMatrix
     */
    set:function (projectionMatrix) {
        this.SetValue(goog.xaml.media.PlaneProjection.ProjectionMatrixProperty, projectionMatrix);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.ProjectionMatrixProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the number of degrees to rotate the object around the x-axis of rotation.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.RotationX;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.RotationXProperty = goog.xaml.DependencyProperty.Register(
    "RotationX", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "RotationX", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} rotationX
     */
    set:function (rotationX) {
        this.SetValue(goog.xaml.media.PlaneProjection.RotationXProperty, rotationX);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.RotationXProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the number of degrees to rotate the object around the y-axis of rotation.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.RotationY;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.RotationYProperty = goog.xaml.DependencyProperty.Register(
    "RotationY", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "RotationY", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} rotationY
     */
    set:function (rotationY) {
        this.SetValue(goog.xaml.media.PlaneProjection.RotationYProperty, rotationY);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.RotationYProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the number of degrees to rotate the object around the z-axis of rotation.
 * @type {number}
 */
goog.xaml.media.PlaneProjection.prototype.RotationZ;

/**
 * @type {number}
 */
goog.xaml.media.PlaneProjection.RotationZProperty = goog.xaml.DependencyProperty.Register(
    "RotationZ", goog.xaml.Number.DependencyType, goog.xaml.media.PlaneProjection.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.media.PlaneProjection.prototype, "RotationZ", {
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @param {number} rotationZ
     */
    set:function (rotationZ) {
        this.SetValue(goog.xaml.media.PlaneProjection.RotationZProperty, rotationZ);
    },
    /**
     * @this {goog.xaml.media.PlaneProjection}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.PlaneProjection.RotationZProperty));
    },
    enumerable:true,
    configurable:true
});
