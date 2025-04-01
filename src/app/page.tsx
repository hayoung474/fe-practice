export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="text-2xl p-20">안녕하세요</div>
      <img
        src="https://i.namu.wiki/i/w11dbZZeomJI4bD3_KItw3vq7tgglcM1YQA_xHULxMsixPpY1S7KcB8WrEFhJNuSuejiiQkicGKMH12JvpUqBQ.webp"
        alt="profile"
        className="aspect-square w-64 object-cover rounded-2xl"
      />
    </div>
  );
}
