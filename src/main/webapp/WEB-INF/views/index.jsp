<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"></c:set>
<!DOCTYPE>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>设备模拟器</title>
        <link rel="stylesheet" href="${contextPath}/resources/css/simulator.css">
    </head>
    <body>
        <aside></aside>
        <div id="main"></div>

        <script type="text/javascript" src="${contextPath}/resources/render/jquery/jquery-2.0.3.min.js"></script>
        <script type="text/javascript" src="${contextPath}/resources/javascript/config.js"></script>
        <script type="text/javascript" src="${contextPath}/resources/javascript/initialize.js"></script>
    </body>
</html>