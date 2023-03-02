import Header from "@/components/Profile/Header";
import SummaryCard from "@/components/Profile/Cards/SummaryCard";
import SkillsCard from "@/components/Profile/Cards/SkillsCard";
import Carousel from "react-multi-carousel";
import VideoCard from "@/components/Profile/Cards/VideoCard";
import Icons from "@/styles/icons/Icons";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      partialVisibilityGutter: 40,
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      partialVisibilityGutter: 40,
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      partialVisibilityGutter: 40,
      items: 1,
    },
  };
  return (
    <>
      <main className={`relative flex flex-col`}>
        <Header />
        <div
          id="profile-content"
          className="px-2 md:px-16 flex flex-wrap gap-8 py-6 md:py-10"
        >
          <SummaryCard />
          <SkillsCard />
        </div>

        <div className="h-auto pl-2 md:pl-16 pb-6">
          <h5 className="mb-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
            Top Video Recommendations
            <Icons type="Summary" className="ml-2" />
          </h5>
          <Carousel responsive={responsive} ssr swipeable partialVisible={true}>
            <VideoCard iconType="Docker" title="Docker Tutorial">
              <>
                <a href="https://youtu.be/pTFZFxd4hOI">
                  <Image
                    src="/docker-image.jpeg"
                    fill
                    alt="Mosh Docker Video"
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </>
            </VideoCard>
            <VideoCard
              iconType="Google-Flat"
              title="Crocodile Hunter | Gabriel Iglesias"
            >
              <a href="https://youtu.be/_M1VgfS4BVo">
                <Image
                  src="/gabriel-iglesias.jpeg"
                  fill
                  alt="Mosh Docker Video"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </VideoCard>
            <VideoCard
              iconType="Google-Flat"
              title="Crocodile Hunter | Gabriel Iglesias"
            >
              <a href="https://youtu.be/_M1VgfS4BVo">
                <Image
                  src="/gabriel-iglesias.jpeg"
                  fill
                  alt="Mosh Docker Video"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </VideoCard>
            <VideoCard
              iconType="Google-Flat"
              title="Crocodile Hunter | Gabriel Iglesias"
            >
              <a href="https://youtu.be/_M1VgfS4BVo">
                <Image
                  src="/gabriel-iglesias.jpeg"
                  fill
                  alt="Mosh Docker Video"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </VideoCard>
          </Carousel>
        </div>
      </main>
    </>
  );
}
