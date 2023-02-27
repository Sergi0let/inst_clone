import Image from 'next/image';

export default function Story({ img, username, user, id, isUser, ...props }) {
  return (
    <div className="relative group cursor-pointer">
      <Image
        width={60}
        height={60}
        className="h-16 w-16 rounded-full p-[1.5px] border-slate-800 border-2 cursor-pointer group-hover:scale-110 transition transform duration-200 ease-out"
        src={img.src}
        alt={username}
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
