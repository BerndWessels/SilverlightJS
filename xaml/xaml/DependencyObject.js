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
 * @fileoverview Represents an object that participates in the xaml dependency property system.
 * DependencyObject is the immediate base class of several other important xaml classes,
 * such as UIElement, Geometry, FrameworkTemplate, Style, and ResourceDictionary.
 */

goog.provide('goog.xaml.DependencyObject');

/**
 * @constructor
 */
goog.xaml.DependencyObject = function () {
    this.dependencyPropertyValues_ = new Object();
};

/**
 * Stores all dependency property values assigned to this object instance.
 * @type {Object}
 */
goog.xaml.DependencyObject.prototype.dependencyPropertyValues_;

/**
 * Clears the local value of a dependency property.
 * @param {number} dependencyPropertyIdentifier
 */
goog.xaml.DependencyObject.prototype.ClearValue = function (dependencyPropertyIdentifier) {
    delete this.dependencyPropertyValues_[dependencyPropertyIdentifier];
};

/**
 * @type {number}
 */
goog.xaml.DependencyObject.prototype.DependencyType;

/**
 * Returns any base value established for a goog.xaml dependency property,
 * which would apply in cases where an animation is not active.
 * @param {number} dependencyPropertyIdentifier
 * @returns {*?}
 */
goog.xaml.DependencyObject.prototype.GetAnimationBaseValue = function (dependencyPropertyIdentifier) {
    // 2. Local value. A local value might be set through the convenience of the CLR wrapper property,
    // which also equates to setting as an attribute or property element in XAML,
    // or by a call to the SetValue method using a property of a specific instance.
    // If you set a local value by using a binding or a static resource,
    // these each act in the precedence as if a local value was set.
    var localValue = this.dependencyPropertyValues_[dependencyPropertyIdentifier];
    if (localValue !== undefined) {
        return localValue;
    }

    // 3. Templated properties. An element has these if it was created as part of a template
    // (a ControlTemplate or DataTemplate).

    // 4. Style setters. Values from a Setter within styles from page or application resources.
    // Try to get the explicit style for this element.
    var localStyle = /** @type {goog.xaml.Style?} */(this.dependencyPropertyValues_[goog.xaml.FrameworkElement.StyleProperty]);
    if (localStyle) {
        var localSetter = /** @type {goog.xaml.Setter?} */(localStyle.Setters[dependencyPropertyIdentifier]);
        if (localSetter !== undefined) {
            return localSetter.Value;
        }
    }
    // Try to get the implicit style for this element type by traversing towards the root visual.
    else {
        var currentElement = this;
        while (currentElement) {
            var resources = /** @type {goog.xaml.ResourceDictionary?} */(currentElement.Resources);
            if (resources) {
                var resourceStyle = resources.ImplicitStyles[this.DependencyType];
                if (resourceStyle) {
                    var resourceSetter = /** @type {goog.xaml.Setter?} */(resourceStyle.Setters[dependencyPropertyIdentifier]);
                    if (resourceSetter !== undefined) {
                        return resourceSetter.Value;
                    }
                    break;
                }
            }
            currentElement = currentElement.Parent;
        }
    }

    // 5. Default value. Any given dependency property may have a default value.
    return goog.xaml.DependencyProperty.RegisteredDependencyProperties[dependencyPropertyIdentifier].GetMetadata().DefaultValue;
};

/**
 * Returns the current effective value of a dependency property from a DependencyObject.
 * @param {number} dependencyPropertyIdentifier
 * @returns {*?}
 */
goog.xaml.DependencyObject.prototype.GetValue = function (dependencyPropertyIdentifier) {
    // 1. Active animations, or animations with a Hold behavior.
    // In order to have any practical effect, an animation of a property must be able to have precedence
    // over the base (unanimated) value, even if that value was set locally.
    // In order to be animated, the dependency property must be a property type
    // that the existing animation classes will support.
    // TODO Implement

    // Animation is not active.
    return this.GetAnimationBaseValue(dependencyPropertyIdentifier);
};

/**
 * Returns the local value of a dependency property, if a local value is set.
 * @param {number} dependencyPropertyIdentifier
 * @returns {*?}
 */
goog.xaml.DependencyObject.prototype.ReadLocalValue = function (dependencyPropertyIdentifier) {
    return this.dependencyPropertyValues_[dependencyPropertyIdentifier];
};

/**
 * Sets the local value of a dependency property on a DependencyObject.
 * @param {number} dependencyPropertyIdentifier
 * @param {*?} value
 */
goog.xaml.DependencyObject.prototype.SetValue = function (dependencyPropertyIdentifier, value) {
    this.dependencyPropertyValues_[dependencyPropertyIdentifier] = value;
};
