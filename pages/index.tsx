import Intro from "@/components/models/Intro";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main>
       <NextSeo
        title="Lunedial"
        description="Are you in search for love look no further because Lunedial is here to help you find your perfect match using our Ai Algorithm and our Advanced match making system"
      />
      <Intro />
    </main>
  );
}
