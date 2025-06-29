import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactForm = {
  firstName : string,
  email : string,
  message : string
}

const Contacts = () => {
  const [result, setResult] = useState<string | null>(null);

  const [ loading , setLoading ] = useState<boolean>(false);

  const initialFormState : ContactForm = {
    firstName : '',
    email : '',
    message : ''
  }

  const [ formState , setFormState ] = useState<ContactForm>(
    {...initialFormState}
  ); 

  const handleFormSubmit = async (event : FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const target = event.currentTarget;

    const formData : FormData= new FormData(target);
    formData.append('access_key',import.meta.env.VITE_EMAIL_ACCESS_KEY);

    try{
      setLoading(true);
      const response : Response = await fetch('https://api.web3forms.com/submit',{
        body : formData,
        method : 'POST'
      });

      const data : {
        success : string,
        message : 'string'
      } = await response.json();

      if(data.success){
        setResult("Form Submitted Successfully");
        //Reset the form
        setFormState({...initialFormState});
      }
      else{
        setResult('Unable send your request at the moment, try sending an email');
      }

      setTimeout(()=>{
        setResult(null);
      },3500)

    }
    catch(e){
      setResult('Something went wrong, Please try again');
    }
    finally{
      setLoading(false);
    }
  }

  const handleDataChange = (inputkey : keyof ContactForm) =>
  (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
      const newState : ContactForm = {
      ...formState,
      [inputkey] : event.target.value
    };  
    setFormState(newState);
  }

  return (
    <section id='contacts' className="portfolio pb-[80px]">
      <h2>Contacts</h2>

      <div className="flex gap-5 flex-wrap">
        <div>
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an <a href="mailto:hietesh.pagare@gmail.com"className="text-cta">email</a> 👋</p>
        </div>
        <form onSubmit={handleFormSubmit} className="flex-1">
          <div className="flex flex-wrap gap-5 mb-8">
            <div className="flex-[1_1_auto]">
              <input 
                type="text" 
                name="name" 
                required
                placeholder="Enter Name"
                onChange={handleDataChange('firstName')}
                value={formState.firstName}
                className="w-full"
                disabled={loading}
              />
            </div>
            <div className="flex-[1_1_auto]">
              <input 
                type="email" 
                name="email" 
                required
                placeholder="Enter Email"
                onChange={handleDataChange('email')}
                value={formState.email}
                className="w-full" 
                disabled={loading}
              />
            </div>
          </div>
          <div className="my-8"> 
            <textarea 
              name="message" 
              required
              placeholder="Enter Message"
              onChange={handleDataChange('message')}
              value={formState.message} 
              className="w-full"
              rows={4}
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="btn"
            disabled={loading}
          >
            {
              loading ? 'Submitting...' : 'Submit'
            }
          </button>
        </form>
      </div>
      
      {
        result && <p className="pt-4">{result}</p>   
      }
      

    </section>
  )
}

export default Contacts