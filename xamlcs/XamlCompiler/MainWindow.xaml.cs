using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Xml;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This is the very first approach to convert a XAML file into a JavaScript file.
//
// Once the parser produces proper results, this application can be extended with a UI and multiple input and output file processing.
//
// For now, just put a break point in line 139 and 217 to debug and make this converter work properly.
//
// See "button1_Click" at the bottom of this file for input and output.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

namespace XamlCompiler
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private int objectCounter = 0;

        private string StartObject(System.Xaml.XamlXmlReader xamlXmlReader, string indent, ref string output)
        {
            objectCounter++;

            var nodeType = xamlXmlReader.NodeType;
            var type = xamlXmlReader.Type;
            var value = xamlXmlReader.Value;

            System.Diagnostics.Debug.WriteLine(indent + "O>" + type.ToString());
            //System.Diagnostics.Debug.WriteLine(indent + type.ToString());


            var currentInstance = type.Name + objectCounter.ToString();

            output += indent + "var " + currentInstance + " = new " + type.ToString() + "();\n";

            while (xamlXmlReader.Read())
            {
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.GetObject)
                {
                    GetObject(xamlXmlReader, indent, currentInstance, ref output);
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.StartMember)
                {
                    StartMember(xamlXmlReader, indent, currentInstance, ref output);
                    continue;
                }

                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndMember)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "M<");
                    break;
                }

                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndObject)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "O<" + type.ToString());
                    break;
                }
            }
            return currentInstance;
        }

        private void GetObject(System.Xaml.XamlXmlReader xamlXmlReader, string indent, string currentInstance, ref string output)
        {
            var nodeType = xamlXmlReader.NodeType;
            var type = xamlXmlReader.Type;
            var value = xamlXmlReader.Value;

            System.Diagnostics.Debug.WriteLine(indent + "G>");
            //System.Diagnostics.Debug.WriteLine(indent + type.ToString());
            //output += indent;

            while (xamlXmlReader.Read())
            {
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.GetObject)
                {
                    GetObject(xamlXmlReader, indent, currentInstance, ref output);
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.StartMember)
                {
                    StartMember(xamlXmlReader, indent, currentInstance, ref output);
                    continue;
                }

                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndMember)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "M<");
                    return;
                }

                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndObject)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "O<");
                    return;
                }
            }
        }

        private void StartMember(System.Xaml.XamlXmlReader xamlXmlReader, string indent, string currentInstance, ref string output)
        {
            var member = xamlXmlReader.Member;
            var name = xamlXmlReader.Member.Name;
            var decl = xamlXmlReader.Member.DeclaringType == null ? "" : xamlXmlReader.Member.DeclaringType.ToString();
            var type = xamlXmlReader.Member.Type;
            var typeConverter = xamlXmlReader.Member.TypeConverter;
            var isCollection = xamlXmlReader.Member.Type.IsCollection;
            System.Diagnostics.Debug.WriteLine(indent + "M>(" + decl + ")." + name);
            //System.Diagnostics.Debug.WriteLine(indent + "." + xamlXmlReader.Member.Name.ToString());
            //output += indent + currentInstance + "." + name;

            while (xamlXmlReader.Read())
            {
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.Value)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "=" + xamlXmlReader.Value.ToString());
                    if(type.UnderlyingType == typeof(System.String))
                    {
                        output += indent + currentInstance + ".SetValue(" + decl + "." + name + ", \"" + xamlXmlReader.Value.ToString() + "\");\n";
                    }
                    else
                    {
                        output += indent + currentInstance + ".SetValue(" + decl + "." + name + ", " + xamlXmlReader.Value.ToString() + ");\n";
                    }
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.GetObject)
                {
                    GetObject(xamlXmlReader, indent, currentInstance + "." + name, ref output);
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.StartObject)
                {
                    var childInstance = StartObject(xamlXmlReader, indent + "\t", ref output);
                    if (isCollection)
                    {
                        output += indent + currentInstance + ".Add(" + childInstance + ");\n";
                    }
                    else
                    {
                        output += indent + currentInstance + "." + name + " = " + childInstance + ";\n";
                    }
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndObject)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "O<" + name);
                    return;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.StartMember)
                {
                    StartMember(xamlXmlReader, indent + "\t", currentInstance + "." + name, ref output);
                    continue;
                }
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndMember)
                {
                    System.Diagnostics.Debug.WriteLine(indent + "M<" + name);
                    return;
                }
            }
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //
            // Put the path to the XAML file here - This will become much more advanced for multiple files and UI once the parser works.
            //
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            System.Xaml.XamlXmlReader xamlXmlReader = new System.Xaml.XamlXmlReader(@"C:\dev\workspace\xamlcs_\XamlCompiler\MainPage.xaml");

            string output = "";

            while (xamlXmlReader.Read())
            {
                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.StartObject)
                {
                    StartObject(xamlXmlReader, "", ref output);
                }

                if (xamlXmlReader.NodeType == System.Xaml.XamlNodeType.EndObject)
                {
                    //return;
                }
            }

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //
            // The result of the XAML to JavaScript compilation can be found in the "output" variable.
            //
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            string debug = "Stop here";
        }
    }
}
