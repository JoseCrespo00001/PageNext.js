import React from 'react';

const Login = () => {
  return (
    <div className="bg-[#dfd1fb] min-h-screen flex items-center justify-center" style={{backgroundImage: 'url("/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-[#7352EF] mb-6">Bienvenido</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
            <input type="email" id="email" className="border border-[#A7A3ED] rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#7D73EE]" placeholder="Ingresa tu correo electrónico" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input type="password" id="password" className="border border-[#A7A3ED] rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#7D73EE]" placeholder="Ingresa tu contraseña" required />
          </div>
          <button type="submit" className="bg-[#A36FFB] hover:bg-[#7352EF] text-white font-bold py-2 px-4 rounded-lg w-full">Iniciar sesión</button>
          <p className="text-gray-600 text-sm mt-2">¿No tienes una cuenta? <a href="#" className="text-[#7352EF] font-bold">Regístrate aquí</a></p>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-[#7D73EE] hover:text-[#A36FFB] font-bold">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
