/*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:华医网学习中
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/"study_state\":0/g,'"study_state":1');
$done(body);
