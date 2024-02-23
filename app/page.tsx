import Result from "@/components/Result";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ctp-latte dark:ctp-mocha bg-gradient-to-b from-ctp-base to-ctp-crust text-ctp-text">
      <section className="w-[730px]">
        <section className="w-full flex items-center justify-between mb-9">
          <span className="font-bold text-[26px]">hongducdev</span>
        </section>
        <SearchInput />
        <Result />
      </section>
    </main>
  );
}
