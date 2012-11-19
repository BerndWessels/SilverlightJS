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
 * @fileoverview Represents a 4 × 4 matrix that is used for transformations in a three-dimensional (3-D) space.
 */

goog.provide('goog.xaml.media.media3D.Matrix3D');

/**
 * @constructor
 */
goog.xaml.media.media3D.Matrix3D = function () {
};

/**
 * Gets a value that indicates whether this Matrix3D is invertible.
 * @type {boolean}
 */
goog.xaml.media.media3D.Matrix3D.prototype.HasInverse = true;

/**
 * Changes a Matrix3D structure into an identity Matrix3D.
 * @return {goog.xaml.media.media3D.Matrix3D}
 */
goog.xaml.media.media3D.Matrix3D.prototype.Identity = function () {
    return new goog.xaml.media.media3D.Matrix3D();
};

/**
 * Determines whether this Matrix3D structure is an identity Matrix3D.
 * @type {boolean}
 */
goog.xaml.media.media3D.Matrix3D.prototype.IsIdentity = true;

/**
 * Gets or sets the value of the first row and first column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M11 = 0;

/**
 * Gets or sets the value of the first row and second column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M12 = 0;

/**
 * Gets or sets the value of the first row and third column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M13 = 0;

/**
 * Gets or sets the value of the first row and fourth column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M14 = 0;

/**
 * Gets or sets the value of the second row and first column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M21 = 0;

/**
 * Gets or sets the value of the second row and second column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M22 = 0;

/**
 * Gets or sets the value of the second row and third column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M23 = 0;

/**
 * Gets or sets the value of the second row and fourth column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M24 = 0;

/**
 * Gets or sets the value of the third row and first column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M31 = 0;

/**
 * Gets or sets the value of the third row and second column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M32 = 0;

/**
 * Gets or sets the value of the third row and third column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M33 = 0;

/**
 * Gets or sets the value of the third row and fourth column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M34 = 0;

/**
 * Gets or sets the value of the fourth row and first column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M41 = 0;

/**
 * Gets or sets the value of the fourth row and second column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M42 = 0;

/**
 * Gets or sets the value of the fourth row and third column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M43 = 0;

/**
 * Gets or sets the value of the fourth row and fourth column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.M44 = 0;

/**
 * Gets or sets the value of the fourth row and first column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.OffsetX = 0;

/**
 * Gets or sets the value of the fourth row and second column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.OffsetY = 0;

/**
 * Gets or sets the value of the fourth row and third column of this Matrix3D.
 * @type {number}
 */
goog.xaml.media.media3D.Matrix3D.prototype.OffsetZ = 0;

/**
 * Tests equality between two matrices.
 * @param {goog.xaml.media.media3D.Matrix3D} matrix3D
 * @return {boolean}
 */
goog.xaml.media.media3D.Matrix3D.prototype.Equals = function (matrix3D) {
    // TODO Implement
    return false;
};

/**
 * Inverts this Matrix3D structure.
 */
goog.xaml.media.media3D.Matrix3D.prototype.Invert = function () {
    // TODO Implement
};