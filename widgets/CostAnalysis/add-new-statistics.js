// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/add-new-statistics.html":'\x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n        \x3c!--Add new statistics label--\x3e\r\n        \x3cdiv class\x3d"esriCTAddNewStatisticsLabel" data-dojo-attach-point\x3d"addNewStatisticsText"\x3e${nls.statisticsSettings.addNewStatisticsText}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"addNewStatisticsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButtonNode" tabindex\x3d"0"\r\n            role\x3d"button" aria-label\x3d"${nls.common.ok}"\x3e${nls.common.ok}\x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButtonNode" tabindex\x3d"0"\r\n            role\x3d"button" aria-label\x3d"${nls.common.cancel}"\x3e${nls.common.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/utils dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./add-new-statistics.html dojo/_base/lang dojo/on dojo/dom-construct ./setting/StatisticsSettings dojo/_base/array dojo/query dojo/keys dojo/_base/event".split(" "),function(h,k,l,m,n,p,c,d,q,r,t,u,f,g){return h([k,m,n],{templateString:p,baseClass:"jimu-widget-cost-analysis-add-new-statistics",_projectOverview:null,_lastConfiguredStatistics:null,addNewStatisticsObj:null,postCreate:function(){this.inherited(arguments);
this.addNewStatisticsObj=this._lastConfiguredStatistics=this._projectOverview=null},startup:function(){this.inherited(arguments);this._lastConfiguredStatistics=c.clone(this.config);this._lastConfiguredStatistics.statisticsSettings=[];this._initAddNewStatistics();this.own(d(this.okButtonNode,"click",c.hitch(this,function(){this._lastConfiguredStatistics.statisticsSettings=this.addNewStatisticsObj.getConfig();this.emit("updateStatisticsDetail",this._getUpdatedStatistics());this.emit("showAssetStatisticsPanel")})));
this.own(d(this.okButtonNode,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)g.stop(a),this._lastConfiguredStatistics.statisticsSettings=this.addNewStatisticsObj.getConfig(),this.emit("updateStatisticsDetail",this._getUpdatedStatistics()),this.emit("showAssetStatisticsPanel")})));this.own(d(this.cancelButtonNode,"click",c.hitch(this,function(){this.emit("showAssetStatisticsPanel")})));this.own(d(this.cancelButtonNode,"keydown",c.hitch(this,function(a){if(a.keyCode===
f.ENTER||a.keyCode===f.SPACE)g.stop(a),this.emit("showAssetStatisticsPanel")})))},reset:function(){this._lastConfiguredStatistics=c.clone(this.config);this._lastConfiguredStatistics.statisticsSettings=[];this._initAddNewStatistics();this.emit("updateStatisticsDetail",[])},_initAddNewStatistics:function(){this.addNewStatisticsObj&&this.addNewStatisticsObj.destroy();this.addNewStatisticsObj=new r({nls:this.nls,map:this.map,config:this._lastConfiguredStatistics,layerInfosObj:this.layerInfosObj,showActionButtonsInColumn:!1,
showActionButtonsInRow:!0,widgetDomNode:this.widgetDomNode},q.create("div",{},this.addNewStatisticsNode));this.addNewStatisticsObj.startup();this.addNewStatisticsObj.resetAddNewStatisticsDropdown()},_getUpdatedStatistics:function(){var a,e,d;a=[];d=u(".simple-table-row",this.assetsListNode);t.forEach(d,c.hitch(this,function(b){b.layerNameDropDown&&b.statisticsTypeDropdown&&b.layerFieldDropdown&&b.statisticsLabelTextBox&&(e={},e.id=b.layerNameDropDown.get("value"),e.type=b.statisticsTypeDropdown.get("value"),
e.field=b.layerFieldDropdown.get("value"),e.label=l.sanitizeHTML(b.statisticsLabelTextBox.get("value")),a.push(e))}));return a}})});