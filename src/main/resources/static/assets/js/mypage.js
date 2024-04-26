const $postContainer = document.querySelector('.post-container');
const $likeLabel = document.querySelector('.like .like-label'); // 좋아요 텍스트
//const $heartBtn = document.querySelector('.like>i.fa-heart'); // 좋아요 하트 아이콘
let likeFlag = 0; // 쿠키 존재 여부 (1 이면 좋아요 이미 부여)
// const bno = document.querySelector('.post-container').dataset.bno; // 현재 페이지 글번호

// 좋아요 누르면 게시물 좋아요 수 1 증가시키고 취소하면 1 감소시키기
function likeCountUpDown(n, e) {
  const bno = e.target.closest('section.post').dataset.bno;
  console.log('좋아요 수를 변경합니다.');
  console.log('게시글 번호: ', bno);
  console.log('n: ', n);

  var formData = {
      bno: bno, // 게시글 번호
      number: n // likeCount에 더할 값
  };

  fetch("/mypage/posting_cube/like/" + bno, { // URL에 bno를 포함시킴
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      console.log("Form submission successful:", data);
      if (!isNaN(data)) {
          $likeLabel.textContent = '좋아요 ' + data;
          updateHeartIcon(e); // 하트 아이콘 업데이트
      } else {
          console.error("Invalid like count received from server.");
      }
  })
  .catch(error => {
      console.error("Error submitting form:", error);
  });
}

// 페이지 진입 부터 좋아요 하트 체크여부 부여 (과거 이미 체크했다면 부여)
// function alreadyLike() {
//   // DB에 이미 저장됨 (이미 클릭) -> likeFlag = 1
//   likeFlag = parseInt($likeLabel.dataset.likeCookie); // 문자열을 정수로 변환
//   console.log('이미 좋아요를 눌렀나요?', likeFlag);

//   updateHeartIcon(); // 하트 아이콘 업데이트
// }

// 좋아요 수에 따라 하트 아이콘 업데이트
function updateHeartIcon(e) {
  if (likeFlag === 1) { // 이미 좋아요를 눌렀다면
      e.target.classList.remove('fa-regular');
      e.target.classList.add('fa-solid'); // 체크 부여
  } else { // 좋아요를 누르지 않았다면
      e.target.classList.remove('fa-solid');
      e.target.classList.add('fa-regular'); // 체크 해제
  }
}

// // 좋아요 누르면 하트 색깔 바뀌기
// function clickHeartBtn() {
//   if (likeFlag === 0) {
//       console.log('하트버튼 클릭!');
//       if ($heartBtn.classList.contains('fa-solid')) { // 체크가 된 상태 라면
//           likeCountUpDown(-1);
//           $heartBtn.classList.remove('fa-solid');
//           $heartBtn.classList.add('fa-regular'); // 체크 해제
//       } else { // 체크가 안 된 상태라면
//           likeCountUpDown(1);
//           $heartBtn.classList.remove('fa-regular');
//           $heartBtn.classList.add('fa-solid'); // 체크 부여
//       }
//   }
// }

// $postContainer.onclick = (e) => {
//   if (!e.target.matches('i.fa-heart')) return;
//   clickHeartBtn(e);
// }

// alreadyLike(); // 페이지 로드 시 좋아요 상태 체크

// 삭제에 필요한 요소들을 먼저 얻겠습니다.
const $modal = document.getElementById('modal'); // 모달창 얻기
const $confirmDelete = document.getElementById('confirmDelete'); // 모달 삭제 확인버튼
const $cancelDelete = document.getElementById('cancelDelete'); // 모달 삭제 취소버튼


$postContainer.addEventListener('click', e => {
  console.log('이벤트 타겟: ', e.target);

  if (e.target.matches('.post-wrapper')) return;

  // 삭제 버튼을 눌렀다면~
  if (e.target.matches('.card-btn-group *')) {
    console.log('삭제 버튼 클릭됨!');
    $modal.style.display = 'flex'; // 숨겨진 모달창을 드러내기.


    // 이벤트가 발생한 타겟에서 가장 가까운 .del-btn이 가지고 있는 data-href를 얻는다.
    const deleteLocation = e.target.closest('.post-wrapper').dataset.href;
    console.log('deleteLocation: ', deleteLocation);

    // 확인 버튼 이벤트
    $confirmDelete.onclick = e => {
      // 삭제 요청을 서버에 보내야 한다.
      console.log('onclick 수락!');
      location.href = deleteLocation;

      // 모달창을 닫아야 한다.
      $modal.style.display = 'none';
    }

    // 삭제 취소 버튼 클릭시 이벤트
    $cancelDelete.onclick = () => {
      console.log('onclick 취소');
      $modal.style.display = 'none';
    }

  } else if (e.target.matches('.fa-heart')) {
    console.log('하트버튼 클릭!');
      if (e.target.classList.contains('fa-solid')) { // 체크가 된 상태 라면
          likeCountUpDown(-1, e);
          e.target.classList.remove('fa-solid');
          e.target.classList.add('fa-regular'); // 체크 해제
      } else { // 체크가 안 된 상태라면
          likeCountUpDown(1, e);
          e.target.classList.remove('fa-regular');
          e.target.classList.add('fa-solid'); // 체크 부여
      }
  }
  
  else { // 삭제 버튼을 제외한 부분은 글 상세조회


    // section태그에 붙은 글 번호를 읽어오자
    // 이벤트가 발생한 타겟에서 가장 가까운 section.card를 지목해서 data-bno를 얻어오기.
    const bno = e.target.closest('section.post').dataset.bno;
    console.log('bno: ' + bno);






  }



});

$postContain.onclick = (e) => {
  if(!e.target.matches('i.fa-heart')) return;
  clickHeartBtn(e);
}
