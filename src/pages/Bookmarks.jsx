import { useEffect, useState } from "react";
import { getBookmark } from "../utils/utilities";
import BlogCart from "../components/BlogCart";

function Bookmarks() {
  const bookmarks = getBookmark();
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    setBookmark(bookmarks);
  }, [bookmarks]);

  return (
    <>
      <div className="grid grid-cols-3 container mx-auto  min-h-[calc(100vh-120px)] gap-4">
        {bookmark.map((blog) => (
          <BlogCart key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Bookmarks;
