import Image from "next/image";
import Link from "next/link";

type webProps = {
  title: string;
  bg: string;
  content: string;
  img: string;
  btn: string;
  name: string;
};

export const Work = ({ title, bg, content, img, btn, name }: webProps) => {
  return (
    <div className="mt-20 ">
      <div
        className="w-fit mb-4 mx-auto flex items-center space-x-2 border-2 border-white text-[14px] text-[#ffffff] py-1 px-14 rounded-full"
      >
        <>
          <span>{name}</span>
          <Image
            src={"/images/arrowdown.svg"}
            alt="web"
            width={18}
            height={18}
          />
        </>
      </div>
      <div
        key={img}
        className="pt-0 pb-2 px- flex flex-col-reverse laptop:flex-row laptop:gap-[1%] gap-5 justify-center rounded-3xl mt-8 "
        style={{
          background: bg,
        }}
      >
        <Image
          className="grow w-[90%] mx-auto laptop:w-[47%]"
          src={img}
          alt="web"
          width={786}
          height={545}
        />
        <div className=" grow w-[90%] mx-auto laptop:w-[47%] my-auto ">
          <div className="w-[90%]">
            <p className="text-4xl font-bold leading-12">{title}</p>
            <p className="mt-4 mb-5 text-[14px] laptop:text[16px] ">{content}</p>
            <Link
              href="/"
              style={{
                background: btn,
              }}
              className="px-5 py-2 text-[14px] laptop:text[16px]  rounded-3xl"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
