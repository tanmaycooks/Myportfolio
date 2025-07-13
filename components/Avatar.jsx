import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none w-[737px] h-[678px] translate-x-[-325px]">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;

