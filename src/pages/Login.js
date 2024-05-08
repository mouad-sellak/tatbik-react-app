import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData,setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors,setErrors] = useState({})

    const handleInputChange = (e) => {
        const {name,value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
        setErrors({
            email: '',
            password: '',
            error: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password.length < 5 || formData.email.length == 0) {
            
            setErrors({
                password: 'le mot de passe doit contenir au moins 5 caractères',
                error: 'Erreur !'
            })
            if(formData.email.length == 0){
                setErrors({
                    ...errors,
                    email: 'Email est requis',
                })
            }
            console.log(errors)
            setFormData({
                email: '',
                password: '',
            })
        }
        else{
            dispatch({type: 'SET_USER', payload: {name: 'Brahim BenBrick'}}) 
            navigate('/dashboard')
        }
        
        console.log(formData)
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Tatbik
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Connectez vous à votre compte
                        </h1>
                        { errors.error && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-800 dark:text-red-50" role="alert">
                            <span className="font-medium">{errors.error}</span>
                        </div> }
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre adresse email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className={`bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'text-red-600 dark:text-red-500' : 'dark:text-white text-gray-900'}`} placeholder="name@company.com" required="" />
                                {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email}</span></p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="password" className={`bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password ? 'text-red-600 dark:text-red-500' : 'text-gray-900 dark:text-white'}`} name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" required="" />
                                {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password}</span></p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Sauvegarder mes identifiants</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Mot de passe oublié ?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Se connecter</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;