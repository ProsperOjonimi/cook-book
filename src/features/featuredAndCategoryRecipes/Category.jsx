/* eslint-disable react/prop-types */

function Category({ image, name }) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-1">
      <img src={image} alt={name} className="h-10 w-10 rounded-full" />
      <p>{name}</p>
    </div>
  );
}

export default Category;
