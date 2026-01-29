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
            <img className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] ' src="/homelogo.png" alt="Home Logo" />

            {/* About Section Header */}
            <div id="about" className='text-center px-4 py-6 sm:py-8'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight'>Welcome to our SETS</h1>
                <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight'>(Shubam Employee Transport Services)</h3>
            </div>

            {/* About Section Content */}
            <div className='shadow-2xl rounded-2xl overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-6 sm:my-8 bg-white border border-gray-100'>
                <div className='w-full p-6 sm:p-8 md:p-12 flex flex-col items-center'>
                    <h2 className='text-2xl sm:text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 w-fit pb-2 text-center'>About Us</h2>
                    <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mb-12'>
                        We are a professionally managed car rental company with over 5 years of experience in corporate employee pick-and-drop services. Our investment model is straightforward:
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full'>
                        {[
                            {
                                id: '01',
                                title: 'Acquire Vehicle',
                                icon: '🚘',
                                description: 'Invest capital to acquire a vehicle through our model.',
                                color: 'border-purple-200',
                                dotColor: 'bg-purple-500',
                                textColor: 'text-purple-700'
                            },
                            {
                                id: '02',
                                title: 'We Handle',
                                icon: '⚙️',
                                description: 'We manage clients, drivers, fuel, and maintenance.',
                                color: 'border-blue-200',
                                dotColor: 'bg-blue-500',
                                textColor: 'text-blue-700'
                            },
                            {
                                id: '03',
                                title: 'Company Runs',
                                icon: '🏢',
                                description: 'Car is used only for company employee pick-and-drop.',
                                color: 'border-orange-200',
                                dotColor: 'bg-orange-500',
                                textColor: 'text-orange-700'
                            },
                            {
                                id: '04',
                                title: 'Monthly Income',
                                icon: '💰',
                                description: 'Receive a fixed income every month without any effort.',
                                color: 'border-green-200',
                                dotColor: 'bg-green-500',
                                textColor: 'text-green-700'
                            },
                            {
                                id: '05',
                                title: 'Full Ownership',
                                icon: '🔑',
                                description: 'After the loan period, you fully own the vehicle.',
                                color: 'border-red-200',
                                dotColor: 'bg-red-500',
                                textColor: 'text-red-700'
                            }
                        ].map((step, index, arr) => (
                            <div key={step.id} className="relative group">
                                {/* Arrow Connector - Desktop (Right) */}
                                {index !== arr.length - 1 && (
                                    <div className="hidden md:flex absolute top-[25%] -right-4 -translate-y-1/2 z-20 items-center">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-gray-300"></div>
                                    </div>
                                )}

                                {/* Arrow Connector - Mobile (Down) */}
                                {index !== arr.length - 1 && (
                                    <div className="flex md:hidden absolute left-1/2 -bottom-6 -translate-x-1/2 z-20 items-center">
                                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-gray-300"></div>
                                    </div>
                                )}

                                <div className={`h-full relative z-10 flex flex-col items-center text-center p-5 rounded-2xl border-2 ${step.color} bg-white shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}>
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${step.dotColor} flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                                        {step.id}
                                    </div>
                                    <h4 className={`text-lg font-bold ${step.textColor} mb-2`}>
                                        {step.title} <span className="block mt-1 text-2xl">{step.icon}</span>
                                    </h4>
                                    <div className="h-1 w-8 bg-gray-100 mb-3 group-hover:w-16 transition-all duration-500"></div>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
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
                                <svg className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.559.925 3.327 1.411 5.127 1.412 5.424 0 9.837-4.412 9.84-9.837.001-2.628-1.022-5.099-2.882-6.958-1.859-1.86-4.331-2.883-6.958-2.884-5.426 0-9.84 4.413-9.842 9.839-.001 1.874.526 3.703 1.525 5.296l-.988 3.606 3.694-.968zm10.745-7.391c-.29-.145-1.714-.848-1.979-.944-.266-.096-.459-.145-.653.145-.193.291-.749.944-.918 1.138-.17.193-.339.217-.629.072-.29-.145-1.223-.45-2.329-1.436-.86-.766-1.442-1.713-1.611-2.003-.17-.29-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.17.193-.29.29-.484.097-.193.048-.363-.024-.508-.072-.145-.653-1.573-.895-2.153-.235-.568-.475-.49-.653-.499-.17-.008-.362-.01-.555-.01-.193 0-.507.072-.773.362-.266.29-1.015.993-1.015 2.422s1.039 2.812 1.184 3.006c.145.194 2.043 3.119 4.95 4.375.691.299 1.23.478 1.65.612.693.221 1.325.19 1.825.115.557-.083 1.714-.7 1.956-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z" /></svg>
                                <a
                                    href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-sm sm:text-base text-gray-700 hover:text-green-600 transition-colors font-medium'
                                >
                                    {contact.number}
                                </a>
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