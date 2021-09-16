## Google Chrome extension
https://chrome.google.com/webstore/detail/resize-images-in-github/llonofapbfklmdcocfenbhopciakcega?hl=ja&authuser=0

### Requirements
**Problem:** When your Take a screenshot and drag and drop the image and copy and paste it into the comment of a github issue or pull request, the image offten shows larger than expected.

Of course you can specify the size of a image, but you have to edit the image tag every time like below, it's so troublesome.

**問題:** 画像をドラッグ＆ドロップしてそのままコピー&ペーストすると画像のサイズが指定されなくて大きく表示されるので、画像以外の内容は見えにくいです。
画像のサイズを変更しようとすると、毎回下記のように手動で img タグを書き換えする必要があり、とても煩雑です。

`![image](https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png)`

↓

`<img src="https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png" width="300">`

**Solution:** You can resize the image as you like by dragging and dropping.

**解決:** ドラッグ＆ドロップしてそのままコピー&ペーストして、クエリパラメータ width の指定がなければ、自動的に 400 と設定され、クエリパラメータ width の指定がる場合、指定したサイズで画像を表示されます

### HowTo
Take a screenshot and drag and drop the image and copy and paste it into the comment of a github issue or pull request,
Then Add query parameters to he image URL.

- github will set a default width of 400 if no width parameter set.
    - `![image](https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png)`
    <img src="https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png" width="400">

- add a width parameter to the image URL
    - `![image](https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png?width=300)`
    <img src="https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png" width="300">

- add a height parameter to the image URL
    - `![image](https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?height=500)`
    <img src="https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png" height="500">


- also add a width and a height parameter to the image URL
    - `![image](https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?width=300&height=300)`
    <img src="https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?width=500&height=500" width="300" height=300>

e.g.
https://github.com/megumiimai/ChromeGithubImageResize/issues/1
