export default function LoadingTiles() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="col-span-1 row-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 relative overflow-hidden h-[160px]">
          <div className="animate-pulse flex flex-col justify-between h-full">
            <div className="w-10 h-10 bg-neutral-800 rounded-lg" />
            
            <div>
              <div className="w-24 h-4 bg-neutral-800 rounded-md mb-2" />
              <div className="w-full h-2 bg-neutral-800 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
