//프로필 업로드 
const $profilePic = document.querySelector('.user-profile-pic');
const $fileInput = document.getElementById('profile-img');
const $profileSaveBtn = document.querySelector('.profile-save');

// 홈페이지 주인의 아이디
const userAccount = document.querySelector('.user-info').dataset.useraccount;

// 로그인 유저의 아이디
const loginAccount = document.getElementById('loginuser').dataset.loginaccount;


$profilePic.onclick = e => {
  if (userAccount === loginAccount) {
    $fileInput.click();
  } else {return;}
}

$fileInput.onchange = e => {
    const fileData = $fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileData);

    reader.onloadend = e => {
        const $img = document.querySelector('.user-profile-pic');
        $img.setAttribute('src', reader.result);
        $profileSaveBtn.style.display = 'inline-block'; // 버튼 보이기
    }
}

$profileSaveBtn.onclick = e => {
  document.getElementById('profile-form').submit();
  $profileSaveBtn.style.display = 'none'; // 버튼 숨기기
}


// 서버에 팔로잉 추가(등록) POST 요청 보내기
function insertFollow(writerAccount) {
  var formData = {
    writerAccount: writerAccount
  };

  fetch('/api/v1/follow/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON
    return response.json();})
  .then(data => {
    console.log('1인 경우에만 정상 팔로우 처리 완료: ', data);

    if (data === 1) {
      alert('정상적으로 팔로잉 했습니다.');
      location.reload(); // 새로고침
    } else if (data === 2) {
      alert('자기 자신은 팔로잉할 수 없습니다.');
    } else if (data === 3) {
      alert('이미 팔로잉한 회원입니다.');
    }
  });
}
    

// 서버에 팔로잉 취소(삭제) POST 요청 보내기
function deleteFollow(userAccount) {
  var formData = {
    userAccount: userAccount
  };

  fetch('/api/v1/follow/delete', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    alert('정상적으로 팔로잉을 취소했습니다.')
    location.reload(); // 새로고침
  });
    
}









// 이벤트 핸들러
const $followingList = document.querySelector('.ff');

$followingList.addEventListener("click", e => {

  if (e.target.matches('.fa-user-minus')) {
    const userId = e.target.parentNode.dataset.followingid;
    console.log('팔로잉 취소 ', userId);
    deleteFollow(userId);


  } else if (e.target.matches('.fa-user-plus')) {
    const userId = e.target.parentNode.dataset.followingid;
    console.log('팔로잉 추가 ', userId);
    insertFollow(userId);

  }

})

const $pen = document.querySelector('.fa-pen');
$pen.onclick = () => {
  console.log('수정 발생!');
  var $textarea = document.getElementById("self-intro");

  document.querySelector('.btn-primary').click();

}

document.getElementById('modify-btn').onclick = () => {
  document.getElementById('form-intro').submit();
  console.log('수정 완료~');
}

(function () {
  const imgPath = document.querySelector('.user-profile-pic').src;
  console.log('image path is ', imgPath);
})()






