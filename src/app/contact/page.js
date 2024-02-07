export default function ContactPage() {
    return (
        <>
            <form >
                <div id="contact-us" className="overflow-hidden bg-white pt-10 pb-3 px-4 sm:px-6 lg:px-8 lg:pt-18 rounded-2xl ">
                    <div className="relative mx-auto max-w-xl h-auto">
                        <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                            <defs>
                                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                                </pattern>
                            </defs>
                            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
                        </svg>
                        <svg className="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                            <defs>
                                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                                </pattern>
                            </defs>
                            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
                        </svg>
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900sm:text-4xl">Contact Us</h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 ">Please use the form below to contact us. Thank you!</p>
                        </div>
                        <div className="mt-12">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Name</label>
                                    <div className="mt-1">
                                        <input name="name" type="text" id="name" autoComplete="organization" required className="border border-black  block w-full rounded-md py-3 px-4 shadow-md focus:border-sky-500 focus:ring-sky-500" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
                                    <div className="mt-1">
                                        <input name="email" id="email" required type="email" autoComplete="email" className="border border-black block w-full rounded-md py-3 px-4 shadow-md focus:border-sky-500 focus:ring-sky-500" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 ">Message</label>
                                    <div className="mt-1">
                                        <textarea required name="message" id="message" rows="4" className="border border-black block w-full rounded-md py-3 px-4 shadow-md focus:border-sky-500 focus:ring-sky-500"></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-end sm:col-span-2">
                                    <button  type="submit" className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-black border border-black hover:bg-black hover:text-white active:bg-gray-800 ">
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
