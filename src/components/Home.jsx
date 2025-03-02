import React, { useState } from 'react';
const Home = () => {


    const [activeTab, setActiveTab] = useState('Faster Payments');

    const tabContent = {
        'Faster Payments': {
            title: 'Faster Payments',
            description: 'Accelerate payments through the automation of traditional and faster payment rails.',
            points: [
                'Programmatically initiate, track, and reconcile payments across global banks and rails.',
                'Integrate instant payments (RTP, FedNow) to improve customer experiences and reduce costs.'
            ],
            image: 'https://cdn.sanity.io/images/8nmbzj0x/production/edac239bb8f557d735a8c28e909e03a569c9fcc7-1080x1080.png'
        },
        'Smart Workflows': {
            title: 'Smart Workflows',
            description: 'Automate your critical workflows to enhance efficiency and reduce manual errors.',
            points: [
                'Design seamless approval processes and operational workflows.',
                'Trigger real-time notifications and updates across systems.'
            ],
            image: 'https://www.moderntreasury.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8nmbzj0x%2Fproduction%2F244fb4605a84e831170d6b6090b9577a56c979f3-1080x1080.png&w=3840&q=75' // Replace with actual image
        },
        'Real-Time Visibility': {
            title: 'Real-Time Visibility',
            description: 'Gain real-time insights into your operations and transactions.',
            points: [
                'Monitor payment statuses and exceptions instantly.',
                'Access detailed audit trails for compliance and reporting.'
            ],
            image: 'https://www.moderntreasury.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8nmbzj0x%2Fproduction%2F43cc64b8bb94de8dff263b443c2d9415f09bae66-1080x1080.png&w=3840&q=75' // Replace with actual image
        }
    };

    const currentTab = tabContent[activeTab];
    return (
        <>

            {/* section 1 */}
            <div className="relative isolate px-6 py-25 lg:px-8">
                {/* Gradient Background */}
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>

                {/* Main Content */}
                <div className="mx-auto relative max-w-2xl z-50">
                    {/* Announcement */}
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-white bg-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.

                        </div>
                    </div>

                    {/* Headline */}
                    <div className="text-center">
                        <h1 className="text-white text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                            cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button>Get Started <span aria-hidden="true">→</span></button>

                        </div>
                    </div>
                </div>
                <div>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="https://grin.co/wp-content/uploads/2024/07/Creators-Hero-Desktop.webm
" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black  opacity-50 text-white text-3xl">

                    </div>
                </div>
                {/* Bottom Gradient Background */}
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
            </div>

            {/* tab section  */}
            <div className="relative bg-black">
                <div className="relative mx-auto max-w-2xl lg:max-w-7xl px-5 md:px-6 lg:px-12 pb-12 md:pb-16 lg:pb-20 pt-12 md:pt-16 lg:pt-20">
                    <div className="max-w-content mx-auto">
                        {/* Header Section */}
                        <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 gap-6">
                            <div className="col-start-1 col-end-3 md:col-end-5 md:mb-6 lg:col-start-3 lg:col-end-11">
                                <div className="grid grid-flow-row gap-y-8 justify-items-center text-center">
                                    <div className="grid grid-flow-row gap-y-5">
                                        <div className="grid grid-flow-row gap-y-2">
                                            <div className="relative inline-block rounded-full px-3 py-1 text-sm/6 text-white bg-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                Use Cases</div>
                                            <h2 className="text-3xl">Get Ready for Real-Time</h2>
                                        </div>
                                        <div className="text-color-default-text text-body-lg">
                                            <p className="max-w-2xl">
                                                Welcome to the Instant Economy, where consumers expect fast, seamless experiences, and companies must deliver in real-time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="col-start-1 col-end-3 md:col-end-5 lg:col-end-13">
                                <div className="flex gap-8 overflow-x-auto pb-4 md:justify-center">
                                    {Object.keys(tabContent).map((tab) => (
                                        <button
                                            key={tab}
                                            className={`border-transparent  ${activeTab === tab
                                                ? 'bg-blue-500! text-white!'
                                                : 'bg-white!'
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="col-start-1 col-end-3 md:col-end-5 lg:col-end-13">
                                <div className="bg-color-background grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden items-center">
                                    {/* Image */}
                                    <div className="relative flex h-full items-center">
                                        <img
                                            className="w-full object-cover aspect-square rounded-3xl
"
                                            src={currentTab.image}
                                            alt={currentTab.title}
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="grid gap-10 px-5 pt-12 pb-6 lg:px-12 lg:py-10">
                                        <div className="grid gap-y-5">
                                            <h2 className="text-3xl">{currentTab.title}</h2>
                                            <p className="text-2xl">{currentTab.description}</p>
                                        </div>
                                        <div className="grid gap-4">
                                            {currentTab.points.map((point, index) => (
                                                <div key={index} className="flex gap-3 items-start">
                                                    <svg className="text-color-icon h-6 w-6" viewBox="0 0 24 24">
                                                        <path
                                                            d="M4 12.0029L5.25535 10.7019L9.63766 15.0157L18.699 6L20 7.27817L9.63766 17.6177L4 12.0029Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <p className="text-color-default-text text-body-md">{point}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2*/}
            <div className="mx-2 my-24 rounded-4xl bg-black bg-[url(https://radiant.tailwindui.com/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
                            {/* Image Section */}
                            <div className="-mt-96 lg:-mt-52">
                                <div className="-m-2 rounded-4xl bg-white/15 ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                                        <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                                            <img
                                                alt="Tina Yards"
                                                src="https://radiant.tailwindui.com/testimonials/tina-yards.jpg"
                                                className="aspect-3/4 w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
                                <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
                                    <blockquote>
                                        <h3 className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                                            Thanks to Radiant, we're finding new leads that we never
                                            would have found with legal methods.
                                        </h3>
                                    </blockquote>
                                    <figcaption className="mt-auto">
                                        <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                                        <p className="text-sm/6 font-medium">
                                            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                                                VP of Sales, Protocol
                                            </span>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="clients">
                <div className="container px-6 py-10 mx-auto text-center">
                    <div className="max-w-screen-xl mx-auto">
                        <p className="trns-text">Our Clients</p>
                        <h2 className="mb-12 text-2xl leading-[1.2] font-semibold sm:text-[26px] md:text-4xl">
                            Our Clients
                        </h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ikea-logo-color.svg"
                                    alt="IKEA"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-logo-color.svg"
                                    alt="Google"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bcc-logo-color.svg"
                                    alt="BCC"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kfc-logo-color.svg"
                                    alt="KFC"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/friday-logo-color.svg"
                                    alt="Friday"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/moo-logo-color.svg"
                                    alt="Moo"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kk-logo-color.svg"
                                    alt="KK"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hardees-logo-color.svg"
                                    alt="Hardees"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bajaj-allianz-logo-color.svg"
                                    alt="Bajaj Allianz"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/domin-logo-color.svg"
                                    alt="Domino"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/supershe-logo-color.svg"
                                    alt="SuperShe"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/wimpy-logo-color.svg"
                                    alt="Wimpy"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/empirehotels-logo-color.svg"
                                    alt="Empire Hotels"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-lgo-color.svg"
                                    alt="Jobget"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="group">
                                <img
                                    src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/asian-bank.svg"
                                    alt="Asian Bank"
                                    className="w-3/4 filter grayscale hover:filter-none transition-transform transform hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <div className="bg-black">
                <div className="rounded-4xl bg-neutral-950 py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="max-w-2xl">
                                <h2>
                                    <span className="mb-6 block font-display text-base font-semibold text-white">
                                        Our culture
                                    </span>
                                    <span className="sr-only"> - </span>
                                    <span className="block font-display tracking-tight text-4xl font-medium sm:text-5xl text-white">
                                        Balance your passion with your passion for life.
                                    </span>
                                </h2>
                                <div className="mt-6 text-xl text-neutral-300">
                                    <p>We are a group of like-minded people who share the same core values.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                                        <strong className="font-semibold text-white">Loyalty.</strong> Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles.
                                    </div>
                                </li>
                                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                                        <strong className="font-semibold text-white">Trust.</strong> We don’t care when our team works just as long as they are working every waking second.
                                    </div>
                                </li>
                                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                                        <strong className="font-semibold text-white">Compassion.</strong> You never know what someone is going through at home and we make sure to never find out.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4  */}
            <section className="mx-2 my-24 rounded-4xl bg-black bg-[url(https://radiant.tailwindui.com/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
                <div className="max-w-lg mx-auto max-w-2xl lg:max-w-7xl px-8  grid grid-cols-1 lg:grid-cols-2 lg:gap-12"> <div>
                    <h2 className="text-2xl font-medium ">Our mission</h2>
                    <p className="mt-6 text-sm/6 text-gray-600">
                        At Radiant, we are dedicated to transforming the way revenue organizations
                        source and close deals. Our mission is to provide our customers with an
                        unfair advantage over both their competitors and potential customers
                        through insight and analysis. We’ll stop at nothing to get you the data
                        you need to close a deal.
                    </p>
                    <p className="mt-8 text-sm/6 text-gray-600">
                        We’re customer-obsessed — putting the time in to build a detailed
                        financial picture of every one of our customers so that we know more about
                        your business than you do. We are in this together, mostly because we are
                        all implicated in large-scale financial crime. In our history as a
                        company, we’ve never lost a customer, because if any one of us talks, we
                        all go down.
                    </p>
                </div>
                    <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://radiant.tailwindui.com/company/1.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                                <img
                                    alt=""
                                    src="https://radiant.tailwindui.com/company/2.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://radiant.tailwindui.com/company/3.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                                <img
                                    alt=""
                                    src="https://radiant.tailwindui.com/company/4.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* contact us */}
            <section className="contact-us relative z-10 overflow-hidden bg-black py-20 lg:py-[120px] bg-[url('https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/footer-hq-bg.webp')] bg-cover">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 text-white lg:mb-0">
                                <span className="block mb-4 text-base font-semibold text-white">
                                    Contact Us
                                </span>
                                <h2 className="text-white mb-12 text-2xl leading-[1.2] font-semibold sm:text-[26px] md:text-4xl">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="text-base leading-relaxed text-white mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                                    minim veniam quis nostrud exercitation ullamco
                                </p>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width={32}
                                            height={32}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold ">Our Location</h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width={32}
                                            height={32}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_941_17577)">
                                                <path
                                                    d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_941_17577">
                                                    <rect width={32} height={32} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold ">Phone Number</h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            (+62)81 414 257 9980
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width={32}
                                            height={32}
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold ">Email Address</h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            info@yourdomain.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                                <form>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="border-stroke bg-[#d0d0d03b] text-white w-full rounded py-3 px-[14px] text-base outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="border-stroke bg-[#d0d0d03b] text-white w-full rounded py-3 px-[14px] text-base outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Phone"
                                            className="border-stroke bg-[#d0d0d03b] text-white w-full rounded py-3 px-[14px] text-base outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <textarea
                                            rows={6}
                                            placeholder="Your Message"
                                            className="border-stroke bg-[#d0d0d03b] text-white w-full rounded py-3 px-[14px] text-base outline-none"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full p-3 text-white transition border rounded border-transparent bg-[#126bfb] hover:bg-opacity-90 hover:border-[#ccc]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq  */}
            <section className="relative z-10 overflow-hidden bg-[url('https://ripenapps.com/assets/image/blue.webp')] px-8 bg-cover">
                <div className="container px-6 py-12 mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="text-center lg:text-left">
                                <div className="mb-10 lg:mb-0">
                                    <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                                        Start building automated serverless forms
                                    </h1>
                                    <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="text-center lg:text-right">
                                <a
                                    className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-black py-4 px-9 hover:bg-opacity-90"
                                    href="#"
                                >
                                    Create Your First Form
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute top-0 right-0 -z-10">
                    <svg
                        width={388}
                        height={250}
                        viewBox="0 0 388 220"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.05"
                            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                            fill="url(#paint0_linear_971_6910)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_971_6910"
                                x1="60.5"
                                y1={111}
                                x2={287}
                                y2={111}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.520507" stopColor="white" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute top-0 right-0 -z-10">
                    <svg
                        width={324}
                        height={250}
                        viewBox="0 0 324 220"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.05"
                            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
                            fill="url(#paint0_linear_971_6911)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_971_6911"
                                x1="60.5"
                                y1={111}
                                x2={287}
                                y2={111}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.520507" stopColor="white" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute top-4 left-4 -z-10">
                    <svg
                        width={43}
                        height={56}
                        viewBox="0 0 43 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <circle
                                cx="40.9984"
                                cy="1.49626"
                                r="1.49626"
                                transform="rotate(90 40.9984 1.49626)"
                                fill="white"
                            />
                            <circle
                                cx="27.8304"
                                cy="1.49626"
                                r="1.49626"
                                transform="rotate(90 27.8304 1.49626)"
                                fill="white"
                            />
                            <circle
                                cx="14.6644"
                                cy="1.49626"
                                r="1.49626"
                                transform="rotate(90 14.6644 1.49626)"
                                fill="white"
                            />
                            <circle
                                cx="1.49642"
                                cy="1.49626"
                                r="1.49626"
                                transform="rotate(90 1.49642 1.49626)"
                                fill="white"
                            />
                            <circle
                                cx="40.9984"
                                cy="14.6642"
                                r="1.49626"
                                transform="rotate(90 40.9984 14.6642)"
                                fill="white"
                            />
                            <circle
                                cx="27.8304"
                                cy="14.6642"
                                r="1.49626"
                                transform="rotate(90 27.8304 14.6642)"
                                fill="white"
                            />
                            <circle
                                cx="14.6644"
                                cy="14.6642"
                                r="1.49626"
                                transform="rotate(90 14.6644 14.6642)"
                                fill="white"
                            />
                            <circle
                                cx="1.49642"
                                cy="14.6642"
                                r="1.49626"
                                transform="rotate(90 1.49642 14.6642)"
                                fill="white"
                            />
                            <circle
                                cx="40.9984"
                                cy="27.8302"
                                r="1.49626"
                                transform="rotate(90 40.9984 27.8302)"
                                fill="white"
                            />
                            <circle
                                cx="27.8304"
                                cy="27.8302"
                                r="1.49626"
                                transform="rotate(90 27.8304 27.8302)"
                                fill="white"
                            />
                            <circle
                                cx="14.6644"
                                cy="27.8302"
                                r="1.49626"
                                transform="rotate(90 14.6644 27.8302)"
                                fill="white"
                            />
                            <circle
                                cx="1.49642"
                                cy="27.8302"
                                r="1.49626"
                                transform="rotate(90 1.49642 27.8302)"
                                fill="white"
                            />
                            <circle
                                cx="40.9984"
                                cy="40.9982"
                                r="1.49626"
                                transform="rotate(90 40.9984 40.9982)"
                                fill="white"
                            />
                            <circle
                                cx="27.8304"
                                cy="40.9963"
                                r="1.49626"
                                transform="rotate(90 27.8304 40.9963)"
                                fill="white"
                            />
                            <circle
                                cx="14.6644"
                                cy="40.9982"
                                r="1.49626"
                                transform="rotate(90 14.6644 40.9982)"
                                fill="white"
                            />
                            <circle
                                cx="1.49642"
                                cy="40.9963"
                                r="1.49626"
                                transform="rotate(90 1.49642 40.9963)"
                                fill="white"
                            />
                            <circle
                                cx="40.9984"
                                cy="54.1642"
                                r="1.49626"
                                transform="rotate(90 40.9984 54.1642)"
                                fill="white"
                            />
                            <circle
                                cx="27.8304"
                                cy="54.1642"
                                r="1.49626"
                                transform="rotate(90 27.8304 54.1642)"
                                fill="white"
                            />
                            <circle
                                cx="14.6644"
                                cy="54.1642"
                                r="1.49626"
                                transform="rotate(90 14.6644 54.1642)"
                                fill="white"
                            />
                            <circle
                                cx="1.49642"
                                cy="54.1642"
                                r="1.49626"
                                transform="rotate(90 1.49642 54.1642)"
                                fill="white"
                            />
                        </g>
                    </svg>
                </span>
            </section>


        </>
    );
};

export default Home;