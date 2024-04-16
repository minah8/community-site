<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>

    <link rel="stylesheet" href="/src/main/resources/static/assets/css/common.css">

    <style>

        body {
            background-color: #7AA2E3;
        }

        .container {
            width: 60%;
            margin: 0 auto;
            font-family: "Orbit", sans-serif;
            color: #7AA2E3;
            background-color: #F8F6E3;
            border-radius: 40px;
        }

        .container .wrap h2 {
            font-size: 1.5em;
            margin-top: 50px;
            margin-bottom: 50px;
            font-weight: 700;
        }

        .container .wrap .login p {
            margin-top: 30px;
            margin-bottom: 20px;
        }

        .container .wrap .login input[type="text"],
        .container .wrap .login input[type="password"] {
            width: 200px;
            height: 2em;
            border-color: #7AA2E3;
            border-width: 0 0 2px;
        }

        .container .wrap .login input[type="text"]:focus,
        .container .wrap .login input[type="password"]:focus {
            outline: none;
        }

        .container .wrap .login-pw {
            margin-bottom: 80px;
        }

        .container .wrap .submit-btn {
            margin-bottom: 30px;
        }

        .container .wrap .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            width: 183px;
            height: 45px;
            margin-top: 20px;

        }

        button {
            box-sizing: border-box;
            appearance: none;
            background-color: transparent;
            border: 2px solid #7AA2E3;
            border-radius: 0.6em;
            color: #7AA2E3;
            cursor: pointer;
            align-self: center;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1;
            margin: 20px;
            padding: 0.4em 1em;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            font-family: 'Orbit', sans-serif;
            width: 184px;
            height: 45px;

            &:hover,
            &:focus {
                color: #fff;
                outline: 0;
            }

            background-image: linear-gradient(45deg, #7AA2E3 50%, transparent 50%);
            background-position: 100%;
            background-size: 400%;


            transition: background 300ms ease-in-out;

            &:hover {
                background-position: 0;
            }

    </style>

</head>

<body>

    <%@ include file="../include/static-head.jsp" %>

    <div class="container">
        <div class="wrap">

            <h2>로그인</h2>

            <div class="login">

                <form action="members/sign-in" name="sign-in" method="get" id="login-form">
                    <div class="login-id">
                        <p>아이디를 입력해주세요 &nbsp;&nbsp;&nbsp; <span id="idCheck"></span></p>
                        <input type="text" name="account" id="userId" required="required" placeholder="아이디">
                    </div>
                    <div class="login-pw">
                        <p>비밀번호를 입력해주세요 &nbsp;&nbsp;&nbsp;<span id="pwCheck"></span>
                        <input type="password" name="password" id="userPw" required="required" placeholder="비밀번호">
                    </div>
                    <label for="auto-login">
                        <span>
                            <input type="checkbox" id="autoLogin" name="autoLogin">자동 로그인
                        </span>
                    </label>
                    <div class="submit-btn">
                        <button>로그인</button>
                    </div>
                    <div class="social-btn">
                        <a id="kakao-login" href="kakao/login">
                            <img src="/src/main/resources/static/assets/img/loginBtn/kakaoLogin.png" alt="카카오로그인이미지">
                        </a>
                        <a id="naver-login" href="#">
                            <img src="/src/main/resources/static/assets/img/loginBtn/naverLogin.png" alt="네이버로그인이미지">
                        </a>
                        <a id="google-login" href="#">
                            <img src="/src/main/resources/static/assets/img/loginBtn/googleLogin.png" alt="구글로그인이미지">
                        </a>
                    </div>
                </form>

            </div>

        </div>

    </div>
    </div>





</body>

</html>