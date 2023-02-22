import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';

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

      {/* Post buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post Coments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/*Post Inputbox*/}
      <form action="" className="flex items-center p-4 ">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter you comment..."
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
