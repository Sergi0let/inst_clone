/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '/firebase';
import Moment from 'react-moment';
import { useRecoilState } from 'recoil';
import { userAtom } from 'atom/userAtom';

export default function Post({ username, userImg, img, caption, id }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [currentUser, setCurrentUser] = useRecoilState(userAtom);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, 'likes'),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
  }, [likes, currentUser?.uid]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', currentUser.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', currentUser.uid), {
        username: currentUser.username,
      });
    }
  }

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: currentUser.username,
      userImage: currentUser.photo,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div className="bg-white my-7 border rounded-lg ">
      <div className="flex items-center p-5">
        <img
          className="h-20 rounded-full object-cover border-2 p-1 mr-3 cursor-pointer"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={img} alt={caption} className="object-cover w-full" />

      {currentUser && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-40 overflow-y-scroll scrollbar-none">
          {comments.map((comment, id) => (
            <div key={id} className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover "
                src={comment.data().userImage}
                alt="user"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {currentUser && (
        <form action="" className="flex items-center p-4 ">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter you comment..."
          />
          <button
            onClick={sendComment}
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
