import { Contacts } from "@/components/Contacts";
import { Gender } from "@/components/Gender/Gender";
import { Price } from "@/components/Price/Price";
import { QrCode } from "@/components/QrCode";
import { Quest } from "@/components/Quest/Quest";
import { Reviews } from "@/components/Reviews";
import { UpBlock } from "@/components/UpBlock";

const Home = () => {
  return (
    <>
      <UpBlock />
      <Price />
      <QrCode />
      <Quest />
      <Gender />
      <Reviews />
      <Contacts />
    </>
  );
};
export default Home;
