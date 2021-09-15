## Google Chrome extension
### Automatically resize images on Github
Problem: When I drag and drop the image, the image size will show lager size than expected.

Solution: After dragging and dropping, the image size is adjusted accordingly.

### HowTo
After dragging and dropping to Github Issue or Pull Request, then Add query parameters to image url

- if not set query parameter width, Default auto set width to 400
    - `![image](https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png)`
    <img src="https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png" width="400">

- can add the width query parameter for the image URL
    - `![image](https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png?width=300)`
    <img src="https://user-images.githubusercontent.com/26107262/132994209-7b8e5027-e158-443a-9aeb-7647b24b965f.png" width="300">

- can add the height query paramter for the image url
    - `![image](https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?height=500)`
    <img src="https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png" height="500">


- alose can add the width and height query paramter for the image url
    - `![image](https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?width=300&height=300)`
    <img src="https://user-images.githubusercontent.com/26107262/132994283-666d66d3-19db-48fc-8f3f-0258a537c065.png?width=500&height=500" width="300" height=300>

e.g.
https://github.com/megumiimai/ChromeGithubImageResize/issues/1
