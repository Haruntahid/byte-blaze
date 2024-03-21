import PropTypes from "prop-types";
import errorImg from "../assets/404.jpg";

function BlogCart({ blog }) {
  const { cover_image, title, description, published_at } = blog;
  return (
    <>
      <a
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline text-black"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || errorImg}
        />
        <div className="p-3 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </a>
    </>
  );
}

BlogCart.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCart;
