import Image from "next/image";

export default function gallery() {
  return (
    <div className="container py-12 xl:py-17 xl:px-28 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image src="/images/badroom.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery2.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image src="/images/swiper1.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery11.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/living.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image src="/images/gallery14.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery15.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery12.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image src="/images/gallery7.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt=''width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery11.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
        <div>
          <Image src="/images/gallery3.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt='' width={500} height={500}/>
        </div>
      </div>
    </div>
  );
}
