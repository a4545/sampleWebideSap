sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./Utils"
], function(Controller, Utils) {
	"use strict";

	return Controller.extend("SampleTable.DragandDrop.controller.AvailableProducts", {

		onDropAvailableProductsTable: function(oEvent) {
			var oDraggedItem = oEvent.getParameter("draggedControl");
			var oDraggedItemContext = oDraggedItem.getBindingContext();
			if (!oDraggedItemContext) {
				return;
			}
			var oAvailableProductsTable = Utils.getAvailableProductsTable(this);
			var oProductsModel = oAvailableProductsTable.getModel();
			oProductsModel.setProperty("Rank", Utils.ranking.Initial, oDraggedItemContext);
		}

	
	});

});
