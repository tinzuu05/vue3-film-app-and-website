Film search Website/App
<p>Vue3, Vue Cli, OMDB API, Git</p>

Deploy-

Step 1-Add vue.config.js-
`module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3-film-app-and-website/'
    : '/'
}`

Step 2-Add deploy.sh
`# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 以這個專案來講就要改成這樣以下這樣，下面是走 ssh 模式
# git push -f git@github.com:tinzuu05/vue3-film-app-and-website.git master:gh-pages
# 除此之外，也可以改走 HTTPS 模式
git push -f https://github.com/tinzuu05/vue3-film-app-and-website.git master:gh-pages

cd -`

Step 3-Git Bash run- sh ./deploy.sh
