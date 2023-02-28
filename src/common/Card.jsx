/* eslint-disable @next/next/no-img-element */
const Card = ({ name, position, hobby, shortStory, photo }) => {
  return (
    <a
      href={photo}
      alt={name}
      className=" min-h-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg  hover:opacity-80 transition-opacity duration-300"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48"
            src={photo}
            alt={name || 'unknown'}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {position || 'unknown'}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {name || 'unknown'}
          </h1>
          <p className="mt-2 text-gray-500">{hobby || 'unknown'}</p>
          <p className="mt-2 text-gray-500">{shortStory || 'unknown'}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
