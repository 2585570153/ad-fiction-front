<template>
    <footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>关于我们</h3>
                <p>fiction小说网站，提供各种类型的精彩小说阅读。所有内容均来自互联网或网友上传，
                    所有小说和章节均由网友上传，转载只为宣传本书让更多读者欣赏。</p>
            </div>
            <div class="footer-section">

                <div style="display: flex;
                justify-content: center;
                 align-items: center;
                 height: 150px;">
                    <img src="/public/assets/logo.png"
                         width="300"
                         height="80">
                </div>
            </div>
            <div class="footer-section">
                <h3>联系我们</h3>
                <p>邮箱: 2585570153@qq.com</p>
                <a class="fiction-footer-a" href="http://blog.aiheadn.cn">联系：a.d博客</a>
            </div>

        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 fiction中文网站. 版权所有</p>
        </div>
    </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
/* 页脚样式 */
footer {
    background-color: #F3F3F6FF;
    padding: 20px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex-basis: 30%;
    margin-bottom: 20px;
}

h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    margin-bottom: 5px;
}

ul li a {
    color: #333;
    text-decoration: none;
}

.footer-bottom {
    text-align: center;
    margin: 0 auto;
    color: #777;
}
.fiction-footer-a {
    text-decoration: none;
    color: #000000; /* 修改链接颜色为蓝色 */
}
/* 鼠标悬停时修改链接颜色 */
.fiction-footer-a:hover {
    color: #ff6600; /* 修改鼠标悬停时的链接颜色为橙色 */
}

</style>