import Image from "next/image";
import BlurBg from "./BlurBg";
import CountUpAnimation from "./CountUpAnimation";

const Hero = () => {
  return (
    <section className="container padding mb-32">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="relative h-full flex items-center">
          <BlurBg />
          <div>
            <p className="text-3xl text-secondary mb-3">منصة وتين بلس</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-main mb-5">للخدمات التسويقية</h1>
            <p className="text-sm text-gray-500 leading-6 mb-10">
              فريق من أفضل المصممين والمبرمجين والتسويق بالمحتوى نعمل لأكثر من 5
              سنوات من الابداع والتميز في عالم ريادة الأعمال في وقتنا الحالي في
              العالم المحلي والعالمي
            </p>
            <button class="w-44 h-12 bg-main flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-secondary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:right-0 text-white">
              أطلب خدمة الآن
            </button>

            <div className='flex items-center justify-around flex-col md:flex-row text-center gap-10 py-10 rounded-3xl mt-10 backdrop-blur-xl' style={{boxShadow: '0 30px 30px #90909040'}}>
              <CountUpAnimation number={1650} title="مستخدم مسجل" />
              <CountUpAnimation number={16590} title="مشروع منجــــز" />
              <CountUpAnimation number={35} title="فريق العمل" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/hero-image.png" width={1000} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
