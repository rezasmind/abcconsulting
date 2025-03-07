import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image", 
    title: "Yasmin K.",
    desc: "Got my beauty license in just 3 months! The process was so smooth.",
    url: "/testimonials/1.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Leila T.", 
    desc: "They helped me transfer my European beauty license to work in the US.",
    url: "/testimonials/2.png",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Parisa R.",
    desc: "Finally got my esthetician license after years of trying on my own!",
    url: "/testimonials/3.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Shirin L.",
    desc: "The alternative licensing pathway saved me so much time and hassle.",
    url: "/testimonials/4.jpg", 
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Maryam M.",
    desc: "They helped me get my cosmetology license despite language barriers.",
    url: "/testimonials/5.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },

  {
    id: 7,
    type: "image",
    title: "Azadeh P.",
    desc: "Their expertise made getting my beauty license stress-free!",
    url: "/testimonials/7.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
]

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Client Success Stories"
        description="Hear from beauty professionals who transformed their careers with our help"
      />
    </div>
  )
} 