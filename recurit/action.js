function logout() {
	alert("로그아웃 되었습니다.");
	document.getElementById("form").submit();
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
	else {
		alert("비밀번호가 일치합니다.");
		return true;
		}
	}
