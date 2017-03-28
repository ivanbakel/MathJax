// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*************************************************************
 *
 *  MathJax/localization/ja/TeX.js
 *
 *  Copyright (c) 2009-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
MathJax.Localization.addTranslation("ja","TeX",{
        version: "2.7.0",
        isLoaded: true,
        strings: {
          ExtraOpenMissingClose: "\u958B\u304D\u4E2D\u62EC\u5F27\u304C\u4F59\u5206\u3001\u307E\u305F\u306F\u9589\u3058\u4E2D\u62EC\u5F27\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          ExtraCloseMissingOpen: "\u9589\u3058\u4E2D\u62EC\u5F27\u304C\u4F59\u5206\u3001\u307E\u305F\u306F\u958B\u304D\u4E2D\u62EC\u5F27\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          MissingLeftExtraRight: "\\left \u304C\u4E0D\u8DB3\u3001\u307E\u305F\u306F \\right \u304C\u4F59\u5206\u3067\u3059",
          MissingScript: "\u4E0A\u4ED8\u304D\u307E\u305F\u306F\u4E0B\u4ED8\u304D\u306E\u5F15\u6570\u304C\u3042\u308A\u307E\u305B\u3093",
          ExtraLeftMissingRight: "\\left \u304C\u4F59\u5206\u3001\u307E\u305F\u306F \\right \u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          Misplaced: "%1 \u306E\u4F4D\u7F6E\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093",
          MissingOpenForSub: "\u4E0B\u4ED8\u304D\u306E\u958B\u304D\u4E2D\u62EC\u5F27\u304C\u3042\u308A\u307E\u305B\u3093",
          MissingOpenForSup: "\u4E0A\u4ED8\u304D\u306E\u958B\u304D\u4E2D\u62EC\u5F27\u304C\u3042\u308A\u307E\u305B\u3093",
          AmbiguousUseOf: "%1 \u306E\u8A18\u8FF0\u304C\u66D6\u6627\u3067\u3059",
          EnvBadEnd: "\\begin{%1} \u304C \\end{%2} \u3067\u7D42\u4E86\u3057\u3066\u3044\u307E\u3059",
          EnvMissingEnd: "\\end{%1} \u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          MissingBoxFor: "%1 \u306E\u30DC\u30C3\u30AF\u30B9\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          MissingCloseBrace: "\u9589\u3058\u4E2D\u62EC\u5F27\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          UndefinedControlSequence: "\u672A\u5B9A\u7FA9\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB \u30B7\u30FC\u30B1\u30F3\u30B9 %1",
          DoubleExponent: "\u4E8C\u91CD\u306E\u4E0A\u4ED8\u304D: \u4E2D\u62EC\u5F27\u3092\u4F7F\u7528\u3057\u3066\u660E\u78BA\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          DoubleSubscripts: "\u4E8C\u91CD\u306E\u4E0B\u4ED8\u304D: \u4E2D\u62EC\u5F27\u3092\u4F7F\u7528\u3057\u3066\u660E\u78BA\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          DoubleExponentPrime: "\u30D7\u30E9\u30A4\u30E0\u8A18\u53F7\u306B\u3088\u308B\u4E8C\u91CD\u306E\u4E0A\u4ED8\u304D: \u4E2D\u62EC\u5F27\u3092\u4F7F\u7528\u3057\u3066\u660E\u78BA\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          CantUseHash1: "\u6570\u5F0F\u30E2\u30FC\u30C9\u3067\u306F\u300C\u30DE\u30AF\u30ED \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u6587\u5B57 #\u300D\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093",
          MisplacedMiddle: "%1 \u306F \\left \u3068 \\right \u306E\u9593\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044",
          MisplacedLimits: "%1 \u306F\u6F14\u7B97\u5B50\u306E\u307F\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059",
          MisplacedMoveRoot: "%1 \u306F\u30EB\u30FC\u30C8\u5185\u3067\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059",
          MultipleCommand: "%1 \u304C\u8907\u6570\u3042\u308A\u307E\u3059",
          IntegerArg: "%1 \u306E\u5F15\u6570\u306F\u6574\u6570\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          NotMathMLToken: "%1 \u306F\u30C8\u30FC\u30AF\u30F3\u8981\u7D20\u3067\u306F\u3042\u308A\u307E\u305B\u3093",
          InvalidMathMLAttr: "\u7121\u52B9\u306A MathML \u5C5E\u6027: %1",
          UnknownAttrForElement: "%1 \u3092 %2 \u306E\u5C5E\u6027\u3068\u3057\u3066\u8A8D\u8B58\u3067\u304D\u307E\u305B\u3093",
          MaxMacroSub1: "MathJax \u306E\u30DE\u30AF\u30ED\u5C55\u958B\u56DE\u6570\u306E\u4E0A\u9650\u306B\u9054\u3057\u307E\u3057\u305F\u3002\u30DE\u30AF\u30ED\u3092\u518D\u5E30\u547C\u3073\u51FA\u3057\u3057\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u305B\u3093\u304B?",
          MaxMacroSub2: "MathJax \u306E\u5C55\u958B\u56DE\u6570\u306E\u4E0A\u9650\u306B\u9054\u3057\u307E\u3057\u305F\u3002LaTeX \u74B0\u5883\u3092\u518D\u5E30\u547C\u3073\u51FA\u3057\u3057\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u305B\u3093\u304B?",
          MissingArgFor: "%1 \u306E\u5F15\u6570\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          ExtraAlignTab: "\\case \u306E\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u3001\u914D\u7F6E\u7528\u30BF\u30D6\u304C\u4F59\u5206\u3067\u3059",
          BracketMustBeDimension: "%1 \u306E\u4E2D\u62EC\u5F27\u5F15\u6570\u306F\u5BF8\u6CD5\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          InvalidEnv: "\u74B0\u5883\u540D\u300C%1\u300D\u306F\u7121\u52B9\u3067\u3059",
          UnknownEnv: "\u74B0\u5883\u300C%1\u300D\u306F\u4E0D\u660E\u3067\u3059",
          ExtraCloseLooking: "%1 \u3092\u63A2\u7D22\u3059\u308B\u969B\u306B\u4F59\u5206\u306A\u9589\u3058\u4E2D\u62EC\u5F27\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F",
          MissingCloseBracket: "%1 \u306E\u5F15\u6570\u306E\u9589\u3058\u62EC\u5F27\u300C]\u300D\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
          MissingOrUnrecognizedDelim: "%1 \u306E\u533A\u5207\u308A\u304C\u4E0D\u8DB3\u307E\u305F\u306F\u672A\u5206\u985E\u3067\u3059",
          MissingDimOrUnits: "%1 \u3067\u3001\u5BF8\u6CD5\u307E\u305F\u306F\u305D\u306E\u5358\u4F4D\u304C\u3042\u308A\u307E\u305B\u3093",
          TokenNotFoundForCommand: "%2 \u306B\u5BFE\u5FDC\u3059\u308B %1 \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
          MathNotTerminated: "\u6570\u5F0F\u304C\u30C6\u30AD\u30B9\u30C8 \u30DC\u30C3\u30AF\u30B9\u5185\u3067\u7D42\u4E86\u3057\u3066\u3044\u307E\u305B\u3093",
          IllegalMacroParam: "\u30DE\u30AF\u30ED \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u53C2\u7167\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059",
          MaxBufferSize: "MathJax \u306E\u5185\u90E8\u30D0\u30C3\u30D5\u30A1\u30FC \u30B5\u30A4\u30BA\u306E\u4E0A\u9650\u306B\u9054\u3057\u307E\u3057\u305F\u3002\u30DE\u30AF\u30ED\u3092\u518D\u5E30\u547C\u3073\u51FA\u3057\u3057\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u305B\u3093\u304B?",
          CommandNotAllowedInEnv: "%1 \u306F %2 \u74B0\u5883\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093",
          MultipleLabel: "\u30E9\u30D9\u30EB\u300C%1\u300D\u304C\u8907\u6570\u56DE\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059",
          CommandAtTheBeginingOfLine: "%1 \u306F\u884C\u982D\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044",
          IllegalAlign: "%1 \u306B\u6307\u5B9A\u3057\u305F\u5F15\u6570\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059",
          BadMathStyleFor: "%1 \u306E\u6570\u5F0F\u306E\u30B9\u30BF\u30A4\u30EB\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059",
          PositiveIntegerArg: "%1 \u306E\u5F15\u6570\u306F\u6B63\u306E\u6574\u6570\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          ErroneousNestingEq: "\u6570\u5F0F\u306E\u5165\u308C\u5B50\u69CB\u9020\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059",
          MultlineRowsOneCol: "%1 \u74B0\u5883\u5185\u306E\u5404\u884C\u306F 1 \u5217\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          MultipleBBoxProperty: "%1 \u304C %2 \u5185\u3067 2 \u56DE\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059",
          InvalidBBoxProperty: "\u300C%1\u300D\u306F\u3001\u8272\u3001\u30D1\u30C7\u30A3\u30F3\u30B0\u3001\u30B9\u30BF\u30A4\u30EB\u306E\u3044\u305A\u308C\u3067\u3082\u306A\u3044\u3088\u3046\u3067\u3059",
          ExtraEndMissingBegin: "%1 \u304C\u4F59\u5206\u3001\u307E\u305F\u306F \\begingroup \u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059",
          GlobalNotFollowedBy: "%1 \u306E\u5F8C\u306B \\let\u3001\\def\u3001\\newcommand \u306E\u3044\u305A\u308C\u3082\u3042\u308A\u307E\u305B\u3093",
          UndefinedColorModel: "\u8272\u30E2\u30C7\u30EB\u300C%1\u300D\u306F\u672A\u5B9A\u7FA9\u3067\u3059",
          ModelArg1: "\u8272\u30E2\u30C7\u30EB %1 \u306B\u306F\u5024\u304C 3 \u3064\u5FC5\u8981\u3067\u3059",
          InvalidDecimalNumber: "\u7121\u52B9\u306A 10 \u9032\u6570\u3067\u3059",
          ModelArg2: "\u8272\u30E2\u30C7\u30EB %1 \u306E\u5024\u306F %2 \u3068 %3 \u306E\u9593\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          InvalidNumber: "\u7121\u52B9\u306A\u6570\u5024\u3067\u3059",
          NewextarrowArg1: "%1 \u306E\u7B2C 1 \u5F15\u6570\u306F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB \u30B7\u30FC\u30B1\u30F3\u30B9\u540D\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          NewextarrowArg2: "%1 \u306E\u7B2C 2 \u5F15\u6570\u306F\u3001\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u305F 2 \u3064\u306E\u6574\u6570\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          NewextarrowArg3: "%1 \u306E\u7B2C 3 \u5F15\u6570\u306F Unicode \u306E\u6587\u5B57\u756A\u53F7\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          NoClosingChar: "\u9589\u3058\u62EC\u5F27 %1 \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
          IllegalControlSequenceName: "%1 \u306B\u6307\u5B9A\u3067\u304D\u306A\u3044\u8AA4\u3063\u305F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB \u30B7\u30FC\u30B1\u30F3\u30B9\u540D\u3067\u3059",
          IllegalParamNumber: "%1 \u306B\u6307\u5B9A\u3057\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306E\u500B\u6570\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059",
          MissingCS: "%1 \u306E\u5F8C\u306F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB \u30B7\u30FC\u30B1\u30F3\u30B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          CantUseHash2: "%1 \u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u5185\u3067 # \u306E\u4F7F\u7528\u6CD5\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059",
          SequentialParam: "%1 \u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F\u9023\u756A\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
          MissingReplacementString: "%1 \u306E\u5B9A\u7FA9\u3067\u7F6E\u63DB\u6587\u5B57\u5217\u304C\u3042\u308A\u307E\u305B\u3093",
          MismatchUseDef: "%1 \u306E\u5B9A\u7FA9\u3068\u4E00\u81F4\u3057\u3066\u3044\u306A\u3044\u4F7F\u7528\u6CD5\u3067\u3059",
          RunawayArgument: "%1 \u306E\u5F15\u6570\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u308B\u3088\u3046\u3067\u3059",
          NoClosingDelim: "%1 \u306E\u7D42\u4E86\u533A\u5207\u308A\u6587\u5B57\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"
        }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/ja/TeX.js");
// @license-end

