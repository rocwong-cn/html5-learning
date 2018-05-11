/**
 * Created by Roc on 2018/5/11.
 * desc:
 */

var invite = document.getElementById('invite');
invite.onclick = function (e) {
    e.preventDefault();
    invite.innerHTML = '报名成功';
    invite.style.background = '#27cb8b';
    invite.style.borderColor = '#27cb8b';
};