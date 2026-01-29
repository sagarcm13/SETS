import { useParams } from 'react-router-dom';

function CarDetails() {
    const { carId } = useParams();

    let data = {
        "title": "Make Your Investment Work for You",
        "tagline": "Own a Car. Earn Fixed Monthly Income. Build a Real Asset.",
        "transparency_note": "100% transparency. No hidden math.",
        "investment_details": {
            "vehicle_model": "Swift Dzire CNG",
            "on_road_price_inr": 820000,
            "bank_loan_inr": 600000,
            "down_payment_inr": 220000 + (10000),
            "loan_emi": {
                "amount_inr": 17000,
                "tenure_months": 48
            },
            "monthly_rental_income_inr": 25000,
            "net_monthly_cash_inr": 8000,
            "notes": {
                "emi_is_asset_creation": true,
                "net_cash_is_pure_income": true
            }
        },
        "income_analysis": {
            "monthly_income_inr": 8000,
            "yearly_cash_return_inr": 96000,
            "insurance_cost_inr": 20000,
            "net_annual_income_inr": 76000
        },
        "returns": {
            "annual_roi_percent": 33,
            "monthly_return_percent": 2.75,
            "loan_tenure_years": 4,
            "end_of_tenure": {
                "loan_status": "Zero",
                "asset_status": "Fully owned by investor"
            }
        },
        "comparison": {
            "bank_fd_8_percent_yearly_return_inr": 18400,
            "mutual_fund_12_percent_yearly_return_inr": 27600,
            "this_model_yearly_return_inr": 76000,
            "additional_benefit": "Ownership of car asset"
        },
        "risk_management": {
            "business_type": "Corporate employee transport",
            "billing_type": "Fixed yearly contracts",
            "insurance": "Full coverage",
            "tracking": "GPS enabled",
            "drivers": "Verified with backup drivers",
            "notes": "No daily ride tension. Not dependent on ride-hailing apps."
        },
        "investor_protection": {
            "capital_protection": [
                "Monthly income",
                "Physical asset (car)",
                "Legal agreement"
            ]
        },
        "why_invest": [
            "Low entry capital (₹2.3 lakh)",
            "Fixed monthly income",
            "EMI builds asset automatically",
            "Predictable cash flow",
            "Car asset registered in investor name"
        ]
    }


    return (
        <div className="bg-gray-50 min-h-screen py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 md:mb-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight">{data.title}</h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 sm:mb-6 font-light">{data.tagline}</p>
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-xs sm:text-sm font-medium">{data.transparency_note}</span>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>

                {/* Investment Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Vehicle Model</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">{data.investment_details.vehicle_model}</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-shadow">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Monthly Income</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">₹{data.income_analysis.monthly_income_inr.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Annual ROI</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">{data.returns.annual_roi_percent}%</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-orange-600 hover:shadow-xl transition-shadow">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Entry Capital</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">
                            ₹2,20,000 <span className="text-orange-600">+</span> ₹10,000
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Column - Financial Details */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-10">
                        {/* Financial Breakdown */}
                        <section className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                            <div className="bg-gray-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-gray-100">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-2 sm:mr-3">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </span>
                                    Financial Breakdown
                                </h2>
                            </div>
                            <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 border-b pb-2">Investment Details</h3>
                                    <ul className="space-y-3 sm:space-y-4">
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">On-Road Price</span> <span className="text-sm sm:text-base font-bold">₹{data.investment_details.on_road_price_inr.toLocaleString()}</span></li>
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">Down Payment</span> <span className="text-sm sm:text-base font-bold text-blue-600">₹2,20,000 <span className="text-orange-600">+</span> ₹10,000</span></li>
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">Bank Loan</span> <span className="text-sm sm:text-base font-bold">₹{data.investment_details.bank_loan_inr.toLocaleString()}</span></li>
                                        <li className="bg-blue-50 p-2 sm:p-3 rounded-lg mt-2">
                                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Loan EMI ({data.investment_details.loan_emi.tenure_months} months)</p>
                                            <div className="flex justify-between items-center font-bold text-gray-800 gap-2">
                                                <span className="text-sm sm:text-base">₹{data.investment_details.loan_emi.amount_inr.toLocaleString()}</span>
                                                <span className="text-xs font-normal bg-green-200 text-green-800 px-2 py-1 rounded whitespace-nowrap">Asset Creation</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 border-b pb-2">Income Analysis</h3>
                                    <ul className="space-y-3 sm:space-y-4">
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">Monthly Rental</span> <span className="text-sm sm:text-base font-bold text-green-600">+₹{data.investment_details.monthly_rental_income_inr.toLocaleString()}</span></li>
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">EMI Deduction</span> <span className="text-sm sm:text-base font-bold text-red-500">-₹{data.investment_details.loan_emi.amount_inr.toLocaleString()}</span></li>
                                        <li className="flex justify-between items-center border-t pt-2 mt-2 gap-2"><span className="text-sm sm:text-base text-gray-800 font-medium">Net Monthly Cash</span> <span className="text-lg sm:text-xl font-bold text-gray-900">₹{data.investment_details.net_monthly_cash_inr.toLocaleString()}</span></li>
                                        <li className="flex justify-between items-center gap-2"><span className="text-sm sm:text-base text-gray-600">Insurance</span> <span className="text-sm sm:text-base font-bold text-red-500">-₹{20000}</span></li>
                                        <li className="flex justify-between items-center pt-3 sm:pt-4 gap-2"><span className="text-sm sm:text-base text-gray-600">Net Annual Income</span> <span className="text-sm sm:text-base font-bold text-blue-600">₹{data.income_analysis.net_annual_income_inr.toLocaleString()}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Section */}
                        <section className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                            <div className="bg-gray-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-gray-100">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                                    <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-2 sm:mr-3">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </span>
                                    Return Comparison (Yearly)
                                </h2>
                            </div>
                            <div className="p-4 sm:p-6 md:p-8">
                                <div className="space-y-4 sm:space-y-6">
                                    {/* Bank FD */}
                                    <div>
                                        <div className="flex justify-between mb-2 gap-2">
                                            <span className="text-sm sm:text-base text-gray-600 font-medium">Bank FD (8%)</span>
                                            <span className="text-sm sm:text-base font-bold text-gray-700">₹{data.comparison.bank_fd_8_percent_yearly_return_inr.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
                                            <div className="bg-gray-400 h-3 sm:h-4 rounded-full" style={{ width: '24%' }}></div>
                                        </div>
                                    </div>
                                    {/* Mutual Fund */}
                                    <div>
                                        <div className="flex justify-between mb-2 gap-2">
                                            <span className="text-sm sm:text-base text-gray-600 font-medium">Mutual Funds (12%)</span>
                                            <span className="text-sm sm:text-base font-bold text-gray-700">₹{data.comparison.mutual_fund_12_percent_yearly_return_inr.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
                                            <div className="bg-yellow-400 h-3 sm:h-4 rounded-full" style={{ width: '36%' }}></div>
                                        </div>
                                    </div>
                                    {/* This Model */}
                                    <div>
                                        <div className="flex justify-between mb-2 gap-2">
                                            <span className="text-sm sm:text-base text-blue-700 font-bold">SETS Model (33%)</span>
                                            <span className="text-sm sm:text-base font-bold text-blue-700">₹{data.comparison.this_model_yearly_return_inr.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-blue-100 rounded-full h-5 sm:h-6 border border-blue-200 relative">
                                            <div className="bg-blue-600 h-5 sm:h-6 rounded-full flex items-center justify-end px-2" style={{ width: '100%' }}>
                                                <span className="text-xs text-white font-bold">{data.comparison.additional_benefit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Info & Risks */}
                    <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                        {/* Why Invest */}
                        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                                <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🚀</span> Why Invest?
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {data.why_invest.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="bg-green-500 rounded-full p-1 mr-2 sm:mr-3 mt-1 flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Risk Management */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                </span>
                                Risk Management
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center">
                                    <div className="bg-gray-100 p-2 rounded-lg mr-3 sm:mr-4"><span className="text-lg sm:text-xl">🏢</span></div>
                                    <div><p className="text-xs text-gray-500 uppercase">Client</p><p className="text-sm sm:text-base font-semibold text-gray-800">{data.risk_management.business_type}</p></div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-100 p-2 rounded-lg mr-3 sm:mr-4"><span className="text-lg sm:text-xl">📄</span></div>
                                    <div><p className="text-xs text-gray-500 uppercase">Agreement</p><p className="text-sm sm:text-base font-semibold text-gray-800">{data.risk_management.billing_type}</p></div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-100 p-2 rounded-lg mr-3 sm:mr-4"><span className="text-lg sm:text-xl">🛡️</span></div>
                                    <div><p className="text-xs text-gray-500 uppercase">Insurance</p><p className="text-sm sm:text-base font-semibold text-gray-800">{data.risk_management.insurance}</p></div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-100 p-2 rounded-lg mr-3 sm:mr-4"><span className="text-lg sm:text-xl">📍</span></div>
                                    <div><p className="text-xs text-gray-500 uppercase">Tracking</p><p className="text-sm sm:text-base font-semibold text-gray-800">{data.risk_management.tracking}</p></div>
                                </div>
                            </div>
                        </div>

                        {/* Investor Protection */}
                        <div className="bg-blue-50 rounded-2xl sm:rounded-3xl shadow-inner p-6 sm:p-8 border border-blue-100">
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4">Investor Protection</h3>
                            <div className="space-y-2">
                                {data.investor_protection.capital_protection.map((item, index) => (
                                    <div key={index} className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span className="text-sm sm:text-base font-medium text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
