// ==UserScript==
// @name         sen_label
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  代码浏览
// @author       zhanglu
// @match        *://github.com
// @grant        none
// ==/UserScript==

(function() {
    // 代码行
    var code_line = document.createElement('textarea')
    code_line.innerHTML = '<textarea id="nums" rows="2"></textarea>';

    // 正常按钮
    var button1 = document.createElement('button');
    button1.innerHTML = '<button id="button1">确认</button>';

    // 敏感按钮
    var button2 = document.createElement('button');
    button2.innerHTML = '<button id="button2">取消</button>';

    document.body.appendChild(nums);
    document.body.appendChild(button1);
    document.body.appendChild(button2);

    //--- Activate the newly added button.
    document.getElementById("button1").addEventListener (
        "click", ButtonClickAction, false
    );

function ButtonClickAction (zEvent) {
    ;
}
})();