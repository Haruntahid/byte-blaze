export const getBookmark = () => {
  let blog = [];
  const getData = localStorage.getItem("bookmark");
  if (getData) {
    blog = JSON.parse(getData);
  }
  return blog;
};

export const setBookmark = (blog) => {
  const getLocalBlog = getBookmark();
  const isExist = getLocalBlog.find((bl) => bl.id === blog.id);
  if (!isExist) {
    getLocalBlog.push(blog);
    localStorage.setItem("bookmark", JSON.stringify(getLocalBlog));
  }
};
