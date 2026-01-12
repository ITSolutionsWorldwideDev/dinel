<<<<<<< HEAD
import Homei from "@/components/layout/home/Home";
import Image from "next/image";
import { ImageProps } from "next/image";
=======
import Image, { type ImageProps } from "next/image";
// import { Button } from "@repo/ui";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};
>>>>>>> e05e36e681f60ef0f4aeb702f53f4550487cb771

export default function Home() {
  return (
    <div>
      <Homei />
    </div>
  );
}
