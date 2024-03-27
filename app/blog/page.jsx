import Image from "next/image";
import styles from "./page.module.css";
import { Students } from "@/components/students/Students";
import { Readmore } from "@/components/readmore/Readmore";

export default function Blog() {
  return (
      <div>
        
        <Students/>
        <Readmore/>

      </div>
  );
}
