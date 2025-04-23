import React from "react";

const Banner = () => (
    <section className="relative h-[550px] overflow-hidden lg:rounded-3xl mb-12">
        {/* Background image (fixed URL) */}
        <div className='absolute inset-0 bg-[url("https://i.ibb.co/Wj6dCr3/banner-img-1.png")] bg-cover bg-center' />

        {/* Dark overlay with a hint of blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
                    It avoids subjective claims or exaggeration that might raise red flags legally
                </h1>

                <p className="text-base font-medium text-slate-200 lg:text-lg">
                    Our platform connects you with verified, experienced doctors across
                    various specialties— all at your convenience. Whether it's a routine
                    check‑up or urgent consultation, book appointments in minutes and
                    receive quality care you can trust.
                </p>
            </div>
        </div>
    </section>
);

export default Banner;
