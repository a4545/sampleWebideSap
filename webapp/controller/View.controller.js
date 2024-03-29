sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	  "./Utils"
], function (Controller,JSONModel,Utils) {
	"use strict";

	return Controller.extend("SampleTable.DragandDrop.controller.View", {
			onInit: function () {
			// set explored app's demo model on this sample
			this.oProductsModel = this.initSampleProductsModel();
			this.getView().setModel(this.oProductsModel);
		},

		onExit: function() {
			this.oProductsModel.destroy();
		},

		initSampleProductsModel: function() {
			var oData = jQuery.sap.sjax({
				url: "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json",
				dataType: "json"
			}).data;

			// prepare and initialize the rank property
			oData.ProductCollection.forEach(function(oProduct) {
				oProduct.Rank = Utils.ranking.Initial;
			}, this);

			var oModel = new JSONModel();
			oModel.setData(oData);
			return oModel;
		}
	});

});