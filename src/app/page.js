import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {

  return (
    <div className="">
      <PageHeaders
        h1Text={"Generate captions to your videos"}
        h2Text={"Just upload your video and we will do the rest"}
      />
      <div className="text-center mt-8">
        <UploadForm/>
      </div>
      <DemoSection/>
    </div>
  )
}
