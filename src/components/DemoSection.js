import Captionify from "@/components/Captionify";
export default function DemoSection() {
    return (
        <section className="flex mt-4 sm:mt-8   justify-evenly items-center ">
          <video src="/without-captions.mp4" preload muted autoPlay loop style={{ height: "390px" }} className=" hidden sm:block rounded-2xl" ></video>

        <div className="hidden sm:block">
          <Captionify/>
        </div>
          <video src="/with-captions.mp4" preload muted autoPlay loop style={{ height: "390px" }} className=" mt-8 sm:mt-0 rounded-2xl"></video>
      </section>
    )

}