import Auth from "@/components/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans bg-dark-100 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>IMAGEEEEEEEE</p>
      <p className="font-inter text-pink-50 font-bold">IMAGEEEEEEEE</p>

      <Auth />

      <div className="px-10 pt-[100px]">
        <Button type="button"> Action </Button>
      </div>
    </div>
  );
}
