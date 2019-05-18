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
    code_line.setAttribute('id', 'nums')
    code_line.setAttribute('rows', 2)
    // code_line.innerHTML = '<textarea id="nums" rows="2"></textarea>';

    // 正常按钮
    // var button1 = document.createElement('button');
    // button1.setAttribute('id', 'button1')
    // button1.innerText = '确认';

    // 敏感按钮
    // var button2 = document.createElement('button');
    // button2.setAttribute('id', 'button2')
    // button2.innerText = '取消';

    // 按钮容器
    const btnWrap = document.createElement('div')
    btnWrap.innerHTML = `
        <button id="button1" class="btn">确认</button>
        <button id="button2" class="btn">取消</button>
    `
    btnWrap.classList.add('btn-wrap')

    document.body.appendChild(code_line)
    document.body.appendChild(btnWrap)
    // document.body.appendChild(button1);
    // document.body.appendChild(button2);

    // 添加样式
    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.innerHTML = `
        #nums {
            display: block;
            width: 60%;
            margin: 30px auto;
            padding: 4px;
            border-radius: 4px;
        }
        .btn-wrap {
            width: 100%;
            text-align: center;
        }
        .btn {
            padding: 4px 10px;
            margin: 0 10px;
            border-radius: 4px;
            outline: none;
            background: #FFF;
        }
    `
    document.head.appendChild(style)

    //--- Activate the newly added button.
    document.getElementById("button1").addEventListener (
        "click", ButtonClickAction, false
    );

    function ButtonClickAction (zEvent) {
        ;
    }
})();
