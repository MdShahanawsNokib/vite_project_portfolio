import { Facebook, Linkedin, Mail, PersonStanding, Phone, Send } from "lucide-react"
import { ClassN } from "../lib/utils"

export const ContactSection = () => {
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
         <div className="container mx-auto max-w-5xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
             Get In <span className="text-primary">Touch</span>
           </h2>

           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don’t be a stranger — your next big idea might just start with a message
           </p>
  
  
  
  
         <div className="space-y-8">
                  <h3 className="text-2xl font-samibold mb-6">
                    Contact Information
                    <hr />
                  </h3>
            </div>
                 

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary"/> 
                  </div>
                  <div>
                    <h4 className="font-medium">Email </h4>
                     <a href="mailto:nokibshahanaws@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">nokibshahanaws@gmail.com</a>
                  </div>
                </div>
     

          <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary"/> 
                  </div>
                  <div>
                    <h4 className="font-medium">Phone </h4>
                     <a href="tel:+8801782849687" className="text-muted-foreground hover:text-primary transition-colors">+880 178284 9676</a>
                  </div>
                </div>



                 <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary"/> 
                  </div>
                  <div>
                    <h4 className="font-medium">LinkdIn </h4>
                     <a href="https://www.linkedin.com/in/shahanaws/" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/shahanaws/</a>
                  </div>
                </div>



                
                 <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Facebook className="h-6 w-6 text-primary"/> 
                  </div>
                  <div>
                    <h4 className="font-medium">Facebook </h4>
                     <a href="https://www.facebook.com/shahanaws.nokib.9" className="text-muted-foreground hover:text-primary transition-colors">facebook.com/shahanaws.nokib.9</a>
                  </div>
                </div>


            </div>



            <div className="bg-card p-4 rounded-lg shadow-xs">
  <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
  <form className="space-y-2">
    {/* Name */}
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        placeholder="Enter You Name...."    
    />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        placeholder="example@gmail.com"     
     />
    </div>

    {/* Message */}
    <div>
      <label htmlFor="message" className="block mb-2 font-medium">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    {/* Submit */}
    <div className="flex justify-center">
      <button
        type="submit"
        className={ClassN("cosmic-button w-40 flex justify-center items-center gap-2 ")
        }
      > <Send/>
      </button>
    </div>
  </form>
</div>


           </div>

           <hr className="mt-5" />
         </div>
        </section>
    )
}