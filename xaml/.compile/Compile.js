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
 * @fileoverview Use this file to compile the Closure Xaml Library.
 */

goog.provide('goog.xaml.compile');

goog.require('goog.xaml.Application');
goog.require('goog.xaml.controls.Canvas');
goog.require('goog.xaml.media.SolidColorBrush');
goog.require('goog.xaml.shapes.Rectangle');
goog.require('goog.xaml.controls.Control');

/**
 * Entry-Point for the Google Closure Compiler.
 */
goog.xaml.compile = function () {

    // <Application>
    var application = new goog.xaml.Application();

    // <Application.Resources>
    var resources1 = new goog.xaml.ResourceDictionary();

    // <Style TargetType="Canvas">
    var style1 = new goog.xaml.Style();
    style1.TargetType = goog.xaml.controls.Canvas.DependencyType;

    var solidColorBrush1 = new goog.xaml.media.SolidColorBrush();
    solidColorBrush1.Color.A = 1;
    solidColorBrush1.Color.B = 128;
    solidColorBrush1.Color.G = 128;
    solidColorBrush1.Color.R = 128;

    // <Setter Property="Fill" Value="Red"/>
    var setter1 = new goog.xaml.Setter();
    setter1.Property = goog.xaml.controls.Panel.BackgroundProperty; // xaml parser needs to know inheritance.
    setter1.Value = solidColorBrush1;

    // </Setter>
    style1.addSetter(setter1);

    // <Setter Property="Height" Value="100"/>
    var setter2 = new goog.xaml.Setter();
    setter2.Property = goog.xaml.FrameworkElement.HeightProperty; // xaml parser needs to know inheritance.
    setter2.Value = 100;

    // </Setter>
    style1.addSetter(setter2);

    // <Setter Property="Width" Value="200"/>
    var setter3 = new goog.xaml.Setter();
    setter3.Property = goog.xaml.FrameworkElement.WidthProperty; // xaml parser needs to know inheritance.
    setter3.Value = 200;

    // </Setter>
    style1.addSetter(setter3);

    // </Style>
    resources1.addStyle(style1, goog.xaml.controls.Canvas.DependencyType);

    // <Style TargetType="Canvas" x:Key="BlueCanvas">
    var style2 = new goog.xaml.Style();
    style2.TargetType = goog.xaml.controls.Canvas.DependencyType;

    var solidColorBrush2 = new goog.xaml.media.SolidColorBrush();
    solidColorBrush2.Color.A = 1;
    solidColorBrush2.Color.B = 255;
    solidColorBrush2.Color.G = 0;
    solidColorBrush2.Color.R = 0;

    // <Setter Property="Fill" Value="Blue"/>
    var setter4 = new goog.xaml.Setter();
    setter4.Property = goog.xaml.controls.Panel.BackgroundProperty; // xaml parser needs to know inheritance.
    setter4.Value = solidColorBrush2;

    // </Setter>
    style2.addSetter(setter4);

    // </Style>
    resources1.addStyle(style2, goog.xaml.controls.Canvas.DependencyType, "BlueCanvas"); // TODO: key to number

    // </Application.Resources>
    application.Resources = resources1;

    // <Application.RootVisual>

    // <Canvas Style="BlueCanvas">
    var canvas1 = new goog.xaml.controls.Canvas();
    canvas1.createComponent();

    canvas1.Style = style2; // TODO ?

    // <Canvas.Children>

    // <Canvas>
    var canvas2 = new goog.xaml.controls.Canvas();
    canvas2.createComponent();

    canvas2.Margin = new goog.xaml.Thickness();
    canvas2.Margin.Left = 20;
    canvas2.Margin.Top = 40;
    canvas2.SetValue(goog.xaml.controls.Canvas.LeftProperty, 40);
    canvas2.SetValue(goog.xaml.controls.Canvas.TopProperty, 20);

    // </Canvas>
    canvas2.Parent = canvas1;
    canvas1.Children.push(canvas2);

    // </Canvas.Children>

    // </Application.RootVisual>
    canvas1.Parent = application;
    application.RootVisual = canvas1;


    // 1. Check if 'InvalidateMeasure' has been called and call 'Measure' if necessary.
    var availableSize = new goog.xaml.Size();
    availableSize.Height = window.innerHeight;
    availableSize.Width = window.innerWidth;
    application.RootVisual.measure(availableSize); // Calculates the 'DesiredSize' of the UIElement.

    // 2. Check if 'InvalidateArrange' has been called and call 'Arrange' if necessary.
    var finalRect = new goog.xaml.Rect();
    finalRect.Height = application.RootVisual.DesiredSize.Height; // or if not enough space on parent or so, something else.
    finalRect.Left = application.RootVisual.Margin === null ? 0 : application.RootVisual.Margin.Left;
    finalRect.Width = application.RootVisual.DesiredSize.Width; // or if not enough space on parent or so, something else.
    finalRect.Y = application.RootVisual.Margin === null ? 0 : application.RootVisual.Margin.Top;
    application.RootVisual.arrange(finalRect);

    // 3. Render the visual tree.
    // While rendering from the root into the tree, we should collect the styles at each node.
    // That will speed up the style lookup in the dependency objects.
    // It might even speed up the data binding, if we collect the data contexts at each node.
    application.RootVisual.render();



//    var control = new goog.xaml.controls.Control();
//    control.createComponent();
//
//    // A xaml parser will create the following code whenever it finds something like:
//
//    // <Style Name="myStyle">
//    var myStyle = new goog.xaml.Style();
//
//    // <Setter Property="Fill" Value="Red"/>
//    var mySolidColorBrush1 = new goog.xaml.media.SolidColorBrush();
//    mySolidColorBrush1.Color.A = 1;
//    mySolidColorBrush1.Color.B = 128;
//    mySolidColorBrush1.Color.G = 128;
//    mySolidColorBrush1.Color.R = 128;
//
//    // <Setter Property="Fill" Value="Red"/>
//    var mySolidColorBrush2 = new goog.xaml.media.SolidColorBrush();
//    mySolidColorBrush2.Color.A = 1;
//    mySolidColorBrush2.Color.B = 128;
//    mySolidColorBrush2.Color.G = 0;
//    mySolidColorBrush2.Color.R = 0;
//
//    // <Setter Property="Fill" Value="Red"/>
//    var mySolidColorBrush3 = new goog.xaml.media.SolidColorBrush();
//    mySolidColorBrush3.Color.A = 1;
//    mySolidColorBrush3.Color.B = 0;
//    mySolidColorBrush3.Color.G = 0;
//    mySolidColorBrush3.Color.R = 128;
//
//    var mySetter1 = new goog.xaml.Setter();
//    mySetter1.Property = goog.xaml.shapes.Shape.FillProperty; // xaml parser needs to know inheritance.
//    mySetter1.Value = mySolidColorBrush1;
//    myStyle.addSetter(mySetter1);
//
//    var mySetter3 = new goog.xaml.Setter();
//    mySetter3.Property = goog.xaml.controls.Panel.BackgroundProperty; // xaml parser needs to know inheritance.
//    mySetter3.Value = mySolidColorBrush1;
//    myStyle.addSetter(mySetter3);
//
//    // <Setter Property="Canvas.Left" Value="20"/>
//    var mySetter2 = new goog.xaml.Setter();
//    mySetter2.Property = goog.xaml.controls.Canvas.LeftProperty;
//    mySetter2.Value = 20;
//    myStyle.addSetter(mySetter2);
//
//    // <Setter Property="Canvas.Left" Value="20"/>
//    var mySetter4 = new goog.xaml.Setter();
//    mySetter4.Property = goog.xaml.shapes.Shape.StrokeThicknessProperty;
//    mySetter4.Value = 5;
//    myStyle.addSetter(mySetter4);
//
//    // <Canvas>
//    var canvas = new goog.xaml.controls.Canvas();
//    canvas.createComponent();
//
//    canvas.Style = myStyle;
//
//    canvas.Margin = new goog.xaml.Thickness();
//    canvas.Margin.Left = 10;
//    canvas.Margin.Right = 10;
//    canvas.Height = 20;
//    canvas.MinHeight = 200;
//    canvas.MaxHeight = 400;
//
//    // <Rectangle>
//    var rectangle = new goog.xaml.shapes.Rectangle();
//    rectangle.createComponent();
//
//    rectangle.RadiusX = 30;
//    rectangle.RadiusY = 10;
//    rectangle.Style = myStyle;
//    rectangle.Stroke = mySolidColorBrush2;
//    rectangle.Fill = mySolidColorBrush3;
//    rectangle.Width = 200;
//    rectangle.Height = 100;
//    rectangle.SetValue(goog.xaml.controls.Canvas.TopProperty, 20);
//    //rectangle.SetValue(goog.xaml.Canvas.LeftProperty, 30);
//    //rectangle.SetValue(goog.xaml.Canvas.RightProperty, 40);
//
//    canvas.Children.push(rectangle);
//
//    var test = rectangle.GetValue(goog.xaml.controls.Canvas.LeftProperty);
//
//    // This will create the UIElement and add its actual canvas element to the DOM.
//    // canvas.render(document.body);
//
//    // Whenever a UIElement has to be re-drawn the rendering engine will:
//
//    // 1. Check if 'InvalidateMeasure' has been called and call 'Measure' if necessary.
//    var availableSize = new goog.xaml.Size();
//    availableSize.Height = window.innerHeight;
//    availableSize.Width = window.innerWidth;
//    canvas.measure(availableSize); // Calculates the 'DesiredSize' of the UIElement.
//
//    // 2. Check if 'InvalidateArrange' has been called and call 'Arrange' if necessary.
//    var finalRect = new goog.xaml.Rect();
//    finalRect.Height = canvas.DesiredSize.Height; // or if not enough space on parent or so, something else.
//    finalRect.Left = canvas.Margin === null ? 0 : canvas.Margin.Left;
//    finalRect.Width = canvas.DesiredSize.Width; // or if not enough space on parent or so, something else.
//    finalRect.Y = canvas.Margin === null ? 0 : canvas.Margin.Top;
//    canvas.arrange(finalRect);
//
//    // 3. Render the visual tree.
//    // While rendering from the root into the tree, we should collect the styles at each node.
//    // That will speed up the style lookup in the dependency objects.
//    // It might even speed up the data binding, if we collect the data contexts at each node.
//    canvas.render();
//
//    alert(Object.prototype.toString.call(canvas));
};

/**
 * The entry-point of the web client application.
 */
(function() {
})();
