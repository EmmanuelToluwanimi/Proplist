import PropertyListing from "./component/PropertyListing";

export default function Home() {
  return (
    <main className="p-10 md:p-20">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl">PropList</h1>
        <p className="text-sm">Find listed properties here.</p>
      </div>
      <PropertyListing />
    </main>
  );
}
