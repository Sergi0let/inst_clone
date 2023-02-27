import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from 'atom/modalAtom';
import Modal from 'react-modal';
import { PaperClipIcon } from '@heroicons/react/outline';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import Image from 'next/image';
import { userAtom } from 'atom/userAtom';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(userAtom);

  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  async function uploadPost() {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      caption: captionRef.current.value,
      username: currentUser.username,
      profileImg: currentUser.photo,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      {open && (
        <Modal
          ariaHideApp={false}
          className="max-w-lg w-[90%] p-6 h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2  rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <Image
                width={150}
                height={150}
                onClick={() => setSelectedFile(null)}
                className="w-full max-h-[150px] object-cover cursor-pointer"
                src={selectedFile}
                alt="choose image"
              />
            ) : (
              <PaperClipIcon
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer h-14 bg-slate-800 p-2 rounded-full text-white "
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
              ref={captionRef}
            />
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className="bg-slate-800 text-white rounded-lg py-2 px-8 shadow-lg hover:text-slate-800 hover:bg-gray-300 font-bold disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 transition-all duration-200 ease-in-out"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
