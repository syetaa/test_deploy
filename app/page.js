import Image from "next/image";
import styles from "./page.module.css";
import { View } from "@/components/view/View";
import { Howworks } from "@/components/howworks/Howworks";

export default function Home() {
  return (
      <div>
        <View/>
        <Howworks/>


      </div>
  );
}
