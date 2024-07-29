import Link from 'next/link'

export default function SignUp(){
    return(
        <div className="flex justify-center items-center h-dvh  bg-gradient-to-r from-indigo-500 ">
            <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-col gap-1 ">
<h1 className="mb-4 text-4xl font-extrabold   ">Welcome to <span className="text-indigo-500">WorkFlo</span> ! </h1>
<input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name"/>
<input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email"/>
<div>
<input type="text" id='input-group-2' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your password"/>

</div>
<button className="bg-indigo-500 text-white border rounded-lg  w-full ps-10 p-2.5">
  Sign up
</button>
<p>Already have an account? <Link href="#" className='text-blue-500'> Login</Link></p>
 </div>
            </div>
        </div>
    )
}