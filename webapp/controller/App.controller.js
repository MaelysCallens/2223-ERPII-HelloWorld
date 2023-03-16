sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap.ui.layout.form.SimpleForm"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, SimpleForm) {
        "use strict";

        return Controller.extend("hogent.helloworld.controller.App", {
            onInit: function () {},
            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            }
        });
    });