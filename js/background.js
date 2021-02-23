function test() {
    alert('我是background！');
}
// var $btn = document.getElementById('btn')
// $btn.click()

chrome.contextMenus.create({
    title: "测试右键菜单",
    onclick: function () { alert('您点击了右键菜单！'); }
});

// 拼接url到商品页，查找排序的商品信息，获取商业页url


