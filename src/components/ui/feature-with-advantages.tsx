import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-12 md:py-20 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-4 flex-col items-center justify-center">
          <div className="text-white">
            <Badge>Services</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter text-center lg:max-w-xl font-regular">
              Comprehensive Beauty Industry Solutions
            </h2>
            <p className="text-base md:text-lg max-w-xl lg:max-w-xl text-center leading-relaxed tracking-tight text-muted-foreground">
              From licensing to business setup, we provide end-to-end support for beauty professionals looking to establish and grow their practice legally.
            </p>
          </div>
          <div className="flex gap-6 md:gap-10 pt-8 md:pt-12 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              <div className="flex flex-row gap-4 md:gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Expedited Processing</p>
                  <p className="text-muted-foreground text-sm">
                    Fast-track your license application with our streamlined processing system
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Alternative Pathways</p>
                  <p className="text-muted-foreground text-sm">
                    Explore alternative routes to obtaining your beauty license
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Document Support</p>
                  <p className="text-muted-foreground text-sm">
                    Complete preparation and verification of all required documentation
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Website Design</p>
                  <p className="text-muted-foreground text-sm">
                    Professional website design services tailored for beauty businesses
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Marketing Support</p>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive marketing and advertising strategies for your business
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-4 h-4 mt-1.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Business Consultation</p>
                  <p className="text-muted-foreground text-sm">
                    Expert guidance for setting up and growing your beauty business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 