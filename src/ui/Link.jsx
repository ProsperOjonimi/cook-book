/* eslint-disable react/prop-types */

function Link({ children }) {
  return (
    <a
      href="#"
      className="transition-colors duration-300 hover:text-yellow-400"
    >
      {children}
    </a>
  );
}

export default Link;
