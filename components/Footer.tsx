
const Footer = () => {
  return (
    <div className="bg-primary md:bg-white relative mt-28 h-72 md:h-56 w-full flex">
      <div className="hidden md:block absolute w-full h-full polygon1 bg-primary" />
      <div className="h-full w-full mx-40 flex relative">
        <div className="hidden flex-1 lg:flex flex-col items-center justify-end pb-6 px-24 gap-3">
            <h1 className="text-2xl font-bold">Banana<br /> Island</h1>
            <p className="">a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.</p>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-3 pb-6">
            <h1>Follow Up</h1>
            <h2>Keep up with our newsletter to get <br /> updates about projects and offers</h2>
            <h2>To subscribe add your email</h2>
            <input type="email" placeholder="Email" />
        </div>
      </div>
    </div>
  )
}

export default Footer
