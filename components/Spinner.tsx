import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Slider: NextPage<Props> = ({}) => {
  const [photos, setPhotos] = useState([
    "/images/slide/boardrepair.jpg",
    "/images/slide/phonerepair.jpg",
    "/images/slide/datarecovery.jpg",
  ]);
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const bgColor = "gray-200";

  const moveRight = () => {
    if (photoIndex == photos.length - 1) {
      setPhotoIndex(0);
      return;
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };
  const moveLeft = () => {
    if (photoIndex == 0) {
      setPhotoIndex(photos.length - 1);
      return;
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentPhoto(photos[photoIndex]);
  }, [photoIndex]);

  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentPhoto}) top center / cover no-repeat`,
      }}
      className=" min-h-[50rem] flex"
    >
      <div className=" flex flex-col mt-20 ml-auto mr-20">
        <div className="flex flex-row">
          <div
            className="hover:bg-slate-200 bg-opacity-30 hover:bg-opacity-100 bg-slate-200 cursor-pointer rounded-full p-3 self-center mr-7"
            onClick={moveLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24}>
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
          </div>

          <div className=" text-slate-100 w-[40rem]">
            <h3 className="text-6xl mb-4">Data Recovery</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>

          <div
            className="hover:bg-slate-200 bg-opacity-30 hover:bg-opacity-100 bg-slate-200 cursor-pointer rounded-full p-3 self-center ml-7"
            onClick={moveRight}
          >
            <svg width="24" height="24">
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-row gap-2 mx-auto mt-10">
          {photos.map((value, index) => {
            return (
              <div
                className={`rounded-full p-[2px] ${
                  index == photoIndex ? "bg-green-400 " : " bg-white"
                }`}
                id="index"
              >
                <svg viewBox="0 0 100 100" height={12} width={12}>
                  <circle fill="#1f2f3a" cx="50" cy="50" r="50" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
