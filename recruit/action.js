function login() {
	var id = document.getElementById("id").value;
	var id_2 = document.getElementById("id_chk").value;
	var passwd = document.getElementById("passwd").value;
	var passwd_2 = document.getElementById("passwd_chk").value;
	if (id == 0) {
		alert("아이디를 입력하세요.");
		return false;
	}
	else if (id != id_2) {
		alert("존재하지 않는 계정입니다.");
		return false;
		}
	else if (id == id_2 && passwd == 0) {
		alert("비밀번호를 입력하세요.");
		return false;
	}
	else if (id == id_2 && passwd != passwd_2) {
		alert("비밀번호가 일치하지 않습니다.");
		return false;
		}
	else {
		alert("로그인 성공");
		location = "./recruitList.html";
		return true;
	}
}
function logout() {
	if (confirm("로그아웃 하시겠습니까?") == true) {
		alert("로그아웃 되었습니다.");
		location = "./index.html";
	}
	else {
		return false;
	}
}
function id_chk() {
var id_1 = document.getElementById("id").value;
var id_2 = document.getElementById("id_2").value;
if (id_1 != id_2) {
	alert("사용가능한 아이디 입니다.");
	return false;
}

else {
	alert("이미 존재하는 아이디 입니다.");
	return true;
	}
}
function chk_pw() {
	var pwd_1 = document.getElementById("passwd").value;
	var pwd_2 = document.getElementById("passwd_chk").value;
	if (pwd_1 != pwd_2) {
		alert("비밀번호를 동일하게 입력하시기 바랍니다.");
		return false;
		}
	else if (pwd_1 == 0) {
		alert("비밀번호를 입력하세요")
		return false;
	}
	else {
		alert("비밀번호가 일치합니다.");
		return true;
		}
}
function chk_success() {
	alert("확인되었습니다.")
}
function cancel() {
	var null_data = document.getElementById("info_null").value;
	if (null_data == 1 ) {
		if (confirm("저장하지 않은 정보가 사라집니다 정말 취소하시겠습니까?") == true) {
			alert("취소되었습니다.");
			location.reload();
			return true;
		}
	}
	if (null_data != 1 ) {
		if (confirm("변경된 정보가 사라집니다 정말 취소하시겠습니까?") == true) {
		   		alert("취소되었습니다.");
		   		location = "./recruitView.html";
		   		return true;
		}
	}
}
function cancel_mem() {
 	if (confirm("이전에 입력한 정보가 사라집니다 정말 취소하시겠습니까?") == true) {
    		alert("취소되었습니다.");
    		location = "./index.html";
	}
	else {
   		return false;
	}
}
function list_view() {
		location = "./recruitList.html";
}
function recu_list() {
	if (confirm("저장하지 않은 정보가 사라집니다 정말 진행하시겠습니까?") == true) {
		alert("지원목록으로 돌아갑니다.");
		location = "./recruitList.html";
	}
	else {
    		return false;
		}
	}
function save() {
	if (confirm("저장하시겠습니까?") == true) {
		alert("저장되었습니다.")
		location = "./recruitView.html";
	}
	else {
			return false;
	}
}
function save_mem() {
	if (confirm("가입하시겠습니까?") == true) {
		alert("가입되었습니다.")
		location = "./recruitLogin.html";
	}
	else {
			return false;
	}
}
function modify() {
		location = "./recruitModForm.html";
}
function PreviewImage() {
	var preview = new FileReader();
	preview.onload = function (e) {
	document.getElementById("user_image").src = e.target.result;
    };
    preview.readAsDataURL(document.getElementById("user_profile_img").files[0]);
}