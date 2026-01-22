import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="section bg-accent">
        <div className="grid grid-cols-3 gap-12 w-full">
          <div className="col-span-1 relative aspect-505/575">
            <Image src={"/assets/footer.svg"} fill preload alt="" />
          </div>
          <div className="col-span-2 flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm text-amber-400 font-nunito font-bold underline">
              Register Interest
            </h6>
            <p className="text-xs text-muted-foreground max-w-xl">
              Please feel free to contact us through the email mentioned below
              or reach out on WhatsApp using the number provided. Kindly share a
              brief introduction about yourself along with your industry and
              specific requirements, if any.
            </p>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <p className="text-xs font-nunito font-extrabold">
                Name
              </p>
              <p className="text-xs w-full bg-foreground rounded-md py-2 px-4 font-bold text-background">
                Nikunj Chauhan
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <p className="text-xs font-nunito font-extrabold">
                E-mail
              </p>
              <p className="text-xs w-full bg-foreground rounded-md py-2 px-4 font-bold text-background">
                nkca122@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <p className="text-xs font-nunito font-extrabold">
                Whatsapp
              </p>
              <p className="text-xs w-full bg-foreground rounded-md py-2 px-4 font-bold text-background">
                +91-9625362621
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
