import { Link } from 'react-router-dom';

function Home() {
    const whyChooseUs = [
        "Proven Experience: With over 5 years in corporate car services, we have established expertise in managing employee pick-and-drop contracts efficiently.",
        "Hassle-Free Investment: You invest in the vehicle, and we handle everything — corporate contracts, drivers, fuel, maintenance, and operations — so you earn income without any day-to-day involvement.",
        "Predictable Returns: Our model provides fixed monthly cash flow, independent of app-based demand or daily ride fluctuations, giving you stable and reliable income.",
        "Transparent & Trustworthy: All numbers, responsibilities, and returns are clearly defined upfront, ensuring complete transparency and peace of mind.",
        "Asset Ownership: Beyond monthly income, you fully own the vehicle at the end of the loan period, giving you a valuable long-term asset.",
        "Professionally Managed & Risk-Controlled: We operate under structured corporate agreements, backed by insurance, GPS tracking, and backup drivers, so your investment is secure and professionally governed."
    ]
    const contacts = [
        { name: "Shubam", number: "+91 91087 63643", email: "shubhampw@gmail.com" },
        { name: "Tarun", number: "+91 81478 08655", email: "tarunhlamani17@gmail.com" }
    ]
    return (
        <div>
            {/* Hero Image - Responsive height */}
            <img className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] ' src="/homelogo.jpeg" alt="Home Logo" />

            {/* About Section Header */}
            <div id="about" className='text-center px-4 py-6 sm:py-8'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight'>Welcome to our SETS(Shubam Employee Transport Services)</h1>
            </div>

            {/* About Section Content */}
            <div className='flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-6 sm:my-8 bg-white border border-gray-100'>
                <div className='w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto'>
                    <img className='w-full h-full object-cover' src="/intro.png" alt="About Us" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className='w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 border-b-4 border-blue-500 w-fit pb-2'>About Us</h2>
                    <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify'>
                        We are a professionally managed car rental company with over 5 years of experience in corporate employee pick-and-drop services. Our investment model is straightforward — you invest in a vehicle, and we manage the entire operation, including corporate contracts, drivers, fuel, maintenance, and day-to-day execution. Investors receive fixed monthly income from the vehicle, and upon completion of the loan tenure, full ownership of the car is transferred to them. The income is generated through structured corporate agreements, not app-based or daily ride demand. All financials, responsibilities, and returns are clearly defined upfront, ensuring transparency and confidence. This model offers predictable cash flow, asset ownership, and a professionally governed approach suited for first-time and long-term investors alike.
                    </p>
                </div>
            </div>

            {/* Services Section Header */}
            <div id="services" className='text-center px-4 py-6 sm:py-8'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>Our Services</h2>
            </div>

            {/* Services Cards */}
            <div className='flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex-wrap'>
                <Link to="/desire" className="group w-full sm:w-80 md:w-96" onClick={() => window.scrollTo(0, 0)}>
                    <div className='bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
                        <img src="/DesireCar.png" alt="Desire Car" className="w-full h-48 sm:h-64 md:h-[344px] object-cover rounded-md mb-4" />
                        <p className="text-lg sm:text-xl font-semibold text-center group-hover:text-blue-600">Swift Desire Tour S</p>
                    </div>
                </Link>
                <div className="group w-full sm:w-80 md:w-96">
                    <div className='bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
                        <img src="/ErtigaCar.png" alt="Ertiga Car" className="w-full h-48 sm:h-64 md:h-[344px] object-cover rounded-md mb-4" />
                        <p className="text-lg sm:text-xl font-semibold text-center group-hover:text-blue-600">Maruti Suzuki Ertiga (Coming Soon) </p>
                    </div>
                </div>
                <div className="group w-full sm:w-80 md:w-96">
                    <div className='bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
                        <img src="/InnovaCar.png" alt="Innova Car" className="w-full h-48 sm:h-64 md:h-[344px] object-cover rounded-md mb-4" />
                        <p className="text-lg sm:text-xl font-semibold text-center group-hover:text-blue-600">Toyota Innova (Coming Soon)</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section Header */}
            <div id="why-choose-us" className='text-center px-4 py-6 sm:py-8'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>Why Choose US?</h2>
            </div>

            {/* Why Choose Us Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8'>
                {whyChooseUs.map((item, index) => {
                    const [title, description] = item.split(':');
                    return (
                        <div key={index} className='bg-white shadow-lg rounded-xl p-5 sm:p-6 hover:scale-105 transition-transform duration-300 border-t-4 border-blue-600'>
                            <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800'>{title}</h3>
                            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Contact Section Header */}
            <div id="contact" className='text-center px-4 py-6 sm:py-8 mt-4 sm:mt-8'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>Contact Us</h2>
            </div>

            {/* Contact Cards */}
            <div className='flex justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8 pb-12 sm:pb-16 flex-wrap'>
                {contacts.map((contact, index) => (
                    <div key={index} className='bg-gradient-to-br from-blue-50 to-white shadow-xl rounded-xl p-6 sm:p-8 w-full sm:w-80 hover:scale-105 transition-transform duration-300 border-l-4 border-blue-600'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mr-3 sm:mr-4'>
                                {contact.name.charAt(0)}
                            </div>
                            <h3 className='text-xl sm:text-2xl font-bold text-gray-800'>{contact.name}</h3>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center'>
                                <svg className='w-5 h-5 text-blue-600 mr-3 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                                </svg>
                                <a href={`tel:${contact.number}`} className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>{contact.number}</a>
                            </div>
                            {contact.email && (
                                <div className='flex items-center'>
                                    <svg className='w-5 h-5 text-blue-600 mr-3 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                                    </svg>
                                    <a href={`mailto:${contact.email}`} className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors break-all'>{contact.email}</a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home