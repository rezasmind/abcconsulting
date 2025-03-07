import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["licensed", "successful", "professional", "confident", "legal"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-br from-white via-secondary/10 to-white pt-16 relative overflow-hidden">
      {/* Pedro SVG Background with lower opacity */}
      <motion.div 
        className="absolute top-80 md:top-48 right-16 md:right-0 w-[70%] md:w-1/3 h-full overflow-hidden z-0 opacity-20 md:opacity-100"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image 
          src="/pedro.svg" 
          alt="Pedro background" 
          fill 
          className="object-contain"
          priority
        />
      </motion.div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-6 mb-48 md:mb-0">
        <div className="flex gap-6 md:gap-8 py-12 md:py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-2 md:gap-4 bg-secondary text-primary hover:bg-secondary-hover text-sm md:text-base">
              20+ Years of Experience <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
          <div className="flex gap-3 md:gap-4 flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-primary">Become a</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-secondary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center mx-auto">
              Your path to legal beauty practice starts here. With over two decades of 
              experience across Europe and America, we specialize in helping beauty 
              professionals obtain their licenses efficiently. Skip the lengthy beauty 
              school process in eligible states and start your legitimate business journey 
              today with our comprehensive support services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button size="lg" className="gap-2 md:gap-4 border-primary text-primary hover:bg-primary/10 text-sm md:text-base w-full sm:w-auto" variant="outline">
              Free Consultation <PhoneCall className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
            <Button size="lg" className="gap-2 md:gap-4 text-white bg-primary hover:bg-primary-hover text-sm md:text-base w-full sm:w-auto">
              Get Licensed Now <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };