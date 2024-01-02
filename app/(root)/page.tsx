import { Category } from "@/components/Category/Category";
import { Contacts } from "@/components/Contacts";
import { Edge } from "@/components/Edge/Edge";
import { Gender } from "@/components/Gender/Gender";
import { Levitation } from "@/components/Levitation";
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
      <Levitation />
      <Gender />
      <Reviews />
      <Edge />
      <Category />
      <Contacts />
    </>
  );
};
export default Home;
