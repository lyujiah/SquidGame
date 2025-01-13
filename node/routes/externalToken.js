
// module.exports = router;
 var express = require('express');
 var router = express.Router();

 // /* GET users listing. */

router.post('/', function(req, res) {
  if(req.body.document.workflow_name=="완료"){
  let parts = req.body.document.document_title.split(' ');

// 첫 번째 부분(참가자_신청서)을 얻음
  let firstPart = parts[0].split('_')[0];

// 두 번째 부분(19)만 얻음
  let secondPart = parts[1].split('_')[1];

  let message = "현재 " + secondPart + "명이 " + firstPart+"에 지원하였습니다.";
  console.log('보낼 메세지: '+ message);

  var wss  = require('../bin/www');  // wss 객체를 제대로 가져오기
  // WebSocket 클라이언트들에게 메시지 보내기
  if (wss.clients) {  // wss.clients가 있으면
    wss.clients.forEach(client => {
      client.send(JSON.stringify(message));
    });
  }
}
});

module.exports = router;
 