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
 * @fileoverview Represents the base class for UI elements that use a ControlTemplate to define their appearance.
 */

goog.provide('goog.xaml.controls.Control');

goog.require('goog.xaml.controls.ControlTemplate');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.FrameworkElement');
goog.require('goog.xaml.FontStretch');
goog.require('goog.xaml.FontStyle');
goog.require('goog.xaml.FontWeight');
goog.require('goog.xaml.input.KeyboardNavigationMode');
goog.require('goog.xaml.media.Brush');
goog.require('goog.xaml.UIElement');

/**
 * @constructor
 * @extends goog.xaml.FrameworkElement
 */
goog.xaml.controls.Control = function () {
    goog.xaml.FrameworkElement.call(this);
    this.Children = new Array();
};

goog.inherits(goog.xaml.controls.Control, goog.xaml.FrameworkElement);

/**
 * Gets or sets a brush that provides the background of the control.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.controls.Control.prototype.Background;

/**
 * @type {number}
 */
goog.xaml.controls.Control.BackgroundProperty = goog.xaml.DependencyProperty.Register(
    "Background", goog.xaml.media.Brush.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "Background", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.media.Brush?} background
     */
    set:function (background) {
        this.SetValue(goog.xaml.controls.Control.BackgroundProperty, background);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.controls.Control.BackgroundProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a brush that describes the border background of a control.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.controls.Control.prototype.BorderBrush;

/**
 * @type {number}
 */
goog.xaml.controls.Control.BorderBrushProperty = goog.xaml.DependencyProperty.Register(
    "BorderBrush", goog.xaml.media.Brush.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "BorderBrush", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.media.Brush?} borderBrush
     */
    set:function (borderBrush) {
        this.SetValue(goog.xaml.controls.Control.BorderBrushProperty, borderBrush);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.controls.Control.BorderBrushProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the border thickness of a control.
 * @type {goog.xaml.Thickness?}
 */
goog.xaml.controls.Control.prototype.BorderThickness;

/**
 * @type {number}
 */
goog.xaml.controls.Control.BorderThicknessProperty = goog.xaml.DependencyProperty.Register(
    "BorderThickness", goog.xaml.Thickness.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "BorderThickness", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.Thickness?} borderThickness
     */
    set:function (borderThickness) {
        this.SetValue(goog.xaml.controls.Control.BorderThicknessProperty, borderThickness);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.Thickness?}
     */
    get:function () {
        return /** @type {goog.xaml.Thickness?} */(this.GetValue(goog.xaml.controls.Control.BorderThicknessProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the distance between characters of text in the control measured in 1000ths of the font size.
 * @type {number}
 */
goog.xaml.controls.Control.prototype.CharacterSpacing;

/**
 * @type {number}
 */
goog.xaml.controls.Control.CharacterSpacingProperty = goog.xaml.DependencyProperty.Register(
    "CharacterSpacing", goog.xaml.Number.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "CharacterSpacing", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {number} characterSpacing
     */
    set:function (characterSpacing) {
        this.SetValue(goog.xaml.controls.Control.CharacterSpacingProperty, characterSpacing);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Control.CharacterSpacingProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the key that references the default style for the control.
 * @type {string?}
 */
goog.xaml.controls.Control.prototype.DefaultStyleKey;

/**
 * @type {number}
 */
goog.xaml.controls.Control.DefaultStyleKeyProperty = goog.xaml.DependencyProperty.Register(
    "DefaultStyleKey", goog.xaml.String.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "DefaultStyleKey", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {string?} defaultStyleKey
     */
    set:function (defaultStyleKey) {
        this.SetValue(goog.xaml.controls.Control.DefaultStyleKeyProperty, defaultStyleKey);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {string?}
     */
    get:function () {
        return /** @type {string?} */(this.GetValue(goog.xaml.controls.Control.DefaultStyleKeyProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * @type {number}
 */
goog.xaml.controls.Control.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.controls.Control");

/**
 * @type {number}
 */
goog.xaml.controls.Control.prototype.DependencyType = goog.xaml.controls.Control.DependencyType;

/**
 * Gets or sets the font used to display text in the control.
 * @type {string?}
 */
goog.xaml.controls.Control.prototype.FontFamily;

/**
 * @type {number}
 */
goog.xaml.controls.Control.FontFamilyProperty = goog.xaml.DependencyProperty.Register(
    "FontFamily", goog.xaml.String.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "FontFamily", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {string?} fontFamily
     */
    set:function (fontFamily) {
        this.SetValue(goog.xaml.controls.Control.FontFamilyProperty, fontFamily);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {string?}
     */
    get:function () {
        return /** @type {string?} */(this.GetValue(goog.xaml.controls.Control.FontFamilyProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the size of the text in this control.
 * @type {number}
 */
goog.xaml.controls.Control.prototype.FontSize;

/**
 * @type {number}
 */
goog.xaml.controls.Control.FontSizeProperty = goog.xaml.DependencyProperty.Register(
    "FontSize", goog.xaml.Number.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(11)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "FontSize", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {number} fontSize
     */
    set:function (fontSize) {
        this.SetValue(goog.xaml.controls.Control.FontSizeProperty, fontSize);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Control.FontSizeProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the degree to which a font is condensed or expanded on the screen.
 * @type {goog.xaml.FontStretch}
 */
goog.xaml.controls.Control.prototype.FontStretch;

/**
 * @type {number}
 */
goog.xaml.controls.Control.FontStretchProperty = goog.xaml.DependencyProperty.Register(
    "FontStretch", goog.xaml.FontStretch.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.FontStretch.Normal)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "FontStretch", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.FontStretch} fontStretch
     */
    set:function (fontStretch) {
        this.SetValue(goog.xaml.controls.Control.FontStretchProperty, fontStretch);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.FontStretch}
     */
    get:function () {
        return /** @type {goog.xaml.FontStretch} */(this.GetValue(goog.xaml.controls.Control.FontStretchProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the style in which the text is rendered.
 * @type {goog.xaml.FontStyle}
 */
goog.xaml.controls.Control.prototype.FontStyle;

/**
 * @type {number}
 */
goog.xaml.controls.Control.FontStyleProperty = goog.xaml.DependencyProperty.Register(
    "FontStyle", goog.xaml.FontStyle.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.FontStyle.Normal)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "FontStyle", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.FontStyle} fontStyle
     */
    set:function (fontStyle) {
        this.SetValue(goog.xaml.controls.Control.FontStyleProperty, fontStyle);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.FontStyle}
     */
    get:function () {
        return /** @type {goog.xaml.FontStyle} */(this.GetValue(goog.xaml.controls.Control.FontStyleProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the thickness of the specified font.
 * @type {goog.xaml.FontWeight}
 */
goog.xaml.controls.Control.prototype.FontWeight;

/**
 * @type {number}
 */
goog.xaml.controls.Control.FontWeightProperty = goog.xaml.DependencyProperty.Register(
    "FontWeight", goog.xaml.FontWeight.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.FontWeight.Normal)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "FontWeight", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.FontWeight} fontWeight
     */
    set:function (fontWeight) {
        this.SetValue(goog.xaml.controls.Control.FontWeightProperty, fontWeight);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.FontWeight}
     */
    get:function () {
        return /** @type {goog.xaml.FontWeight} */(this.GetValue(goog.xaml.controls.Control.FontWeightProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a brush that describes the foreground color.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.controls.Control.prototype.Foreground;

/**
 * @type {number}
 */
goog.xaml.controls.Control.ForegroundProperty = goog.xaml.DependencyProperty.Register(
    "Foreground", goog.xaml.media.Brush.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "Foreground", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.media.Brush?} foreground
     */
    set:function (foreground) {
        this.SetValue(goog.xaml.controls.Control.ForegroundProperty, foreground);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.controls.Control.ForegroundProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the horizontal alignment of the control's content.
 * @type {goog.xaml.HorizontalAlignment}
 */
goog.xaml.controls.Control.prototype.HorizontalContentAlignment;

/**
 * @type {number}
 */
goog.xaml.controls.Control.HorizontalContentAlignmentProperty = goog.xaml.DependencyProperty.Register(
    "HorizontalContentAlignment", goog.xaml.HorizontalAlignment.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.HorizontalAlignment.Center)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "HorizontalContentAlignment", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.HorizontalAlignment} horizontalContentAlignment
     */
    set:function (horizontalContentAlignment) {
        this.SetValue(goog.xaml.controls.Control.HorizontalContentAlignmentProperty, horizontalContentAlignment);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.HorizontalAlignment}
     */
    get:function () {
        return /** @type {goog.xaml.HorizontalAlignment} */(this.GetValue(goog.xaml.controls.Control.HorizontalContentAlignmentProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value indicating whether the user can interact with the control.
 * @type {boolean}
 */
goog.xaml.controls.Control.prototype.IsEnabled;

/**
 * @type {number}
 */
goog.xaml.controls.Control.IsEnabledProperty = goog.xaml.DependencyProperty.Register(
    "IsEnabled", goog.xaml.Boolean.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(true)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "IsEnabled", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {boolean} isEnabled
     */
    set:function (isEnabled) {
        this.SetValue(goog.xaml.controls.Control.IsEnabledProperty, isEnabled);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {boolean}
     */
    get:function () {
        return /** @type {boolean} */(this.GetValue(goog.xaml.controls.Control.IsEnabledProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value that indicates whether a control is included in tab navigation.
 * @type {boolean}
 */
goog.xaml.controls.Control.prototype.IsTabStop;

/**
 * @type {number}
 */
goog.xaml.controls.Control.IsTabStopProperty = goog.xaml.DependencyProperty.Register(
    "IsTabStop", goog.xaml.Boolean.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(true)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "IsTabStop", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {boolean} isTabStop
     */
    set:function (isTabStop) {
        this.SetValue(goog.xaml.controls.Control.IsTabStopProperty, isTabStop);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {boolean}
     */
    get:function () {
        return /** @type {boolean} */(this.GetValue(goog.xaml.controls.Control.IsTabStopProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the padding inside a control.
 * @type {goog.xaml.Thickness?}
 */
goog.xaml.controls.Control.prototype.Padding;

/**
 * @type {number}
 */
goog.xaml.controls.Control.PaddingProperty = goog.xaml.DependencyProperty.Register(
    "Padding", goog.xaml.Thickness.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "Padding", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.Thickness?} padding
     */
    set:function (padding) {
        this.SetValue(goog.xaml.controls.Control.PaddingProperty, padding);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.Thickness?}
     */
    get:function () {
        return /** @type {goog.xaml.Thickness?} */(this.GetValue(goog.xaml.controls.Control.PaddingProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value that determines the order
 * in which elements receive focus when the user navigates through controls by using the TAB key.
 * @type {number}
 */
goog.xaml.controls.Control.prototype.TabIndex;

/**
 * @type {number}
 */
goog.xaml.controls.Control.TabIndexProperty = goog.xaml.DependencyProperty.Register(
    "TabIndex", goog.xaml.Number.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "TabIndex", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {number} tabIndex
     */
    set:function (tabIndex) {
        this.SetValue(goog.xaml.controls.Control.TabIndexProperty, tabIndex);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.controls.Control.TabIndexProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value that modifies how tabbing and TabIndex work for this control.
 * @type {goog.xaml.input.KeyboardNavigationMode}
 */
goog.xaml.controls.Control.prototype.TabNavigation;

/**
 * @type {number}
 */
goog.xaml.controls.Control.TabNavigationProperty = goog.xaml.DependencyProperty.Register(
    "TabNavigation", goog.xaml.input.KeyboardNavigationMode.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.input.KeyboardNavigationMode.Local)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "TabNavigation", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.input.KeyboardNavigationMode} tabNavigation
     */
    set:function (tabNavigation) {
        this.SetValue(goog.xaml.controls.Control.TabNavigationProperty, tabNavigation);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.input.KeyboardNavigationMode}
     */
    get:function () {
        return /** @type {goog.xaml.input.KeyboardNavigationMode} */(this.GetValue(goog.xaml.controls.Control.TabNavigationProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a control template.
 * @type {goog.xaml.controls.ControlTemplate?}
 */
goog.xaml.controls.Control.prototype.Template;

/**
 * @type {number}
 */
goog.xaml.controls.Control.TemplateProperty = goog.xaml.DependencyProperty.Register(
    "Template", goog.xaml.controls.ControlTemplate.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "Template", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.controls.ControlTemplate?} template
     */
    set:function (template) {
        this.SetValue(goog.xaml.controls.Control.TemplateProperty, template);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.controls.ControlTemplate?}
     */
    get:function () {
        return /** @type {goog.xaml.controls.ControlTemplate?} */(this.GetValue(goog.xaml.controls.Control.TemplateProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the vertical alignment of the control's content.
 * @type {goog.xaml.VerticalAlignment}
 */
goog.xaml.controls.Control.prototype.VerticalContentAlignment;

/**
 * @type {number}
 */
goog.xaml.controls.Control.VerticalContentAlignmentProperty = goog.xaml.DependencyProperty.Register(
    "VerticalContentAlignment", goog.xaml.VerticalAlignment.DependencyType, goog.xaml.controls.Control.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.VerticalAlignment.Center)
);

Object.defineProperty(goog.xaml.controls.Control.prototype, "VerticalContentAlignment", {
    /**
     * @this {goog.xaml.controls.Control}
     * @param {goog.xaml.VerticalAlignment} verticalContentAlignment
     */
    set:function (verticalContentAlignment) {
        this.SetValue(goog.xaml.controls.Control.VerticalContentAlignmentProperty, verticalContentAlignment);
    },
    /**
     * @this {goog.xaml.controls.Control}
     * @return {goog.xaml.VerticalAlignment}
     */
    get:function () {
        return /** @type {goog.xaml.VerticalAlignment} */(this.GetValue(goog.xaml.controls.Control.VerticalContentAlignmentProperty));
    },
    enumerable:true,
    configurable:true
});
