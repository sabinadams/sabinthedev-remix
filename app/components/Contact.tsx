export default function Contact() {
    return (
        <div id="contact" className="container text-center mx-auto mt-20 py-8 px-4 md:px-0 w-full md:w-full lg:w-1/2">
            <h2 className="transition-all duration-300 text-blue-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5">Get In Touch</h2>
            <p className="p-2 font-PermanentMarker text-blue-900 mb-2">If you have any questions or would like to inquire about my services, shoot me a message below and I'll try to get back as soon as possible!</p>
            <form method="POST" action="/contact-form" className="rounded-xl bg-emerald-400 p-10 flex flex-col justify-center items-center filter drop-shadow-dark-blue-solid-5">
                <input className="w-full rounded-xl p-3 mb-2" name="name" type="text" placeholder="Name" />
                <input className="w-full rounded-xl p-3 mb-2" name="email" type="email" placeholder="Email" />
                <textarea className="w-full rounded-xl p-3 mb-2" name="message" placeholder="Message"></textarea>
                <button className="text-blue-800 filter drop-shadow-dark-blue-solid-5 rounded-2xl bg-emerald-300 w-24 p-3" type="submit">Submit</button>
            </form>
        </div>
    )
}
