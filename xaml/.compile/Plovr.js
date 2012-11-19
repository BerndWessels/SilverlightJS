{
    'id' : 'xaml',
    'inputs' : [ '../.compile/Compile.js' ],
    'paths' : [ '../xaml/' ],
    'closure-library' : 'C:/dev/closure-library/closure/goog/',
    'output-charset' : 'UTF-8',
    'output-wrapper' : '(function(){%output%})();',
    'mode' : 'RAW',
    'level' : 'VERBOSE',
    'debug' : true,
    'define' : {
    'goog.DEBUG' : true
},
    'checks' : {
    'checkRegExp' : 'ERROR',
        'checkTypes' : 'ERROR',
        'checkVars' : 'ERROR',
        'deprecated' : 'ERROR',
        'fileoverviewTags' : 'ERROR',
        'invalidCasts' : 'ERROR',
        'missingProperties' : 'ERROR',
        'nonStandardJsDocs' : 'ERROR',
        'undefinedVars' : 'ERROR'
}
}