sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("custom.pdfZPDF.controller.Main", {
		onInit:function(){
	
		},
		 onDataExportPDF:function(oEvent){  
              
            var fnSuccess = function(oData, oResponse) {  
      
                var columns = ["Category","CategoryName","MainCategory","MainCategoryName","NumberOfProducts"];  
                var data = [];  
                    for(var i=0;i<oData.results.length;i++)   
                    {  
                        data[i]=[oData.results[i].Category,oData.results[i].CategoryName,oData.results[i].MainCategory,oData.results[i].MainCategoryName,oData.results[i].NumberOfProducts];  
                    }  
      
                var doc = new jsPDF('p', 'pt');  
                doc.autoTable(columns, data);  
                doc.save("DemoData.pdf");  
            };  
            var fnFail = function() {  
            };  
            this.getOwnerComponent().getModel().read('/ProductCategories',  
                null, null, true, fnSuccess, fnFail);  
      
            }  
        });  

	});