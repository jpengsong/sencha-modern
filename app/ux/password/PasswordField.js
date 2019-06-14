Ext.define("App.ux.password.PasswordField", {
    alias: "widget.passwordfield",
    extend: "Ext.field.Text",
    pwdstatus: false,
    inputType: "password",
    triggers: {
        eye: {
            iconCls: 'x-fa fa-eye lock-icon',
            handler: function () {
                var me = this;
                me.pwdstatus = false;
                me.passWordShow();
            }
        },
        eyeslash: {
            hidden: true,
            iconCls: 'x-fa fa-eye-slash',
            handler: function () {
                var me = this;
                me.pwdstatus = true;
                me.passWordShow();
            }
        }
    },

    passWordShow: function () {
        var me = this;
        if (me.pwdstatus) {
            me.el.component.inputElement.dom.type = "text";
            me.getTriggers()["eye"].show();
            me.getTriggers()["eyeslash"].hide();
        } else {
            me.el.component.inputElement.dom.type = "password";
            me.getTriggers()["eye"].hide();
            me.getTriggers()["eyeslash"].show();
        }
    },

    listeners: {
        initialize: function () {
            var me = this;
            me.el.component.inputElement.dom.type = "new-password";
            me.passWordShow();
        }
    }
})