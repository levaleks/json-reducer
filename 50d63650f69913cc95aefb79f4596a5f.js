ace.define("ace/theme/katzenmilch.css",["require","exports","module"],(function(n,e,a){a.exports=".ace-katzenmilch .ace_gutter,\n/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: ) */\n\n.ace-katzenmilch .ace_gutter {\n  background: #e8e8e8;\n  color: #333\n}\n\n.ace-katzenmilch .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8\n}\n\n.ace-katzenmilch {\n  background-color: #f3f2f3;\n  color: rgba(15, 0, 9, 1.0)\n}\n\n.ace-katzenmilch .ace_cursor {\n  border-left: 2px solid #100011\n}\n\n.ace-katzenmilch .ace_overwrite-cursors .ace_cursor {\n  border-left: 0px;\n  border-bottom: 1px solid #100011\n}\n\n.ace-katzenmilch .ace_marker-layer .ace_selection {\n  background: rgba(100, 5, 208, 0.27)\n}\n\n.ace-katzenmilch.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #f3f2f3;\n}\n\n.ace-katzenmilch .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174)\n}\n\n.ace-katzenmilch .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(0, 0, 0, 0.33);\n}\n\n.ace-katzenmilch .ace_marker-layer .ace_active-line {\n  background: rgb(232, 242, 254)\n}\n\n.ace-katzenmilch .ace_gutter-active-line {\n  background-color: rgb(232, 242, 254)\n}\n\n.ace-katzenmilch .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(100, 5, 208, 0.27)\n}\n\n.ace-katzenmilch .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-katzenmilch .ace_fold {\n  background-color: rgba(2, 95, 73, 0.97);\n  border-color: rgba(15, 0, 9, 1.0)\n}\n\n.ace-katzenmilch .ace_keyword {\n  color: #674Aa8;\n  rbackground-color: rgba(163, 170, 216, 0.055)\n}\n\n.ace-katzenmilch .ace_constant.ace_language {\n  color: #7D7e52;\n  rbackground-color: rgba(189, 190, 130, 0.059)\n}\n\n.ace-katzenmilch .ace_constant.ace_numeric {\n  color: rgba(79, 130, 123, 0.93);\n  rbackground-color: rgba(119, 194, 187, 0.059)\n}\n\n.ace-katzenmilch .ace_constant.ace_character,\n.ace-katzenmilch .ace_constant.ace_other {\n  color: rgba(2, 95, 105, 1.0);\n  rbackground-color: rgba(127, 34, 153, 0.063)\n}\n\n.ace-katzenmilch .ace_support.ace_function {\n  color: #9D7e62;\n  rbackground-color: rgba(189, 190, 130, 0.039)\n}\n\n.ace-katzenmilch .ace_support.ace_class {\n  color: rgba(239, 106, 167, 1.0);\n  rbackground-color: rgba(239, 106, 167, 0.063)\n}\n\n.ace-katzenmilch .ace_storage {\n  color: rgba(123, 92, 191, 1.0);\n  rbackground-color: rgba(139, 93, 223, 0.051)\n}\n\n.ace-katzenmilch .ace_invalid {\n  color: #DFDFD5;\n  rbackground-color: #CC1B27\n}\n\n.ace-katzenmilch .ace_string {\n  color: #5a5f9b;\n  rbackground-color: rgba(170, 175, 219, 0.035)\n}\n\n.ace-katzenmilch .ace_comment {\n  font-style: italic;\n  color: rgba(64, 79, 80, 0.67);\n  rbackground-color: rgba(95, 15, 255, 0.0078)\n}\n\n.ace-katzenmilch .ace_entity.ace_name.ace_function,\n.ace-katzenmilch .ace_variable {\n  color: rgba(2, 95, 73, 0.97);\n  rbackground-color: rgba(34, 255, 73, 0.12)\n}\n\n.ace-katzenmilch .ace_variable.ace_language {\n  color: #316fcf;\n  rbackground-color: rgba(58, 175, 255, 0.039)\n}\n\n.ace-katzenmilch .ace_variable.ace_parameter {\n  font-style: italic;\n  color: rgba(51, 150, 159, 0.87);\n  rbackground-color: rgba(5, 214, 249, 0.043)\n}\n\n.ace-katzenmilch .ace_entity.ace_other.ace_attribute-name {\n  color: rgba(73, 70, 194, 0.93);\n  rbackground-color: rgba(73, 134, 194, 0.035)\n}\n\n.ace-katzenmilch .ace_entity.ace_name.ace_tag {\n  color: #3976a2;\n  rbackground-color: rgba(73, 166, 210, 0.039)\n}"})),ace.define("ace/theme/katzenmilch",["require","exports","module","ace/theme/katzenmilch.css","ace/lib/dom"],(function(n,e,a){e.isDark=!1,e.cssClass="ace-katzenmilch",e.cssText=n("./katzenmilch.css"),n("../lib/dom").importCssString(e.cssText,e.cssClass,!1)})),ace.require(["ace/theme/katzenmilch"],(function(n){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=n)}));