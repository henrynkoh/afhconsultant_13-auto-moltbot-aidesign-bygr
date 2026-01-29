import Link from "next/link";

export default function CostPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          AFH Cost Estimator
        </h1>
        <p className="mt-2 text-slate-600">
          Startup and ongoing costs for 4–6 bed AFH in Washington. Use Moltbot
          to generate personalized spreadsheets: <code className="bg-slate-100 px-1 rounded">moltbot agent --message &quot;Generate personalized AFH startup/operating cost spreadsheet for 6-bed home in Olympia: include licensing fees 2025, training, remodel, monthly breakdown; cite DSHS sources&quot; --thinking high</code>
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Startup Costs (One-Time, Approximate for 4–6 Bed AFH)
        </h2>
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-3 font-semibold text-afh-primary">
                  Item
                </th>
                <th className="text-left p-3 font-semibold text-afh-primary">
                  Range / Note
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t border-slate-200">
                <td className="p-3">License/Processing Fee</td>
                <td className="p-3">$2,750 (initial) + potential increases; ~$450/bed annual renewal from July 2025 (offset for Medicaid beds)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">AFH Administrator Training (54 hrs)</td>
                <td className="p-3">~$650–$1,000 (community college/contracted)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">First Aid/CPR + 75-hr LTC + Home Care Aide</td>
                <td className="p-3">$500–$1,500 per person (provider + staff)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Building/Conversion (WABO: ramps, alarms, grab bars)</td>
                <td className="p-3">$5,000–$20,000+ (e.g. $15,000 in DSHS training materials)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Liability Insurance Setup</td>
                <td className="p-3">$1,000–$3,000 initial</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Business Setup (UBI, EIN, zoning)</td>
                <td className="p-3">$500–$2,000</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Furnishings/Supplies (beds, adaptive equipment)</td>
                <td className="p-3">$5,000–$15,000</td>
              </tr>
              <tr className="border-t border-slate-200 bg-afh-light/30">
                <td className="p-3 font-semibold">Total Startup</td>
                <td className="p-3 font-semibold">$15,000–$50,000+ (lower for minor conversions)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Ongoing Monthly Operating Costs
        </h2>
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-3 font-semibold text-afh-primary">
                  Item
                </th>
                <th className="text-left p-3 font-semibold text-afh-primary">
                  Range / Note
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t border-slate-200">
                <td className="p-3">Mortgage/Rent/Utilities</td>
                <td className="p-3">$2,000–$5,000 (property-dependent)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Staff Wages (24/7 coverage)</td>
                <td className="p-3">$8,000–$15,000+ (wage increases from CBA)</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Food/Supplies</td>
                <td className="p-3">$1,000–$2,500</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Insurance/Maintenance</td>
                <td className="p-3">$500–$1,500</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="p-3">Licensing Fees (annual prorated)</td>
                <td className="p-3">~$150–$300/bed (post-2025 increases)</td>
              </tr>
              <tr className="border-t border-slate-200 bg-afh-light/30">
                <td className="p-3 font-semibold">Total Monthly (before revenue)</td>
                <td className="p-3 font-semibold">$12,000–$25,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-2">
          Revenue Potential
        </h2>
        <p className="text-slate-700 text-sm">
          Private pay: ~$5,500–$9,000/resident/month. Medicaid rates ~$87/day
          (base + add-ons). Break-even often requires 80%+ occupancy depending on
          costs and rates. Emphasize variability (location, acuity); warn
          against over-optimism. Cite DSHS sources for current rates.
        </p>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/labs" className="hover:underline">
          → Labs (cost integration in Labs 5/8)
        </Link>
        {" · "}
        <Link href="/curriculum/module-6" className="hover:underline">
          Module 6
        </Link>
      </p>
    </div>
  );
}
