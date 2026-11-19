import { useState } from "react"
import { heroSectionData } from "../assets/assets";
import { Link } from "react-router-dom";
import { BikeIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react";


const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => window.location.href = "/", 1000)
  }

  return (
    <div className="min-h-screen flex" >
      {/** Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center" >
        <img src={heroSectionData.hero_image} alt="" className="absolute inset-0 object-cover object-center h-full bg-center opacity-10" />
        <div className="relative text-center px-12" >
          <h2 className="text-4xl font-semibold text-white mb-4" >Bienvenido a Delivery Fisherton</h2>
          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto" >Productos frescos, elaborados y entregas a tu domicilio!</p>
        </div>
      </div>

      {/** Right Side */}
      <div className="flex-1 flex-center px-4 py-12 bg-app-cream" >
        <div className="w-full max-w-md" >
          {/** Form Header Message */}
          <div className="text-center mb-8" >
            <Link to="/" className="inline-flex items-center gap-2 mb-6" >
              <BikeIcon className="size-8 text-app-green" />
              <span className="text-2xl font-semibold text-app-green" >Delivery Fisherton</span>
            </Link>
            <h1 className="text-2xl font-semibold text-app-green mb-2" >
              {isLoginState ? "Ingresa con tu cuenta" : "Registra tu cuenta"}
            </h1>
            <p className="text-sm text-app-text-light" >
              {isLoginState ? "¿No tenes una cuenta?" : "¿Ya tenes una cuenta?"}
              <button
                onClick={() => setIsLoginState(!isLoginState)}
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors" >
                {isLoginState ? "Registra tu cuenta" : "Ingresa con tu cuenta"}
              </button>
            </p>
          </div>

          {/** Login / Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5" >
            {!isLoginState && (
              <label className="text-sm flex flex-col gap-1" >
                Name
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <UserIcon className="size-4 text-app-text-light" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Tu nombre"
                    className="w-full h-12 pl-11 pr-4 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
                </div>
              </label>
              
            )}
            <label className="text-sm flex flex-col gap-1" >
                Email
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <MailIcon className="size-4 text-app-text-light" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full h-12 pl-11 pr-4 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
                </div>
              </label>
              <label className="text-sm flex flex-col gap-1" >
                Contraseña
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <LockIcon className="size-4 text-app-text-light" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="●●●●●●●●"
                    className="w-full h-12 pl-11 pr-4 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
                </div>
              </label>

              <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50" >
                {loading ? <Loader2Icon className="animate-spin" /> : isLoginState ? "Ingresar" : "Registrate" }
              </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login