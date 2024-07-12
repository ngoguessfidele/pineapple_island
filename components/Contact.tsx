
const Contact = () => {
  return (
    <div className="flex flex-col gap-4 text-primary mt-24 px-[30px] md:px-[50px] lg:mx-[300px] py-4">
        <h1 className="text-center font-bold">Stay In Touch</h1>
        <p className="text-center">Are you curious about Pineapple Island? Send a message</p>

        <form className="flex flex-col gap-5 items-center">
            <input type="text" placeholder="Name" className="border border-primary text-primary px-4 py-3 font-semibold w-full" />
            <input type="phone" placeholder="Phone No" className="w-full border border-primary text-primary px-4 py-3 font-semibold" />
            <input type="email" placeholder="Email" className=" w-full border border-primary text-primary px-4 py-3 font-semibold" />
            <textarea placeholder="Message" className="w-full px-4 py-4 border border-primary h-32 text-primary font-semibold"/>
            <button className="bg-primary text-white px-8 py-2">Send</button>
        </form>
      
    </div>
  )
}

export default Contact
