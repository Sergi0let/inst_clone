import { DotsHorizontalIcon } from '@heroicons/react/outline';

export default function Post({ username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md ">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-20 rounded-full object-cover border-2 p-1 mr-3 cursor-pointer"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img src={img} alt={caption} className="object-cover w-full" />
    </div>
  );
}
// <div>
//   <img src={userImg} alt={username} />
//   <p>{username}</p>
// </div>
// <div>
//   <img src={img} alt={caption} />
// </div>
