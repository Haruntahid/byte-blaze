import { useLoaderData } from "react-router-dom";
import errorImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function Content() {
  const blog = useLoaderData();
  //   console.log(blog);
  const { cover_image, title, tags, body_html } = blog;
  //   console.log(body_html);
  return (
    <>
      <div className=" mx-auto  border-2 p-2  border-opacity-30  group hover:no-underline focus:no-underline text-black">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || errorImg}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {tags.map((tag, index) => (
            <a
              key={index}
              className="px-3 py-1 rounded-sm hover:underline text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="p-3 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Content;
