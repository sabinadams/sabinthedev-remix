export default function Contact() {
    return (
        <div id="contact" className="container text-center mx-auto py-8 px-4 md:px-0 w-full md:w-full lg:w-1/2">
            <h2 className="text-gray-700 dark:text-gray-300 transition-all duration-300 text-2xl md:text-5xl font-bold">Get in touch.</h2>
            <p className="p-2 text-xl text-gray-700 dark:text-gray-300 mb-2">If you have any questions, shoot me a message below and I'll try to get back as soon as possible!</p>
            <form method="POST" action="/contact-form" className="rounded-xl bg-gray-200 dark:bg-gray-600 p-10 flex flex-col justify-center items-center">
                <input className="w-full dark:bg-gray-700 rounded-xl p-3 mb-2" name="name" type="text" placeholder="Name" />
                <input className="w-full dark:bg-gray-700 rounded-xl p-3 mb-2" name="email" type="email" placeholder="Email" />
                <textarea className="w-full dark:bg-gray-700 rounded-xl p-3 mb-2" name="message" placeholder="Message"></textarea>
                <button className="bg-white dark:bg-gray-700 dark:text-gray-200 rounded-2xl w-24 p-3" type="submit">Submit</button>
            </form>
        </div>
    )
}
