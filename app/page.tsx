export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Privacy-First Domain Search
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Check Domains Anonymously.<br />
          <span className="text-[#58a6ff]">Stop Registrar Snooping.</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Registrars track your searches and squat on domains you look up. DomainShield proxies your queries through rotating endpoints so your ideas stay yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get DomainShield — $5/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["100%", "Anonymous Searches"],
            ["50+", "Rotating Proxies"],
            ["Instant", "Cached Results"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] text-xl font-bold">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anonymous domain searches",
              "50+ rotating proxy endpoints",
              "Smart result caching",
              "Bulk domain checking (up to 50 at once)",
              "Search history never stored",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $5/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does DomainShield prevent registrar snooping?",
              "We route every domain availability query through a pool of rotating proxy servers and anonymized API endpoints. Registrars only see generic traffic — never your IP or search patterns."
            ],
            [
              "Do you store my domain searches?",
              "Never. Searches are proxied in real-time and results are cached ephemerally for performance. No logs, no history, no data retention."
            ],
            [
              "Which TLDs and registrars are supported?",
              "DomainShield supports all major TLDs (.com, .net, .org, .io, .co, and hundreds more) by querying multiple registrar APIs and WHOIS sources simultaneously."
            ]
          ].map(([q, a]) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg group">
              <summary className="px-5 py-4 cursor-pointer font-medium text-[#c9d1d9] hover:text-white list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="px-5 pb-4 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} DomainShield. All rights reserved.
      </footer>
    </main>
  );
}
