Ext.define("App.view.authentication.Login", {
    xtype: "login",
    routeId: "login",
    extend: 'App.ux.pages.Dialog',
    controller: "authentication",
    cls: "authentication_login",
    items: [
        {
            xtype: "formpanel",
            margin: "100 0 0 0",
            padding: '10 10',
            width: "100%",
            defaults: {
                clearable: false,
                required: true,
                allowBlank: false,
                width: "100%",
                height: 50
            },
            items: [
                {
                    xtype: 'textfield',
                    placeholder: '输入账号'
                },
                {
                    xtype: 'passwordfield',
                    placeholder: '密码只能为字母或数字或下划线'
                },
                {
                    xtype: "container",
                    height: 30,
                    layout: {
                        type: "hbox",
                        align: "start",
                        pack: "end"
                    },
                    items: [
                        { xtype: "button", text: "忘记密码？", textAlign: "right" }
                    ]
                },
                {
                    xtype: 'button',
                    ui: 'btnback',
                    text: '登录',
                    handler:"onLogin"
                }
            ]
        }
    ]
})