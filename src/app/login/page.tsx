"use client"
 
import { Form } from "../../components/login/Form.style";

export default async function Page() {
    return (
        <div>
            <Form>
                <form>
                    <div>
                        <label>
                        Email:
                        <input type='text' name='email' id='email' placeholder='email' required />
                        </label>
                    </div>
                    <div>
                        <label>
                        Password:    
                        <input type='password' name='password' id='password' placeholder='password' required />
                        </label>
                    </div>
                    <button>Signin</button>
                </form>
            </Form>
        </div>
    );
}