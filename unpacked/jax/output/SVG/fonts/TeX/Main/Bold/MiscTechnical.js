// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/TeX/svg/Main/Bold/MiscTechnical.js
 *
 *  Copyright (c) 2011-2016 The MathJax Consortium
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

MathJax.Hub.Insert(
  MathJax.OutputJax.SVG.FONTDATA.FONTS['MathJax_Main-bold'],
  {
    // LEFT CEILING
    0x2308: [751,248,511,194,494,'194 728Q199 743 216 749H220Q223 749 229 749T245 749T265 750T289 750T316 750T345 750H471Q472 749 477 746T484 741T490 732T493 719Q493 701 471 690L362 689H254V-224Q244 -248 223 -248T194 -226V728'],

    // RIGHT CEILING
    0x2309: [750,248,511,17,317,'317 -224Q307 -248 286 -248Q267 -248 257 -226L256 231V689H148L40 690Q17 698 17 720Q17 741 37 748Q42 750 169 750H295Q314 737 317 725V-224'],

    // LEFT FLOOR
    0x230A: [749,248,511,194,494,'194 728Q204 749 220 749Q245 749 254 725V-188H471Q472 -189 477 -192T484 -197T490 -206T493 -219Q493 -237 471 -248H216Q200 -242 194 -226V728'],

    // RIGHT FLOOR
    0x230B: [749,248,511,17,317,'17 -219Q17 -201 40 -188H256V270L257 728Q271 749 283 749Q308 749 317 725V-224Q310 -242 295 -248H40L38 -247Q35 -246 34 -245T30 -243T25 -239T21 -234T18 -227T17 -219'],

    // stix-small down curve
    0x2322: [405,-107,1150,65,1084,'95 108Q85 108 75 114T65 139Q65 159 129 227Q316 405 573 405Q654 405 729 387T854 344T950 286T1015 232T1053 191Q1078 160 1083 152Q1084 148 1084 139Q1084 121 1074 115T1054 108Q1040 108 1029 122T990 167T922 223Q819 291 680 309Q641 315 575 315Q508 315 469 309Q303 288 197 201Q168 179 148 155T118 119T95 108'],

    // stix-small up curve
    0x2323: [393,-126,1150,64,1085,'1054 392Q1067 392 1076 384T1085 362Q1085 351 1079 342T1050 310Q983 243 901 200Q753 126 575 126Q494 126 420 141T298 176T205 225T140 272T100 310Q64 346 64 362Q64 370 67 374Q75 393 93 393Q107 393 124 375Q272 214 575 214Q877 214 1025 375Q1039 392 1054 392']
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax.SVG.fontDir+"/Main/Bold/MiscTechnical.js");
// @license-end

